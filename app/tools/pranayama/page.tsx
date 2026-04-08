import type { Metadata } from "next";
import Link from "next/link";
import PranayamaTimer from "@/components/PranayamaTimer";

export const metadata: Metadata = {
  title: "Pranayama — Breathwork Guide | Arise & Awake",
  description:
    "Three ancient breathing techniques with a real-time guided timer. Rooted in Vivekananda's teachings on Prana and Raja Yoga.",
};

function LotusDecor({ color = "#D97706" }: { color?: string }) {
  const pts = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg viewBox="-60 -60 120 120" style={{ width: "80px", height: "80px" }}>
      {pts.map((a) => {
        const rad = (a * Math.PI) / 180;
        const cx = Math.cos(rad) * 34;
        const cy = Math.sin(rad) * 34;
        return (
          <ellipse
            key={a}
            cx={cx} cy={cy}
            rx="9" ry="20"
            fill={color}
            fillOpacity="0.25"
            stroke={color}
            strokeWidth="1"
            strokeOpacity="0.5"
            transform={`rotate(${a}, ${cx}, ${cy})`}
          />
        );
      })}
      <circle cx="0" cy="0" r="18" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" />
      <text x="0" y="7" textAnchor="middle" fontSize="16" fill={color} fontFamily="serif" opacity="0.85">ॐ</text>
    </svg>
  );
}

export default function PranayamaPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(170deg, #0F0C24 0%, #1E1B4B 45%, #2D1B00 100%)",
          padding: "5rem 1.5rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glows */}
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-60px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(67,56,202,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Rangoli border top */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #D97706, #C2410C, #D97706, transparent)" }} />

        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1 }}>
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

          <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
            <LotusDecor color="#D97706" />
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
              प्राणायाम &nbsp;·&nbsp; Prāṇāyāma
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
            The Science of{" "}
            <span style={{ color: "#D97706" }}>Sacred Breath</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.175rem)",
              color: "rgba(253,250,245,0.62)",
              lineHeight: 1.85,
              textAlign: "center",
              maxWidth: "580px",
              margin: "0 auto 2rem",
            }}
          >
            Prana is the life force that animates all existence. Breath is its outer form.
            Master the breath — master the mind.
          </p>

          <blockquote
            style={{
              textAlign: "center",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1rem",
              fontStyle: "italic",
              color: "rgba(253,250,245,0.45)",
              margin: "0",
              borderTop: "1px solid rgba(217,119,6,0.2)",
              paddingTop: "1.5rem",
            }}
          >
            &ldquo;He who has controlled his breath has controlled everything.&rdquo;
            <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.8125rem", color: "#D97706", fontStyle: "normal", fontWeight: 600 }}>
              — Swami Vivekananda
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── WHAT IS PRANA ── */}
      <section
        style={{
          backgroundColor: "#F5EFE0",
          borderBottom: "1px solid #EDE8DF",
          padding: "4rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              sanskrit: "प्राण",
              word: "Prana",
              def: "The universal life force. It animates every living thing. The breath is its most accessible gateway — control the breath, and prana follows.",
              color: "#D97706",
            },
            {
              sanskrit: "नाडी",
              word: "Nadi",
              def: "Energy channels — 72,000 of them run through the body. Pranayama clears blockages in these channels, allowing prana to flow freely.",
              color: "#C2410C",
            },
            {
              sanskrit: "कुम्भक",
              word: "Kumbhaka",
              def: "The breath retention — the most powerful phase. Ancient texts say kumbhaka is where transformation happens. The held breath builds inner fire.",
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
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "2rem",
                  color: item.color,
                  marginBottom: "0.25rem",
                }}
              >
                {item.sanskrit}
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: item.color,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                {item.word}
              </div>
              <p style={{ fontSize: "0.9375rem", color: "#5C5348", lineHeight: 1.8, margin: 0 }}>
                {item.def}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTERACTIVE TIMER ── */}
      <section
        style={{
          background: "linear-gradient(170deg, #0F0C24 0%, #1E1B4B 60%, #0F0C24 100%)",
          padding: "5rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative bottom border */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(217,119,6,0.5), rgba(194,65,12,0.5), rgba(217,119,6,0.5), transparent)" }} />

        <div style={{ maxWidth: "1060px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "#D97706",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Live Practice
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
              Choose Your Practice
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(253,250,245,0.45)", marginTop: "0.75rem" }}>
              Select a technique. Tap the circle to begin. Follow the breath.
            </p>
          </div>

          <PranayamaTimer />
        </div>
      </section>

      {/* ── PREPARATION ── */}
      <section
        style={{
          backgroundColor: "#FDFAF5",
          padding: "5rem 1.5rem",
          borderBottom: "1px solid #EDE8DF",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#D97706", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Before You Begin
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
              Set the Conditions for Practice
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {[
              { icon: "🕯️", title: "Time", desc: "Early morning (Brahma Muhurta) is ideal — 1.5 hours before sunrise. Or any quiet moment." },
              { icon: "🪷", title: "Posture", desc: "Sit in Sukhasana or on a chair. Spine straight, shoulders relaxed, chin slightly tucked." },
              { icon: "🌬️", title: "Empty Stomach", desc: "Practise on an empty stomach. At least 2 hours after eating. Your prana moves freely then." },
              { icon: "🧘", title: "Mental Set", desc: "Approach with reverence, not urgency. You are not doing an exercise — you are cultivating life force." },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "#F5EFE0",
                  border: "1px solid #EDE8DF",
                  borderRadius: "0.875rem",
                  padding: "1.5rem",
                }}
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "0.875rem" }}>{item.icon}</div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#1E1B4B",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </div>
                <p style={{ fontSize: "0.875rem", color: "#5C5348", lineHeight: 1.75, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIVEKANANDA QUOTE ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #78350F 0%, #1E1B4B 100%)",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          {/* Decorative dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "2rem" }}>
            {["#D97706", "#C2410C", "#D97706"].map((c, i) => (
              <div key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: c, opacity: i === 1 ? 1 : 0.5 }} />
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
            &ldquo;The yogi who has control over the breath has control over the prana. And he who has control over the prana has control over his own mind and the mind of every other being.&rdquo;
          </blockquote>
          <p style={{ fontSize: "0.9rem", color: "#D97706", fontWeight: 700, letterSpacing: "0.06em" }}>
            — Swami Vivekananda, Raja Yoga
          </p>

          <div style={{ marginTop: "3rem" }}>
            <Link
              href="/tools"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
                color: "rgba(253,250,245,0.45)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to Tools
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
