import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, ArrowRight, Layers, ShieldCheck, Code2 } from "lucide-react";
import { projects } from "@/data/projects";
import { LiveClock } from "@/components/LiveClock";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found | Md Arif Ansari" };

  return {
    title: `${project.title} — Case Study | Md Arif Ansari`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="project-detail-wrapper">
      {/* Background Architectural Grid Lines */}
      <div className="aathif-grid-lines" aria-hidden="true">
        <div className="grid-col" />
        <div className="grid-col" />
        <div className="grid-col" />
        <div className="grid-col" />
      </div>

      {/* Top Header Navigation */}
      <header className="project-detail-header">
        <div className="header-left">
          <Link href="/#projects" className="back-home-pill">
            <ArrowLeft size={14} />
            <span>BACK TO PROJECTS</span>
          </Link>
        </div>

        <div className="header-center">
          <LiveClock />
        </div>

        <div className="header-right">
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

      <div className="project-detail-container">
        {/* Hero Section */}
        <section className="project-hero-section">
          <div className="project-meta-top">
            <span className="project-index-pill">PROJECT // {project.number}</span>
            <span className="project-category-tag">{project.category}</span>
          </div>

          <h1 className="project-hero-title">{project.title}</h1>
          <p className="project-hero-tagline">{project.tagline}</p>

          {/* Action CTAs: Live Server & GitHub */}
          <div className="project-cta-group">
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-launch-live"
              >
                <span>LAUNCH LIVE PROJECT</span>
                <ArrowUpRight size={17} />
              </a>
            ) : null}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-view-github"
            >
              <Github size={17} />
              <span>VIEW SOURCE CODE</span>
              <ExternalLink size={14} className="icon-subtle" />
            </a>
          </div>
        </section>

        {/* 4-Column Key Metrics Strip */}
        <section className="project-metrics-strip">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="metric-box">
              <span className="metric-label">{metric.label}</span>
              <strong className="metric-val">{metric.value}</strong>
            </div>
          ))}
        </section>

        {/* Project Overview Block */}
        <section className="project-content-block">
          <div className="block-header">
            <span className="block-index">01</span>
            <h2 className="block-title">PROJECT OVERVIEW</h2>
          </div>
          <p className="project-narrative-text">{project.overview}</p>
        </section>

        {/* Key Features & Engineering Highlights */}
        <section className="project-content-block">
          <div className="block-header">
            <span className="block-index">02</span>
            <h2 className="block-title">KEY CAPABILITIES & FEATURES</h2>
          </div>
          <div className="features-grid">
            {project.highlights.map((feat, idx) => {
              const [title, desc] = feat.split(": ");
              return (
                <div key={idx} className="feature-card">
                  <div className="feature-card-top">
                    <span className="feature-badge">0{idx + 1}</span>
                    <ShieldCheck size={16} className="feature-icon" />
                  </div>
                  <h3 className="feature-title">{title}</h3>
                  <p className="feature-desc">{desc || title}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* System Architecture & Engineering Breakdown */}
        <section className="project-content-block">
          <div className="block-header">
            <span className="block-index">03</span>
            <h2 className="block-title">SYSTEM ARCHITECTURE</h2>
          </div>
          <div className="architecture-table">
            {project.architecture.map((item) => (
              <div key={item.layer} className="arch-row">
                <div className="arch-layer">
                  <Layers size={15} />
                  <span>{item.layer}</span>
                </div>
                <div className="arch-details">{item.details}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Used (Pills) */}
        <section className="project-content-block">
          <div className="block-header">
            <span className="block-index">04</span>
            <h2 className="block-title">TECHNOLOGIES & TOOLS</h2>
          </div>
          <div className="tech-stack-pills">
            {project.stack.map((tech) => (
              <span key={tech} className="tech-stack-badge">
                <Code2 size={13} />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </section>

        {/* Live Launch Banner */}
        <section className="project-live-banner">
          <div className="banner-content">
            <span className="banner-kicker">READY TO EXPLORE THE APPLICATION?</span>
            <h3 className="banner-title">Experience {project.title} live in production.</h3>
            <p className="banner-desc">
              Test the live cloud deployment or inspect the production codebase, test suites, and Docker configuration.
            </p>
          </div>
          <div className="banner-actions">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-launch-live"
              >
                <span>VISIT LIVE SERVER</span>
                <ArrowUpRight size={17} />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-view-github"
            >
              <Github size={17} />
              <span>GITHUB REPOSITORY</span>
            </a>
          </div>
        </section>

        {/* Next Project Footer Switcher */}
        <footer className="next-project-footer">
          <div className="next-project-meta">
            <span className="next-label">UP NEXT</span>
            <Link href={`/projects/${nextProject.slug}`} className="next-project-link">
              <span className="next-title">{nextProject.title}</span>
              <ArrowRight size={22} className="next-arrow" />
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
