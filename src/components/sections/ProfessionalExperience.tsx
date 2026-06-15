import Image from "next/image";
import { professionalExperiences } from "@/src/data/content";

export default function ProfessionalExperience() {
  return (
    <section id="experience" className="section-wrapper">
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* ── Section heading ─────────────────────────────────── */}
        <div style={{ marginBottom: "3rem" }}>
          <p className="section-label">Where I&apos;ve worked</p>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        {/* ── Experience list ─────────────────────────────────── */}
        <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {professionalExperiences.map((exp, idx) => (
            <li
              key={exp.company}
              style={{
                display: "grid",
                gridTemplateColumns: "40px 1fr",
                gap: "0 1.25rem",
                paddingBottom: idx < professionalExperiences.length - 1 ? "3rem" : 0,
                position: "relative",
              }}
            >
              {/* ── Left column: logo + timeline line ─────────── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Logo */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: "1px solid var(--color-border)",
                    flexShrink: 0,
                    backgroundColor: "var(--color-surface)",
                  }}
                >
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={40}
                    height={40}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Timeline connector line */}
                {idx < professionalExperiences.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      width: "1px",
                      backgroundColor: "var(--color-border)",
                      marginTop: "0.625rem",
                    }}
                  />
                )}
              </div>

              {/* ── Right column: content ──────────────────────── */}
              <div style={{ paddingBottom: "0.25rem" }}>
                {/* Company + period */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.125rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                      gap: "0.5rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--color-text-primary)",
                        margin: 0,
                      }}
                    >
                      {exp.company}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-text-faint)",
                        fontWeight: 400,
                      }}
                    >
                      · {exp.period}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "var(--color-accent)",
                      margin: 0,
                    }}
                  >
                    {exp.role}
                  </p>

                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--color-text-faint)",
                      margin: 0,
                    }}
                  >
                    {exp.location}
                  </p>
                </div>

                {/* Bullet points */}
                <ul
                  style={{
                    margin: "0.875rem 0 0",
                    padding: "0 0 0 1.125rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.65,
                        paddingLeft: "0.25rem",
                      }}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.375rem",
                  }}
                >
                  {exp.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}