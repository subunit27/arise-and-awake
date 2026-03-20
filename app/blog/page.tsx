import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Essays",
  description:
    "Long-form essays on Swami Vivekananda's philosophy, goal setting, spirituality, striving, and what it means to live fully awake.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Header */}
      <section
        style={{
          backgroundColor: "#F5EFE0",
          borderBottom: "1px solid #EDE8DF",
          padding: "4rem 1.5rem 3rem",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
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
            Essays
          </span>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              color: "#1E1B4B",
              lineHeight: 1.15,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Ideas That Light a Fire
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#7D7368",
              lineHeight: 1.75,
              maxWidth: "560px",
            }}
          >
            Long-form writing at the intersection of ancient wisdom and modern
            ambition. Rooted in Vivekananda. Written for people who refuse to
            settle.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{ textDecoration: "none", display: "block" }}
          >
            <article
              style={{
                borderBottom: "1px solid #EDE8DF",
                padding: "2.5rem 0",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "2rem",
                alignItems: "start",
                cursor: "pointer",
              }}
            >
              {/* Number */}
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  backgroundColor: "#FEF3C7",
                  border: "1px solid #FDE68A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "#92400E",
                  flexShrink: 0,
                  marginTop: "0.25rem",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      color: "#D97706",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ color: "#D6CFC4", fontSize: "0.75rem" }}>·</span>
                  <span style={{ fontSize: "0.8125rem", color: "#A89F94" }}>
                    {post.readTime}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                    fontWeight: 800,
                    color: "#1E1B4B",
                    lineHeight: 1.25,
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    fontStyle: "italic",
                    color: "#7D7368",
                    marginBottom: "0.875rem",
                  }}
                >
                  {post.subtitle}
                </p>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "#5C5348",
                    lineHeight: 1.7,
                    maxWidth: "580px",
                    marginBottom: "1.25rem",
                  }}
                >
                  {post.excerpt}
                </p>

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#D97706",
                  }}
                >
                  Read Essay
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </>
  );
}
