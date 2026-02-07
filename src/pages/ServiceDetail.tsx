import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ServiceContactForm } from "@/components/ServiceContactForm";
import { FadeIn, ScaleIn, StaggerContainer } from "@/components/animations";
import { getServiceBySlug, servicesData } from "@/lib/services-data";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Home,
  Clock,
  Wifi,
  Tv,
  UtensilsCrossed,
  Headphones,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const amenityIcons: Record<string, React.ElementType> = {
  "High-speed Wi-Fi": Wifi,
  "Smart TVs & streaming": Tv,
  "Fully furnished & equipped kitchens": UtensilsCrossed,
  "Housekeeping, 24/7 support": Headphones,
  "On-call services": Phone,
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Get prev/next services for navigation
  const currentIndex = servicesData.findIndex((s) => s.id === service.id);
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService =
    currentIndex < servicesData.length - 1
      ? servicesData[currentIndex + 1]
      : null;

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage={service.image}
        title={service.title}
        subtitle={service.shortDescription}
        badge="Service Details"
      >
        {!service.comingSoon ? (
          <>
            <Button asChild size="lg" className="h-12 px-8">
              <a href="#contact-form">Get a Quote</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 gap-2">
              <Link to="/services">
                <ArrowLeft className="w-4 h-4" />
                All Services
              </Link>
            </Button>
          </>
        ) : (
          <Button asChild variant="outline" size="lg" className="h-12 px-8 gap-2">
            <Link to="/services">
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
          </Button>
        )}
      </PageHero>

      {/* Coming Soon Banner */}
      {service.comingSoon && (
        <section className="py-8 bg-primary/5 border-b border-primary/10">
          <div className="container-premium">
            <div className="text-center">
              <Badge variant="secondary" className="text-lg px-6 py-2 mb-3">
                Coming Soon
              </Badge>
              {service.comingSoonNote && (
                <p className="text-muted-foreground italic max-w-2xl mx-auto">
                  {service.comingSoonNote}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Service Overview
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <ScaleIn delay={0.2}>
              <div className="rounded-3xl overflow-hidden shadow-large relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                {service.comingSoon && (
                  <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                    <Badge variant="secondary" className="text-xl px-8 py-3 bg-background/90">
                      Coming Soon
                    </Badge>
                  </div>
                )}
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Sub-features Section */}
      {service.subFeatures && service.subFeatures.length > 0 && (
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container-premium">
            <div className="grid md:grid-cols-2 gap-8">
              {service.subFeatures.map((subFeature, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="bg-background rounded-2xl p-6 lg:p-8 shadow-soft border border-border/50 h-full">
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      {subFeature.title}
                    </h3>
                    <ul className="space-y-3">
                      {subFeature.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Residence Types & Amenities */}
      {(service.residenceTypes || service.amenities) && (
        <section className="py-16 md:py-24">
          <div className="container-premium">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Premium accommodations designed for comfort and convenience.
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              {service.residenceTypes && (
                <FadeIn delay={0.1}>
                  <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-6 lg:p-8 border border-primary/10 h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Home className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Residence Types</h3>
                    </div>
                    <ul className="space-y-4">
                      {service.residenceTypes.map((type) => (
                        <li key={type} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-foreground text-lg">{type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              )}
              {service.amenities && (
                <FadeIn delay={0.2}>
                  <div className="bg-gradient-to-br from-secondary/50 to-transparent rounded-2xl p-6 lg:p-8 border border-border/50 h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Amenities Included</h3>
                    </div>
                    <ul className="space-y-4">
                      {service.amenities.map((amenity) => {
                        const IconComponent = amenityIcons[amenity] || Check;
                        return (
                          <li key={amenity} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                              <IconComponent className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <span className="text-foreground text-lg">{amenity}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container-premium">
          <FadeIn className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Why Choose This Service?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of professional property management.
            </p>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <div className="bg-background rounded-2xl p-6 h-full shadow-soft hover:shadow-medium transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container-premium">
          <FadeIn className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures a smooth experience from start to
              finish.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <div className="relative">
                  {/* Connector line */}
                  {index < service.process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
                  )}
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold relative z-10">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our service?
                Find answers below or contact us directly.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+974 7086 6639</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@youfirst.qa</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Transworld Tower 1, Near Qatar National Museum, Doha</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Only show if not coming soon */}
      {!service.comingSoon && (
        <section id="contact-form" className="py-16 md:py-24 scroll-mt-20">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Request a Quote
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Interested in our service? Fill
                  out the form and our team will get back to you within 24 hours
                  with a personalized proposal.
                </p>
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    What to expect:
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>Free consultation call to understand your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>Customized proposal based on your property</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>Transparent pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>No obligation to proceed</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <ScaleIn delay={0.2}>
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-medium border border-border/50">
                  <ServiceContactForm serviceName={service.title} />
                </div>
              </ScaleIn>
            </div>
          </div>
        </section>
      )}

      {/* Navigation to Other Services */}
      <section className="py-12 border-t border-border">
        <div className="container-premium">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevService ? (
              <Button asChild variant="ghost" className="gap-2">
                <Link to={`/services/${prevService.id}`}>
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous:</span>{" "}
                  {prevService.title.split(":")[0]}
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextService && (
              <Button asChild variant="ghost" className="gap-2">
                <Link to={`/services/${nextService.id}`}>
                  <span className="hidden sm:inline">Next:</span>{" "}
                  {nextService.title.split(":")[0]}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
