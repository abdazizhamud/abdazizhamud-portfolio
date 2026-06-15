import { skillCategories } from "@/src/data/content";

export default function SkillsMatrix() {
  return (
    <section
      id="skills"
      className="section-wrapper"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* ── Section heading ─────────────────────────────────── */}
        <div style={{ marginBottom: "3rem" }}>
          <p className="section-label">What I work with</p>
          <h2 className="section-title">Skills</h2>
        </div>

        {/* ── Category grid ───────────────────────────────────── */}
        {/*
          Mobile:  single column, each category stacks
          Desktop: two columns, categories pair up
          Intentionally no percentage bars — just clean text groupings.
        */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "0",
          }}
        >
          {skillCategories.map((cat, idx) => {
            const isLast = idx === skillCategories.length - 1;
            return (
              <div
                key={cat.category}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "0.75rem",
                  padding: "1.5rem 0",
                  borderTop: "1px solid var(--color-border-subtle)",
                  borderBottom: isLast ? "1px solid var(--color-border-subtle)" : "none",
                }}
                className="skill-row"
              >
                {/* Category label */}
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                    margin: 0,
                    minWidth: "140px",
                  }}
                >
                  {cat.category}
                </p>

                {/* Skills as chips */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.375rem",
                  }}
                >
                  {cat.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive: on md+, skill row becomes two-column (label | chips) */}
      <style>{`
        @media (min-width: 900px) {
          .skill-row {
            grid-template-columns: 140px 1fr !important;
            align-items: start;
          }
        }
      `}</style>
    </section>
  );
}