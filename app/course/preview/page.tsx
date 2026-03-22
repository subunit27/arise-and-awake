import Link from "next/link";
import { courseLessons } from "@/lib/course";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Course Preview",
  description: "Preview all 10 days of the Arise & Awake email course.",
  robots: { index: false, follow: false },
};

export default function CoursePreviewIndex() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1C1814",
        padding: "3rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{
            fontSize: "0.75rem", fontWeight: 700, color: "#E8A020",
            letterSpacing: "0.14em", textTransform: "uppercase",
            marginBottom: "1rem", fontFamily: "Georgia, serif",
          }}>
            🕯️ &nbsp; Email Course Designer Preview
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900,
            color: "#F9F4EC", lineHeight: 1.1, letterSpacing: "-0.025em",
            marginBottom: "0.75rem",
          }}>
            10-Day Course Emails
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(249,244,236,0.5)", fontFamily: "Georgia, serif" }}>
            Select a day to preview the email exactly as subscribers will receive it.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {courseLessons.map((lesson) => (
            <Link
              key={lesson.day}
              href={`/course/preview/${lesson.day}`}
              style={{ textDecoration: "none" }}
            >
              <div style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(232,160,32,0.15)",
                borderRadius: "0.875rem",
                padding: "1.25rem 1.5rem",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: "1.25rem",
                alignItems: "center",
                cursor: "pointer",
                transition: "border-color 0.15s, background-color 0.15s",
              }}>

                {/* Day circle */}
                <div style={{
                  width: "2.75rem", height: "2.75rem", borderRadius: "50%",
                  backgroundColor: lesson.day === 10 ? "#E8A020" : "rgba(232,160,32,0.12)",
                  border: `1px solid ${lesson.day === 10 ? "#E8A020" : "rgba(232,160,32,0.3)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "0.9375rem", fontWeight: 800,
                    color: lesson.day === 10 ? "#1C1814" : "#E8A020",
                  }}>
                    {lesson.day}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div style={{
                    fontSize: "0.6875rem", fontWeight: 700, color: "#E8A020",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    marginBottom: "0.2rem", fontFamily: "Georgia, serif",
                  }}>
                    {lesson.theme}
                  </div>
                  <div style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1rem", fontWeight: 700, color: "#F9F4EC", lineHeight: 1.3,
                  }}>
                    {lesson.title}
                  </div>
                  <div style={{
                    fontSize: "0.8125rem", color: "rgba(249,244,236,0.4)",
                    fontStyle: "italic", fontFamily: "Georgia, serif", marginTop: "0.2rem",
                  }}>
                    {lesson.subtitle}
                  </div>
                </div>

                {/* Arrow */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="rgba(232,160,32,0.6)" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link href="/course" style={{
            textDecoration: "none", fontSize: "0.875rem",
            color: "rgba(249,244,236,0.35)", fontFamily: "Georgia, serif",
          }}>
            ← Back to course landing page
          </Link>
        </div>
      </div>
    </div>
  );
}
