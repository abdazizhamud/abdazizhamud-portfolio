"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { pinnedProjects } from "@/src/data/content"; // Only importing pinnedProjects now
import Card from "@/src/components/ui/Card";

export default function ProjectsArchive() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--color-background)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem" }}>
        
        {/* ── Back Navigation ─────────────────────────────────── */}
        <Link
          href="/#projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "var(--color-text-secondary)",
            textDecoration: "none",
            marginBottom: "3rem",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* ── Page Header ─────────────────────────────────────── */}
        <div style={{ marginBottom: "4rem" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
              margin: "0 0 0.75rem",
            }}
          >
            All Projects
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--color-text-secondary)", margin: 0 }}>
            A complete archive of things I've built, experimented with, or contributed to.
          </p>
        </div>

        {/* ── Projects Grid (Shows ALL projects) ──────────────── */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", 
            gap: "2rem" 
          }}
        >
          {pinnedProjects.map((project, idx) => (
            <Card key={project.title}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 9",
                  backgroundColor: "var(--color-border-subtle)",
                  position: "relative",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} screenshot`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    margin: "0 0 0.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.65,
                    margin: "0 0 1.25rem",
                  }}
                >
                  {project.summary}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.375rem",
                    marginBottom: "1.5rem",
                    flexGrow: 1,
                    alignContent: "flex-start"
                  }}
                >
                  {project.techStack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "auto" }}>
                  {project.repoUrl && (
                    <ProjectLink href={project.repoUrl} icon={<GithubIcon size={14} />} label="Source" />
                  )}
                  {project.liveUrl && (
                    <ProjectLink href={project.liveUrl} icon={<ExternalLink size={14} />} label="Live Demo" accent />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </main>
  );
}

// ── Sub-components ───────────────────────────
function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

type ProjectLinkProps = { href: string; icon: React.ReactNode; label: string; accent?: boolean; };
function ProjectLink({ href, icon, label, accent }: ProjectLinkProps) {
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.375rem", padding: "0.375rem 0.875rem",
        borderRadius: "6px", fontSize: "0.8125rem", fontWeight: 500, textDecoration: "none",
        border: "1.5px solid", transition: "background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease",
        color: accent ? "#fff" : "var(--color-text-secondary)",
        backgroundColor: accent ? "var(--color-accent)" : "transparent",
        borderColor: accent ? "var(--color-accent)" : "var(--color-border)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        if (accent) { el.style.backgroundColor = "#b91c1c"; el.style.borderColor = "#b91c1c"; } 
        else { el.style.backgroundColor = "var(--color-chip-bg)"; el.style.color = "var(--color-text-primary)"; }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        if (accent) { el.style.backgroundColor = "var(--color-accent)"; el.style.borderColor = "var(--color-accent)"; } 
        else { el.style.backgroundColor = "transparent"; el.style.color = "var(--color-text-secondary)"; }
      }}
    >
      {icon} {label}
    </a>
  );
}