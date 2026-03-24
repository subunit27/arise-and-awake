"use client";

import { useState } from "react";

interface Props {
  source?: string;
  variant?: "hero" | "inline" | "compact";
}

export default function CourseSignupForm({ source = "course-page", variant = "inline" }: Props) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, source }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Welcome.");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    const tweetText = encodeURIComponent(
      `I just signed up for "Arise & Awake" — a free 10-day course on Vivekananda's philosophy of radical awakening.\n\nIf you're tired of living at half-power, this is for you.\n\n→ ariseandawake.com`
    );
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    const whatsappText = encodeURIComponent(
      `Just signed up for this free 10-day email course on Vivekananda's philosophy. Thought you'd love it → https://ariseandawake.com`
    );
    const whatsappUrl = `https://wa.me/?text=${whatsappText}`;

    return (
      <div
        style={{
          backgroundColor: "rgba(217, 119, 6, 0.08)",
          border: "1px solid rgba(217, 119, 6, 0.35)",
          borderRadius: "0.875rem",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>🔥</div>
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.375rem",
            fontWeight: 700,
            color: "#FDFAF5",
            marginBottom: "0.375rem",
            lineHeight: 1.3,
          }}
        >
          You&apos;re in. Day 1 is on its way.
        </p>
        <p style={{ fontSize: "0.875rem", color: "rgba(253,250,245,0.6)", marginBottom: "1.75rem", lineHeight: 1.6 }}>
          Check your inbox — the first lesson arrives shortly.<br />
          Not there? Check spam and mark us as safe.
        </p>

        {/* Viral share nudge */}
        <div style={{
          borderTop: "1px solid rgba(217,119,6,0.2)",
          paddingTop: "1.5rem",
        }}>
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "0.9375rem",
            fontWeight: 600,
            color: "rgba(253,250,245,0.8)",
            marginBottom: "1rem",
          }}>
            Vivekananda said: <em>&ldquo;Arise, awake — and wake others.&rdquo;</em><br />
            <span style={{ fontSize: "0.8125rem", fontWeight: 400, color: "rgba(253,250,245,0.5)", fontFamily: "Georgia, serif" }}>
              Know someone who needs to hear this?
            </span>
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.625rem 1.25rem",
                backgroundColor: "#1C1814",
                border: "1px solid rgba(217,119,6,0.4)",
                borderRadius: "9999px",
                fontSize: "0.8125rem", fontWeight: 700,
                color: "#D97706", textDecoration: "none",
                fontFamily: "Georgia, serif",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Share on X
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.625rem 1.25rem",
                backgroundColor: "#1C1814",
                border: "1px solid rgba(34,197,94,0.4)",
                borderRadius: "9999px",
                fontSize: "0.8125rem", fontWeight: 700,
                color: "#4ade80", textDecoration: "none",
                fontFamily: "Georgia, serif",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send via WhatsApp
            </a>
          </div>
          <p style={{ fontSize: "0.75rem", color: "rgba(253,250,245,0.3)", marginTop: "1rem", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            Every soul you awaken is part of the mission.
          </p>
        </div>
      </div>
    );
  }

  const isHero = variant === "hero";
  const isCompact = variant === "compact";

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: isCompact ? "row" : "column",
          gap: "0.75rem",
          flexWrap: "wrap",
        }}
      >
        {!isCompact && (
          <input
            type="text"
            placeholder="Your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{
              padding: "0.875rem 1.25rem",
              borderRadius: "0.625rem",
              border: isHero
                ? "1px solid rgba(253,250,245,0.2)"
                : "1px solid #EDE8DF",
              backgroundColor: isHero ? "rgba(255,255,255,0.08)" : "#FFFFFF",
              color: isHero ? "#FDFAF5" : "#1A1208",
              fontSize: "1rem",
              outline: "none",
              width: "100%",
            }}
          />
        )}

        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "0.875rem 1.25rem",
            borderRadius: "0.625rem",
            border: isHero
              ? "1px solid rgba(253,250,245,0.2)"
              : "1px solid #EDE8DF",
            backgroundColor: isHero ? "rgba(255,255,255,0.08)" : "#FFFFFF",
            color: isHero ? "#FDFAF5" : "#1A1208",
            fontSize: "1rem",
            outline: "none",
            flex: isCompact ? "1" : "unset",
            width: isCompact ? "auto" : "100%",
          }}
        />

        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            padding: "0.875rem 2rem",
            borderRadius: "0.625rem",
            backgroundColor: status === "loading" ? "#B45309" : "#D97706",
            color: "#FDFAF5",
            fontWeight: 700,
            fontSize: "1rem",
            border: "none",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            whiteSpace: "nowrap",
            width: isCompact ? "auto" : "100%",
          }}
        >
          {status === "loading" ? "Sending..." : "Begin the Course →"}
        </button>
      </div>

      {status === "error" && (
        <p style={{ color: "#FCA5A5", fontSize: "0.875rem", marginTop: "0.5rem" }}>{message}</p>
      )}

      <p
        style={{
          fontSize: "0.8rem",
          color: isHero ? "rgba(253,250,245,0.4)" : "#A89F94",
          marginTop: "0.75rem",
          textAlign: isCompact ? "left" : "center",
        }}
      >
        10 lessons. 10 days. Free. Unsubscribe anytime.
      </p>
    </form>
  );
}
