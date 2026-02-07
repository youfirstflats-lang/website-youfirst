import { motion } from "framer-motion";
import { Shield, Headphones, Globe, Handshake } from "lucide-react";

const trustSignals = [
  {
    icon: Shield,
    text: "Licensed & MOCI-Compliant",
  },
  {
    icon: Headphones,
    text: "24/7 Guest & Owner Support",
  },
  {
    icon: Globe,
    text: "Services in different languages",
  },
  {
    icon: Handshake,
    text: "Win-together approach",
  },
];

export function TrustSignals() {
  return (
    <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
      {trustSignals.map((signal, index) => (
        <motion.div
          key={signal.text}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="flex items-center gap-2.5 px-5 py-3 bg-background border-2 border-primary/20 rounded-full shadow-[0_0_12px_rgba(59,130,196,0.08)] hover:border-primary/40 hover:shadow-[0_0_20px_rgba(59,130,196,0.15)] transition-all duration-300 cursor-default group"
        >
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0.2 }}
          >
            <signal.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-200" />
          </motion.div>
          <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary transition-colors duration-200">
            {signal.text}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
