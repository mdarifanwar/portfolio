"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectHover, setIsProjectHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth fluid spring physics matching Aathif Zahir's cursor inertia
  const springConfig = { damping: 24, stiffness: 340, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;
    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Project canvas hover mode (cursor expands into the white "VIEW" capsule)
      const projectCanvas = target.closest(".project-canvas, .modern-project-card");
      setIsProjectHover(!!projectCanvas);

      // Interactive items (links, buttons, inputs, cards)
      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .phase-card, .stack-group-card, .pill-dots-btn, .pill-contact-btn, .pill-logo, .theme-toggle'
      );
      setIsHovered(!!interactive && !projectCanvas);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!enabled) return null;

  return (
    <>
      {/* Standard Cursor Dot / Ring (hidden when project VIEW pill is active) */}
      {!isProjectHover && (
        <motion.div
          className={`custom-cursor ${isHovered ? "is-hovered" : ""}`}
          aria-hidden="true"
          style={{
            x: cursorX,
            y: cursorY,
            opacity: isVisible ? 1 : 0,
          }}
          animate={{
            scale: isClicked ? 0.7 : isHovered ? 1.8 : 1,
          }}
          transition={{ duration: 0.16, ease: "easeOut" }}
        />
      )}

      {/* Floating "VIEW" Capsule Cursor matching frame_075 */}
      <AnimatePresence>
        {isProjectHover && isVisible && (
          <motion.div
            className="custom-cursor-view-pill"
            aria-hidden="true"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: isClicked ? 0.92 : 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 450, damping: 28 }}
          >
            <span>VIEW</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
