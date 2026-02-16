import { motion } from "framer-motion";
import { Key, TrendingUp, Star, FileCheck } from "lucide-react";

const valueProps = [
  {
    icon: Key,
    title: "Owners Benefits: Turn-Key Furnished Flat Management",
    description: "Higher yield potential through strategic pricing and occupancy management, freedom of flexible model, End-to-end Management & operations, Zero hassle, Asset preservation, Preventive maintenance & Quality control, Transparent structure for revenue-share model.",
  },
  {
    icon: Star,
    title: "Hotel-Standard Guest Experience",
    description: "Safe, clean, and compliant properties, Dedicated concierge, Prime locations, Respect for guest privacy, safety, and comfort, Premium hospitality services that exceed guest expectations every time.",
  },
  {
    icon: FileCheck,
    title: "Full Transparency & Compliance",
    description: "MOCI-licensed operations, MM & Civil Defense Compliance, Clear reporting, complete regulatory compliance, Coordination to Owners Association and peace of mind for owners.",
  },
  {
    icon: TrendingUp,
    title: "Adoptable to change dynamics",
    description: "Continuous improvement to meet evolving regulatory, market, and service expectations.",
  },
];

export function ValuePropositions() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {valueProps.map((prop, index) => (
        <motion.div
          key={prop.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, scale: 1.02 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group text-center p-6 rounded-2xl bg-background border-2 border-primary/20 hover:border-primary/40 shadow-[0_0_15px_rgba(59,130,196,0.08)] hover:shadow-[0_0_25px_rgba(59,130,196,0.15)] transition-all duration-400 cursor-default"
        >
          {/* Icon with animation */}
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300"
          >
            <prop.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
          </motion.div>
          
          <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {prop.title}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {prop.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
