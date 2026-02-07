import { motion } from "framer-motion";
import { Heart, Building, Shield } from "lucide-react";

const bulletPoints = [
  { icon: Heart, text: "Customer-first service" },
  { icon: Building, text: "Hospitality-grade operations" },
  { icon: Shield, text: "Full regulatory compliance in Qatar" },
];

export function HeroBulletPoints() {
  return (
    <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-6">
      {bulletPoints.map((point, index) => (
        <motion.div
          key={point.text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
          className="flex items-center gap-2 text-white/90"
        >
          <point.icon className="w-4 h-4 text-primary" />
          <span className="text-sm md:text-base font-medium">{point.text}</span>
        </motion.div>
      ))}
    </div>
  );
}
