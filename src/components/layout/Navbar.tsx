"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { hero } from "@/src/data/content";

const navLinks = [
  {label: "About", href: "about"},
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle top border when user scrolls down
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change / link click
  const handleLinkClick = () => setOpen(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(250,250,250,0.92)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: scrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
        transition: "border-color 0.2s ease",
      }}
    >
      <nav
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "3.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark / initials */}
        <a
          href="#top"
          style={{
            fontWeight: 700,
            fontSize: "0.9375rem",
            color: "var(--color-text-primary)",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          abdazizhamud
          <span style={{ color: "var(--color-accent)" }}>.</span>
        </a>

        {/* Desktop nav links */}
        <ul
          style={{
            display: "none",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "2rem",
            alignItems: "center",
          }}
          className="md-flex"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-text-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-text-secondary)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={hero.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--color-accent)",
                textDecoration: "none",
                border: "1.5px solid var(--color-accent)",
                padding: "0.3rem 0.875rem",
                borderRadius: "6px",
                transition: "background-color 0.15s ease, color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "var(--color-accent)";
                el.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "transparent";
                el.style.color = "var(--color-accent)";
              }}
            >
              Resume ↗
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-text-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.25rem",
          }}
          className="md-hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            backgroundColor: "var(--color-surface)",
            padding: "1rem 1.5rem 1.5rem",
          }}
          className="md-hidden"
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.href} style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  style={{
                    display: "block",
                    padding: "0.75rem 0",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "var(--color-text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li style={{ marginTop: "1rem" }}>
              <a
                href={hero.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                style={{
                  display: "inline-block",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  textDecoration: "none",
                  border: "1.5px solid var(--color-accent)",
                  padding: "0.4rem 1rem",
                  borderRadius: "6px",
                }}
              >
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Inline responsive utility — avoids Tailwind JIT purge issues with dynamic classes */}
      <style>{`
        @media (min-width: 900px) {
          .md-flex { display: flex !important; }
          .md-hidden { display: none !important; }
        }
      `}</style>
    </header>
  );
}