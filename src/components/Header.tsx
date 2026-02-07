import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b",
          scrolled 
            ? "border-border shadow-sm" 
            : "border-border/60"
        )}
      >
        <div className="container-premium">
          {/* Mobile Header */}
          <nav className="flex lg:hidden items-center justify-between h-18 py-3">
            {/* Mobile Menu Button - Left */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              className="relative w-12 h-12 flex items-center justify-center text-foreground rounded-2xl bg-gradient-to-br from-secondary to-secondary/60 hover:from-primary/10 hover:to-primary/5 border border-border/50 shadow-sm transition-all duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={20} strokeWidth={2.5} />
            </motion.button>

            {/* Centered Logo - Bigger */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
              <motion.img 
                src={logo}
                alt="YouFirst"
                className="h-12 w-auto object-contain"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </Link>

            {/* Right side - CTA icon */}
            <Link to="/contact">
              <motion.div
                whileTap={{ scale: 0.92 }}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25"
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </motion.div>
            </Link>
          </nav>

          {/* Desktop Header */}
          <nav className="hidden lg:flex items-center justify-between h-20">
            {/* Logo - Larger for desktop */}
            <Link to="/" className="flex items-center shrink-0">
              <img 
                src={logo}
                alt="YouFirst"
                className="h-14 xl:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="flex items-center justify-center flex-1 px-8">
              <div className="flex items-center gap-10">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={cn(
                        "relative text-[15px] font-medium transition-colors py-1",
                        isActive 
                          ? "text-primary" 
                          : "text-foreground/70 hover:text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="shrink-0">
              <Button asChild size="lg" className="px-6 h-11 rounded-full font-semibold shadow-md shadow-primary/20">
                <Link to="/contact">
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel - Left Side */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm z-50 lg:hidden bg-background flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-border/50">
                <img 
                  src={logo}
                  alt="YouFirst"
                  className="h-10 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-border/50 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto p-5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                  Navigation
                </p>
                
                <nav className="space-y-1">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        className={cn(
                          "block py-4 text-lg font-medium border-b border-border/30 transition-colors",
                          isActive
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        )}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Contact Footer */}
              <div className="p-5 border-t border-border/50">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                  Contact Us
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+97470866639"
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">+974 7086 6639</span>
                  </a>
                  <a
                    href="mailto:info@youfirst.qa"
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">info@youfirst.qa</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Doha+Qatar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">Doha, Qatar</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-[72px] lg:h-20" />
    </>
  );
}
