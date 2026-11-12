"use client";

import { useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import { site } from "@/data/site";

export function ContactModal() {
  const { isOpen, closeContact } = useContactModal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key & lock scroll when open
  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContact();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeContact]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Compose Gmail & Mailto targets directly to mdarifansari.dev@gmail.com
    const subject = encodeURIComponent(`Portfolio Message from ${name.trim()}`);
    const bodyContent = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`;
    const encodedBody = encodeURIComponent(bodyContent);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}&su=${subject}&body=${encodedBody}`;
    const mailtoUrl = `mailto:${site.email}?subject=${subject}&body=${encodedBody}`;

    setSubmitted(true);

    // Open Gmail directly in a new tab
    const newWindow = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      // Fallback to mailto if popup blocked
      window.location.href = mailtoUrl;
    }

    // Reset and close after a short delay
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setSubmitted(false);
      closeContact();
    }, 2400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="contact-modal-overlay" onClick={closeContact} role="dialog" aria-modal="true">
          <motion.div
            className="contact-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          />

          <motion.div
            className="contact-modal-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", stiffness: 360, damping: 28, mass: 0.7 }}
          >
            {/* Close Button */}
            <button
              type="button"
              className="contact-modal-close"
              onClick={closeContact}
              aria-label="Close contact modal"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="contact-modal-header">
              <h2 className="contact-modal-title">RING A BELL!</h2>
              <p className="contact-modal-subtitle">
                Reach out and let&apos;s create something amazing together. Let&apos;s achieve greatness.
              </p>
            </div>

            {/* Sub-header / Section Tag */}
            <div className="contact-modal-kicker">FILL THIS FORM OUT</div>

            {/* Form or Success State */}
            {submitted ? (
              <motion.div 
                className="contact-modal-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle2 size={42} className="success-icon" />
                <h3>Opening Gmail...</h3>
                <p>Your message has been prepared for {site.email}.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-modal-form">
                <div className="form-group">
                  <input
                    type="text"
                    required
                    placeholder="Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    required
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    required
                    rows={4}
                    placeholder="Message*"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>Submit Now</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
