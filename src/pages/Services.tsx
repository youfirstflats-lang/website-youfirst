import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { SectionDivider } from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Clock, Home, Wifi, Tv, UtensilsCrossed, Headphones, Phone } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/animations";
import { servicesData } from "@/lib/services-data";
import { usePageLoading } from "@/hooks/usePageLoading";
import { PageHeroSkeleton, ImageWithTextSkeleton } from "@/components/skeletons";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

import heroServices from "@/assets/hero-services.jpg";

const amenityIcons: Record<string, React.ElementType> = {
  "High-speed Wi-Fi": Wifi,
  "Smart TVs & streaming": Tv,
  "Fully furnished & equipped kitchens": UtensilsCrossed,
  "Housekeeping, 24/7 support": Headphones,
  "On-call services": Phone,
};

export default function Services() {
  const isLoading = usePageLoading(600);

  if (isLoading) {
    return (
      <Layout>
        <PageHeroSkeleton />

        <section className="py-16 md:py-24">
          <div className="container-premium">
            <div className="space-y-24">
              {Array.from({ length: 3 }).map((_, i) => (
                <ImageWithTextSkeleton key={i} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider variant="gradient" />

        <section className="section-spacing">
          <div className="container-premium">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <Skeleton className="h-10 w-64 mx-auto" />
              <Skeleton className="h-5 w-full max-w-md mx-auto" />
              <Skeleton className="h-14 w-40 mx-auto rounded-full mt-4" />
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage={heroServices}
        title="Our Services"
        subtitle="Technology & innovation-driven smart property management that maximizes returns for owners and delivers exceptional living experiences for tenants across Qatar."
        badge="What We Offer"
      >
        <Button asChild size="lg" className="h-12 px-8">
          <Link to="/contact">Get a Quote</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-12 px-8">
          <Link to="#services-list">View All</Link>
        </Button>
      </PageHero>

      {/* Services List */}
      <section id="services-list" className="py-16 md:py-24">
        <div className="container-premium">
          <div className="space-y-32">
            {servicesData.map((service, index) => (
              <div key={service.id} className="space-y-12">
                {/* Service Header */}
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  <ScaleIn className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <Link to={`/services/${service.id}`} className="block group relative">
                      <div className="rounded-3xl overflow-hidden shadow-medium group-hover:shadow-large transition-shadow">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {service.comingSoon && (
                          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
                            <Badge variant="secondary" className="text-lg px-6 py-2 bg-background/90">
                              Coming Soon
                            </Badge>
                          </div>
                        )}
                      </div>
                    </Link>
                  </ScaleIn>
                  <FadeIn
                    direction={index % 2 === 1 ? "right" : "left"}
                    delay={0.1}
                    className={index % 2 === 1 ? "lg:order-1" : ""}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
                        {service.title}
                      </h2>
                      {service.comingSoon && (
                        <Badge variant="outline" className="text-primary border-primary">
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>

                    {/* Main Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.slice(0, 6).map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {!service.comingSoon && (
                      <div className="flex flex-wrap gap-4">
                        <Button asChild>
                          <Link to={`/services/${service.id}`}>
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link to={`/services/${service.id}#contact-form`}>
                            Get a Quote
                          </Link>
                        </Button>
                      </div>
                    )}
                  </FadeIn>
                </div>

                {/* Extended Features */}
                {service.features.length > 6 && !service.comingSoon && (
                  <FadeIn delay={0.2}>
                    <div className="bg-secondary/30 rounded-3xl p-8 lg:p-10">
                      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {service.features.slice(6).map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                )}

                {/* Sub-features */}
                {service.subFeatures && service.subFeatures.length > 0 && (
                  <FadeIn delay={0.25}>
                    <div className="grid md:grid-cols-2 gap-6">
                      {service.subFeatures.map((subFeature, idx) => (
                        <div
                          key={idx}
                          className={`bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-6 lg:p-8 border border-primary/10 ${subFeature.image ? "md:col-span-2 overflow-hidden" : ""
                            }`}
                        >
                          <div className={subFeature.image ? "grid md:grid-cols-2 gap-8 items-center" : ""}>
                            <div className={subFeature.image ? "order-2 md:order-1" : ""}>
                              <h4 className="text-lg font-semibold text-foreground mb-4">
                                {subFeature.title}
                              </h4>
                              <ul className="space-y-3">
                                {subFeature.items.map((item, itemIdx) => (
                                  <li key={itemIdx} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                      <Check className="w-3 h-3 text-primary" />
                                    </div>
                                    <span className="text-muted-foreground text-sm">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {subFeature.image && (
                              <div className="order-1 md:order-2">
                                <div className="rounded-xl overflow-hidden shadow-sm aspect-video md:aspect-[4/3]">
                                  <img
                                    src={subFeature.image}
                                    alt={subFeature.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                )}

                {/* Residence Types & Amenities */}
                {(service.residenceTypes || service.amenities) && (
                  <FadeIn delay={0.3}>
                    <div className="grid md:grid-cols-2 gap-6">
                      {service.residenceTypes && (
                        <div className="bg-secondary/30 rounded-2xl p-6 lg:p-8">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Home className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="text-lg font-semibold text-foreground">Residence Types</h4>
                          </div>
                          <ul className="space-y-3">
                            {service.residenceTypes.map((type) => (
                              <li key={type} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                  <Check className="w-3 h-3 text-primary" />
                                </div>
                                <span className="text-muted-foreground">{type}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {service.amenities && (
                        <div className="bg-secondary/30 rounded-2xl p-6 lg:p-8">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Clock className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="text-lg font-semibold text-foreground">Amenities</h4>
                          </div>
                          <ul className="space-y-3">
                            {service.amenities.map((amenity) => {
                              const IconComponent = amenityIcons[amenity] || Check;
                              return (
                                <li key={amenity} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <IconComponent className="w-3 h-3 text-primary" />
                                  </div>
                                  <span className="text-muted-foreground">{amenity}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  </FadeIn>
                )}

                {/* Coming Soon Note */}
                {service.comingSoon && service.comingSoonNote && (
                  <FadeIn delay={0.3}>
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
                      <p className="text-muted-foreground italic">{service.comingSoonNote}</p>
                    </div>
                  </FadeIn>
                )}

                {index < servicesData.length - 1 && (
                  <SectionDivider variant="gradient" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container-premium">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every property is unique. Contact us to discuss your specific
              requirements and let us create a tailored management plan for you.
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
