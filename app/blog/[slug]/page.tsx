import { getPostBySlug, getAllPosts } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const nextPost = allPosts[currentIndex + 1] ?? null;
  const prevPost = allPosts[currentIndex - 1] ?? null;

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #1E1B4B 0%, #312E81 100%)",
          padding: "5rem 1.5rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(217,119,6,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(253,250,245,0.55)",
              marginBottom: "2rem",
              fontWeight: 500,
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Essays
          </Link>

          {/* Category + meta */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.875rem",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                backgroundColor: "rgba(217, 119, 6, 0.2)",
                border: "1px solid rgba(217, 119, 6, 0.4)",
                borderRadius: "9999px",
                padding: "0.25rem 0.875rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#FDE68A",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {post.category}
            </span>
            <span style={{ fontSize: "0.8125rem", color: "rgba(253,250,245,0.4)" }}>
              {post.readTime}
            </span>
            <span style={{ fontSize: "0.8125rem", color: "rgba(253,250,245,0.4)" }}>
              {post.publishedAt}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              color: "#FDFAF5",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              letterSpacing: "-0.025em",
            }}
          >
            {post.title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "rgba(253, 250, 245, 0.65)",
              lineHeight: 1.7,
              fontStyle: "italic",
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            {post.subtitle}
          </p>
        </div>
      </section>

      {/* Article body */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "4rem 1.5rem 3rem" }}>
        <div
          className="prose-arise"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto 3rem",
          padding: "0 1.5rem",
          borderTop: "1px solid #EDE8DF",
        }}
      />

      {/* Author note */}
      <section
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "0 1.5rem 4rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#F5EFE0",
            border: "1px solid #EDE8DF",
            borderRadius: "1rem",
            padding: "2rem",
            display: "flex",
            gap: "1.25rem",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              backgroundColor: "#D97706",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.25rem",
              flexShrink: 0,
            }}
          >
            🔥
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1rem",
                fontWeight: 700,
                color: "#1E1B4B",
                marginBottom: "0.375rem",
              }}
            >
              Arise &amp; Awake
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#7D7368",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Rooted in the teachings of Swami Vivekananda and the wisdom of
              Baba Hardev Singh Ji. One light can light a million lights.
            </p>
          </div>
        </div>
      </section>

      {/* Post navigation */}
      {(prevPost || nextPost) && (
        <section
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 1.5rem 5rem",
            display: "grid",
            gridTemplateColumns: prevPost && nextPost ? "1fr 1fr" : "1fr",
            gap: "1rem",
          }}
        >
          {prevPost && (
            <Link href={`/blog/${prevPost.slug}`} style={{ textDecoration: "none" }}>
              <div
                style={{
                  border: "1px solid #EDE8DF",
                  borderRadius: "0.875rem",
                  padding: "1.5rem",
                  backgroundColor: "#FDFAF5",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#A89F94",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  ← Previous
                </span>
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#1E1B4B",
                    lineHeight: 1.3,
                  }}
                >
                  {prevPost.title}
                </span>
              </div>
            </Link>
          )}
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} style={{ textDecoration: "none" }}>
              <div
                style={{
                  border: "1px solid #EDE8DF",
                  borderRadius: "0.875rem",
                  padding: "1.5rem",
                  backgroundColor: "#FDFAF5",
                  textAlign: nextPost && !prevPost ? "left" : "right",
                  gridColumn: prevPost ? "auto" : "1",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#A89F94",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Next →
                </span>
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#1E1B4B",
                    lineHeight: 1.3,
                  }}
                >
                  {nextPost.title}
                </span>
              </div>
            </Link>
          )}
        </section>
      )}
    </>
  );
}
