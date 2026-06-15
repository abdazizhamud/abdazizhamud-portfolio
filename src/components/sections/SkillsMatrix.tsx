"use client";

import { Code2, Database, Boxes } from "lucide-react";
import { skillCategories } from "@/src/data/content";
import Card from "@/src/components/ui/Card"; // Reusing your sleek card component

export default function SkillsMatrix() {
  // Helper function to assign a specific icon to each category
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case "Software Engineering":
        return <Code2 size={20} style={{ color: "var(--color-accent)" }} />;
      case "Data Analytics & AI":
        return <Database size={20} style={{ color: "var(--color-accent)" }} />;
      case "Simulation & Tooling":
        return <Boxes size={20} style={{ color: "var(--color-accent)" }} />;
      default:
        return null;
    }
  };

  return (
    <section
      id="skills"
      className="section-wrapper"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* ── Section heading ─────────────────────────────────── */}
        <div style={{ marginBottom: "3rem" }}>
          <p className="section-label">Technical Arsenal</p>
          <h2 className="section-title">Tools & Technologies</h2>
        </div>

        {/* ── Category Cards Grid ─────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {skillCategories.map((cat) => (
            <Card key={cat.category}>
              <div style={{ padding: "1.75rem" }}>
                
                {/* Header with Icon */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div 
                    style={{ 
                      padding: "0.5rem", 
                      backgroundColor: "var(--color-accent-soft)", 
                      borderRadius: "8px",
                      display: "flex"
                    }}
                  >
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      color: "var(--color-text-primary)",
                      margin: 0,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {cat.category}
                  </h3>
                </div>

                {/* Fancy Chips Grid */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {cat.skills.map((skill) => (
                    <FancyChip key={skill} label={skill} />
                  ))}
                </div>
                
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Sub-component: Fancy Chip ──────────────────────────────────────────────
function FancyChip({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "0.35rem 0.85rem",
        borderRadius: "999px",
        fontSize: "0.8125rem",
        fontWeight: 500,
        color: "var(--color-text-secondary)",
        backgroundColor: "transparent",
        border: "1px solid var(--color-border)",
        transition: "all 0.2s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--color-accent)";
        el.style.color = "var(--color-text-primary)";
        el.style.backgroundColor = "var(--color-accent-soft)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--color-border)";
        el.style.color = "var(--color-text-secondary)";
        el.style.backgroundColor = "transparent";
      }}
    >
      {label}
    </span>
  );
}