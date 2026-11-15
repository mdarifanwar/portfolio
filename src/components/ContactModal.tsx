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
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Close on Escape key & lock scroll when open
  useEffect(() => {
    if (!isOpen) {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSubmitted(false);
      setError(null);
      setLoading(false);
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          Name: name.trim(),
          Email: email.trim(),
          Phone: phone.trim() || "Not provided",
          Message: message.trim(),
          _subject: `New Portfolio Inquiry from ${name.trim()}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Submission response failed");
      }

      setSubmitted(true);
      setTimeout(() => {
        closeContact();
      }, 2600);
    } catch (err) {
      console.error("Modal submission error:", err);
      setError("Unable to submit directly. Please try again or email directly.");
    } finally {
      setLoading(false);
    }
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
                style={{ textAlign: "center", padding: "20px 0" }}
              >
                <CheckCircle2 size={44} className="success-icon" style={{ color: "var(--accent)", margin: "0 auto 12px" }} />
                <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "6px" }}>Message Sent Successfully!</h3>
                <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.5" }}>
                  Your message has been sent directly to <strong>{site.email}</strong>.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-modal-form">
                {error && (
                  <div style={{ padding: "8px 12px", borderRadius: "6px", background: "rgba(239, 68, 68, 0.12)", color: "#f87171", fontSize: "12px", marginBottom: "12px" }}>
                    {error}
                  </div>
                )}

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
                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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

                <button type="submit" disabled={loading} className="form-submit-btn">
                  <span>{loading ? "Sending Directly to Gmail..." : "Submit Now"}</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
