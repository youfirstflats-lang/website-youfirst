import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Check } from "lucide-react";

import serviceFlats from "@/assets/service-flats-management.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceTenant from "@/assets/service-tenant.jpg";
import serviceRentals from "@/assets/service-rentals.jpg";

const whyCards = [
  {
    title: "Turn-key Furnished Flat Management",
    subtitle: "Owners Benefits",
    image: serviceFlats,
    points: [
      "Higher yield potential through strategic pricing & occupancy management",
      "Freedom of flexible model",
      "End-to-end management & operations",
      "Zero hassle — asset preservation",
      "Preventive maintenance & quality control",
      "Transparent structure for revenue-share model",
    ],
  },
  {
    title: "Higher Returns vs Traditional Leasing",
    subtitle: "Maximize Your Investment",
    image: serviceRentals,
    points: [
      "Optimize your rental income with strategic pricing",
      "Occupancy management for maximum revenue",
      "Performance-based models that align our success with yours",
      "Data-driven market analysis & positioning",
    ],
  },
  {
    title: "Hotel-Standard Guest Experience",
    subtitle: "Premium Hospitality",
    image: serviceTenant,
    points: [
      "Safe, clean, and compliant properties",
      "Dedicated concierge services",
      "Prime locations across Qatar",
      "Respect for guest privacy, safety & comfort",
      "Premium hospitality that exceeds expectations",
    ],
  },
  {
    title: "Full Transparency & Compliance",
    subtitle: "Trust & Governance",
    image: serviceMaintenance,
    points: [
      "MOCi-licensed operations",
      "MM & Civil Defense compliance",
      "Clear reporting & complete regulatory compliance",
      "Coordination with Owners Association",
      "Peace of mind for all stakeholders",
    ],
  },
];

export function WhyYouFirst() {
  return (
    <section className="section-spacing">
      <div className="container-premium">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-foreground mb-4">Why YouFirst</h2>
          <p className="text-lg text-muted-foreground">
            Experience the difference with our unique and comprehensive property
            management solutions.
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {whyCards.map((card) => (
            <StaggerItem key={card.title}>
              <div className="group relative bg-card rounded-3xl overflow-hidden border border-primary/10 hover:border-primary/25 transition-all duration-500 hover:shadow-lg h-full flex flex-col">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="inline-block text-xs font-medium uppercase tracking-wider text-white/80 mb-1">
                      {card.subtitle}
                    </span>
                    <h3 className="text-lg font-semibold text-white leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1">
                  <ul className="space-y-3">
                    {card.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
