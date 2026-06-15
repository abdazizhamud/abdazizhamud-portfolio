import Image from "next/image";
import { orgExperiences } from "@/src/data/content";

export default function OrganizationalExperience() {
  return (
    <section
      id="org-experience"
      className="section-wrapper"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* ── Section heading ─────────────────────────────────── */}
        <div style={{ marginBottom: "3rem" }}>
          <p className="section-label">Beyond the day job</p>
          <h2 className="section-title">Organizational Experience</h2>
        </div>

        {/* ── Org list ────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {orgExperiences.map((org, idx) => (
            <div
              key={org.organization}
              style={{
                display: "grid",
                gridTemplateColumns: "40px 1fr",
                gap: "0 1.25rem",
                padding: "1.625rem 0",
                borderTop: idx === 0 ? "1px solid var(--color-border)" : "none",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {/* Logo */}
              <div style={{ paddingTop: "2px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-background)",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={org.logo}
                    alt={`${org.organization} logo`}
                    width={40}
                    height={40}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "baseline",
                    gap: "0.5rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: "var(--color-text-primary)",
                      margin: 0,
                    }}
                  >
                    {org.organization}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-text-faint)",
                    }}
                  >
                    · {org.period}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "var(--color-accent)",
                    margin: "0 0 0.625rem",
                  }}
                >
                  {org.role}
                </p>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {org.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}