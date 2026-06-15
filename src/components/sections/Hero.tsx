"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
// Added Code2 for the new Projects button
import { FileText, ChevronDown, Code2 } from "lucide-react"; 
import { hero } from "@/src/data/content";

export default function Hero() {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    // Change greeting every 3 seconds
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % hero.greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="section-wrapper"
      style={{ 
        borderBottom: "1px solid var(--color-border)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap-reverse",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* ── Left Column: Text Block ───────────────────────────── */}
        <div
          style={{
            flex: "1 1 480px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {/* Changing greeting */}
          <p
            style={{
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "var(--color-accent)",
              margin: 0,
              minHeight: "1.2em",
            }}
          >
            {hero.greetings[greetingIndex]}
          </p>

          {/* Name + role */}
          <div>
            <h1
              style={{
                fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--color-text-primary)",
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              {hero.name}
            </h1>
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-text-secondary)",
                margin: "0.25rem 0 0",
              }}
            >
              {hero.role}
            </p>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: "1.125rem",
              fontWeight: 600,
              color: "var(--color-text-primary)",
              lineHeight: 1.5,
              maxWidth: "560px",
              margin: 0,
            }}
          >
            {hero.tagline}
          </p>

          {/* Bio */}
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              maxWidth: "560px",
              margin: 0,
            }}
          >
            {hero.bio}
          </p>

          {/* Links */}
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            <HeroLink href={hero.links.github} icon={<GithubIcon />} label="GitHub" external />
            <HeroLink href="/#projects" icon={<Code2 size={15} />} label="See my projects" />
            <HeroLink
              href={hero.links.resume}
              icon={<FileText size={15} />}
              label="Resume"
              external
              accent
            />
          </div>
        </div>

        {/* ── Right Column: Large Image Block + Floating Logos ─── */}
        <div
          style={{
            flex: "0 0 340px", // Increased container width
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem 0"
          }}
        >
          <div
            style={{
              width: "320px", // Increased picture size from 230px
              height: "320px",
              borderRadius: "24px", // Updated proportional rounding
              border: "1px solid var(--color-border)",
              flexShrink: 0,
              position: "relative", // Required for absolute positioning of logos
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)"
            }}
          >
            {/* The actual image */}
            <div style={{ width: "100%", height: "100%", borderRadius: "23px", overflow: "hidden" }}>
              <Image
                src={hero.avatar}
                alt={`${hero.name} profile photo`}
                width={320} // Updated size
                height={320} // Updated size
                priority
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll Down Indicator ─────────────────────────────── */}
      <div 
        style={{ 
          width: "100%", 
          display: "flex", 
          justifyContent: "center", 
          marginTop: "4rem" 
        }}
      >
        <a 
          href="#about"
          aria-label="Scroll down"
          className="animate-bounce"
          style={{
            color: "var(--color-text-faint)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            transition: "color 0.2s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-faint)")}
        >
          <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
}

// ── Sub-components: brand icons (inline SVG) ────────────────────────────────
function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// ── Sub-component: Floating Brand Link ─────────────────────────────────────
type FloatingBrandLinkProps = {
  href: string;
  icon: React.ReactNode;
  style: React.CSSProperties;
  label: string;
};

function FloatingBrandLink({ href, icon, style, label }: FloatingBrandLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        position: "absolute",
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.6)", // Glass effect base
        backdropFilter: "blur(8px)", // Frosted glass effect
        WebkitBackdropFilter: "blur(8px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        transition: "transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
        color: "var(--color-text-primary)",
        zIndex: 10,
        ...style,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "scale(1.1) translateY(-2px)";
        el.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        el.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "scale(1) translateY(0)";
        el.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
        el.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
      }}
    >
      {icon}
    </a>
  );
}

// ── Sub-component: link button ───────────────────────────────────────────────
type HeroLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
  accent?: boolean;
};

function HeroLink({ href, icon, label, external, accent }: HeroLinkProps) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    padding: "0.45rem 1rem",
    borderRadius: "8px",
    fontSize: "0.875rem",
    fontWeight: 500,
    textDecoration: "none",
    border: "1.5px solid",
    cursor: "pointer",
    transition: "background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease",
  };

  const themed: React.CSSProperties = accent
    ? {
        ...base,
        color: "#fff",
        backgroundColor: "var(--color-accent)",
        borderColor: "var(--color-accent)",
      }
    : {
        ...base,
        color: "var(--color-text-secondary)",
        backgroundColor: "transparent",
        borderColor: "var(--color-border)",
      };

  return (
    <a
      href={href}
      style={themed}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        if (accent) {
          el.style.backgroundColor = "#b91c1c";
          el.style.borderColor = "#b91c1c";
        } else {
          el.style.backgroundColor = "var(--color-chip-bg)";
          el.style.borderColor = "var(--color-border)";
          el.style.color = "var(--color-text-primary)";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        if (accent) {
          el.style.backgroundColor = "var(--color-accent)";
          el.style.borderColor = "var(--color-accent)";
        } else {
          el.style.backgroundColor = "transparent";
          el.style.color = "var(--color-text-secondary)";
        }
      }}
    >
      {icon}
      {label}
    </a>
  );
}