import { motion } from "framer-motion";
import { Building2, Users, TrendingUp, Home, Clock, Headphones, Briefcase, MapPin, Heart, Shield, FileText, Settings } from "lucide-react";

const audienceData = [
  {
    title: "For Property Owners",
    icon: Building2,
    benefits: [
      { icon: TrendingUp, text: "Guaranteed income model" },
      { icon: TrendingUp, text: "Maximize rental returns through Revenue-Share Model" },
      { icon: Settings, text: "Completely hands-off management & operations" },
      { icon: FileText, text: "Transparent reporting and strict compliance" },
    ],
  },
  {
    title: "For Executives & Corporate Clients",
    icon: Briefcase,
    benefits: [
      { icon: Home, text: "Premium furnished homes for executives and teams" },
      { icon: Clock, text: "Flexible stays aligned with corporate assignments" },
      { icon: MapPin, text: "Prime locations near business hubs" },
    ],
  },
  {
    title: "For Families & Relocating Residents",
    icon: Heart,
    benefits: [
      { icon: Home, text: "Comfortable, family-friendly furnished flats" },
      { icon: Clock, text: "Flexible lease terms for relocation needs" },
      { icon: Shield, text: "Safe, well-maintained neighborhoods" },
    ],
  },
  {
    title: "For Guests & Short-Stay Tenants",
    icon: Users,
    benefits: [
      { icon: Home, text: "Fully furnished serviced flats" },
      { icon: Clock, text: "Flexible short- and extended stays" },
      { icon: Headphones, text: "24/7 guest support" },
    ],
  },
];

export function AudienceCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {audienceData.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6, scale: 1.01 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative rounded-2xl border-2 border-primary/20 p-8 lg:p-10 bg-background hover:border-primary/40 shadow-[0_0_20px_rgba(59,130,196,0.08)] hover:shadow-[0_0_30px_rgba(59,130,196,0.15)] transition-all duration-400 group cursor-default"
        >
          {/* Decorative gradient on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
              >
                <card.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {card.title}
              </h3>
            </div>
            
            <ul className="space-y-4">
              {card.benefits.map((benefit, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300"
                  >
                    <benefit.icon className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="text-base lg:text-lg">{benefit.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
