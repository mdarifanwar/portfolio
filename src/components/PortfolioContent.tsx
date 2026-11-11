"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { projects, skills } from "@/data/projects";
import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export function PortfolioContent() {
  return (
    <main className="content">
      <NavbarSpacer />
      <section className="hero-section">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <motion.div className="hero-copy" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={reveal} className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</motion.p>
          <motion.h1 variants={reveal}>Building useful<br /><em>digital experiences.</em></motion.h1>
          <motion.p variants={reveal} className="hero-description">{site.intro}</motion.p>
          <motion.div variants={reveal} className="hero-actions">
            <a className="button button-primary" href="#projects">Explore projects <ArrowDownRight size={17} /></a>
            <a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
          </motion.div>
        </motion.div>
        <div className="hero-aside"><span>01</span><span className="aside-line" /><span>SCROLL TO DISCOVER</span></div>
        <div className="hero-bottom-meta"><span>JAVA · REACT · SPRING BOOT</span><span>BASED IN INDIA</span></div>
      </section>

      <section id="about" className="section about-section">
        <SectionHeading index="01" eyebrow="A LITTLE ABOUT ME" title={"Curious by nature.\\nBuilder by choice."} description="A quick introduction to the person behind the code." />
        <motion.div className="about-layout" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.p variants={reveal} className="about-lead">{site.about}</motion.p>
          <motion.div variants={reveal} className="about-facts">
            <div><span>FOCUS</span><strong>Full-stack development</strong></div>
            <div><span>EDUCATION</span><strong>B.Tech · Computer Science</strong></div>
            <div><span>GRADUATION</span><strong>2027</strong></div>
            <div><span>APPROACH</span><strong>Learn · Build · Improve</strong></div>
          </motion.div>
        </motion.div>
      </section>

      <section id="skills" className="section skills-section">
        <SectionHeading index="02" eyebrow="MY TOOLKIT" title={"Tools I use to\\nbring ideas to life."} description="A growing set of technologies across product development." />
        <div className="skills-grid">
          {skills.map((group, i) => (
            <motion.article className="skill-card" key={group.group} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: i * 0.06 }}>
              <span className="skill-number">0{i + 1}</span>
              <h3>{group.group}</h3>
              <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <SectionHeading index="03" eyebrow="SELECTED WORK" title={"Projects with\\npurpose."} description="A selection of things I have been building and exploring." />
        <div className="projects-list">
          {projects.map((project) => (
            <motion.article className="project-card" key={project.number} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
              <a className="project-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source on GitHub`}><ArrowUpRight size={22} /></a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="statement-section">
        <Sparkles className="statement-spark" size={22} />
        <p>Good software is built with <em>curiosity, clarity,</em> and care.</p>
      </section>

      <section id="contact" className="section contact-section">
        <SectionHeading index="04" eyebrow="HAVE A PROJECT IN MIND?" title={"Let's make\\nsomething matter."} description="Open to internships, entry-level opportunities, and meaningful collaborations." />
        <div className="contact-bottom">
          <a className="contact-email" href={`mailto:${site.email}`}>{site.email} <ArrowUpRight size={22} /></a>
          <div className="contact-note">Have an opportunity or just want to say hello? My inbox is open.</div>
        </div>
      </section>
      <footer className="footer">
        <span>© {new Date().getFullYear()} MD ARIF ANSARI</span>
        <span>DESIGNED & BUILT WITH INTENTION</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

function NavbarSpacer() {
  return <div className="content-top-spacer" aria-hidden="true" />;
}