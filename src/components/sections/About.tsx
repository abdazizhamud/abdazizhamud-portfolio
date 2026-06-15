"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { about } from "@/src/data/content";

export default function About() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    // Change the picture every 4 seconds (4000 milliseconds)
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % about.avatars.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="section-wrapper"
      style={{
        borderBottom: "1px solid var(--color-border)",
        backgroundColor: "var(--color-background-soft)", 
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "2.5rem",
        }}
      >
        {/* ── Left Column: Fading Image Slideshow ──────────────────── */}
        <div
          style={{
            flex: "0 0 240px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative", // Required for overlapping images
              width: "250px",
              height: "250px",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid var(--color-border)",
              flexShrink: 0,
            }}
          >
            {about.avatars.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`About picture ${index + 1}`}
                fill
                sizes="250px"
                style={{
                  objectFit: "cover",
                  // Fade in the active image, hide the others
                  opacity: index === imageIndex ? 1 : 0, 
                  // Smooth 1-second transition
                  transition: "opacity 1s ease-in-out", 
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Right Column: Text Block ───────────────────────────── */}
        <div
          style={{
            flex: "1 1 360px",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            alignItems: "flex-start",
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
              margin: 0,
            }}
          >
            {about.title}
          </h2>

          {/* Summary Paragraph */}
          <p
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {about.summary}
          </p>

          {/* Main Paragraphs */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {about.paragraphs.map((p, index) => (
              <p
                key={index}
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}