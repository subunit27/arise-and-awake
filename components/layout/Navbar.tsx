"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#FDFAF5",
        borderBottom: "1px solid #EDE8DF",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#1E1B4B",
              letterSpacing: "-0.02em",
            }}
          >
            Arise &amp; Awake
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="desktop-nav"
        >
          {[
            { label: "Essays", href: "/blog" },
            { label: "Tools", href: "/tools" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                textDecoration: "none",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: "#5C5348",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#1E1B4B")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#5C5348")
              }
            >
              {label}
            </Link>
          ))}
          <Link
            href="/course"
            style={{
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#FDFAF5",
              backgroundColor: "#D97706",
              padding: "0.5rem 1.25rem",
              borderRadius: "9999px",
              transition: "background-color 0.15s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#B45309")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#D97706")
            }
          >
            Free Course
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "#3D352C",
          }}
          className="mobile-toggle"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid #EDE8DF",
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Link
            href="/blog"
            style={{ textDecoration: "none", fontSize: "1rem", fontWeight: 500, color: "#3D352C" }}
            onClick={() => setOpen(false)}
          >
            Essays
          </Link>
          <Link
            href="/tools"
            style={{ textDecoration: "none", fontSize: "1rem", fontWeight: 500, color: "#3D352C" }}
            onClick={() => setOpen(false)}
          >
            Tools
          </Link>
          <Link
            href="/about"
            style={{ textDecoration: "none", fontSize: "1rem", fontWeight: 500, color: "#3D352C" }}
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/course"
            style={{ textDecoration: "none", fontSize: "1rem", fontWeight: 700, color: "#D97706" }}
            onClick={() => setOpen(false)}
          >
            Free 10-Day Course →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
