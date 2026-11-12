"use client";

import { motion, type Variants } from "framer-motion";
import { 
  ArrowUpRight, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  Sparkles, 
  Code2, 
  Server, 
  Database, 
  Layers,
  ArrowRight
} from "lucide-react";
import { projects, skills } from "@/data/projects";
import { site } from "@/data/site";
import { useContactModal } from "@/context/ContactModalContext";

const reveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export function PortfolioContent() {
  const { openContact } = useContactModal();

  return (
    <main className="content aathif-theme">
      {/* Subtle Architectural Grid Lines */}
      <div className="aathif-grid-lines" aria-hidden="true">
        <div className="grid-col" />
        <div className="grid-col" />
        <div className="grid-col" />
        <div className="grid-col" />
      </div>

      {/* Top Border Guide Line */}
      <div className="aathif-top-divider" aria-hidden="true" />

      {/* Hero Section */}
      <section id="top" className="aathif-hero">
        <motion.div 
          className="hero-headline-wrap"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-massive-name">ARIF</h1>
        </motion.div>

        {/* Hero 3-Col Meta Strip */}
        <motion.div 
          className="hero-meta-strip"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="meta-card">
            <div className="meta-icon-badge green">
              <MapPin size={15} />
            </div>
            <div className="meta-info">
              <span className="meta-sub">LOCATION</span>
              <strong className="meta-val">BASED IN INDIA</strong>
            </div>
          </div>

          <div className="meta-card">
            <div className="meta-icon-badge white">
              <Globe size={15} />
            </div>
            <div className="meta-info">
              <span className="meta-sub">AVAILABILITY</span>
              <strong className="meta-val">AVAILABLE WORLDWIDE</strong>
            </div>
          </div>

          <div className="meta-card">
            <div className="meta-icon-badge blue">
              <ShieldCheck size={15} />
            </div>
            <div className="meta-info">
              <span className="meta-sub">DISCIPLINE</span>
              <strong className="meta-val">SOFTWARE ENGINEER</strong>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 01 // Approach Section */}
      <section id="about" className="aathif-section approach-section">
        <div className="section-kicker-bar">
          <span className="kicker-index">01</span>
          <span className="kicker-title">{"// APPROACH"}</span>
          <span className="kicker-tag">THREE PHASES</span>
        </div>

        <motion.div 
          className="approach-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
        >
          <h2 className="approach-big-title">
            I&apos;M MD ARIF ANSARI BASED IN INDIA.
          </h2>
          <p className="approach-sub-text">
            I employ software engineering skills to build scalable, high-performance, and reliable web applications.
          </p>
        </motion.div>

        {/* 3 Phases Grid */}
        <motion.div 
          className="approach-phases-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <motion.div variants={reveal} className="phase-card">
            <div className="phase-card-top">
              <div className="phase-indicators">
                <span className="phase-dot active" />
                <span className="phase-dot" />
                <span className="phase-dot" />
              </div>
              <span className="phase-number">01</span>
            </div>
            <h3 className="phase-title">DISCOVER AND ANALYSE</h3>
            <p className="phase-desc">
              Deconstruct problem spaces, understand requirements, evaluate algorithmic complexity, and architect clean roadmap strategies.
            </p>
            <div className="phase-tags">
              <span>System Design</span>
              <span>Requirements</span>
              <span>Architecture</span>
            </div>
          </motion.div>

          <motion.div variants={reveal} className="phase-card">
            <div className="phase-card-top">
              <div className="phase-indicators">
                <span className="phase-dot" />
                <span className="phase-dot active" />
                <span className="phase-dot" />
              </div>
              <span className="phase-number">02</span>
            </div>
            <h3 className="phase-title">DESIGN AND IMPLEMENT</h3>
            <p className="phase-desc">
              Engineer modular backend microservices with Java & Spring Boot, design normalized databases, and craft responsive React frontends.
            </p>
            <div className="phase-tags">
              <span>Spring Boot</span>
              <span>React & Next.js</span>
              <span>REST APIs</span>
            </div>
          </motion.div>

          <motion.div variants={reveal} className="phase-card">
            <div className="phase-card-top">
              <div className="phase-indicators">
                <span className="phase-dot" />
                <span className="phase-dot" />
                <span className="phase-dot active" />
              </div>
              <span className="phase-number">03</span>
            </div>
            <h3 className="phase-title">DELIVER AND MONITOR</h3>
            <p className="phase-desc">
              Containerize services with Docker, optimize database queries for low latency, automate CI/CD testing, and ensure 99.9% reliability.
            </p>
            <div className="phase-tags">
              <span>Docker & CI/CD</span>
              <span>SQL Tuning</span>
              <span>Monitoring</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 02 // Selected Works (Projects) */}
      <section id="projects" className="aathif-section projects-section">
        <div className="section-kicker-bar">
          <span className="kicker-index">02</span>
          <span className="kicker-title">{"// SELECTED WORKS"}</span>
          <span className="kicker-tag">PORTFOLIO</span>
        </div>

        <div className="projects-grid-modern">
          {projects.map((project, idx) => (
            <motion.article 
              key={project.number}
              className="modern-project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={reveal}
              transition={{ delay: idx * 0.08 }}
            >
              {/* Project Visual Canvas */}
              <div className={`project-canvas canvas-${idx + 1}`}>
                <div className="project-dots-row">
                  <span className="canvas-dot active" />
                  <span className="canvas-dot" />
                  <span className="canvas-dot" />
                  <span className="canvas-dot" />
                </div>
                
                {/* Floating Mockup Card Visual */}
                <div className="mockup-preview-box">
                  <div className="mockup-header">
                    <span className="mockup-pill-label">{project.category}</span>
                    <span className="mockup-code-tag">v1.0</span>
                  </div>
                  <div className="mockup-body">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                  <div className="mockup-stack-row">
                    {project.stack.slice(0, 3).map((s) => (
                      <span key={s} className="mockup-tech">{s}</span>
                    ))}
                  </div>
                </div>

                <a 
                  href={project.github || site.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="project-hover-pill"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <span>VIEW</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>

              {/* Project Card Bottom Info */}
              <div className="project-bottom-meta">
                <div className="project-titles">
                  <h3 className="project-name">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                <a 
                  href={project.github || site.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="project-arrow-btn"
                  aria-label={`Explore ${project.title}`}
                >
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 03 // Who Am I / Philosophy */}
      <section className="aathif-section philosophy-section">
        <div className="section-kicker-bar">
          <span className="kicker-index">03</span>
          <span className="kicker-title">{"// WHO AM I"}</span>
          <span className="kicker-tag">PHILOSOPHY</span>
        </div>

        <motion.div 
          className="philosophy-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
        >
          <blockquote className="philosophy-quote">
            &ldquo;AN INDIA–BASED SOFTWARE ENGINEER, SPECIALIZING IN HELPING BUSINESSES AND INDIVIDUALS TURN THEIR AMBITIOUS IDEAS INTO IMPACTFUL DIGITAL PRODUCTS AND SOFTWARE SOLUTIONS.&rdquo;
          </blockquote>

          {/* Stat Pillars */}
          <div className="philosophy-stats-grid">
            <div className="stat-pillar">
              <span className="stat-number">3+</span>
              <span className="stat-label">YEARS DEV EXPERIENCE</span>
            </div>
            <div className="stat-pillar">
              <span className="stat-number">15+</span>
              <span className="stat-label">PROJECTS & REPOSITORIES</span>
            </div>
            <div className="stat-pillar">
              <span className="stat-number">100%</span>
              <span className="stat-label">CODE INTENTION & PASSION</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 04 // Tech Stack & Toolkit */}
      <section id="skills" className="aathif-section skills-section">
        <div className="section-kicker-bar">
          <span className="kicker-index">04</span>
          <span className="kicker-title">{"// TECH STACK"}</span>
          <span className="kicker-tag">TOOLS & EXPERTISE</span>
        </div>

        <motion.div 
          className="stack-cards-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {skills.map((group, idx) => {
            const icons = [Code2, Layers, Server, Database, Sparkles];
            const Icon = icons[idx % icons.length];
            return (
              <motion.div key={group.group} variants={reveal} className="stack-group-card">
                <div className="stack-card-header">
                  <div className="stack-icon-wrap">
                    <Icon size={18} />
                  </div>
                  <span className="stack-index">0{idx + 1}</span>
                </div>
                <h3 className="stack-group-title">{group.group}</h3>
                <div className="stack-pills-list">
                  {group.items.map((item) => (
                    <span key={item} className="stack-pill-item">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 05 // Contact & Call to Action */}
      <section id="contact" className="aathif-section contact-section">
        <div className="section-kicker-bar">
          <span className="kicker-index">05</span>
          <span className="kicker-title">{"// CONTACT NOW"}</span>
          <span className="kicker-tag">GET IN TOUCH</span>
        </div>

        <div className="contact-editorial-box">
          <p className="contact-cta-eyebrow">HAVE A PROJECT OR OPPORTUNITY IN MIND?</p>
          <h2 className="contact-cta-heading">LET&apos;S MAKE SOMETHING EXTRAORDINARY.</h2>
          <div className="contact-action-row">
            <button 
              type="button" 
              onClick={openContact} 
              className="contact-mail-pill"
            >
              <span>{site.email}</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Large Typographic Footer */}
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
            <button 
              type="button" 
              onClick={openContact}
              className="footer-email-link"
            >
              <span>EMAIL</span>
              <ArrowUpRight size={13} />
            </button>
          </div>
        </div>

        {/* Massive Name Typography across the base */}
        <div className="footer-massive-name" aria-hidden="true">
          <span>ARIF</span>
        </div>

        <div className="footer-bottom-bar">
          <span>© {new Date().getFullYear()} MD ARIF ANSARI</span>
          <a href="#top" className="back-to-top-btn">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
