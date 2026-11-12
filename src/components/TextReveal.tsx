"use client";

import { motion, type Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "blockquote";
  delay?: number;
  stagger?: number;
  mode?: "word" | "char";
}

const wordVariant: Variants = {
  hidden: { 
    y: "115%", 
    opacity: 0,
    rotateZ: 1.5,
  },
  visible: { 
    y: "0%", 
    opacity: 1, 
    rotateZ: 0,
    transition: { 
      duration: 0.75, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

const charVariant: Variants = {
  hidden: { 
    y: "110%", 
    opacity: 0,
    scaleY: 1.1,
  },
  visible: { 
    y: "0%", 
    opacity: 1, 
    scaleY: 1,
    transition: { 
      duration: 0.85, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

export function TextReveal({
  text,
  className = "",
  as = "h2",
  delay = 0,
  stagger = 0.035,
  mode = "word",
}: TextRevealProps) {
  const Tag = motion[as] as typeof motion.div;

  if (mode === "char") {
    const chars = text.split("");
    return (
      <Tag
        className={`text-reveal-container ${className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: stagger,
              delayChildren: delay,
            },
          },
        }}
      >
        {chars.map((char, index) => (
          <span key={index} className="reveal-char-mask">
            <motion.span
              variants={charVariant}
              className="reveal-char-inner"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </Tag>
    );
  }

  const words = text.split(" ");

  return (
    <Tag
      className={`text-reveal-container ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <span key={index} className="reveal-word-mask">
          <motion.span
            variants={wordVariant}
            className="reveal-word-inner"
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
