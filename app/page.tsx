import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import CourseSignupForm from "@/components/CourseSignupForm";

export default function Home() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(160deg, #1E1B4B 0%, #312E81 50%, #1E1B4B 100%)",
          padding: "6rem 1.5rem 5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative orbs */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(217,119,6,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(194,65,12,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Sanskrit badge */}
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(217, 119, 6, 0.15)",
              border: "1px solid rgba(217, 119, 6, 0.4)",
              borderRadius: "9999px",
              padding: "0.375rem 1.125rem",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "#FDE68A",
                letterSpacing: "0.06em",
              }}
            >
              जागो और जगाओ &nbsp;·&nbsp; Jago Aur Jagao
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.75rem, 7vw, 5rem)",
              fontWeight: 900,
              color: "#FDFAF5",
              lineHeight: 1.05,
              marginBottom: "1.75rem",
              letterSpacing: "-0.03em",
            }}
          >
            Arise.{" "}
            <span style={{ color: "#D97706" }}>Awake.</span>
            <br />
            Stop Not.
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "rgba(253, 250, 245, 0.72)",
              lineHeight: 1.8,
              maxWidth: "540px",
              margin: "0 auto 2.75rem",
            }}
          >
            Essays on the intersection of ancient wisdom and modern ambition.
            Rooted in Swami Vivekananda. Written for those who refuse to stop.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/blog"
              style={{
                textDecoration: "none",
                display: "inline-block",
                backgroundColor: "#D97706",
                color: "#FDFAF5",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "0.9rem 2.25rem",
                borderRadius: "9999px",
              }}
            >
              Read the Essays →
            </Link>
            <Link
              href="/about"
              style={{
                textDecoration: "none",
                display: "inline-block",
                backgroundColor: "transparent",
                color: "#FDFAF5",
                fontWeight: 500,
                fontSize: "1rem",
                padding: "0.9rem 2.25rem",
                borderRadius: "9999px",
                border: "1px solid rgba(253, 250, 245, 0.3)",
              }}
            >
              The Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* ── BHAG BANNER ── */}
      <div
        style={{
          backgroundColor: "#FEF3C7",
          borderBottom: "1px solid #FDE68A",
          padding: "1.125rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "0.9375rem",
            color: "#78350F",
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: "#92400E" }}>Our BHAG:</strong> To awaken{" "}
          <strong style={{ color: "#92400E" }}>1 billion people</strong> to the
          understanding that they are the light — and that their rising rises the world.
        </p>
      </div>

      {/* ── FEATURED POST ── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "4.5rem 1.5rem 2rem" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#D97706",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Featured Essay
          </span>
        </div>

        <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none", display: "block" }}>
          <article
            className="featured-card"
            style={{
              background: "linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)",
              borderRadius: "1.5rem",
              padding: "clamp(2.25rem, 5vw, 3.75rem)",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-80px",
                right: "-80px",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(217,119,6,0.2) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(217, 119, 6, 0.2)",
                  border: "1px solid rgba(217, 119, 6, 0.4)",
                  borderRadius: "9999px",
                  padding: "0.25rem 0.875rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#FDE68A",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                }}
              >
                {featured.category}
              </span>

              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.875rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "#FDFAF5",
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {featured.title}
              </h2>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(253, 250, 245, 0.68)",
                  lineHeight: 1.75,
                  maxWidth: "580px",
                  marginBottom: "2.25rem",
                }}
              >
                {featured.excerpt}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: "#D97706",
                  }}
                >
                  Read Essay
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                <span style={{ fontSize: "0.8125rem", color: "rgba(253,250,245,0.35)" }}>
                  {featured.readTime}
                </span>
              </div>
            </div>
          </article>
        </Link>
      </section>

      {/* ── PILLARS ── */}
      <section
        style={{
          backgroundColor: "#F5EFE0",
          padding: "4.5rem 1.5rem",
          borderTop: "1px solid #EDE8DF",
          borderBottom: "1px solid #EDE8DF",
          marginTop: "2rem",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#D97706",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              The Pillars
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
                fontWeight: 700,
                color: "#1E1B4B",
                marginTop: "0.75rem",
                letterSpacing: "-0.02em",
              }}
            >
              What Arise &amp; Awake Stands For
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              {
                icon: "🎯",
                title: "Goal Setting",
                desc: "A goal without fire is just a wish. We write about the kind of goal so real and necessary that giving up becomes unthinkable.",
              },
              {
                icon: "🕯️",
                title: "Spirituality meets Strategy",
                desc: "Ancient wisdom was never meant to be separate from daily life. We explore where meditation meets execution, devotion meets ambition.",
              },
              {
                icon: "⚡",
                title: "Sparks of Inspiration",
                desc: "One idea at the right moment changes a trajectory. These are the sparks — from Vivekananda, the Gita, and thinkers who refused comfort.",
              },
              {
                icon: "🔥",
                title: "Striving",
                desc: "Not hustle for its own sake. The striving that comes from knowing exactly what you're for — and refusing to accept less.",
              },
              {
                icon: "🪞",
                title: "Authenticity",
                desc: "The version of you that's performing is exhausted. The version that's real is unstoppable. We write about the courage to be the second one.",
              },
              {
                icon: "⬆️",
                title: "Rising to Meet Your Challenges",
                desc: "The challenge doesn't shrink — you expand. Every obstacle is the frontier of who you're becoming. We talk about how.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                style={{
                  backgroundColor: "#FDFAF5",
                  border: "1px solid #EDE8DF",
                  borderRadius: "1rem",
                  padding: "1.75rem",
                }}
              >
                <div style={{ fontSize: "1.875rem", marginBottom: "1rem" }}>
                  {pillar.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#1E1B4B",
                    marginBottom: "0.625rem",
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "#5C5348",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MORE ESSAYS ── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#D97706",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            All Essays
          </span>
        </div>

        <div>
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                className="essay-row"
                style={{
                  borderTop: "1px solid #EDE8DF",
                  padding: "2rem 0.75rem",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "1.5rem",
                  alignItems: "start",
                  cursor: "pointer",
                  borderRadius: "0.5rem",
                  margin: "0 -0.75rem",
                }}
              >
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      color: "#D97706",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {post.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
                      fontWeight: 700,
                      color: "#1E1B4B",
                      marginBottom: "0.5rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "#7D7368",
                      lineHeight: 1.65,
                      maxWidth: "560px",
                      margin: 0,
                    }}
                  >
                    {post.excerpt}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "0.5rem",
                    paddingTop: "0.25rem",
                    minWidth: "80px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      color: "#A89F94",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {post.readTime}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D97706"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
          <div style={{ borderTop: "1px solid #EDE8DF" }} />
        </div>
      </section>

      {/* ── COURSE CTA ── */}
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
            gap: "3rem",
            alignItems: "center",
          }}
        >
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
              Free Email Course
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 900,
                color: "#FDFAF5",
                lineHeight: 1.15,
                marginBottom: "1rem",
                letterSpacing: "-0.025em",
              }}
            >
              10 Days.
              <br />
              <span style={{ color: "#D97706" }}>One Life.</span>
              <br />
              No More Waiting.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(253,250,245,0.65)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              A free daily course rooted in Vivekananda&apos;s teachings. One lesson.
              One practice. One day at a time — until the life you&apos;re meant for
              becomes the life you&apos;re living.
            </p>
            <Link
              href="/course"
              style={{
                textDecoration: "none",
                display: "inline-block",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#D97706",
              }}
            >
              See the full curriculum →
            </Link>
          </div>

          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(217,119,6,0.3)",
              borderRadius: "1.25rem",
              padding: "2rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.0625rem",
                fontWeight: 700,
                color: "#FDFAF5",
                marginBottom: "1.5rem",
              }}
            >
              Begin today — it&apos;s free
            </p>
            <CourseSignupForm source="homepage" variant="hero" />
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .course-cta-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── CLOSING QUOTE ── */}
      <section
        style={{
          backgroundColor: "#1E1B4B",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ fontSize: "2.25rem", marginBottom: "1.75rem" }}>🕯️</div>
          <blockquote
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.5rem, 4vw, 2.375rem)",
              fontWeight: 600,
              color: "#FDFAF5",
              lineHeight: 1.45,
              fontStyle: "italic",
              marginBottom: "1.5rem",
            }}
          >
            &ldquo;Arise, Awake, and Stop Not Till the Goal is Reached.&rdquo;
          </blockquote>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "#D97706",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            — Swami Vivekananda, from the Katha Upanishad
          </p>
        </div>
      </section>
    </>
  );
}
