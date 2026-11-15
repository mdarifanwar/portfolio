"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { site } from "@/data/site";
import { LiveClock } from "@/components/LiveClock";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
        throw new Error("Submission response was not ok");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Unable to submit directly right now. Please click here to email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page-wrapper">
      {/* Subtle Architectural Grid Lines */}
      <div className="aathif-grid-lines" aria-hidden="true">
        <div className="grid-col" />
        <div className="grid-col" />
        <div className="grid-col" />
        <div className="grid-col" />
      </div>

      {/* Top Bar: Left = LiveClock, Right = Menu/Back button */}
      <header className="contact-top-bar">
        <div className="contact-top-left">
          <LiveClock />
        </div>

        <div className="contact-top-right">
          <Link href="/" className="contact-six-dots-btn" aria-label="Return to portfolio home">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </Link>
        </div>
      </header>

      {/* Centered Form & Contact Info Container */}
      <div className="contact-page-container">
        <div className="contact-centered-wrapper">
          <motion.div 
            className="contact-main-column"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="contact-title-group">
              <h1 className="contact-page-title">RING A BELL!</h1>
              <p className="contact-page-subtitle">
                Reach out and let&apos;s create something amazing together. Let&apos;s achieve greatness.
              </p>
            </div>

            <div className="contact-form-kicker">FILL THIS FORM OUT</div>

            {/* Form */}
            {submitted ? (
              <motion.div 
                className="contact-form-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "40px 20px" }}
              >
                <CheckCircle2 size={48} className="success-icon" style={{ color: "var(--accent)", margin: "0 auto 16px" }} />
                <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "8px" }}>Message Sent Successfully!</h2>
                <p style={{ color: "var(--muted)", maxWidth: "460px", margin: "0 auto 24px", lineHeight: "1.6" }}>
                  Thank you, <strong>{name}</strong>. Your message was delivered directly to <strong>{site.email}</strong>. I will get back to you shortly at <strong>{email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                    setSubmitted(false);
                  }}
                  className="contact-dark-submit"
                  style={{ display: "inline-block", width: "auto", padding: "12px 28px" }}
                >
                  <span>Send Another Message</span>
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-actual-form">
                {error && (
                  <div style={{ padding: "12px 16px", borderRadius: "8px", background: "rgba(239, 68, 68, 0.12)", border: "1px solid rgba(239, 68, 68, 0.3)", color: "#f87171", fontSize: "13px", marginBottom: "16px" }}>
                    {error}{" "}
                    <a 
                      href={`mailto:${site.email}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\n${message}`)}`}
                      style={{ textDecoration: "underline", fontWeight: "600", color: "#fff" }}
                    >
                      Click here to email directly
                    </a>
                  </div>
                )}

                <div className="contact-field-wrap">
                  <input
                    type="text"
                    required
                    placeholder="Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="contact-dark-input"
                  />
                </div>

                <div className="contact-field-wrap">
                  <input
                    type="email"
                    required
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="contact-dark-input"
                  />
                </div>

                <div className="contact-field-wrap">
                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="contact-dark-input"
                  />
                </div>

                <div className="contact-field-wrap">
                  <textarea
                    required
                    rows={5}
                    placeholder="Message*"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="contact-dark-textarea"
                  />
                </div>

                <button type="submit" disabled={loading} className="contact-dark-submit">
                  <span>{loading ? "Sending Directly to Gmail..." : "Submit Now"}</span>
                </button>
              </form>
            )}

            {/* 3-Column Info Footer below the form matching Aathif Zahir */}
            <div className="contact-meta-row">
              {/* Col 1: Follow Me (except Instagram) */}
              <div className="contact-meta-item">
                <span className="contact-meta-label">FOLLOW ME</span>
                <div className="contact-meta-links">
                  <a href={site.linkedin} target="_blank" rel="noreferrer" className="contact-inline-link">
                    <span>LINKEDIN</span>
                    <ArrowUpRight size={13} />
                  </a>
                  <a href={site.github} target="_blank" rel="noreferrer" className="contact-inline-link">
                    <span>GITHUB</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Col 2: Phone */}
              <div className="contact-meta-item">
                <span className="contact-meta-label">PHONE</span>
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="contact-phone-inline">
                  <span className="country-badge">{site.phoneCountry}</span>
                  <span className="phone-digits">{site.phone}</span>
                </a>
              </div>

              {/* Col 3: Email Me */}
              <div className="contact-meta-item">
                <span className="contact-meta-label">EMAIL ME</span>
                <a href={`mailto:${site.email}`} className="contact-email-inline">
                  <span>{site.email.toUpperCase()}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
