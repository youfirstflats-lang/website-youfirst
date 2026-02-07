import serviceFlats from "@/assets/service-flats-management.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceTenant from "@/assets/service-tenant.jpg";
import serviceRentals from "@/assets/service-rentals.jpg";

export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  subFeatures?: { title: string; items: string[]; image?: string }[];
  residenceTypes?: string[];
  amenities?: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  comingSoon?: boolean;
  comingSoonNote?: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "property-owners",
    title: "Property Owners: Maximize Returns. Eliminate Hassle.",
    shortDescription: "Complete furnished flat management with fixed income or performance-based options.",
    fullDescription:
      "Our home management (furnished) service provides comprehensive oversight of your property investment. We handle everything from daily operations to financial reporting, ensuring your property maintains its value and generates optimal returns. With our experienced team, you can enjoy passive income while we take care of all the details. Our professional maintenance services ensure your property remains in excellent condition year-round. Our team of skilled technicians handles all repairs and upkeep promptly and efficiently. From emergency repairs to scheduled preventive maintenance, we protect your investment and keep tenants satisfied.",
    image: serviceFlats,
    features: [
      "Fixed income / performance-based options",
      "Property on-boarding: inspections, marketing, furnishing, interior staging and inventory management",
      "Housekeeping, utility & service coordination",
      "Dynamic pricing & revenue optimization for performance-based model",
      "Monthly reporting & payouts",
      "Regular property condition assessments",
      "Competitive market analysis",
      "Professional photography and marketing",
      "Insurance coordination",
      "24/7 emergency maintenance support",
    ],
    subFeatures: [
      {
        title: "Quality Control, Preventive and Corrective Maintenance",
        image: serviceMaintenance,
        items: [
          "HVAC and electrical services",
          "Plumbing and fixture repairs",
          "Interior and exterior upkeep",
          "Appliance repair and replacement",
          "Painting and touch-ups",
          "Deep cleaning services",
        ],
      },
    ],
    benefits: [
      {
        title: "Maximize Returns",
        description: "Our data-driven approach ensures your property is priced competitively while maximizing your rental income through fixed or performance-based models.",
      },
      {
        title: "Peace of Mind",
        description: "Rest easy knowing your property is in professional hands with 24/7 monitoring and support.",
      },
      {
        title: "Property Protection",
        description: "Regular inspections and maintenance preserve your investment's long-term value.",
      },
      {
        title: "Transparent Reporting",
        description: "Receive detailed monthly reports on occupancy, income, and property status.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Property Assessment",
        description: "We conduct a thorough evaluation of your property to determine optimal pricing and identify any improvements needed.",
      },
      {
        step: 2,
        title: "Onboarding",
        description: "Complete inventory documentation, professional photography, furnishing support, and listing setup across relevant platforms.",
      },
      {
        step: 3,
        title: "Active Management",
        description: "Daily operations including guest/tenant coordination, maintenance, and quality assurance.",
      },
      {
        step: 4,
        title: "Reporting & Payouts",
        description: "Regular financial reports, property updates, and monthly payouts delivered to your preferred channel.",
      },
    ],
    faqs: [
      {
        question: "What types of furnished properties do you manage?",
        answer: "We manage studios, 1-bedroom, 2-bedroom, and larger furnished apartments throughout Qatar. Our services are tailored to each property type.",
      },
      {
        question: "What's the difference between fixed income and performance-based models?",
        answer: "Fixed income provides guaranteed monthly payments regardless of occupancy. Performance-based maximizes returns through dynamic pricing and revenue optimization, with earnings tied to actual bookings.",
      },
      {
        question: "What fees do you charge?",
        answer: "Our management fees are competitive and transparent. Contact us for a personalized quote based on your property and chosen model.",
      },
    ],
  },
  {
    id: "guests-executives-families",
    title: "Guests, Executives & Families: Live Comfortably. Stay Confidently.",
    shortDescription: "Premium furnished accommodations for short-term guests, corporate clients, and relocating families.",
    fullDescription:
      "Our tenant management service covers the complete tenant lifecycle. From rigorous screening to ensure reliable occupants, through lease management and daily communication, to smooth move-out coordination. We handle all aspects of the tenant relationship professionally, protecting your interests while maintaining positive tenant relations.",
    image: serviceTenant,
    features: [
      "Thorough tenant screening and verification",
      "Lease preparation and management",
      "Move-in and move-out coordination",
      "Tenant communication and support",
      "Dispute resolution and mediation",
      "Rent collection and late payment handling",
      "Lease renewal negotiations",
      "Legal compliance management",
    ],
    residenceTypes: [
      "Short-term & long-term stays",
      "Corporate housing",
      "Family-friendly residences",
    ],
    amenities: [
      "High-speed Wi-Fi",
      "Smart TVs & streaming",
      "Fully furnished & equipped kitchens",
      "Housekeeping, 24/7 support",
      "On-call services",
    ],
    benefits: [
      {
        title: "Quality Tenants",
        description: "Our rigorous screening process minimizes risk and ensures reliable, responsible occupants.",
      },
      {
        title: "Reduced Vacancy",
        description: "Proactive lease renewal outreach and excellent service encourage long-term tenancies.",
      },
      {
        title: "Legal Protection",
        description: "Properly drafted leases and compliant procedures protect you from disputes.",
      },
      {
        title: "Hassle-Free Communication",
        description: "We handle all tenant inquiries and issues so you don't have to.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Marketing",
        description: "Professional listing across multiple platforms to attract qualified tenants.",
      },
      {
        step: 2,
        title: "Screening",
        description: "Background checks, employment verification, and reference checks.",
      },
      {
        step: 3,
        title: "Lease Execution",
        description: "Legally compliant lease preparation and signing coordination.",
      },
      {
        step: 4,
        title: "Ongoing Management",
        description: "Continuous communication, rent collection, and relationship management.",
      },
    ],
    faqs: [
      {
        question: "What does tenant screening include?",
        answer: "We verify employment, check references from previous landlords, and assess creditworthiness and rental history.",
      },
      {
        question: "Do you offer corporate housing solutions?",
        answer: "Yes, we specialize in premium furnished homes for executives and teams, with flexible stays aligned with corporate assignments.",
      },
      {
        question: "What amenities are included?",
        answer: "All our residences include high-speed Wi-Fi, smart TVs, fully equipped kitchens, housekeeping, and 24/7 support.",
      },
    ],
  },
  {
    id: "brokerage-services",
    title: "Brokerage Services: Buy / Sell",
    shortDescription: "Introducing a unique approach in real estate agency services supporting buying, selling, and leasing with a customer-first, fair & balanced approach in Qatar.",
    fullDescription:
      "Introducing unique approach in real estate agency services supporting buying, selling, and leasing with a customer-first, fair & balanced approach in Qatar.",
    image: serviceRentals,
    comingSoon: true,
    comingSoonNote: "Agency services will be launched following regulatory approvals and licensing in the State of Qatar.",
    features: [
      "Buy, sell, or lease with confidence — expert advisory for residential and commercial properties",
      "We speak your language — clear, responsive communication built around your needs",
      "Get the best deal — market-smart pricing and expert negotiation on your behalf",
      "Smooth transactions, every time — full coordination with complete regulatory compliance",
      "Local expertise, global reach — supporting investors and end-users across Qatar and beyond",
    ],
    subFeatures: [
      {
        title: "Beyond Property Management — Complimentary Value-Added Services",
        items: [
          "International Investment Consultancy — ROI analysis, strategic location guidance, and market entry/exit strategy to invest smarter",
          "Asset Growth & Protection — Asset diversification, yield optimization and long-term value planning to maximize returns",
          "Foreign Investor Residency Support — Seamless coordination with licensed partners to make Qatar home",
        ],
      },
      {
        title: "Why YouFirst Brokerage",
        items: [
          "Win-together philosophy — Your success drives ours. We create value for buyers and sellers alike, never pushing one-sided deals",
          "Total transparency guaranteed — Every process, every fee, completely clear, no surprises",
          "360° real estate expertise — Agency services, investment strategy, valuation and property management under one roof",
          "Your long-term partner — Protecting your investment today and building wealth tomorrow, committed to sustainable value creation",
        ],
      },
    ],
    benefits: [
      {
        title: "Win-Together Approach",
        description: "Your success drives ours. We create value for buyers and sellers alike, never pushing one-sided deals.",
      },
      {
        title: "Total Transparency",
        description: "Every process, every fee, completely clear with no surprises.",
      },
      {
        title: "360° Expertise",
        description: "Agency services, investment strategy, valuation and property management under one roof.",
      },
      {
        title: "Long-Term Partnership",
        description: "Protecting your investment today and building wealth tomorrow.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description: "Understanding your real estate goals, whether buying, selling, or leasing.",
      },
      {
        step: 2,
        title: "Market Analysis",
        description: "Comprehensive assessment of market conditions and property valuation.",
      },
      {
        step: 3,
        title: "Strategy & Execution",
        description: "Tailored approach with expert negotiation and full regulatory compliance.",
      },
      {
        step: 4,
        title: "Closing & Beyond",
        description: "Smooth transaction completion with ongoing support and investment guidance.",
      },
    ],
    faqs: [
      {
        question: "When will brokerage services be available?",
        answer: "Agency services will be launched following regulatory approvals and licensing in the State of Qatar.",
      },
      {
        question: "What types of properties will you handle?",
        answer: "We will support buying, selling, and leasing for both residential and commercial properties across Qatar.",
      },
      {
        question: "Do you offer investment consultancy?",
        answer: "Yes, we provide international investment consultancy including ROI analysis, strategic location guidance, and market entry/exit strategies.",
      },
    ],
  },
];

export function getServiceById(id: string): ServiceDetail | undefined {
  return servicesData.find((service) => service.id === id);
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((service) => service.id === slug);
}
