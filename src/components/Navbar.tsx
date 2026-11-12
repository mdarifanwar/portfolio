"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LiveClock } from "./LiveClock";

const links = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
];

function BubbleDots({ isOpen }: { isOpen: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeDot, setActiveDot] = useState<number | null>(null);

  return (
    <div
      className="pill-dots-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveDot(null);
      }}
    >
      {[0, 1, 2].map((i) => {
        const isThisActive = activeDot === i;
        return (
          <motion.span
            key={i}
            className="pill-bubble-dot"
            onMouseEnter={() => setActiveDot(i)}
            animate={
              isOpen
                ? i === 1
                  ? { opacity: 0, scale: 0 }
                  : i === 0
                  ? { rotate: 45, y: 0, width: 13, height: 2, borderRadius: 2, backgroundColor: "var(--text)" }
                  : { rotate: -45, y: -2, width: 13, height: 2, borderRadius: 2, backgroundColor: "var(--text)" }
                : isThisActive
                ? {
                    y: -4,
                    scale: 1.4,
                    backgroundColor: "var(--text)",
                    opacity: 1,
                  }
                : isHovered && activeDot === null
                ? {
                    y: [-1, -4.5, 0],
                    scale: [1, 1.35, 1],
                    backgroundColor: [
                      "var(--muted)",
                      "var(--text)",
                      "var(--muted)",
                    ],
                    opacity: [0.65, 1, 0.65],
                    transition: {
                      repeat: Infinity,
                      duration: 0.85,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    },
                  }
                : {
                    y: 0,
                    scale: 1,
                    backgroundColor: "var(--muted)",
                    opacity: 0.7,
                    width: 5.5,
                    height: 5.5,
                    borderRadius: "50%",
                  }
            }
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
          />
        );
      })}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

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

  const closeAll = () => {
    setMobileMenuOpen(false);
    setHoveredKey(null);
  };

  return (
    <header className="pill-navbar-container">
      <div className="pill-top-bar">
        {/* Left: LiveClock */}
        <div className={`pill-side-item pill-side-left ${scrolled ? "is-hidden" : ""}`}>
          <LiveClock />
        </div>

        {/* Center: The Floating Pill Navbar */}
        <motion.nav
          className={`pill-navbar ${scrolled ? "is-scrolled is-compact" : "is-top is-expanded"}`}
          layout
          transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.55 }}
        >
          <Link href="/" className="pill-logo" aria-label="Md Arif Ansari home" onClick={closeAll}>
            arif<span className="pill-logo-dot">.</span>
          </Link>

          {/* When at top: show desktop links */}
          {!scrolled && (
            <div className="pill-nav-links" onMouseLeave={() => setHoveredKey(null)}>
              {links.map((link) => {
                const isItemHovered = hoveredKey === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeAll}
                    onMouseEnter={() => setHoveredKey(link.href)}
                    className="pill-nav-item"
                  >
                    {isItemHovered && (
                      <motion.span
                        layoutId="nav-bubble"
                        className="pill-nav-bubble"
                        transition={{ type: "spring", stiffness: 420, damping: 30 }}
                      />
                    )}
                    <span className="pill-nav-label">{link.label}</span>
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={closeAll}
                onMouseEnter={() => setHoveredKey("/contact")}
                className="pill-contact-btn"
              >
                {hoveredKey === "/contact" && (
                  <motion.span
                    layoutId="nav-bubble"
                    className="pill-nav-bubble pill-nav-bubble-contact"
                    transition={{ type: "spring", stiffness: 420, damping: 30 }}
                  />
                )}
                <span className="pill-nav-label">Contact</span>
              </Link>
            </div>
          )}

          {/* 3 Animated Bubble Dots button (visible when scrolled or on mobile) */}
          <button
            type="button"
            className={`pill-dots-btn ${!scrolled ? "dots-mobile-only" : "dots-visible"}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <BubbleDots isOpen={mobileMenuOpen} />
          </button>
        </motion.nav>

        {/* Right: Get in touch pill */}
        <div className={`pill-side-item pill-side-right ${scrolled ? "is-hidden" : ""}`}>
          <Link
            href="/contact"
            className="top-contact-pill"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      {/* Mobile / Compact dropdown menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="pill-mobile-dropdown"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeAll}>
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="pill-mobile-contact"
              onClick={closeAll}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
