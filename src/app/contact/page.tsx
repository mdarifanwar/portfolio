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
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setSubmitted(true);

    const subject = encodeURIComponent(`Portfolio Message from ${name.trim()}`);
    const bodyContent = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`;
    const encodedBody = encodeURIComponent(bodyContent);

    // Direct redirect to Gmail in the SAME tab (not a new tab)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}&su=${subject}&body=${encodedBody}`;

    setTimeout(() => {
      window.location.href = gmailUrl;
    }, 800);
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
              >
                <CheckCircle2 size={44} className="success-icon" />
                <h2>Opening Gmail...</h2>
                <p>Your message has been prepared for {site.email}.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-actual-form">
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
                  <textarea
                    required
                    rows={5}
                    placeholder="Message*"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="contact-dark-textarea"
                  />
                </div>

                <button type="submit" className="contact-dark-submit">
                  <span>Submit Now</span>
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
