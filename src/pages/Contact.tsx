import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, CheckCircle, MessageSquare, Shield, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { z } from "zod";

import heroContact from "@/assets/hero-contact.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  inquiryType: z.string().optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const messageWithType = formData.inquiryType
        ? `[${formData.inquiryType}] ${result.data.message}`
        : result.data.message;

      // @ts-ignore - Table exists but types are auto-generated
      const { error } = await supabase.from('contact_submissions').insert([{
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone || null,
        message: messageWithType,
      }]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", inquiryType: "", message: "" });

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. We'll get back to you within 1 business day.",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };

  if (isSuccess) {
    return (
      <Layout>
        <section className="section-spacing min-h-[60vh] flex items-center">
          <div className="container-premium">
            <FadeIn className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-foreground mb-4">Thank You!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your message has been received. Our team will review your inquiry
                and get back to you within 1 business day.
              </p>
              <Button
                variant="hero"
                size="xl"
                onClick={() => setIsSuccess(false)}
              >
                Send Another Message
              </Button>
            </FadeIn>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage={heroContact}
        title="Contact Us"
        subtitle="Ready to experience premium property management? Get in touch with our team today."
        badge="Get In Touch"
      />

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <FadeIn delay={0.1}>
              <div className="bg-background rounded-2xl p-8 lg:p-10 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Send Us a Message
                </h2>

                {/* Intro text above form */}
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you are a property owner seeking professional furnished flat management
                  or a guest with accommodation inquiries, our team is ready to assist you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`h-12 ${errors.name ? 'border-destructive' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`h-12 ${errors.email ? 'border-destructive' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+974 XXXX XXXX"
                      className={`h-12 ${errors.phone ? 'border-destructive' : ''}`}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">I am a:</Label>
                    <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
                      <SelectTrigger className="h-12 bg-background">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border border-border z-50">
                        <SelectItem value="Property Owner">Property Owner</SelectItem>
                        <SelectItem value="Guest/Visitor/Executive">Guest/Visitor/Executive</SelectItem>
                        <SelectItem value="Family">Family</SelectItem>
                        <SelectItem value="Corporate Client">Corporate Client</SelectItem>
                        <SelectItem value="Partner / Vendor">Partner / Vendor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your property management needs..."
                      className={`min-h-[150px] resize-none ${errors.message ? 'border-destructive' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                {/* Reassurance text below form */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="grid gap-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MessageSquare className="w-4 h-4 text-primary shrink-0" />
                      <span>We respond within 1 business day</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Globe className="w-4 h-4 text-primary shrink-0" />
                      <span>Arabic & English support available</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary shrink-0" />
                      <span>All inquiries handled confidentially</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Information */}
            <FadeIn delay={0.2} direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    We're always happy to hear from you. Whether you're a property
                    owner looking for management services or a tenant with questions,
                    our team is ready to assist.
                  </p>
                </div>

                <StaggerContainer className="space-y-6">
                  <StaggerItem className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        1st Floor, Transworld Tower 1,<br />
                        Near Qatar National Museum, Qatar
                      </p>
                    </div>
                  </StaggerItem>

                  <StaggerItem className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">
                        <a href="tel:+97470866639" className="hover:text-primary transition-colors">
                          +974 70866639
                        </a>
                        <br />
                        <a href="tel:+97450143615" className="hover:text-primary transition-colors">
                          +974 50143615
                        </a>
                      </p>
                    </div>
                  </StaggerItem>

                  <StaggerItem className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@youfirst.qa" className="hover:text-primary transition-colors">
                          info@youfirst.qa
                        </a>
                      </p>
                    </div>
                  </StaggerItem>

                  <StaggerItem className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                        Friday - Saturday: Closed
                      </p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>

                {/* Map */}
                <FadeIn delay={0.4}>
                  <div className="rounded-2xl overflow-hidden border-2 border-primary/20 shadow-[0_0_20px_rgba(59,130,196,0.08)] mt-8">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5!2d51.535!3d25.2867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfa542!2sTransworld%20Tower%201!5e0!3m2!1sen!2sqa!4v1700000000000!5m2!1sen!2sqa"
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="YouFirst Office Location - Transworld Tower 1, Doha"
                      className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 text-center">
                    📍 1st Floor, Transworld Tower 1, Near Qatar National Museum
                  </p>
                </FadeIn>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
