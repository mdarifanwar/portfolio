"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function IntroWriting() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.48, 0.9, 1], [1, 1, 0.22, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -42]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const clip = useTransform(scrollYProgress, [0, 0.15, 0.95, 1], [
    "inset(0 0 0 0)", "inset(0 0 0 0)", "inset(0 100% 0 0)", "inset(0 100% 0 0)"
  ]);

  return (
    <section id="top" ref={sectionRef} className="intro-section">
      <div className="intro-grid" aria-hidden="true" />
      <motion.div className="intro-center" style={{ opacity, y, scale }}>
        <p className="intro-kicker">A PERSONAL SPACE ON THE INTERNET</p>
        <motion.svg
          className="signature"
          viewBox="0 0 1100 260"
          role="img"
          aria-label="Md Arif Ansari"
          style={{ clipPath: clip }}
        >
          <text x="50%" y="57%" textAnchor="middle" dominantBaseline="middle" className="signature-text">
            Md Arif Ansari
          </text>
        </motion.svg>
        <motion.p
          className="intro-caption"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          SCROLL TO EXPLORE <span>↓</span>
        </motion.p>
      </motion.div>
      <div className="intro-bottom-note">SOFTWARE ENGINEERING · BUILDING WITH INTENTION</div>
    </section>
  );
}