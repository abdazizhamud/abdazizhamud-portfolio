import { hero } from "@/src/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        backgroundColor: "var(--color-surface)",
        padding: "2.5rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--color-text-muted)",
            margin: 0,
          }}
        >
          Designed &amp; built by{" "}
          <span style={{ fontWeight: 600, color: "var(--color-text-secondary)" }}>
            {hero.name}
          </span>
        </p>
        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--color-text-faint)",
            margin: 0,
          }}
        >
          © {year} · Next.js · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}