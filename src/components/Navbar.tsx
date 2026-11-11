"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isPast = window.scrollY > 80;
      setScrolled(isPast);
      if (!isPast) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On desktop: expanded if near top or if user hovers the collapsed pill
  const isExpanded = !scrolled || hovered;

  const closeAll = () => {
    setHovered(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="pill-navbar-container">
      <motion.nav
        className={`pill-navbar ${scrolled ? "is-scrolled" : "is-top"} ${
          isExpanded ? "is-expanded" : "is-compact"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        layout
        transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.5 }}
      >
        <a href="#top" className="pill-logo" aria-label="Md Arif Ansari home" onClick={closeAll}>
          arif<span className="pill-logo-dot">.</span>
        </a>

        {/* Desktop links */}
        <div className="pill-nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeAll}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="pill-contact-btn" onClick={closeAll}>
            Contact
          </a>
        </div>

        {/* Scrolled / Mobile compact trigger dots */}
        <button
          type="button"
          className="pill-dots-btn"
          onClick={() => {
            setHovered((prev) => !prev);
            setMobileMenuOpen((prev) => !prev);
          }}
          aria-label="Toggle navigation menu"
          aria-expanded={isExpanded || mobileMenuOpen}
        >
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </button>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="pill-mobile-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={closeAll}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="pill-mobile-contact" onClick={closeAll}>
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
