"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1E1B4B",
        color: "#A89F94",
        padding: "3rem 1.5rem",
        marginTop: "5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          textAlign: "center",
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#FDFAF5",
              letterSpacing: "-0.02em",
            }}
          >
            Arise &amp; Awake
          </span>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.9rem",
              color: "#A89F94",
              maxWidth: "480px",
              lineHeight: 1.7,
            }}
          >
            One light can light a million lights. Inspired by Swami Vivekananda.
            Rooted in ancient wisdom. Built for the modern pioneer.
          </p>
        </div>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { label: "Essays", href: "/blog" },
            { label: "Tools", href: "/tools" },
            { label: "Free Course", href: "/course" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                textDecoration: "none",
                fontSize: "0.9rem",
                color: "#A89F94",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FDFAF5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A89F94")}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://x.com/AriseAwake1111"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              fontSize: "0.9rem",
              color: "#A89F94",
              transition: "color 0.15s",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FDFAF5")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#A89F94")}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Follow
          </a>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(168, 159, 148, 0.2)",
            paddingTop: "1.5rem",
            width: "100%",
            fontSize: "0.8125rem",
            color: "#7D7368",
          }}
        >
          <p style={{ margin: 0 }}>
            &ldquo;Arise, Awake, and Stop Not Till the Goal is Reached.&rdquo;
            &mdash; Swami Vivekananda
          </p>
          <p style={{ margin: "0.5rem 0 0" }}>
            &copy; {new Date().getFullYear()} Arise &amp; Awake. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
