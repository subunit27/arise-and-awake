import CourseSignupForm from "@/components/CourseSignupForm";
import { courseLessons } from "@/lib/course";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Sleeping Life Is Over — Free 10-Day Course",
  description:
    "10 days. 10 lessons drawn from 3,000 years of philosophy. One personal manifesto written in your own hand. Free. No catch. Just enter your email and Day 1 arrives today.",
};

export default function CoursePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(160deg, #1A1208 0%, #1E1B4B 60%, #312E81 100%)",
          padding: "5rem 1.5rem 4.5rem",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div style={{
          position: "absolute", top: "-150px", left: "50%", transform: "translateX(-50%)",
          width: "700px", height: "700px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Credibility bar */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            backgroundColor: "rgba(217,119,6,0.12)", border: "1px solid rgba(217,119,6,0.35)",
            borderRadius: "9999px", padding: "0.4rem 1.25rem", marginBottom: "2.25rem",
          }}>
            <span style={{ fontSize: "0.875rem" }}>🕯️</span>
            <span style={{
              fontSize: "0.8rem", fontWeight: 700, color: "#FDE68A",
              letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              Rooted in 3,000 Years of Philosophy &nbsp;·&nbsp; Free Forever
            </span>
          </div>

          {/* Main hook */}
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.75rem, 7vw, 5.25rem)",
            fontWeight: 900, color: "#F9F4EC", lineHeight: 1.02,
            marginBottom: "1.5rem", letterSpacing: "-0.03em",
          }}>
            The Sleeping Life
            <br />
            Is{" "}
            <span style={{
              color: "#D97706",
              textDecoration: "line-through",
              textDecorationColor: "#C2410C",
              textDecorationThickness: "3px",
            }}>
              Optional
            </span>
            {" "}Over.
          </h1>

          {/* Ogilvy-style specific promise */}
          <p style={{
            fontSize: "clamp(1.0625rem, 2.5vw, 1.375rem)",
            color: "rgba(249,244,236,0.78)", lineHeight: 1.75,
            maxWidth: "600px", margin: "0 auto 1.25rem",
          }}>
            In 10 days, you will name your sacred goal, write your personal manifesto,
            and have a philosophy for the rest of your life — drawn from Swami
            Vivekananda, the Bhagavad Gita, and 3,000 years of the sharpest minds
            who ever lived.
          </p>

          <p style={{
            fontSize: "1.0625rem", color: "#D97706", fontWeight: 700,
            marginBottom: "2.75rem", fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
          }}>
            One email per day. Completely free. Day 1 arrives today.
          </p>

          {/* Form */}
          <div style={{ maxWidth: "460px", margin: "0 auto" }}>
            <CourseSignupForm source="course-hero" variant="hero" />
          </div>

          {/* Risk reversal */}
          <p style={{
            marginTop: "1.25rem", fontSize: "0.8125rem",
            color: "rgba(249,244,236,0.3)", fontStyle: "italic",
          }}>
            No credit card. No pitch. No course fee ever.
            Just the teaching — straight to your inbox.
          </p>
        </div>
      </section>

      {/* ── THE PROBLEM (Ogilvy: name the enemy) ── */}
      <section style={{
        backgroundColor: "#FBF6EE",
        borderBottom: "1px solid #E8D9C4",
        padding: "4.5rem 1.5rem",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800,
            color: "#1C1208", lineHeight: 1.35, marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
          }}>
            Most people will spend their entire lives sensing they&apos;re
            meant for something more — and never acting on it.
          </p>
          <p style={{
            fontSize: "1.125rem", color: "#5C4A32", lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}>
            Not because they lack talent. Not because the timing is wrong.
            Because nobody ever handed them a philosophy that made the path
            clear — one that was both ancient enough to be proven and
            practical enough to use on a Tuesday morning.
          </p>
          <p style={{
            fontSize: "1.125rem", color: "#5C4A32", lineHeight: 1.85,
            marginBottom: "0",
          }}>
            Swami Vivekananda solved this problem in 1893. He took 3,000
            years of the deepest wisdom ever recorded and made it
            operational. <strong style={{ color: "#1C1208" }}>This course is that teaching —
            delivered in 10 days, one lesson at a time, directly to you.</strong>
          </p>
        </div>
      </section>

      {/* ── THE OFFER STACK (Hormozi) ── */}
      <section style={{ backgroundColor: "#1C1814", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{
              fontSize: "0.75rem", fontWeight: 700, color: "#E8A020",
              letterSpacing: "0.14em", textTransform: "uppercase",
              display: "block", marginBottom: "1rem",
            }}>
              Here&apos;s Everything You Get — Free
            </span>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 900,
              color: "#F9F4EC", lineHeight: 1.1, letterSpacing: "-0.025em",
            }}>
              The Complete Arise &amp; Awake Stack
            </h2>
          </div>

          {/* Value items */}
          {[
            {
              number: "01",
              title: "10 Long-Form Lessons",
              value: "Each one a complete philosophy of living — not bullet points,\
 not affirmations. Real ideas from Vivekananda, the Bhagavad Gita, the Katha Upanishad,\
 the Stoics — made immediately useful.",
              callout: "Most people pay $500+ for a course with half this depth.",
            },
            {
              number: "02",
              title: "10 Named Daily Practices",
              value: "Every lesson ends with one concrete thing to do that day.\
 The Honest Inventory. The Sacred Goal exercise. The Stop Not Protocol.\
 The Lineage Map. Not theory — action.",
              callout: "The kind of practices coaches charge $300/hr to walk you through.",
            },
            {
              number: "03",
              title: "Your Personal Manifesto (Day 10)",
              value: "On the final day, you write a declaration of who you are,\
 what you&apos;re for, and how you commit to live — in your own words.\
 The document you&apos;ll return to for years.",
              callout: "This alone is worth the 10 days.",
            },
            {
              number: "04",
              title: "The Philosophy of Nishkama Karma",
              value: "The Bhagavad Gita&apos;s operating system for a life of full\
 engagement without attachment. How to give everything — and remain completely free.\
 Day 4 of the course.",
              callout: null,
            },
            {
              number: "05",
              title: "The Stop Not Protocol",
              value: "A personal system you build in Day 6 for continuing\
 when everything in you wants to quit. Your anchor. Your plan. Written by you,\
 for you, on the day you need it most.",
              callout: null,
            },
            {
              number: "06",
              title: "The Integration Framework",
              value: "The course ends with Day 9: how to stop splitting yourself\
 between spiritual life and ambition — and start living them as one force.\
 Ancient wisdom. Modern application.",
              callout: null,
            },
          ].map((item) => (
            <div key={item.number} style={{
              display: "grid", gridTemplateColumns: "auto 1fr",
              gap: "1.5rem", alignItems: "start",
              borderTop: "1px solid rgba(232,160,32,0.1)",
              padding: "2rem 0",
            }}>
              <div style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "2.5rem", fontWeight: 900,
                color: "rgba(232,160,32,0.2)", lineHeight: 1,
                minWidth: "3.5rem", paddingTop: "0.25rem",
              }}>
                {item.number}
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.25rem", fontWeight: 800,
                  color: "#F9F4EC", marginBottom: "0.5rem", lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: "0.9375rem", color: "rgba(249,244,236,0.6)",
                  lineHeight: 1.75, marginBottom: item.callout ? "0.75rem" : "0",
                }}>
                  {item.value}
                </p>
                {item.callout && (
                  <p style={{
                    display: "inline-block",
                    fontSize: "0.8125rem", fontWeight: 700,
                    color: "#E8A020", fontStyle: "italic",
                  }}>
                    → {item.callout}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Total value line */}
          <div style={{
            borderTop: "1px solid rgba(232,160,32,0.2)",
            paddingTop: "2rem", marginTop: "0.5rem",
            display: "flex", justifyContent: "space-between",
            alignItems: "center", flexWrap: "wrap", gap: "1.5rem",
          }}>
            <div>
              <p style={{
                fontSize: "0.8125rem", color: "rgba(249,244,236,0.4)",
                textTransform: "uppercase", letterSpacing: "0.1em",
                marginBottom: "0.25rem",
              }}>
                Total value
              </p>
              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.75rem", fontWeight: 900,
                color: "rgba(249,244,236,0.25)",
                textDecoration: "line-through",
              }}>
                $500+
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{
                fontSize: "0.8125rem", color: "#E8A020",
                textTransform: "uppercase", letterSpacing: "0.1em",
                marginBottom: "0.25rem", fontWeight: 700,
              }}>
                Your cost
              </p>
              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "2.5rem", fontWeight: 900, color: "#F9F4EC",
              }}>
                $0.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY FREE (pre-empt skepticism) ── */}
      <section style={{
        backgroundColor: "#FEF3C7",
        borderTop: "1px solid #FDE68A", borderBottom: "1px solid #FDE68A",
        padding: "2rem 1.5rem", textAlign: "center",
      }}>
        <p style={{
          maxWidth: "680px", margin: "0 auto",
          fontSize: "1rem", color: "#78350F", lineHeight: 1.7,
        }}>
          <strong style={{ color: "#92400E" }}>Why is it free?</strong>{" "}
          Because Vivekananda&apos;s entire teaching was about transmission —
          one light lighting a million lights. You don&apos;t charge for passing
          on a flame. You just make sure it reaches the right wicks.
        </p>
      </section>

      {/* ── CURRICULUM (with specificity) ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "5rem 1.5rem 3rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{
            fontSize: "0.75rem", fontWeight: 700, color: "#D97706",
            letterSpacing: "0.12em", textTransform: "uppercase",
            display: "block", marginBottom: "1rem",
          }}>
            The Curriculum
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.875rem, 4vw, 2.75rem)", fontWeight: 900,
            color: "#1E1B4B", lineHeight: 1.15, letterSpacing: "-0.025em",
            marginBottom: "0.75rem",
          }}>
            Day by day. Lesson by lesson.
          </h2>
          <p style={{
            fontSize: "1.0625rem", color: "#7D7368", lineHeight: 1.7,
            maxWidth: "500px", margin: "0 auto",
          }}>
            Each email takes 8–12 minutes to read and 15–20 minutes to apply.
            That&apos;s 30 minutes a day to change the rest of your life.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          {courseLessons.map((lesson) => (
            <div key={lesson.day} style={{
              backgroundColor: lesson.day === 10 ? "#1E1B4B" : "#FDFAF5",
              border: `1px solid ${lesson.day === 10 ? "#312E81" : "#EDE8DF"}`,
              borderRadius: "0.875rem", padding: "1.25rem 1.5rem",
              display: "grid", gridTemplateColumns: "auto 1fr auto",
              gap: "1.125rem", alignItems: "center",
            }}>
              <div style={{
                width: "2.75rem", height: "2.75rem", borderRadius: "50%",
                backgroundColor: lesson.day === 10 ? "#D97706" : "#FEF3C7",
                border: `1px solid ${lesson.day === 10 ? "#B45309" : "#FDE68A"}`,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "0.875rem", fontWeight: 800,
                  color: lesson.day === 10 ? "#FDFAF5" : "#92400E",
                }}>
                  {lesson.day}
                </span>
              </div>

              <div>
                <div style={{
                  fontSize: "0.65rem", fontWeight: 700,
                  color: lesson.day === 10 ? "#D97706" : "#D97706",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  marginBottom: "0.2rem",
                }}>
                  {lesson.theme}
                </div>
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1rem", fontWeight: 700,
                  color: lesson.day === 10 ? "#FDFAF5" : "#1E1B4B",
                  lineHeight: 1.25, marginBottom: "0.2rem",
                }}>
                  {lesson.title}
                </div>
                <div style={{
                  fontSize: "0.8125rem",
                  color: lesson.day === 10 ? "rgba(253,250,245,0.55)" : "#A89F94",
                  fontStyle: "italic",
                }}>
                  {lesson.subtitle}
                </div>
              </div>

              <div style={{ fontSize: "0.75rem", color: "#A89F94", whiteSpace: "nowrap" }}>
                {lesson.day === 10 ? "🔥" : `Day ${lesson.day}`}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL-STYLE AUTHORITY BLOCK ── */}
      <section style={{
        backgroundColor: "#F5EFE0",
        borderTop: "1px solid #EDE8DF", borderBottom: "1px solid #EDE8DF",
        padding: "5rem 1.5rem",
      }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{
              fontSize: "0.75rem", fontWeight: 700, color: "#D97706",
              letterSpacing: "0.12em", textTransform: "uppercase",
              display: "block", marginBottom: "1rem",
            }}>
              The Teacher Behind Every Lesson
            </span>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800,
              color: "#1E1B4B", letterSpacing: "-0.02em", lineHeight: 1.2,
            }}>
              Swami Vivekananda had 9 years to change the world.
              <br />
              <span style={{ color: "#D97706" }}>He did it.</span>
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem", marginBottom: "2.5rem",
          }}>
            {[
              { stat: "39", label: "Years old when he died", sub: "Nine active years of teaching." },
              { stat: "1893", label: "Year he walked into Chicago", sub: "Unknown. Left a legend." },
              { stat: "3,000+", label: "Years of philosophy", sub: "Made practical. Made immediate." },
              { stat: "∞", label: "The chain of transmission", sub: "Still running. You're next." },
            ].map((item) => (
              <div key={item.stat} style={{
                backgroundColor: "#FDFAF5", border: "1px solid #EDE8DF",
                borderRadius: "1rem", padding: "1.5rem", textAlign: "center",
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "2.25rem", fontWeight: 900, color: "#1E1B4B",
                  lineHeight: 1, marginBottom: "0.375rem",
                }}>
                  {item.stat}
                </div>
                <div style={{
                  fontSize: "0.8125rem", fontWeight: 700, color: "#D97706",
                  textTransform: "uppercase", letterSpacing: "0.08em",
                  marginBottom: "0.25rem",
                }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "#A89F94", fontStyle: "italic" }}>
                  {item.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <div style={{
            backgroundColor: "#1E1B4B", borderRadius: "1.25rem",
            padding: "2.5rem", textAlign: "center",
          }}>
            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)", fontWeight: 600,
              color: "#F9F4EC", lineHeight: 1.5, fontStyle: "italic",
              marginBottom: "1rem",
            }}>
              &ldquo;Take up one idea. Make that one idea your life — think of it,
              dream of it, live on that idea. Let every part of your body be full
              of that idea.&rdquo;
            </p>
            <p style={{
              fontSize: "0.875rem", fontWeight: 700,
              color: "#D97706", letterSpacing: "0.05em",
            }}>
              — Swami Vivekananda
            </p>
          </div>
        </div>
      </section>

      {/* ── OBJECTION CRUSHER ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "5rem 1.5rem 3rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800,
            color: "#1E1B4B", letterSpacing: "-0.02em", lineHeight: 1.2,
          }}>
            You already know the objections.
            <br />
            <span style={{ color: "#D97706" }}>Let&apos;s address them.</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            {
              q: "\"I don't have time for a 10-day course.\"",
              a: "Each lesson is 8–12 minutes to read. The practice takes 15–20 minutes. Less time than you spent scrolling this morning. And this one actually changes something.",
            },
            {
              q: "\"I've tried courses before and never finish them.\"",
              a: "This arrives in your inbox once a day. One lesson. One practice. Nothing to log into, no dashboard to ignore. The structure does the work for you.",
            },
            {
              q: "\"I'm not spiritual / I'm not religious.\"",
              a: "Neither was Vivekananda in the conventional sense. This is philosophy — the kind that works regardless of what you believe. The Bhagavad Gita is a manual for action, not a religious text.",
            },
            {
              q: "\"What's the catch?\"",
              a: "There isn't one. No upsell after Day 10. No paid tier unlocking the 'real' content. The teaching is the offering. That's the whole point.",
            },
          ].map((item) => (
            <div key={item.q} style={{
              backgroundColor: "#FDFAF5", border: "1px solid #EDE8DF",
              borderRadius: "1rem", padding: "1.75rem",
            }}>
              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.0625rem", fontWeight: 700, color: "#1E1B4B",
                marginBottom: "0.75rem", lineHeight: 1.4,
              }}>
                {item.q}
              </p>
              <p style={{
                fontSize: "0.9375rem", color: "#5C5348",
                lineHeight: 1.75, margin: 0,
              }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA (Ogilvy: close hard, be specific) ── */}
      <section style={{
        backgroundColor: "#1C1814",
        padding: "6rem 1.5rem",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>

          <div style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>🕯️</div>

          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.25rem, 5.5vw, 4rem)", fontWeight: 900,
            color: "#F9F4EC", lineHeight: 1.05, letterSpacing: "-0.03em",
            marginBottom: "1.25rem",
          }}>
            You already know
            <br />
            it&apos;s time.
          </h2>

          <p style={{
            fontSize: "1.125rem", color: "rgba(249,244,236,0.65)",
            lineHeight: 1.8, marginBottom: "0.875rem",
          }}>
            You&apos;ve been circling this. Sensing it. Feeling the pull toward
            a life that&apos;s larger than the one you&apos;re currently living.
          </p>
          <p style={{
            fontSize: "1.125rem", color: "rgba(249,244,236,0.65)",
            lineHeight: 1.8, marginBottom: "3rem",
          }}>
            Enter your email. Day 1 arrives today.
            By Day 10, you&apos;ll have a philosophy, a goal,
            and a manifesto — written in your own hand.
          </p>

          <div style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(232,160,32,0.25)",
            borderRadius: "1.5rem", padding: "2.75rem",
          }}>
            <CourseSignupForm source="course-final-cta" variant="hero" />
          </div>

          <p style={{
            marginTop: "1.75rem", fontSize: "0.875rem",
            color: "rgba(249,244,236,0.25)", fontStyle: "italic",
          }}>
            &ldquo;Arise, Awake, and Stop Not Till the Goal is Reached.&rdquo;
            <br />— Swami Vivekananda
          </p>

          <div style={{ marginTop: "2rem" }}>
            <Link href="/blog" style={{
              textDecoration: "none", fontSize: "0.875rem",
              color: "rgba(232,160,32,0.5)", fontWeight: 500,
            }}>
              Read the free essays first →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
