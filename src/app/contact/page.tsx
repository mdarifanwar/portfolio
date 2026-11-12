"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { site } from "@/data/site";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const subject = encodeURIComponent(`Portfolio Message from ${name.trim()}`);
    const bodyContent = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`;
    const encodedBody = encodeURIComponent(bodyContent);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}&su=${subject}&body=${encodedBody}`;
    const mailtoUrl = `mailto:${site.email}?subject=${subject}&body=${encodedBody}`;

    setSubmitted(true);

    // Open Gmail directly in a new tab addressed to mdarifansari.dev@gmail.com
    const newWindow = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = mailtoUrl;
    }
  };

  return (
    <main className="content aathif-theme contact-page-wrapper">
      {/* Subtle Architectural Grid Lines */}
      <div className="aathif-grid-lines" aria-hidden="true">
        <div className="grid-col" />
        <div className="grid-col" />
        <div className="grid-col" />
        <div className="grid-col" />
      </div>

      {/* Top Divider Spacer */}
      <div className="aathif-top-divider" aria-hidden="true" />

      {/* Contact Main Content */}
      <section className="contact-page-container">
        <motion.div 
          className="contact-page-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="contact-card-header">
            <h1 className="contact-main-heading">RING A BELL!</h1>
            <p className="contact-main-subtext">
              Reach out and let&apos;s create something amazing together. Let&apos;s achieve greatness.
            </p>
          </div>

          {/* Form Tag */}
          <div className="contact-form-kicker">FILL THIS FORM OUT</div>

          {/* Form or Success Confirmation */}
          {submitted ? (
            <motion.div 
              className="contact-submitted-state"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle2 size={48} className="submitted-check" />
              <h2>Opening Gmail...</h2>
              <p>Your message has been pre-filled for <strong>{site.email}</strong>.</p>
              <button 
                type="button" 
                onClick={() => setSubmitted(false)}
                className="send-another-btn"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form-body">
              <div className="contact-field-wrap">
                <input
                  type="text"
                  required
                  placeholder="Name*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="contact-text-input"
                />
              </div>

              <div className="contact-field-wrap">
                <input
                  type="email"
                  required
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="contact-text-input"
                />
              </div>

              <div className="contact-field-wrap">
                <textarea
                  required
                  rows={5}
                  placeholder="Message*"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="contact-textarea-input"
                />
              </div>

              <button type="submit" className="contact-submit-action">
                <span>Submit Now</span>
              </button>
            </form>
          )}

          {/* 3-Column Info Strip Below the Form */}
          <div className="contact-meta-strip-3col">
            {/* Col 1: Follow Me */}
            <div className="contact-meta-col">
              <span className="contact-meta-label">FOLLOW ME</span>
              <div className="contact-meta-links">
                <a href={site.linkedin} target="_blank" rel="noreferrer" className="contact-meta-link">
                  <span>LINKEDIN</span>
                  <ArrowUpRight size={13} />
                </a>
                <a href={site.github} target="_blank" rel="noreferrer" className="contact-meta-link">
                  <span>GITHUB</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Col 2: Phone */}
            <div className="contact-meta-col">
              <span className="contact-meta-label">PHONE</span>
              <div className="contact-meta-phone-row">
                <span className="country-code-pill">IN</span>
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="contact-phone-number">
                  {site.phone}
                </a>
              </div>
            </div>

            {/* Col 3: Email Me */}
            <div className="contact-meta-col">
              <span className="contact-meta-label">EMAIL ME</span>
              <a href={`mailto:${site.email}`} className="contact-meta-email">
                {site.email.toUpperCase()}
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Typographic Footer */}
      <footer className="aathif-footer">
        <div className="footer-top-row">
          <p className="footer-bio-lead">
            BASED IN INDIA, I AM AN INNOVATIVE SOFTWARE ENGINEER. MY PASSION FOR BUILDING SCALABLE APPLICATIONS, CLEAN SYSTEM ARCHITECTURE, AND INTUITIVE DIGITAL EXPERIENCES IS EVIDENT IN MY WORK.
          </p>
          <div className="footer-social-links">
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              <span>LINKEDIN</span>
              <ArrowUpRight size={13} />
            </a>
            <a href={site.github} target="_blank" rel="noreferrer">
              <span>GITHUB</span>
              <ArrowUpRight size={13} />
            </a>
            <a href={`mailto:${site.email}`}>
              <span>EMAIL</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Massive Name Typography across the base */}
        <div className="footer-massive-name" aria-hidden="true">
          <span>ARIF</span>
        </div>

        <div className="footer-bottom-bar">
          <span>© {new Date().getFullYear()} MD ARIF ANSARI</span>
          <Link href="/" className="back-to-top-btn">BACK TO HOME ↑</Link>
        </div>
      </footer>
    </main>
  );
}
