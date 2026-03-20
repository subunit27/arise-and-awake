import CourseSignupForm from "@/components/CourseSignupForm";
import { courseLessons } from "@/lib/course";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10-Day Arise & Awake Course",
  description:
    "A free 10-day email course rooted in Swami Vivekananda's teachings. Each day, a lesson that can change the trajectory of your life. Goal setting, authentic striving, and the philosophy of waking up fully.",
};

export default function CoursePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(160deg, #1A1208 0%, #1E1B4B 60%, #312E81 100%)",
          padding: "6rem 1.5rem 5rem",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Orbs */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(217,119,6,0.18) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(194,65,12,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(217, 119, 6, 0.15)",
              border: "1px solid rgba(217, 119, 6, 0.4)",
              borderRadius: "9999px",
              padding: "0.4rem 1.125rem",
              marginBottom: "2rem",
            }}
          >
            <span style={{ fontSize: "0.875rem" }}>🕯️</span>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "#FDE68A",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Free 10-Day Email Course
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.5rem, 6.5vw, 4.75rem)",
              fontWeight: 900,
              color: "#FDFAF5",
              lineHeight: 1.05,
              marginBottom: "1.75rem",
              letterSpacing: "-0.03em",
            }}
          >
            10 Days.
            <br />
            <span style={{ color: "#D97706" }}>One Life.</span>
            <br />
            No More Waiting.
          </h1>

          <p
            style={{
              fontSize: "clamp(1.0625rem, 2.5vw, 1.3125rem)",
              color: "rgba(253, 250, 245, 0.72)",
              lineHeight: 1.8,
              maxWidth: "580px",
              margin: "0 auto 0.75rem",
            }}
          >
            Rooted in Swami Vivekananda&apos;s teachings. Written for the version of you
            that already knows it&apos;s time. One lesson per day. Each one a match struck
            in the dark.
          </p>

          <p
            style={{
              fontSize: "1rem",
              color: "rgba(253, 250, 245, 0.45)",
              fontStyle: "italic",
              marginBottom: "3rem",
            }}
          >
            &ldquo;Arise, Awake, and Stop Not Till the Goal is Reached.&rdquo;
          </p>

          {/* Form */}
          <div style={{ maxWidth: "480px", margin: "0 auto" }}>
            <CourseSignupForm source="course-hero" variant="hero" />
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF / TRUTH STRIP ── */}
      <div
        style={{
          backgroundColor: "#FEF3C7",
          borderBottom: "1px solid #FDE68A",
          padding: "1.125rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: "clamp(1.5rem, 4vw, 3.5rem)",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          {[
            { stat: "10", label: "Days" },
            { stat: "10", label: "Life-Changing Lessons" },
            { stat: "∞", label: "Impact on Others" },
            { stat: "Free", label: "Always" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: "#92400E",
                }}
              >
                {stat}
              </div>
              <div style={{ fontSize: "0.8125rem", color: "#78350F", fontWeight: 600 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHO THIS IS FOR ── */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 1.5rem 3rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#D97706",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Who This Is For
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#1E1B4B",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            This course is for you if you feel like you&apos;re meant for something
            more — and you&apos;re tired of feeling that way without acting on it.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {[
            {
              icon: "😴",
              text: "You know you're sleepwalking through important parts of your life — and you're ready to stop.",
            },
            {
              icon: "🎯",
              text: "You have big goals but something keeps getting in the way — and that something might be you.",
            },
            {
              icon: "🔥",
              text: "You feel a fire inside that you haven't given full permission to burn.",
            },
            {
              icon: "📖",
              text: "You're hungry for wisdom that doesn't insult your intelligence or flatten the complexity of being alive.",
            },
            {
              icon: "⚡",
              text: "You want philosophy that you can actually use — not theory, but a way of operating in the world.",
            },
            {
              icon: "🌱",
              text: "You're at a moment of transition — a new beginning, a hard season, a question that won't let you rest.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#F5EFE0",
                border: "1px solid #EDE8DF",
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#3D352C",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIVEKANANDA QUOTE BREAK ── */}
      <section
        style={{
          backgroundColor: "#1E1B4B",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "650px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.375rem, 3.5vw, 2rem)",
              fontWeight: 600,
              color: "#FDFAF5",
              lineHeight: 1.5,
              fontStyle: "italic",
              marginBottom: "1rem",
            }}
          >
            &ldquo;Take up one idea. Make that one idea your life — think of it, dream of it,
            live on that idea. Let the brain, muscles, nerves, every part of your body, be full
            of that idea, and just leave every other idea alone.&rdquo;
          </p>
          <p style={{ fontSize: "0.9375rem", color: "#D97706", fontWeight: 600 }}>
            — Swami Vivekananda
          </p>
        </div>
      </section>

      {/* ── THE 10 LESSONS ── */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 1.5rem 3rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#D97706",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            The Curriculum
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#1E1B4B",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            10 Days. 10 Transformations.
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "#7D7368",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0.75rem auto 0",
            }}
          >
            Each lesson builds on the last. Each practice gives you something real to do.
            By Day 10, you&apos;ll have written your personal manifesto — and you&apos;ll
            mean it.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {courseLessons.map((lesson) => (
            <div
              key={lesson.day}
              style={{
                backgroundColor: "#FDFAF5",
                border: "1px solid #EDE8DF",
                borderRadius: "1rem",
                padding: "1.75rem",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: "1.25rem",
                alignItems: "center",
              }}
            >
              {/* Day number */}
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  backgroundColor: lesson.day === 10 ? "#D97706" : "#FEF3C7",
                  border: `1px solid ${lesson.day === 10 ? "#B45309" : "#FDE68A"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "0.9375rem",
                    fontWeight: 800,
                    color: lesson.day === 10 ? "#FDFAF5" : "#92400E",
                  }}
                >
                  {lesson.day}
                </span>
              </div>

              {/* Content */}
              <div>
                <div
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    color: "#D97706",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.25rem",
                  }}
                >
                  {lesson.theme}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1rem, 2vw, 1.25rem)",
                    fontWeight: 700,
                    color: "#1E1B4B",
                    lineHeight: 1.3,
                    marginBottom: "0.25rem",
                  }}
                >
                  {lesson.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#7D7368",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {lesson.subtitle}
                </p>
              </div>

              {/* Lock / Unlock indicator */}
              <div style={{ flexShrink: 0 }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D97706"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MIDDLE CTA ── */}
      <section
        style={{
          backgroundColor: "#F5EFE0",
          borderTop: "1px solid #EDE8DF",
          borderBottom: "1px solid #EDE8DF",
          padding: "4.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "580px", margin: "0 auto" }}>
          <div style={{ fontSize: "2rem", marginBottom: "1.25rem" }}>🕯️</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#1E1B4B",
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            One light can light a million lights.
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "#5C5348",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
            }}
          >
            The flame that was given to me was given by my Guru, who received it from Vivekananda&apos;s
            lineage. I am passing it to you. What you do with it — who you light — that is the
            work of your life.
          </p>
          <div
            style={{
              backgroundColor: "#1E1B4B",
              borderRadius: "1.25rem",
              padding: "2.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "#FDFAF5",
                marginBottom: "1.5rem",
              }}
            >
              Begin the 10-Day Course — Free
            </p>
            <CourseSignupForm source="course-middle" variant="hero" />
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL WALK AWAY WITH ── */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#D97706",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            What You&apos;ll Walk Away With
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#1E1B4B",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Not inspiration. Transformation.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              title: "Your Sacred Goal",
              desc: "A clearly named, deeply felt goal that will organize the rest of your life.",
            },
            {
              title: "Your Stop Not Protocol",
              desc: "A personal system for continuing when everything in you wants to quit.",
            },
            {
              title: "Your Specific Fire",
              desc: "The intersection of what you can't stop thinking about, what you'd do for free, and what the world needs from you.",
            },
            {
              title: "Your Personal Manifesto",
              desc: "Written in your own words, on Day 10. A declaration you'll return to for years.",
            },
            {
              title: "Philosophical Grounding",
              desc: "Vivekananda, the Bhagavad Gita, the Katha Upanishad — made practical and immediate.",
            },
            {
              title: "The Integration",
              desc: "A way of living that doesn't force you to choose between spiritual depth and worldly ambition.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: "1.5rem",
                borderLeft: "3px solid #D97706",
                backgroundColor: "#FDFAF5",
                borderRadius: "0 0.75rem 0.75rem 0",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: "#1E1B4B",
                  marginBottom: "0.5rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#5C5348",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIVEKANANDA SECTION ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1A1208 0%, #1E1B4B 100%)",
          padding: "5rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Photo placeholder */}
          <div
            style={{
              aspectRatio: "3/4",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(217,119,6,0.3)",
              borderRadius: "1.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem" }}>📸</div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(253,250,245,0.4)",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}
            >
              Swami Vivekananda
              <br />
              <span style={{ fontSize: "0.8rem" }}>
                Photo integration coming.
                <br />
                Each lesson features a captivating portrait.
              </span>
            </p>
          </div>

          {/* Text */}
          <div>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#FDE68A",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              The Teacher Behind the Course
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 800,
                color: "#FDFAF5",
                lineHeight: 1.2,
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
              }}
            >
              Swami Vivekananda
              <br />
              <span
                style={{
                  fontSize: "0.65em",
                  fontWeight: 500,
                  color: "rgba(253,250,245,0.55)",
                }}
              >
                1863 – 1902
              </span>
            </h2>

            <p
              style={{
                fontSize: "1rem",
                color: "rgba(253,250,245,0.72)",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              He died at 39. In nine years of active teaching, he brought the most
              sophisticated philosophical tradition in history to the Western world — and
              did it in plain language, with fire, with zero compromise.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(253,250,245,0.72)",
                lineHeight: 1.8,
                marginBottom: "0",
              }}
            >
              He didn&apos;t soften the wisdom to make it palatable. He made it
              unstoppable. This course carries his torch.
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .vivekananda-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        style={{
          backgroundColor: "#FDFAF5",
          padding: "6rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              color: "#1E1B4B",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-0.03em",
            }}
          >
            The sleeping life
            <br />
            is{" "}
            <span
              style={{
                color: "#D97706",
                textDecoration: "line-through",
                textDecorationColor: "#C2410C",
              }}
            >
              optional
            </span>
            {" "}over.
          </div>

          <p
            style={{
              fontSize: "1.125rem",
              color: "#5C5348",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
            }}
          >
            You&apos;ve been circling this. Sensing it. Feeling the pull.
            <br />
            The course begins the moment you enter your email.
          </p>

          <div
            style={{
              backgroundColor: "#1E1B4B",
              borderRadius: "1.5rem",
              padding: "3rem",
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.375rem",
                fontWeight: 800,
                color: "#FDFAF5",
                marginBottom: "0.5rem",
              }}
            >
              Begin the 10-Day Course
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "rgba(253,250,245,0.55)",
                marginBottom: "2rem",
              }}
            >
              Free. Delivered daily. Rooted in Vivekananda. Built for you.
            </p>
            <CourseSignupForm source="course-footer" variant="hero" />
          </div>

          <p
            style={{
              marginTop: "2.5rem",
              fontSize: "0.9375rem",
              color: "#A89F94",
              fontStyle: "italic",
            }}
          >
            &ldquo;Arise, Awake, and Stop Not Till the Goal is Reached.&rdquo;
          </p>

          <div style={{ marginTop: "2rem" }}>
            <Link
              href="/blog"
              style={{
                textDecoration: "none",
                fontSize: "0.9rem",
                color: "#D97706",
                fontWeight: 600,
              }}
            >
              Or read the free essays first →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
