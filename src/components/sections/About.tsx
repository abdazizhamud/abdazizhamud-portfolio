"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Imported arrow icons
import { about } from "@/src/data/content";

export default function About() {
  const [imageIndex, setImageIndex] = useState(0);

  // Auto-advance timer
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % about.avatars.length);
    }, 4000);

    // Adding imageIndex to the dependency array ensures the timer 
    // resets whenever the user manually clicks "next" or "prev"
    return () => clearInterval(interval);
  }, [imageIndex]); 

  // Manual navigation handlers
  const handlePrev = () => {
    setImageIndex((prevIndex) => 
      prevIndex === 0 ? about.avatars.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % about.avatars.length);
  };

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
        {/* ── Left Column: Interactive Image Carousel ──────────────────── */}
        <div
          style={{
            flex: "0 0 340px", // Increased to match hero layout
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem 0"
          }}
        >
          <div
            style={{
              position: "relative", // Required for overlapping images and buttons
              width: "320px", // Increased from 250px
              height: "320px", // Increased from 250px
              borderRadius: "24px", // Matches hero rounding
              overflow: "hidden",
              border: "1px solid var(--color-border)",
              flexShrink: 0,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)",
            }}
            className="group" // Added Tailwind group for hover effects
          >
            {/* The Images */}
            {about.avatars.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`About picture ${index + 1}`}
                fill
                sizes="320px"
                style={{
                  objectFit: "cover",
                  opacity: index === imageIndex ? 1 : 0, 
                  transition: "opacity 0.6s ease-in-out", // Slightly faster fade
                }}
              />
            ))}

            {/* ── Navigation Buttons ───────────────────────── */}
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                color: "var(--color-text-primary)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-surface)";
                e.currentTarget.style.color = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                e.currentTarget.style.color = "var(--color-text-primary)";
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next image"
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                color: "var(--color-text-primary)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-surface)";
                e.currentTarget.style.color = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                e.currentTarget.style.color = "var(--color-text-primary)";
              }}
            >
              <ChevronRight size={20} />
            </button>
            {/* ── End Navigation Buttons ───────────────────── */}
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