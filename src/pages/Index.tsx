import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HomeHero } from "@/components/HomeHero";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonials } from "@/components/Testimonials";
import { SectionDivider } from "@/components/SectionDivider";
import { AudienceCards } from "@/components/AudienceCards";
import { TrustSignals } from "@/components/TrustSignals";
import { ValuePropositions } from "@/components/ValuePropositions";
import { LatestBlogPosts } from "@/components/LatestBlogPosts";
import { MapPin, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animations";
import { usePageLoading } from "@/hooks/usePageLoading";
import { servicesData } from "@/lib/services-data";
import { 
  HeroSkeleton, 
  ServiceCardsSkeleton, 
  TestimonialsSkeleton,
  ImageWithTextSkeleton 
} from "@/components/skeletons";
import { Skeleton } from "@/components/ui/skeleton";

import qatarLocation from "@/assets/qatar-location.jpg";

export default function Index() {
  const isLoading = usePageLoading(800);

  if (isLoading) {
    return (
      <Layout>
        {/* Hero Skeleton */}
        <HeroSkeleton />

        {/* Trust Signals Skeleton */}
        <section className="py-8 md:py-12 border-b border-border">
          <div className="container-premium">
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="text-center space-y-2">
                  <Skeleton className="h-8 w-16 mx-auto" />
                  <Skeleton className="h-4 w-24 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audience Section Skeleton */}
        <section className="section-spacing">
          <div className="container-premium">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <Skeleton className="h-10 w-48 mx-auto" />
              <Skeleton className="h-5 w-72 mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Skeleton className="h-64 rounded-2xl" />
              <Skeleton className="h-64 rounded-2xl" />
            </div>
          </div>
        </section>

        <SectionDivider variant="gradient" />

        {/* Value Props Skeleton */}
        <section className="section-spacing">
          <div className="container-premium">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <Skeleton className="h-10 w-40 mx-auto" />
              <Skeleton className="h-5 w-80 mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-48 rounded-2xl" />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider variant="gradient" />

        {/* Services Skeleton */}
        <section className="section-spacing">
          <div className="container-premium">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <Skeleton className="h-10 w-40 mx-auto" />
              <Skeleton className="h-5 w-full max-w-md mx-auto" />
            </div>
            <ServiceCardsSkeleton count={4} />
            <div className="text-center mt-12">
              <Skeleton className="h-12 w-40 mx-auto rounded-full" />
            </div>
          </div>
        </section>

        <SectionDivider variant="gradient" />

        {/* Location Section Skeleton */}
        <section className="section-spacing">
          <div className="container-premium">
            <ImageWithTextSkeleton />
          </div>
        </section>

        <SectionDivider variant="gradient" />

        {/* Testimonials Skeleton */}
        <TestimonialsSkeleton />

        <SectionDivider variant="gradient" />

        {/* CTA Skeleton */}
        <section className="section-spacing">
          <div className="container-premium">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <Skeleton className="h-10 w-full max-w-lg mx-auto" />
              <Skeleton className="h-5 w-full max-w-md mx-auto" />
              <Skeleton className="h-5 w-3/4 max-w-md mx-auto" />
              <Skeleton className="h-14 w-48 mx-auto rounded-full mt-4" />
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <HomeHero />

      {/* Trust Signals Section */}
      <section className="py-8 md:py-12 border-b border-border">
        <div className="container-premium">
          <TrustSignals />
        </div>
      </section>

      {/* Audience Cards Section */}
      <section className="section-spacing">
        <div className="container-premium">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-foreground mb-4">Who We Serve</h2>
            <p className="text-lg text-muted-foreground">
              Tailored solutions for owners, professionals, families and residents seeking quality, comfort, and reliability.
            </p>
          </FadeIn>
          <AudienceCards />
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* Value Propositions Section */}
      <section className="section-spacing">
        <div className="container-premium">
          <FadeIn className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-foreground mb-4">Why YouFirst?</h2>
            <p className="text-lg text-muted-foreground">
              Experience the difference with our comprehensive property management solutions.
            </p>
          </FadeIn>
          <ValuePropositions />
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* Services Preview Section */}
      <section className="section-spacing">
        <div className="container-premium">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive property management solutions designed to maximize 
              your investment and provide exceptional tenant experiences.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  image={service.image}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4} className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services" className="gap-2">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* Location Trust Section */}
      <section className="section-spacing">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScaleIn>
              <div className="rounded-3xl overflow-hidden shadow-medium">
                <img
                  src={qatarLocation}
                  alt="Qatar National Museum area"
                  className="w-full aspect-[3/2] object-cover"
                />
              </div>
            </ScaleIn>
            <FadeIn direction="left" delay={0.2}>
              <h2 className="text-foreground mb-6">
                Strategically Located in the Heart of Qatar
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our office in Transworld Tower 1, near the iconic Qatar National Museum, 
                places us at the center of Doha's cultural and business district.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                This prime location enables us to serve property owners and tenants 
                across Qatar with efficiency and local market expertise.
              </p>
              <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Our Address</p>
                  <p className="text-muted-foreground text-sm">
                    1st Floor, Transworld Tower 1,<br />
                    Near Qatar National Museum, Qatar
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* Latest Blog Posts Section */}
      <LatestBlogPosts />

      <SectionDivider variant="gradient" />

      {/* Testimonials Section */}
      <Testimonials />

      <SectionDivider variant="gradient" />

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container-premium">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="text-foreground mb-4">
              Ready to Experience Premium Property Management?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let us take care of your furnished flats while you enjoy peace of mind. 
              Get in touch today to discuss your property management needs.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
