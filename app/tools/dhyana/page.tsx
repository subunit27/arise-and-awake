import type { Metadata } from "next";
import Link from "next/link";
import DhyanaTimer from "@/components/DhyanaTimer";

export const metadata: Metadata = {
  title: "Dhyana — Meditation Timer | Arise & Awake",
  description:
    "A sacred space for stillness. Set your duration, ring interval bells, and sit in silence. Rooted in Patanjali's eight-limbed path.",
};

function MoonDecor() {
  return (
    <svg viewBox="-50 -50 100 100" style={{ width: "72px", height: "72px" }}>
      {/* Outer ring */}
      <circle cx="0" cy="0" r="46" fill="none" stroke="rgba(165,180,252,0.2)" strokeWidth="1" strokeDasharray="3 7" />
      {/* 12 dots */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        return (
          <circle
            key={i}
            cx={Math.cos(a) * 38}
            cy={Math.sin(a) * 38}
            r={i % 3 === 0 ? 2.5 : 1.5}
            fill="rgba(165,180,252,0.4)"
          />
        );
      })}
      {/* Inner glow */}
      <circle cx="0" cy="0" r="22" fill="rgba(99,102,241,0.1)" stroke="rgba(165,180,252,0.3)" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="12" fill="rgba(99,102,241,0.15)" />
      {/* OM */}
      <text x="0" y="7" textAnchor="middle" fontSize="14" fill="rgba(165,180,252,0.75)" fontFamily="serif">ॐ</text>
    </svg>
  );
}

export default function DhyanaPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(170deg, #08051A 0%, #0F0C24 40%, #1E1B4B 100%)",
          padding: "5rem 1.5rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.6), rgba(165,180,252,0.4), rgba(99,102,241,0.6), transparent)" }} />

        <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <Link
            href="/tools"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.8125rem",
              color: "rgba(253,250,245,0.35)",
              textDecoration: "none",
              marginBottom: "2.5rem",
              letterSpacing: "0.04em",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Tools
          </Link>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.75rem" }}>
            <MoonDecor />
          </div>

          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.35)",
              borderRadius: "9999px",
              padding: "0.35rem 1.125rem",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ fontSize: "0.775rem", fontWeight: 700, color: "#A5B4FC", letterSpacing: "0.1em" }}>
              ध्यान &nbsp;·&nbsp; Dhyāna
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
            }}
          >
            The Art of{" "}
            <span style={{ color: "#A5B4FC" }}>Sacred Stillness</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
              color: "rgba(253,250,245,0.55)",
              lineHeight: 1.9,
              maxWidth: "520px",
              margin: "0 auto 2rem",
            }}
          >
            The mind that can be still can know itself. And a mind that knows itself is free.
          </p>

          <blockquote
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "0.9875rem",
              fontStyle: "italic",
              color: "rgba(253,250,245,0.38)",
              margin: 0,
              borderTop: "1px solid rgba(99,102,241,0.2)",
              paddingTop: "1.5rem",
            }}
          >
            &ldquo;Meditation is the one thing that will carry us to the other shore.&rdquo;
            <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.8rem", color: "#A5B4FC", fontStyle: "normal", fontWeight: 600 }}>
              — Swami Vivekananda
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── THREE STAGES ── */}
      <section style={{ backgroundColor: "#F5EFE0", borderBottom: "1px solid #EDE8DF", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#D97706", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Patanjali's Path
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)",
                fontWeight: 700,
                color: "#1E1B4B",
                marginTop: "0.625rem",
                letterSpacing: "-0.02em",
              }}
            >
              The Three Stages of Meditation
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.25rem" }}>
            {[
              {
                num: "६",
                sanskrit: "धारणा",
                word: "Dharana",
                sub: "Concentration",
                def: "The first stage — fixing attention on a single point. A candle flame, the breath, a mantra. The mind is gathered, collected, pointed.",
                color: "#D97706",
              },
              {
                num: "७",
                sanskrit: "ध्यान",
                word: "Dhyana",
                sub: "Meditation",
                def: "When concentration becomes effortless and unbroken. The observer and the observed begin to merge. This is the stage we practise.",
                color: "#4338CA",
              },
              {
                num: "८",
                sanskrit: "समाधि",
                word: "Samadhi",
                sub: "Absorption",
                def: "The observer dissolves entirely. There is only the experience — pure, undivided awareness. The goal of all yoga.",
                color: "#7C3AED",
              },
            ].map((s) => (
              <div
                key={s.word}
                style={{
                  backgroundColor: "#FDFAF5",
                  border: "1px solid #EDE8DF",
                  borderRadius: "1rem",
                  padding: "1.75rem",
                  borderTop: `3px solid ${s.color}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.875rem" }}>
                  <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.5rem", color: s.color, opacity: 0.5, lineHeight: 1 }}>{s.num}</span>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.5rem", color: s.color, lineHeight: 1 }}>{s.sanskrit}</div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: s.color, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "0.2rem" }}>
                      {s.word} · {s.sub}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: "0.9375rem", color: "#5C5348", lineHeight: 1.8, margin: 0 }}>{s.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMER ── */}
      <section
        style={{
          background: "linear-gradient(170deg, #08051A 0%, #0F0C24 50%, #08051A 100%)",
          padding: "5.5rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(165,180,252,0.3), rgba(99,102,241,0.4), transparent)" }} />

        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#A5B4FC", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Your Practice
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
              Set Your Sit
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(253,250,245,0.35)", marginTop: "0.625rem" }}>
              Choose your duration, set an intention, and enter the silence.
            </p>
          </div>

          <DhyanaTimer />
        </div>
      </section>

      {/* ── HOW TO SIT ── */}
      <section style={{ backgroundColor: "#FDFAF5", padding: "5rem 1.5rem", borderBottom: "1px solid #EDE8DF" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#D97706", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              The Seat
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)",
                fontWeight: 700,
                color: "#1E1B4B",
                marginTop: "0.625rem",
                letterSpacing: "-0.02em",
              }}
            >
              Preparing for Stillness
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
            {[
              { icon: "🧘", title: "Asana", desc: "Sit so still your body becomes invisible to you. Cross-legged, kneeling, or in a chair — spine upright, hands resting." },
              { icon: "👁️", title: "Drishti", desc: "Close the eyes or fix a soft gaze slightly downward. Don't search — simply let the eyes rest." },
              { icon: "🌬️", title: "Breath", desc: "Let the breath breathe itself. Don't control it. Just watch it arrive and depart, like a guest you welcome but don't cling to." },
              { icon: "🕯️", title: "Object", desc: "Give the mind something to rest on — your breath, a mantra, or the feeling in your chest. When it wanders, return gently." },
              { icon: "🔔", title: "Bell", desc: "The opening bell marks the boundary between the ordinary and the sacred. The closing bell returns you gently." },
              { icon: "⏱️", title: "Time", desc: "Begin with 10 minutes. Add 5 each week. Most meditators eventually settle at 20–30 minutes as their anchor sit." },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "#F5EFE0",
                  border: "1px solid #EDE8DF",
                  borderRadius: "0.875rem",
                  padding: "1.375rem",
                }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1E1B4B", marginBottom: "0.5rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#5C5348", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #08051A 0%, #0F0C24 50%, #1E1B4B 100%)",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.4rem", marginBottom: "2rem" }}>
            {[...Array(7)].map((_, i) => (
              <div key={i} style={{ width: i === 3 ? "7px" : "4px", height: i === 3 ? "7px" : "4px", borderRadius: "50%", backgroundColor: i === 3 ? "#A5B4FC" : "rgba(165,180,252,0.25)", alignSelf: "center" }} />
            ))}
          </div>

          <blockquote
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.375rem, 3.5vw, 2rem)",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#FDFAF5",
              lineHeight: 1.6,
              marginBottom: "1.75rem",
            }}
          >
            &ldquo;In meditation, all the conditions necessary for perfect mental photography are fulfilled.&rdquo;
          </blockquote>
          <p style={{ fontSize: "0.875rem", color: "#A5B4FC", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "3rem" }}>
            — Swami Vivekananda, Raja Yoga
          </p>

          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/tools/pranayama"
              style={{
                textDecoration: "none",
                display: "inline-block",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(253,250,245,0.55)",
                fontWeight: 600,
                fontSize: "0.875rem",
                padding: "0.75rem 1.75rem",
                borderRadius: "9999px",
              }}
            >
              ← Pranayama Guide
            </Link>
            <Link
              href="/tools/sankalpa"
              style={{
                textDecoration: "none",
                display: "inline-block",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(253,250,245,0.55)",
                fontWeight: 600,
                fontSize: "0.875rem",
                padding: "0.75rem 1.75rem",
                borderRadius: "9999px",
              }}
            >
              Sankalpa Builder →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
