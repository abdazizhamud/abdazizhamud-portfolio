"use client";

import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-surface)", // Pure white background
        border: "1px solid var(--color-border)",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-text-faint)";
        e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {children}
    </div>
  );
}