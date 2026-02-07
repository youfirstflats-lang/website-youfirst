"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  rating: number;
  review: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Al-Thani",
    role: "Property Owner",
    rating: 5,
    review: "YouFirst has transformed the way I manage my furnished apartments. Their attention to detail and professional approach has significantly increased my rental income while reducing my stress.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Investor",
    company: "Gulf Properties Ltd",
    rating: 5,
    review: "Outstanding service from day one. The team handles everything from tenant screening to maintenance with exceptional professionalism. I couldn't ask for a better property management partner.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Mohammed Al-Kuwari",
    role: "Property Owner",
    rating: 5,
    review: "After trying several property management companies in Qatar, YouFirst stands out for their transparency and reliability. They truly put clients first, just as their name suggests.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Emma Johnson",
    role: "Expat Tenant",
    rating: 5,
    review: "As a tenant, I've had the best experience with YouFirst managed properties. Quick responses, well-maintained apartments, and a truly professional team. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Khalid Al-Mansoor",
    role: "Real Estate Investor",
    rating: 5,
    review: "Managing multiple properties used to be a nightmare until I partnered with YouFirst. Their comprehensive reporting and proactive maintenance approach has saved me countless hours.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Lisa Chen",
    role: "Corporate Tenant",
    company: "Tech Solutions Qatar",
    rating: 5,
    review: "Our company regularly houses visiting executives, and YouFirst properties are always our first choice. Impeccable cleanliness, modern amenities, and responsive management.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 7,
    name: "Faisal Al-Rashid",
    role: "Property Owner",
    rating: 5,
    review: "The peace of mind YouFirst provides is priceless. From tenant vetting to maintenance coordination, every aspect is handled with utmost professionalism and care.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 8,
    name: "Maria Santos",
    role: "Long-term Tenant",
    rating: 5,
    review: "I've been living in a YouFirst managed apartment for 2 years now. The level of service and attention to tenant needs is unmatched in Doha. Truly feels like home.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 9,
    name: "Omar Hassan",
    role: "Investment Portfolio Manager",
    rating: 5,
    review: "YouFirst manages our entire portfolio of 15 furnished units. Their efficiency, transparency, and commitment to maximizing returns has exceeded all expectations.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 10,
    name: "Jennifer Williams",
    role: "Short-stay Guest",
    rating: 5,
    review: "Booked a YouFirst property for a 3-month project assignment. The seamless check-in, pristine condition, and 24/7 support made my stay absolutely wonderful.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "text-amber-400 fill-amber-400"
              : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative h-full group"
    >
      {/* Gradient border wrapper */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/40 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />
      
      {/* Glow effect */}
      <div className="absolute -inset-2 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      {/* Card content with glass effect */}
      <div className="relative h-full rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm p-6 lg:p-8 shadow-soft group-hover:shadow-large group-hover:border-primary/20 transition-all duration-500 flex flex-col overflow-hidden">
        {/* Decorative corner gradient */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quote icon */}
        <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        
        {/* Rating with enhanced styling */}
        <div className="relative z-10">
          <StarRating rating={testimonial.rating} />
        </div>

        {/* Review with gradient text effect on hover */}
        <p className="text-muted-foreground leading-relaxed mt-4 mb-6 flex-grow line-clamp-4 relative z-10 group-hover:text-foreground/80 transition-colors duration-300">
          "{testimonial.review}"
        </p>

        {/* Author with enhanced styling */}
        <div className="relative z-10 flex items-center gap-4 pt-4 border-t border-border/50 group-hover:border-primary/20 transition-colors duration-300">
          <div className="relative">
            {/* Avatar glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            <Avatar className="relative w-12 h-12 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
              <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">
              {testimonial.role}
              {testimonial.company && <span className="text-primary/70"> · {testimonial.company}</span>}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="section-spacing overflow-hidden">
      <div className="container-premium">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-primary font-medium mb-2">Testimonials</p>
          <h2 className="text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what property owners and 
            tenants have to say about their experience with YouFirst.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 h-10 w-10" />
              <CarouselNext className="static translate-y-0 h-10 w-10" />
            </div>
          </Carousel>
        </FadeIn>

        {/* Trust indicators */}
        <FadeIn delay={0.4} className="mt-12 lg:mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            <div className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-foreground">100+</p>
              <p className="text-sm text-muted-foreground">Properties Managed</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-foreground">98%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-foreground">5.0</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-foreground">24/7</p>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
