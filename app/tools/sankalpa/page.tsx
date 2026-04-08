import type { Metadata } from "next";
import Link from "next/link";
import SankalpBuilder from "@/components/SankalpBuilder";

export const metadata: Metadata = {
  title: "Sankalpa — Affirmation Builder | Arise & Awake",
  description:
    "Craft your daily sankalpa — a sacred intention rooted in Vedantic wisdom. Choose your pillar, set your words, and commit them to practice.",
};

function FlameDecor({ color = "#D97706" }: { color?: string }) {
  return (
    <svg viewBox="-50 -70 100 120" style={{ width: "70px", height: "90px" }}>
      {/* Flame petals */}
      {[0, 72, 144, 216, 288].map((a) => {
        const rad = (a * Math.PI) / 180;
        const cx = Math.cos(rad) * 28;
        const cy = Math.sin(rad) * 28;
        return (
          <ellipse
            key={a}
            cx={cx} cy={cy}
            rx="8" ry="20"
            fill={color}
            fillOpacity="0.2"
            stroke={color}
            strokeWidth="1"
            strokeOpacity="0.45"
            transform={`rotate(${a}, ${cx}, ${cy})`}
          />
        );
      })}
      <circle cx="0" cy="0" r="16" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" />
      {/* Inner spark */}
      <ellipse cx="0" cy="-4" rx="5" ry="10" fill={color} fillOpacity="0.5" />
      <ellipse cx="0" cy="-2" rx="2.5" ry="5" fill="#FDE68A" fillOpacity="0.9" />
    </svg>
  );
}

export default function SankalpPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(165deg, #1A0A2E 0%, #1E1B4B 45%, #2D1B00 100%)",
          padding: "5rem 1.5rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "450px", height: "450px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "380px", height: "380px", borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #7C3AED, #D97706, #C2410C, #7C3AED, transparent)" }} />

        <div style={{ maxWidth: "720px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link
            href="/tools"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.8125rem",
              color: "rgba(253,250,245,0.4)",
              textDecoration: "none",
              marginBottom: "2.5rem",
              letterSpacing: "0.04em",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Tools
          </Link>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.75rem" }}>
            <FlameDecor color="#D97706" />
          </div>

          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(217,119,6,0.12)",
              border: "1px solid rgba(217,119,6,0.35)",
              borderRadius: "9999px",
              padding: "0.35rem 1.125rem",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ fontSize: "0.775rem", fontWeight: 700, color: "#FDE68A", letterSpacing: "0.1em" }}>
              संकल्प &nbsp;·&nbsp; Sankalpa
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 900,
              color: "#FDFAF5",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "1.25rem",
              textAlign: "center",
            }}
          >
            Set Your{" "}
            <span style={{ color: "#D97706" }}>Sacred Intention</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
              color: "rgba(253,250,245,0.6)",
              lineHeight: 1.85,
              textAlign: "center",
              maxWidth: "560px",
              margin: "0 auto 2rem",
            }}
          >
            A sankalpa is not a wish. It is a vow — spoken from the deepest layer of the self, where will and truth are the same thing.
          </p>

          <blockquote
            style={{
              textAlign: "center",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "0.9875rem",
              fontStyle: "italic",
              color: "rgba(253,250,245,0.42)",
              margin: 0,
              borderTop: "1px solid rgba(217,119,6,0.18)",
              paddingTop: "1.5rem",
            }}
          >
            &ldquo;Take up one idea. Make that one idea your life — think of it, dream of it, live on that idea.&rdquo;
            <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.8rem", color: "#D97706", fontStyle: "normal", fontWeight: 600 }}>
              — Swami Vivekananda
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── WHAT IS SANKALPA ── */}
      <section style={{ backgroundColor: "#F5EFE0", borderBottom: "1px solid #EDE8DF", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.75rem" }}>
          {[
            {
              sanskrit: "संकल्प",
              word: "Sankalpa",
              def: "From 'san' (a connection with the highest truth) and 'kalpa' (vow). Not a goal you chase — a truth you declare.",
              color: "#D97706",
            },
            {
              sanskrit: "शक्ति",
              word: "Shakti",
              def: "The power behind the sankalpa. Words spoken with belief and emotion carry prana — the more you charge them, the more they shape reality.",
              color: "#C2410C",
            },
            {
              sanskrit: "अभ्यास",
              word: "Abhyasa",
              def: "Consistent practice. A sankalpa spoken once is a wish. Spoken every day with feeling — it becomes the architecture of your mind.",
              color: "#4338CA",
            },
          ].map((item) => (
            <div
              key={item.word}
              style={{
                backgroundColor: "#FDFAF5",
                border: "1px solid #EDE8DF",
                borderRadius: "1rem",
                padding: "1.75rem",
                borderTop: `3px solid ${item.color}`,
              }}
            >
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "2rem", color: item.color, marginBottom: "0.25rem" }}>
                {item.sanskrit}
              </div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: item.color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                {item.word}
              </div>
              <p style={{ fontSize: "0.9375rem", color: "#5C5348", lineHeight: 1.8, margin: 0 }}>
                {item.def}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BUILDER ── */}
      <section
        style={{
          background: "linear-gradient(170deg, #0F0C24 0%, #1E1B4B 60%, #0F0C24 100%)",
          padding: "5rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(217,119,6,0.5), rgba(124,58,237,0.5), transparent)" }} />

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#D97706", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              The Builder
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 800,
                color: "#FDFAF5",
                marginTop: "0.75rem",
                letterSpacing: "-0.02em",
              }}
            >
              Craft Your Sankalpa
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(253,250,245,0.4)", marginTop: "0.75rem" }}>
              Three steps. Five pillars. One truth.
            </p>

            {/* Step indicators */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", marginTop: "1.75rem" }}>
              {["Choose Pillar", "Select Words", "Commit"].map((label, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(217,119,6,0.15)",
                      border: "1px solid rgba(217,119,6,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "#D97706",
                    }}
                  >
                    {i + 1}
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "rgba(253,250,245,0.3)", display: i === 2 ? "inline" : "inline" }}>
                    {label}
                  </span>
                  {i < 2 && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          <SankalpBuilder />
        </div>
      </section>

      {/* ── DAILY PRACTICE ── */}
      <section style={{ backgroundColor: "#FDFAF5", padding: "5rem 1.5rem", borderBottom: "1px solid #EDE8DF" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#D97706", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              The Practice
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                fontWeight: 700,
                color: "#1E1B4B",
                marginTop: "0.625rem",
                letterSpacing: "-0.02em",
              }}
            >
              How to Use Your Sankalpa
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {[
              {
                num: "१",
                title: "Upon Waking",
                desc: "Before checking your phone, before speaking — speak your sankalpa. Three times. With feeling. The morning mind is the most fertile ground.",
                color: "#D97706",
              },
              {
                num: "२",
                title: "In Stillness",
                desc: "After pranayama or meditation, when the mind is quiet — plant the sankalpa in that fertile silence. This is when it reaches deepest.",
                color: "#C2410C",
              },
              {
                num: "३",
                title: "Before Sleep",
                desc: "The last thought before sleep becomes the first seed of tomorrow. Let your sankalpa be the final thing your conscious mind carries into the deep.",
                color: "#4338CA",
              },
              {
                num: "४",
                title: "At Decision Points",
                desc: "When you face a choice, recall your sankalpa. It is your compass. It tells you which direction leads toward your truest self.",
                color: "#7C3AED",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  backgroundColor: "#F5EFE0",
                  border: "1px solid #EDE8DF",
                  borderRadius: "0.875rem",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "2rem",
                    color: item.color,
                    marginBottom: "0.75rem",
                    opacity: 0.7,
                  }}
                >
                  {item.num}
                </div>
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
                <p style={{ fontSize: "0.875rem", color: "#5C5348", lineHeight: 1.75, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #3B0764 0%, #1E1B4B 100%)",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "660px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "2rem" }}>
            {["#7C3AED", "#D97706", "#C2410C", "#D97706", "#7C3AED"].map((c, i) => (
              <div key={i} style={{ width: i === 2 ? "8px" : "5px", height: i === 2 ? "8px" : "5px", borderRadius: "50%", backgroundColor: c, opacity: i === 2 ? 1 : 0.5, alignSelf: "center" }} />
            ))}
          </div>

          <blockquote
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.375rem, 3.5vw, 2rem)",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#FDFAF5",
              lineHeight: 1.55,
              marginBottom: "1.75rem",
            }}
          >
            &ldquo;All the powers in the universe are already ours. It is we who have put our hands before our eyes and cry that it is dark.&rdquo;
          </blockquote>
          <p style={{ fontSize: "0.875rem", color: "#D97706", fontWeight: 700, letterSpacing: "0.06em" }}>
            — Swami Vivekananda
          </p>

          <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/tools/pranayama"
              style={{
                textDecoration: "none",
                display: "inline-block",
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(253,250,245,0.7)",
                fontWeight: 600,
                fontSize: "0.875rem",
                padding: "0.75rem 1.75rem",
                borderRadius: "9999px",
              }}
            >
              ← Pranayama Guide
            </Link>
            <Link
              href="/tools"
              style={{
                textDecoration: "none",
                display: "inline-block",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(253,250,245,0.4)",
                fontWeight: 500,
                fontSize: "0.875rem",
                padding: "0.75rem 1.75rem",
                borderRadius: "9999px",
              }}
            >
              All Tools
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
