import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { UserCheck, Star, Shield, ArrowRight, Building2 } from "lucide-react";
import heroReceptionist from "@/assets/hero-receptionist.png";
const trustPoints = [{
  icon: UserCheck,
  text: "Customer-first philosophy"
}, {
  icon: Star,
  text: "Hospitality-grade operations"
}, {
  icon: Shield,
  text: "Full regulatory compliance in Qatar"
}];
export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  return <section ref={sectionRef} className="relative bg-background overflow-hidden py-4 md:py-6 lg:py-8">
    <div className="container-premium">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          ease: "easeOut"
        }} className="relative rounded-[1.75rem] overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10">
          {/* Large Image Container - Taller for better visibility */}
          <div className="relative aspect-[3/4] sm:aspect-[4/3] overflow-hidden">
            <motion.img src={heroReceptionist} alt="YouFirst professional receptionist in Doha office" className="w-full h-full object-cover object-top" style={{
              y: imageY,
              scale: imageScale
            }} />

            {/* Multi-layer gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />

            {/* Badge on image */}
            <motion.div initial={{
              opacity: 0,
              y: -10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2,
              duration: 0.4
            }} className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-sm shadow-lg border border-white/50">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-foreground">Premium Property Management</span>
            </motion.div>

            {/* Content overlay at bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <motion.h1 initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.3,
                duration: 0.4
              }} className="text-xl sm:text-2xl font-bold text-white leading-tight mb-2 text-center drop-shadow-lg text-balance">
                Furnished Property Management & Operations
              </motion.h1>
              <motion.p initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.4,
                duration: 0.4
              }} className="text-sm sm:text-base text-white font-medium mb-3 text-center drop-shadow-md text-balance">
                YouFirst in Every Stay, in Every Partnership
              </motion.p>

              {/* Description inside image overlay */}
              <motion.p initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.5,
                duration: 0.4
              }} className="text-white/90 leading-relaxed text-justify text-sm sm:text-base drop-shadow-sm">
                Whether you're a family seeking a comfortable home, an executive needing a stylish space and convenience
              </motion.p>
            </div>
          </div>

          {/* CTAs Below Image */}
          <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.4
          }} className="bg-gradient-to-b from-secondary/60 to-background p-5 space-y-4">
            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="w-full h-14 text-base font-semibold shadow-lg shadow-primary/25">
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full h-14 text-base font-semibold border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
                <Link to="/services" className="flex items-center justify-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Our Services
                </Link>
              </Button>
            </div>

            {/* Trust Points - Compact */}
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {trustPoints.map((point, index) => <motion.div key={point.text} initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.3,
                delay: 0.6 + index * 0.1
              }} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/80 rounded-full border border-border/50">
                <point.icon className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs text-foreground font-medium">{point.text}</span>
              </motion.div>)}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <motion.div initial={{
          opacity: 0,
          y: 15
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} className="relative rounded-[2rem] overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10">
          <div className="grid lg:grid-cols-2 items-stretch min-h-[480px] xl:min-h-[520px]">
            {/* Left Content */}
            <motion.div className="relative z-10 bg-gradient-to-br from-secondary/40 via-secondary/20 to-background px-10 py-12 xl:px-14 xl:py-14 flex flex-col justify-center" style={{
              y: contentY,
              opacity: contentOpacity
            }}>
              {/* Badge */}
              <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.2,
                duration: 0.4
              }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-border/60 shadow-sm w-fit mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                  Premium Property Management
                </span>
              </motion.div>

              <motion.h1 initial={{
                opacity: 0,
                y: 15
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.1
              }} className="text-4xl xl:text-5xl 2xl:text-[3.25rem] font-bold text-foreground leading-[1.1] tracking-tight mb-4">
                Furnished Property Management & Operations
              </motion.h1>

              {/* Decorative line */}
              <motion.div initial={{
                scaleX: 0
              }} animate={{
                scaleX: 1
              }} transition={{
                duration: 0.5,
                delay: 0.3
              }} className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary/50 origin-left mb-4" />

              <motion.p initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.25,
                duration: 0.4
              }} className="text-lg xl:text-xl font-medium text-foreground/80 mb-3">
                YouFirst in Every Stay, in Every Partnership
              </motion.p>

              <motion.p initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.3,
                duration: 0.4
              }} className="text-base text-muted-foreground max-w-lg mb-8 leading-relaxed">
                Whether you're a family seeking a comfortable home, an executive needing a stylish space and convenience, a visitor exploring the city, a property owner or investor maximizing returns, or a corporate client housing your team — you come first.
              </motion.p>

              <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.4,
                duration: 0.4
              }} className="flex flex-wrap items-center gap-4 mb-8">
                <Button asChild size="lg" className="h-12 px-8 shadow-lg shadow-primary/30">
                  <Link to="/contact" className="gap-2">
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-6 gap-2 border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
                  <Link to="/services">
                    <Building2 className="w-4 h-4" />
                    Our Services
                  </Link>
                </Button>
              </motion.div>

              <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.5,
                duration: 0.4
              }} className="flex flex-wrap gap-4">
                {trustPoints.map((point, index) => <div key={point.text} className="flex items-center gap-2 px-3 py-1.5 bg-background/80 rounded-full border border-border/50">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <point.icon className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{point.text}</span>
                </div>)}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <div className="relative overflow-hidden">
              <motion.div initial={{
                opacity: 0,
                scale: 0.98
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut"
              }} className="h-full relative">
                {/* Decorative elements */}
                <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-primary/20 blur-3xl z-10" />
                <div className="absolute top-1/2 -left-8 w-16 h-16 rounded-full bg-primary z-10" />

                <motion.img src={heroReceptionist} alt="YouFirst professional receptionist in Doha office" className="w-full h-full object-cover object-[center_30%]" style={{
                  scale: imageScale
                }} />

                {/* Subtle left edge gradient for blend */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-secondary/30 to-transparent" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
}
