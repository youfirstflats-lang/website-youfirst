import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  badge?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHero({
  backgroundImage,
  title,
  subtitle,
  badge = "Furnished Property Management & Operations",
  children,
  className,
}: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.7]);

  return (
    <section ref={sectionRef} className={cn("py-3 md:py-6 lg:py-8", className)}>
      <div className="container-premium">
        {/* Mobile Layout - Enhanced with larger image */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative rounded-[1.75rem] overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10"
          >
            {/* Large Image Container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
              <motion.img
                src={backgroundImage}
                alt={title}
                className="w-full h-full object-cover"
                style={{ y: imageY, scale: imageScale }}
              />
              
              {/* Multi-layer gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
              
              {/* Badge - Top */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-sm shadow-lg border border-white/50"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold text-foreground">{badge}</span>
              </motion.div>

              {/* Content overlay on image */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-[1.65rem] sm:text-3xl font-bold text-white leading-tight tracking-tight mb-2"
                >
                  {title}
                </motion.h1>
                
                {subtitle && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="text-sm sm:text-base text-white/90 leading-relaxed font-medium"
                  >
                    {subtitle}
                  </motion.p>
                )}
              </div>
            </div>

            {/* CTA Section below image */}
            {children && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="bg-gradient-to-b from-secondary/60 to-background p-5"
              >
                <div className="flex flex-col gap-3">
                  {children}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-[2rem] overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10"
          >
            <div className="grid lg:grid-cols-2 items-stretch min-h-[400px] xl:min-h-[450px]">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative z-10 bg-gradient-to-br from-secondary/40 via-secondary/20 to-background px-10 py-12 xl:px-14 xl:py-14 flex flex-col justify-center"
                style={{ y: contentY, opacity: contentOpacity }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-border/60 shadow-sm w-fit mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                    {badge}
                  </span>
                </motion.div>

                <h1 className="text-4xl xl:text-5xl font-bold text-foreground leading-[1.15] tracking-tight mb-4">
                  {title}
                </h1>

                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary/50 origin-left mb-5"
                />

                {subtitle && (
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
                    {subtitle}
                  </p>
                )}

                {children && (
                  <div className="flex flex-wrap items-center gap-4">
                    {children}
                  </div>
                )}
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="relative overflow-hidden"
              >
                <motion.img
                  src={backgroundImage}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ y: imageY, scale: imageScale }}
                />
                
                {/* Decorative elements */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary/15 blur-3xl"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute top-8 right-8 w-16 h-16 rounded-full border-4 border-primary/30"
                />
                
                {/* Left edge gradient for blend */}
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-secondary/30 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
