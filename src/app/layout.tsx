import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// ─── Font ──────────────────────────────────────────────────────────────────
// Loaded via next/font for zero-layout-shift font delivery.
// Variable exposed as --font-jakarta so globals.css can reference it.
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

// ─── Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Hamud Abdul Aziz - Web Portfolio",
  description:
    "Personal portfolio of Hamud Abdul Aziz",
  keywords: ["backend engineer", "systems programming", "Go", "distributed systems", "portfolio"],
  authors: [{ name: "Hamud Abdul Aziz" }],
  openGraph: {
    title: "Hamud Abdul Aziz",
    description:
      "Personal portfolio of Hamud Abdul Aziz",
    type: "website",
  },
};

// ─── Root Layout ───────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}