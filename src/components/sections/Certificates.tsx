"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { certificates } from "@/src/data/content";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="section-wrapper"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* ── Section heading ─────────────────────────────────── */}
        <div style={{ marginBottom: "3rem" }}>
          <p className="section-label">Credentials</p>
          <h2 className="section-title">Certificates</h2>
        </div>

        {/* ── Certificate list ─────────────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {certificates.map((cert, idx) => (
            <div
              key={cert.title}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr auto",
                gap: "0 1rem",
                alignItems: "center",
                padding: "1.25rem 0",
                borderTop: idx === 0 ? "1px solid var(--color-border)" : "none",
                borderBottom: "1px solid var(--color-border)",
              }}
              className="cert-row"
            >
              {/* ── Badge thumbnail ──────────────────────────────── */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-background)",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={cert.badge}
                  alt={`${cert.issuer} badge`}
                  width={48}
                  height={48}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* ── Title + meta ─────────────────────────────────── */}
              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    margin: "0 0 0.2rem",
                    /* Prevent overflow on small screens */
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cert.title}
                </p>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--color-text-muted)",
                    margin: 0,
                  }}
                >
                  {cert.issuer}
                  <span
                    style={{
                      margin: "0 0.4rem",
                      color: "var(--color-border)",
                    }}
                  >
                    ·
                  </span>
                  {cert.date}
                </p>
              </div>

              {/* ── Credential link ──────────────────────────────── */}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${cert.title} credential`}
                  title="View credential"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "6px",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-faint)",
                    flexShrink: 0,
                    transition: "border-color 0.15s ease, color 0.15s ease, background-color 0.15s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--color-accent)";
                    el.style.color = "var(--color-accent)";
                    el.style.backgroundColor = "var(--color-accent-soft)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--color-border)";
                    el.style.color = "var(--color-text-faint)";
                    el.style.backgroundColor = "transparent";
                  }}
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/*
        On mobile the cert title is truncated with ellipsis (overflow hidden).
        On md+ we have more room so we allow wrapping instead.
      */}
      <style>{`
        @media (min-width: 640px) {
          .cert-row p:first-child {
            white-space: normal !important;
            overflow: visible !important;
            text-overflow: unset !important;
          }
        }
      `}</style>
    </section>
  );
}