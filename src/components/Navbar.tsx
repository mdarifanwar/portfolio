 "use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "./BrandMark";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <BrandMark />
      <span className="header-label">PORTFOLIO <i /> 2026</span>
      <nav className={open ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}