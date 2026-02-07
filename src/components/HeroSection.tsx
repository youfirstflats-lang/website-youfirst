"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  overlay?: "dark" | "light" | "none";
  minHeight?: "sm" | "md" | "lg" | "xl" | "full";
  align?: "center" | "left";
  children?: ReactNode;
  className?: string;
  showScrollIndicator?: boolean;
}

const minHeightClasses = {
  sm: "min-h-[350px] md:min-h-[400px]",
  md: "min-h-[400px] md:min-h-[480px]",
  lg: "min-h-[480px] md:min-h-[550px]",
  xl: "min-h-[550px] md:min-h-[650px]",
  full: "min-h-screen"
};

export function HeroSection({
  backgroundImage,
  title,
  subtitle,
  overlay = "dark",
  minHeight = "md",
  align = "center",
  children,
  className,
  showScrollIndicator = false
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isDark = overlay === "dark" || overlay === "none";
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={sectionRef} className={cn("py-4 md:py-6 lg:py-8", className)}>
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "relative rounded-3xl lg:rounded-[2rem] overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10",
            minHeightClasses[minHeight]
          )}
        >
          {/* Background Image with Parallax */}
          <motion.div 
            className="absolute inset-0"
            style={{ scale: imageScale }}
          >
            <img
              src={backgroundImage}
              alt=""
              role="presentation"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>

          {/* Overlay */}
          {overlay !== "none" && (
            <div className={cn(
              "absolute inset-0",
              isDark 
                ? "bg-gradient-to-b from-black/60 via-black/40 to-black/70" 
                : "bg-gradient-to-b from-white/70 via-white/50 to-white/80"
            )} />
          )}

          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute -top-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute -bottom-1/4 -left-1/4 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-3xl"
            />
          </div>

          {/* Content */}
          <motion.div 
            className="relative h-full flex items-center justify-center"
            style={{ y: contentY }}
          >
            <div className={cn(
              "px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20",
              "max-w-4xl",
              align === "center" && "text-center mx-auto"
            )}>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6",
                  isDark 
                    ? "bg-white/15 backdrop-blur-md border border-white/25" 
                    : "bg-foreground/10 backdrop-blur-md border border-foreground/15"
                )}
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className={cn(
                  "text-xs md:text-sm font-medium tracking-wider uppercase",
                  isDark ? "text-white/90" : "text-foreground/80"
                )}>
                  Premium Property Management
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={cn(
                  "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 leading-[1.1] tracking-tight",
                  isDark ? "text-white" : "text-foreground"
                )}
                dangerouslySetInnerHTML={{ __html: title.replace(/\\n/g, '<br>') }}
              />

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={cn(
                  "h-1 w-16 md:w-20 rounded-full mb-5",
                  align === "center" ? "mx-auto origin-center" : "origin-left",
                  "bg-gradient-to-r from-primary via-primary to-primary/50"
                )}
              />

              {/* Subtitle */}
              {subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={cn(
                    "text-base md:text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl",
                    align === "center" && "mx-auto",
                    isDark ? "text-white/85" : "text-muted-foreground"
                  )}
                >
                  {subtitle}
                </motion.p>
              )}

              {/* Children (CTAs) */}
              {children && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className={cn(align === "center" && "flex justify-center")}
                >
                  {children}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Bottom border accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
