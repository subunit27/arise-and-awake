import type { Metadata } from "next";
import CourseSignupForm from "@/components/CourseSignupForm";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "The Sacred Dispatch — Weekly Philosophy for the Awake | Arise & Awake",
  description:
    "One essay, one practice, one Vivekananda teaching — delivered every week to 1,000+ seekers. Free. No noise.",
  openGraph: {
    title: "The Sacred Dispatch — Weekly Philosophy for the Awake",
    description: "One essay, one practice, one teaching. Weekly. Free.",
    type: "website",
  },
};

const recentPosts = getAllPosts().slice(0, 3);

const whatYouGet = [
  {
    icon: "📜",
    title: "One deep essay",
    desc: "Each Sunday, a long-form piece on Vivekananda's teachings applied to how we actually live and work today.",
  },
  {
    icon: "🧘",
    title: "One practice",
    desc: "Not theory. A concrete practice drawn from Vedanta, Karma Yoga, or the Gita — for the week ahead.",
  },
  {
    icon: "🔥",
    title: "One teaching",
    desc: "A single Vivekananda quote with deep context — the kind that changes how you see your entire day.",
  },
  {
    icon: "⚡",
    title: "Zero fluff",
    desc: "No productivity hacks. No affiliate links. No 'content'. Just philosophy worth sitting with.",
  },
];

export default function NewsletterPage() {
  return (
    <div style={{ backgroundColor: "#0F0D0A", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(160deg, #1C1814 0%, #0F0D0A 60%)",
        padding: "5rem 1.5rem 4.5rem",
        borderBottom: "1px solid rgba(232,160,32,0.12)",
      }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.625rem",
            backgroundColor: "rgba(232,160,32,0.08)",
            border: "1px solid rgba(232,160,32,0.2)",
            borderRadius: "9999px",
            padding: "0.375rem 1rem",
            marginBottom: "2rem",
          }}>
            <span style={{ fontSize: "0.875rem" }}>🕯️</span>
            <span style={{
              fontSize: "0.75rem", fontWeight: 700, color: "#E8A020",
              letterSpacing: "0.12em", textTransform: "uppercase",
              fontFamily: "Georgia, serif",
            }}>
              The Sacred Dispatch
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
            fontWeight: 900, color: "#F9F4EC",
            lineHeight: 1.1, letterSpacing: "-0.025em",
            marginBottom: "1.25rem",
          }}>
            One essay.<br />
            <span style={{ color: "#E8A020" }}>Every Sunday.</span><br />
            Designed to wake you up.
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.1875rem)",
            color: "rgba(249,244,236,0.6)",
            lineHeight: 1.75, fontFamily: "Georgia, serif",
            maxWidth: "520px", margin: "0 auto 2.5rem",
          }}>
            A weekly dispatch rooted in Swami Vivekananda&apos;s philosophy —
            sent to seekers who believe that waking up isn&apos;t optional.
          </p>

          <div style={{ maxWidth: "440px", margin: "0 auto" }}>
            <CourseSignupForm source="newsletter-hero" variant="inline" />
          </div>

          <p style={{
            fontSize: "0.8125rem", color: "rgba(249,244,236,0.25)",
            fontFamily: "Georgia, serif", fontStyle: "italic",
            marginTop: "1.25rem",
          }}>
            Join 1,000+ seekers. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section style={{ maxWidth: "780px", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.5rem, 4vw, 2.125rem)",
          fontWeight: 800, color: "#F9F4EC",
          textAlign: "center", marginBottom: "2.5rem",
        }}>
          What lands in your inbox
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}>
          {whatYouGet.map((item) => (
            <div key={item.title} style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(232,160,32,0.12)",
              borderRadius: "1rem",
              padding: "1.5rem",
            }}>
              <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{item.icon}</div>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1rem", fontWeight: 700,
                color: "#F9F4EC", marginBottom: "0.5rem",
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: "0.875rem", color: "rgba(249,244,236,0.55)",
                lineHeight: 1.7, fontFamily: "Georgia, serif", margin: 0,
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RECENT ESSAYS ── */}
      <section style={{
        maxWidth: "680px", margin: "0 auto",
        padding: "0 1.5rem 4rem",
        borderTop: "1px solid rgba(232,160,32,0.1)",
        paddingTop: "3rem",
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.375rem", fontWeight: 800,
          color: "#F9F4EC", marginBottom: "1.5rem",
          textAlign: "center",
        }}>
          Recent dispatches
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {recentPosts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <div style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(232,160,32,0.12)",
                borderRadius: "0.75rem", padding: "1.25rem 1.5rem",
              }}>
                <span style={{
                  fontSize: "0.6875rem", fontWeight: 700, color: "#E8A020",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  fontFamily: "Georgia, serif",
                }}>
                  {post.category}
                </span>
                <p style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1rem", fontWeight: 700,
                  color: "#F9F4EC", lineHeight: 1.3,
                  margin: "0.375rem 0 0.375rem",
                }}>
                  {post.title}
                </p>
                <p style={{
                  fontSize: "0.8125rem", color: "rgba(249,244,236,0.45)",
                  fontFamily: "Georgia, serif", margin: 0,
                }}>
                  {post.readTime}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{
        maxWidth: "580px", margin: "0 auto",
        padding: "0 1.5rem 5rem",
        textAlign: "center",
      }}>
        <blockquote style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.125rem, 3vw, 1.375rem)",
          fontStyle: "italic", color: "rgba(249,244,236,0.7)",
          lineHeight: 1.6, borderLeft: "none", padding: 0,
          margin: "0 0 2rem",
        }}>
          &ldquo;The moment I have realized God sitting in the temple of every human body,
          the moment I stand in reverence before every human being — that moment
          I am free from bondage.&rdquo;
          <cite style={{
            display: "block", marginTop: "0.75rem",
            fontSize: "0.8125rem", fontStyle: "normal",
            color: "rgba(249,244,236,0.35)", letterSpacing: "0.04em",
          }}>
            — Swami Vivekananda
          </cite>
        </blockquote>
        <CourseSignupForm source="newsletter-bottom" variant="inline" />
      </section>
    </div>
  );
}
