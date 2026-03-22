import { getLessonByDay, courseLessons } from "@/lib/course";
import { generateEmailHTML } from "@/lib/emailTemplate";
import EmailPreviewFrame from "@/components/EmailPreviewFrame";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return courseLessons.map((l) => ({ day: String(l.day) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ day: string }>;
}): Promise<Metadata> {
  const { day } = await params;
  const lesson = getLessonByDay(Number(day));
  if (!lesson) return {};
  return {
    title: `Day ${lesson.day} Preview: ${lesson.title}`,
    robots: { index: false, follow: false },
  };
}

export default async function EmailPreviewPage({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const { day } = await params;
  const lesson = getLessonByDay(Number(day));
  if (!lesson) notFound();

  const emailHTML = generateEmailHTML(lesson);
  const prevDay = lesson.day > 1 ? lesson.day - 1 : null;
  const nextDay = lesson.day < 10 ? lesson.day + 1 : null;

  return (
    <div style={{ backgroundColor: "#0F0D0A", minHeight: "100vh" }}>

      {/* ── PREVIEW TOOLBAR ── */}
      <div style={{
        backgroundColor: "#1C1814",
        borderBottom: "1px solid rgba(232,160,32,0.2)",
        padding: "0.875rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "0.75rem",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/course/preview" style={{
            textDecoration: "none", display: "inline-flex", alignItems: "center",
            gap: "0.375rem", fontSize: "0.8125rem", color: "rgba(249,244,236,0.5)",
            fontFamily: "Georgia, serif",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Days
          </Link>
          <span style={{ color: "rgba(249,244,236,0.15)", fontSize: "0.75rem" }}>|</span>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "0.9375rem", fontWeight: 700, color: "#F9F4EC",
          }}>
            Day {lesson.day}: {lesson.title}
          </span>
        </div>

        {/* Day navigation */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {prevDay && (
            <Link href={`/course/preview/${prevDay}`} style={{
              textDecoration: "none",
              padding: "0.4rem 0.875rem",
              backgroundColor: "rgba(232,160,32,0.1)",
              border: "1px solid rgba(232,160,32,0.3)",
              borderRadius: "9999px",
              fontSize: "0.8125rem", fontWeight: 600,
              color: "#E8A020", fontFamily: "Georgia, serif",
            }}>
              ← Day {prevDay}
            </Link>
          )}
          {nextDay && (
            <Link href={`/course/preview/${nextDay}`} style={{
              textDecoration: "none",
              padding: "0.4rem 0.875rem",
              backgroundColor: "#E8A020",
              borderRadius: "9999px",
              fontSize: "0.8125rem", fontWeight: 600,
              color: "#1C1814", fontFamily: "Georgia, serif",
            }}>
              Day {nextDay} →
            </Link>
          )}
        </div>
      </div>

      {/* ── EMAIL SUBJECT LINE PREVIEW ── */}
      <div style={{
        maxWidth: "680px", margin: "0 auto",
        padding: "1.5rem 1.5rem 0",
      }}>
        <div style={{
          backgroundColor: "#1C1814",
          border: "1px solid rgba(232,160,32,0.15)",
          borderRadius: "0.75rem",
          padding: "1rem 1.25rem",
          marginBottom: "1.5rem",
        }}>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <div>
              <span style={{ fontSize: "0.6875rem", color: "rgba(249,244,236,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "Georgia,serif" }}>From</span>
              <p style={{ margin: "2px 0 0", fontSize: "0.875rem", color: "#F9F4EC", fontFamily: "Georgia,serif" }}>
                Shubh Singh &lt;hello@ariseandawake.com&gt;
              </p>
            </div>
            <div>
              <span style={{ fontSize: "0.6875rem", color: "rgba(249,244,236,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "Georgia,serif" }}>Subject</span>
              <p style={{ margin: "2px 0 0", fontSize: "0.875rem", color: "#F9F4EC", fontFamily: "Georgia,serif", fontWeight: 600 }}>
                Day {lesson.day}: {lesson.title} — {lesson.subtitle.split("—")[0].trim()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── EMAIL RENDER ── */}
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 1.5rem 3rem" }}>
        <div style={{
          borderRadius: "1rem",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
        }}>
          <EmailPreviewFrame html={emailHTML} title={`Day ${lesson.day} email preview`} />
        </div>
      </div>

    </div>
  );
}
