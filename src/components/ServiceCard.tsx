import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export function ServiceCard({ title, description, image, href = "/services" }: ServiceCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
      className="group bg-background rounded-2xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 shadow-[0_0_15px_rgba(59,130,196,0.08)] hover:shadow-[0_0_25px_rgba(59,130,196,0.15)] transition-all duration-300 h-full flex flex-col"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        <Link
          to={href}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
        >
          <span className="relative">
            Learn more
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover/link:w-full transition-all duration-300" />
          </span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}
