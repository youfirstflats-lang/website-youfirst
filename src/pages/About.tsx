import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { SectionDivider } from "@/components/SectionDivider";
import { WhyYouFirst } from "@/components/WhyYouFirst";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Shield, Building2, Check, Scale, Zap } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animations";

import aboutTeam from "@/assets/about-team.jpg";
import heroAbout from "@/assets/hero-about.jpg";
import heroApartment from "@/assets/hero-apartment.jpg";

const values = [
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your needs and satisfaction are at the heart of everything we do.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Dependable service you can count on, day after day.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and honest reporting at every step.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Commitment to the highest standards in property management.",
  },
  {
    icon: Scale,
    title: "Compliance Without Compromise",
    description: "Unwavering adherence to regulatory standards and industry best practices, ensuring every operation meets the highest legal and ethical benchmarks.",
  },
  {
    icon: Zap,
    title: "Dynamic & Technology Driven",
    description: "An agile mindset powered by modern technology, enabling us to adapt quickly, innovate continuously, and deliver smarter property management solutions.",
  },
];

const whoWeAre = [
  "A professional, licensed company specializing in the management and operation of furnished flats in Qatar",
  "A hospitality-driven property management partner serving owners, corporate clients, families, and short-stay guests",
  "A team combining real estate operations, hospitality service standards, and local regulatory expertise",
  "A customer-first organization focused on quality, consistency, and long-term value creation",
  "A Qatar-focused brand built to operate responsibly, transparently, and sustainably",
  "Introducing a unique approach in real estate agency services supporting buying, selling, and leasing with a customer-first, fair & balanced approach in Qatar",
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage={heroAbout}
        title="About YouFirst"
        subtitle="Qatar's trusted partner for premium furnished flats management, dedicated to delivering exceptional property services with a client-first approach."
        badge="Our Story"
      >
        <p className="text-base text-muted-foreground font-medium" dir="rtl">
          يوفيرست لإدارة الشقق المفروشة
        </p>
      </PageHero>

      {/* Who We Are Section */}
      <section className="section-spacing">
        <div className="container-premium">
          <FadeIn>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 lg:p-12 border border-primary/10 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-6">
                    Who We Are
                  </h3>
                  <ul className="space-y-4">
                    {whoWeAre.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground leading-relaxed text-balance">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-video lg:aspect-[4/3] rotate-1 hover:rotate-0 transition-transform duration-500">
                    <img
                      src={aboutTeam}
                      alt="YouFirst Team"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* Why YouFirst Section */}
      <WhyYouFirst />

      <SectionDivider variant="gradient" />

      {/* Mission & Vision */}
      <section className="section-spacing">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn delay={0.1}>
              <div className="bg-secondary/30 rounded-3xl p-8 lg:p-10 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional property management services that maximize
                  value for property owners while ensuring outstanding living experiences
                  for tenants. We strive to be the most trusted and reliable property
                  management partner in Qatar.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-secondary/30 rounded-3xl p-8 lg:p-10 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To set the benchmark for furnished flats management in Qatar,
                  recognized for our professionalism, innovation, and unwavering
                  commitment to client satisfaction. We aim to be the first choice
                  for discerning property owners.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* Our Values */}
      <section className="section-spacing">
        <div className="container-premium">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide every decision we make and every
              service we provide.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title} className="text-center">
                <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* Story Section */}
      <section className="section-spacing">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1">
              <h2 className="text-foreground mb-6">
                Our Commitment to Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At YouFirst, we understand that your property is more than
                  just an investment—it's a valuable asset that deserves the
                  highest level of care and attention.
                </p>
                <p>
                  Our team of experienced professionals brings together deep
                  knowledge of Qatar's property market with a passion for
                  exceptional service. We take a proactive approach to property
                  management, anticipating needs and addressing concerns before
                  they become problems.
                </p>
                <p>
                  From our strategically located office near the Qatar National
                  Museum, we serve property owners across the nation, providing
                  responsive, reliable, and results-driven management services.
                </p>
              </div>
            </FadeIn>
            <ScaleIn delay={0.2} className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-medium">
                <img
                  src={heroApartment}
                  alt="Premium furnished apartment"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container-premium">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="text-foreground mb-4">
              Partner with Us
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the YouFirst difference. Let us show you what
              premium property management looks like.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
