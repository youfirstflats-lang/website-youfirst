import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, ArrowRight, Facebook, Instagram, Linkedin, Twitter, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  { name: "Furnished Flats Management", href: "/services/furnished-flats-management" },
  { name: "Property Maintenance", href: "/services/property-maintenance" },
  { name: "Tenant Management", href: "/services/tenant-management" },
  { name: "Short & Long-term Rentals", href: "/services/short-long-term-rentals" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/youfirstqa" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/youfirstqa" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/youfirstqa" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/youfirstqa" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-secondary/30 to-secondary/50 overflow-hidden">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Main Footer Content */}
      <div className="container-premium pt-16 pb-8 md:pt-20 md:pb-10">
        {/* Top Section - Logo & CTA */}
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-12 mb-12 border-b border-border/50">
            {/* Logo & Description */}
            <div className="max-w-sm">
              <div className="mb-5">
                <img
                  src={logo}
                  alt="YouFirst Property Management"
                  className="h-14 w-auto object-contain"
                />
              </div>

              <p className="text-foreground font-semibold leading-relaxed mb-4">
                YouFirst Furnished Flats Management LLC
              </p>

              <p className="text-foreground/60 text-sm font-medium" dir="rtl">
                يوفيرست لإدارة الشقق المفروشة
              </p>

              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Qatar's trusted partner for premium furnished flats, management & operation, designed for comfort, compliance, and consistency.
              </p>

              <div className="mt-4 text-xs text-muted-foreground space-y-1">
                <p><span className="font-medium text-foreground/80">License:</span> 317078</p>
                <p><span className="font-medium text-foreground/80">CR Number:</span> 234853</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-background border border-border/50 hover:border-primary hover:bg-primary/5 flex items-center justify-center text-muted-foreground hover:text-primary transition-all cursor-pointer shadow-sm"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Navigation */}
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                  Our Services
                </h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                  Contact Us
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="tel:+97470866639"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div>
                        <span className="block">+974 7086 6639</span>
                        <span className="text-xs text-muted-foreground/60">Primary</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+97450143615"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div>
                        <span className="block">+974 5014 3615</span>
                        <span className="text-xs text-muted-foreground/60">Secondary</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@youfirst.qa"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-3.5 h-3.5 text-primary" />
                      </div>
                      info@youfirst.qa
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youfirst.qa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Globe className="w-3.5 h-3.5 text-primary" />
                      </div>
                      www.youfirst.qa
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://maps.google.com/?q=Transworld+Tower+1+Near+Qatar+National+Museum+Doha+Qatar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span>
                        1st Floor, Transworld Tower 1,<br />
                        Near Qatar National Museum, Doha, Qatar
                      </span>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-start gap-3 text-muted-foreground text-sm">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div>
                        <span className="block font-medium text-foreground">Business Hours</span>
                        Sun - Thu: 9:00 AM - 6:00 PM
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>



        {/* Bottom Section */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t border-border/50">
            <div className="text-muted-foreground text-sm text-center md:text-left">
              <p>
                © {currentYear} YouFirst Furnished Flats Management LLC. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span className="text-border hidden sm:inline">|</span>
              <Link to="/terms-conditions" className="text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-border hidden sm:inline">|</span>
              <Link to="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-20 w-32 h-32 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
    </footer>
  );
}
