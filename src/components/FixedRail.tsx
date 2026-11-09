import { Github, Linkedin } from "lucide-react";
import { site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

export function FixedRail() {
  return (
    <>
      <aside className="social-rail" aria-label="Social links">
        <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <Linkedin size={21} strokeWidth={2} />
        </a>
        <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
          <Github size={22} strokeWidth={2} />
        </a>
      </aside>
      <div className="theme-rail"><ThemeToggle /></div>
    </>
  );
}