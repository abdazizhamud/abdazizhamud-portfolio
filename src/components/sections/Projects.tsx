"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { pinnedProjects, listProjects } from "@/src/data/content";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-wrapper"
      style={{
        borderTop: "1px solid var(--color-border)",
        backgroundColor: "var(--color-surface)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* ── Section heading ─────────────────────────────────── */}
        <div style={{ marginBottom: "3rem" }}>
          <p className="section-label">Things I&apos;ve built</p>
          <h2 className="section-title">Projects</h2>
        </div>

        {/* ════════════════════════════════════════════════════════
            PINNED PROJECTS — editorial case-study rows
        ════════════════════════════════════════════════════════ */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {pinnedProjects.map((project, idx) => (
            <article key={project.title}>
              {/* ── Eyebrow ─────────────────────────────────────── */}
              <p
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  margin: "0 0 0.75rem",
                }}
              >
                Featured Project {String(idx + 1).padStart(2, "0")}
              </p>

              {/* ── Thumbnail (16:9) ─────────────────────────────── */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 9",
                  borderRadius: "10px",
                  overflow: "hidden",
                  border: "1px solid var(--color-border)",
                  marginBottom: "1.5rem",
                  backgroundColor: "var(--color-background)",
                }}
              >
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} screenshot`}
                  width={800}
                  height={450}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* ── Title + summary ──────────────────────────────── */}
              <h3
                style={{
                  fontSize: "1.125rem",
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

              {/* ── Bullet points ────────────────────────────────── */}
              <ul
                style={{
                  margin: "0 0 1.25rem",
                  padding: "0 0 0 1.125rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.45rem",
                }}
              >
                {project.bullets.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.65,
                      paddingLeft: "0.25rem",
                    }}
                  >
                    {b}
                  </li>
                ))}
              </ul>

              {/* ── Tech stack chips ─────────────────────────────── */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.375rem",
                  marginBottom: "1.25rem",
                }}
              >
                {project.techStack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              {/* ── Links ────────────────────────────────────────── */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {project.repoUrl && (
                  <ProjectLink
                    href={project.repoUrl}
                    icon={<GithubIcon size={14} />}
                    label="Source"
                  />
                )}
                {project.liveUrl && (
                  <ProjectLink
                    href={project.liveUrl}
                    icon={<ExternalLink size={14} />}
                    label="Live Demo"
                    accent
                  />
                )}
              </div>
            </article>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════
            LIST PROJECTS — compact rows
        ════════════════════════════════════════════════════════ */}
        <div style={{ marginTop: "5rem" }}>
          {/* Sub-heading */}
          <p
            style={{
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              marginBottom: "1.5rem",
            }}
          >
            Other Work
          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {listProjects.map((project, idx) => (
              <div
                key={project.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: "0 1rem",
                  alignItems: "start",
                  padding: "1.25rem 0",
                  borderTop: idx === 0 ? "1px solid var(--color-border)" : "none",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                {/* Square thumbnail */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: "1px solid var(--color-border)",
                    flexShrink: 0,
                    backgroundColor: "var(--color-background)",
                  }}
                >
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    width={48}
                    height={48}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Content */}
                <div>
                  {/* Title + repo link */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.25rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        color: "var(--color-text-primary)",
                        margin: 0,
                      }}
                    >
                      {project.title}
                    </h4>
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} repository`}
                        style={{ color: "var(--color-text-faint)", display: "flex", alignItems: "center" }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color = "var(--color-text-faint)")
                        }
                      >
                        <GithubIcon size={14} />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-muted)",
                      margin: "0 0 0.625rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                    {project.techStack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Sub-component: GitHub brand icon (inline SVG) ───────────────────────────
function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// ── Sub-component: project action link ──────────────────────────────────────
type ProjectLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  accent?: boolean;
};

function ProjectLink({ href, icon, label, accent }: ProjectLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.375rem",
        padding: "0.375rem 0.875rem",
        borderRadius: "6px",
        fontSize: "0.8125rem",
        fontWeight: 500,
        textDecoration: "none",
        border: "1.5px solid",
        transition: "background-color 0.15s ease, color 0.15s ease",
        color: accent ? "#fff" : "var(--color-text-secondary)",
        backgroundColor: accent ? "var(--color-accent)" : "transparent",
        borderColor: accent ? "var(--color-accent)" : "var(--color-border)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        if (accent) {
          el.style.backgroundColor = "#b91c1c";
        } else {
          el.style.backgroundColor = "var(--color-chip-bg)";
          el.style.color = "var(--color-text-primary)";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        if (accent) {
          el.style.backgroundColor = "var(--color-accent)";
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