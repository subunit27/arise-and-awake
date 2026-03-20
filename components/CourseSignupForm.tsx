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
    return (
      <div
        style={{
          backgroundColor: "rgba(217, 119, 6, 0.1)",
          border: "1px solid rgba(217, 119, 6, 0.4)",
          borderRadius: "0.875rem",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🔥</div>
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#FDFAF5",
            marginBottom: "0.5rem",
          }}
        >
          You&apos;re in. Day 1 is on its way.
        </p>
        <p style={{ fontSize: "0.9rem", color: "rgba(253,250,245,0.65)", margin: 0 }}>
          Check your inbox — the first lesson arrives shortly. If it doesn&apos;t appear, check
          spam and mark us as safe.
        </p>
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
