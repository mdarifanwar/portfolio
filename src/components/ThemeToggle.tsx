"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isTransitioningRef = useRef(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="theme-toggle" aria-hidden="true">
        <Sun size={16} strokeWidth={1.8} />
      </div>
    );
  }

  const currentTheme = theme || resolvedTheme || "dark";
  const isDark = currentTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isTransitioningRef.current) return;

    // View Transitions API check
    const doc = typeof document !== "undefined" ? (document as unknown as { startViewTransition?: (cb: () => void) => { ready?: Promise<void>; finished?: Promise<void> } }) : null;
    const supportsViewTransition =
      Boolean(doc && typeof doc.startViewTransition === "function") &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Calculate exact button coordinates
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;

    // Max radius to cover the entire window from the click origin
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    if (!supportsViewTransition) {
      // Fallback circular ripple for browsers without native View Transitions API
      isTransitioningRef.current = true;
      const ripple = document.createElement("div");
      ripple.className = "theme-ripple-fallback";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.backgroundColor = isDark ? "#f8fafc" : "#090c10";
      document.body.appendChild(ripple);

      requestAnimationFrame(() => {
        ripple.style.width = `${endRadius * 2.2}px`;
        ripple.style.height = `${endRadius * 2.2}px`;
      });

      setTimeout(() => {
        setTheme(nextTheme);
        ripple.style.opacity = "0";
        setTimeout(() => {
          ripple.remove();
          isTransitioningRef.current = false;
        }, 350);
      }, 250);
      return;
    }

    // Native View Transitions API with circular clip-path expansion
    isTransitioningRef.current = true;

    // Inject dynamic keyframe rule so browser animates ::view-transition-new(root)
    const styleId = "theme-transition-style";
    let style = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!style) {
      style = document.createElement("style");
      style.id = styleId;
      document.head.appendChild(style);
    }
    style.textContent = `
      @keyframes circle-theme-expand {
        0% {
          clip-path: circle(0px at ${x}px ${y}px);
        }
        100% {
          clip-path: circle(${endRadius}px at ${x}px ${y}px);
        }
      }
      ::view-transition-new(root) {
        animation: circle-theme-expand 650ms cubic-bezier(0.22, 1, 0.36, 1) forwards !important;
      }
    `;

    try {
      const transition = doc!.startViewTransition!(() => {
        flushSync(() => {
          setTheme(nextTheme);
        });
      });

      // Try animating with Web Animations API for browsers supporting pseudoElement animation
      transition?.ready
        ?.then(() => {
          try {
            document.documentElement.animate(
              {
                clipPath: [
                  `circle(0px at ${x}px ${y}px)`,
                  `circle(${endRadius}px at ${x}px ${y}px)`,
                ],
              },
              {
                duration: 650,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                pseudoElement: "::view-transition-new(root)",
              }
            );
          } catch {
            // CSS keyframe rule handles it seamlessly
          }
        })
        .catch(() => {});

      transition?.finished
        ?.finally(() => {
          style?.remove();
          isTransitioningRef.current = false;
        })
        .catch(() => {
          style?.remove();
          isTransitioningRef.current = false;
        });
    } catch {
      style?.remove();
      setTheme(nextTheme);
      isTransitioningRef.current = false;
    }
  };

  return (
    <div className="theme-toggle-wrapper">
      <button
        type="button"
        className="theme-toggle"
        onClick={handleToggle}
        aria-label={`Switch to ${nextTheme} theme`}
      >
        <span className={`theme-toggle-icon ${isDark ? "is-dark" : "is-light"}`}>
          {isDark ? <Sun size={17} strokeWidth={1.8} /> : <MoonStar size={17} strokeWidth={1.8} />}
        </span>
      </button>
      <span className="theme-toggle-tooltip" aria-hidden="true">
        Switch to {nextTheme} theme
      </span>
    </div>
  );
}
