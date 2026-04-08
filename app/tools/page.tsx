import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tools — Arise & Awake",
  description:
    "Ancient practices made interactive. Breathwork, reflection, and inner work tools rooted in the teachings of Swami Vivekananda.",
};

// Geometric rangoli/yantra decoration
function YantraDecor() {
  return (
    <svg viewBox="-90 -90 180 180" style={{ width: "180px", height: "180px", opacity: 0.6 }}>
      {/* Outer circle */}
      <circle cx="0" cy="0" r="85" fill="none" stroke="#D97706" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 8" />
      {/* 8 spokes */}
      {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map((a, i) => (
        <line
          key={i}
          x1="0" y1="0"
          x2={Math.cos((a * Math.PI) / 180) * 83}
          y2={Math.sin((a * Math.PI) / 180) * 83}
          stroke="#D97706"
          strokeWidth="0.75"
          strokeOpacity="0.2"
        />
      ))}
      {/* Lotus petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => {
        const rad = (a * Math.PI) / 180;
        const cx = Math.cos(rad) * 54;
        const cy = Math.sin(rad) * 54;
        return (
          <ellipse
            key={i}
            cx={cx} cy={cy}
            rx="11" ry="24"
            fill="#D97706"
            fillOpacity="0.12"
            stroke="#D97706"
            strokeWidth="1"
            strokeOpacity="0.35"
            transform={`rotate(${a}, ${cx}, ${cy})`}
          />
        );
      })}
      {/* Mid triangle (upward) */}
      <polygon points="0,-42 36,21 -36,21" fill="none" stroke="#C2410C" strokeWidth="1" strokeOpacity="0.3" />
      {/* Mid triangle (downward) */}
      <polygon points="0,42 36,-21 -36,-21" fill="none" stroke="#D97706" strokeWidth="1" strokeOpacity="0.3" />
      {/* Inner circle */}
      <circle cx="0" cy="0" r="22" fill="rgba(217,119,6,0.08)" stroke="#D97706" strokeWidth="1.5" strokeOpacity="0.5" />
      {/* OM */}
      <text x="0" y="8" textAnchor="middle" fontSize="18" fill="#D97706" fontFamily="serif" opacity="0.75">ॐ</text>
    </svg>
  );
}

const tools = [
  {
    id: "pranayama",
    href: "/tools/pranayama",
    label: "Breathwork",
    sanskrit: "प्राणायाम",
    name: "Pranayama Guide",
    tagline: "Master the breath, master the mind",
    description:
      "Three ancient breathing techniques — Nadi Shodhana, Sama Vritti, and 4-7-8 — with a real-time guided timer. Rooted in Vivekananda's Raja Yoga.",
    accentColor: "#D97706",
    gradFrom: "#78350F",
    gradTo: "#D97706",
    features: ["3 techniques", "Guided timer", "5 rounds", "Sanskrit labels"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 40, height: 40 }}>
        <circle cx="20" cy="20" r="18" stroke="#D97706" strokeWidth="1.5" strokeOpacity="0.4" />
        <circle cx="20" cy="20" r="11" stroke="#D97706" strokeWidth="1.5" strokeOpacity="0.6" />
        <circle cx="20" cy="20" r="5" fill="#D97706" fillOpacity="0.6" />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <line
            key={a}
            x1={20 + Math.cos((a * Math.PI) / 180) * 12}
            y1={20 + Math.sin((a * Math.PI) / 180) * 12}
            x2={20 + Math.cos((a * Math.PI) / 180) * 17}
            y2={20 + Math.sin((a * Math.PI) / 180) * 17}
            stroke="#D97706"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
        ))}
      </svg>
    ),
  },
  {
    id: "sankalpa",
    href: "/tools/sankalpa",
    label: "Affirmations",
    sanskrit: "संकल्प",
    name: "Sankalpa Builder",
    tagline: "Set your sacred intention",
    description:
      "Choose your Vedantic pillar — Shakti, Viveka, Abhaya, Seva, or Dharma — select your words, and commit your sankalpa with a 30-second focused contemplation.",
    accentColor: "#7C3AED",
    gradFrom: "#3B0764",
    gradTo: "#7C3AED",
    features: ["5 pillars", "20 affirmations", "Write your own", "30s focus mode"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 40, height: 40 }}>
        {[0, 72, 144, 216, 288].map((a) => (
          <line
            key={a}
            x1="20" y1="20"
            x2={20 + Math.cos((a * Math.PI) / 180) * 16}
            y2={20 + Math.sin((a * Math.PI) / 180) * 16}
            stroke="#7C3AED"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
        ))}
        <circle cx="20" cy="20" r="18" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.3" />
        <circle cx="20" cy="20" r="6" fill="#7C3AED" fillOpacity="0.4" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.7" />
        <text x="20" y="24" textAnchor="middle" fontSize="8" fill="#7C3AED" fontFamily="serif" opacity="0.9">ॐ</text>
      </svg>
    ),
  },
  {
    id: "dhyana",
    href: "/tools/dhyana",
    label: "Meditation",
    sanskrit: "ध्यान",
    name: "Dhyana Timer",
    tagline: "The art of sacred stillness",
    description:
      "A distraction-free meditation timer with singing bowl bells, interval reminders, and an optional intention prompt. Rooted in Patanjali's eight-limbed path.",
    accentColor: "#6366F1",
    gradFrom: "#08051A",
    gradTo: "#4338CA",
    features: ["7 durations", "Interval bells", "Hide timer mode", "Intention prompt"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 40, height: 40 }}>
        <circle cx="20" cy="20" r="17" stroke="#6366F1" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="3 6" />
        <circle cx="20" cy="20" r="10" stroke="#6366F1" strokeWidth="1.5" strokeOpacity="0.55" />
        <circle cx="20" cy="20" r="4" fill="#6366F1" fillOpacity="0.5" />
        {[0, 90, 180, 270].map((a) => (
          <circle
            key={a}
            cx={20 + Math.cos((a * Math.PI) / 180) * 17}
            cy={20 + Math.sin((a * Math.PI) / 180) * 17}
            r="2"
            fill="#6366F1"
            fillOpacity="0.6"
          />
        ))}
      </svg>
    ),
  },
  {
    id: "japa",
    href: "/tools/japa",
    label: "Mantra",
    sanskrit: "जप",
    name: "Japa Counter",
    tagline: "The digital mala",
    description:
      "108 beads, 6 sacred mantras, streak tracking. Tap or press spacebar to count. A singing bowl rings at each completed mala.",
    accentColor: "#D97706",
    gradFrom: "#1A0E00",
    gradTo: "#92400E",
    features: ["6 mantras", "108-bead mala", "Streak tracking", "Bell on completion"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 40, height: 40 }}>
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i / 12) * 2 * Math.PI - Math.PI / 2;
          return (
            <circle
              key={i}
              cx={20 + Math.cos(a) * 15}
              cy={20 + Math.sin(a) * 15}
              r={i % 3 === 0 ? 2.5 : 1.8}
              fill="#D97706"
              fillOpacity={i % 3 === 0 ? 0.9 : 0.45}
            />
          );
        })}
        <circle cx="20" cy="20" r="6" fill="#D97706" fillOpacity="0.2" stroke="#D97706" strokeWidth="1" strokeOpacity="0.6" />
        <text x="20" y="24" textAnchor="middle" fontSize="7" fill="#D97706" fontFamily="serif" opacity="0.9">ॐ</text>
      </svg>
    ),
  },
];

const coming = [
  { name: "Journaling Prompts", sanskrit: "आत्म-विचार", desc: "Daily reflection prompts drawn from the Bhagavad Gita and Vivekananda's complete works." },
  { name: "Gita Oracle", sanskrit: "गीता", desc: "Describe what you're wrestling with and receive a relevant verse and commentary. Fully curated, no AI." },
];

export default function ToolsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(165deg, #0F0C24 0%, #1E1B4B 50%, #2D1B00 100%)",
          padding: "6rem 1.5rem 5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient orbs */}
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-100px", left: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(67,56,202,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Saffron top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #D97706, #C2410C, #4338CA, #D97706, transparent)" }} />

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
            <YantraDecor />
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
              यन्त्र-शाला &nbsp;·&nbsp; Yantra Shālā
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.75rem, 6.5vw, 4.5rem)",
              fontWeight: 900,
              color: "#FDFAF5",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
            }}
          >
            Tools for the{" "}
            <span style={{ color: "#D97706" }}>Inner Work</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
              color: "rgba(253,250,245,0.6)",
              lineHeight: 1.85,
              maxWidth: "540px",
              margin: "0 auto",
            }}
          >
            Ancient practices — interactive, timed, and guided for the modern seeker.
            Not apps. Not distractions. Pure practice.
          </p>
        </div>
      </section>

      {/* ── TOOLS GRID ── */}
      <section style={{ maxWidth: "1060px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#D97706", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Available Now
          </span>
        </div>

        {tools.map((tool) => (
          <Link key={tool.id} href={tool.href} style={{ textDecoration: "none", display: "block" }}>
            <article
              style={{
                background: `linear-gradient(135deg, ${tool.gradFrom} 0%, ${tool.gradTo} 100%)`,
                borderRadius: "1.5rem",
                padding: "clamp(2rem, 5vw, 3.25rem)",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                marginBottom: "1.5rem",
              }}
            >
              {/* Inner glow */}
              <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

              <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                    <div
                      style={{
                        backgroundColor: "rgba(255,255,255,0.12)",
                        borderRadius: "0.875rem",
                        padding: "0.75rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {tool.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(253,250,245,0.55)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                        {tool.label} &nbsp;·&nbsp; {tool.sanskrit}
                      </div>
                    </div>
                  </div>

                  <h2
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "clamp(1.625rem, 3.5vw, 2.375rem)",
                      fontWeight: 800,
                      color: "#FDFAF5",
                      marginBottom: "0.625rem",
                      lineHeight: 1.2,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {tool.name}
                  </h2>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(253,250,245,0.62)",
                      lineHeight: 1.75,
                      maxWidth: "520px",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {tool.description}
                  </p>

                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {tool.features.map((f) => (
                      <span
                        key={f}
                        style={{
                          backgroundColor: "rgba(255,255,255,0.12)",
                          borderRadius: "9999px",
                          padding: "0.25rem 0.75rem",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "rgba(253,250,245,0.75)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: "rgba(253,250,245,0.85)",
                  }}
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(253,250,245,0.6)" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8l4 4-4 4M8 12h8" />
                  </svg>
                  <span>Open</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* ── COMING SOON ── */}
      <section
        style={{
          backgroundColor: "#F5EFE0",
          borderTop: "1px solid #EDE8DF",
          borderBottom: "1px solid #EDE8DF",
          padding: "4.5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1060px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2.25rem" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#A89F94", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Coming Soon
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {coming.map((item) => (
              <div
                key={item.name}
                style={{
                  backgroundColor: "#FDFAF5",
                  border: "1px solid #EDE8DF",
                  borderRadius: "1rem",
                  padding: "1.75rem",
                  opacity: 0.65,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.1rem",
                    color: "#A89F94",
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.sanskrit}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#3D352C",
                    marginBottom: "0.625rem",
                  }}
                >
                  {item.name}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#7D7368", lineHeight: 1.75, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ backgroundColor: "#1E1B4B", padding: "4.5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.375rem, 3.5vw, 2rem)",
              fontWeight: 700,
              color: "#FDFAF5",
              lineHeight: 1.45,
              marginBottom: "1.75rem",
              fontStyle: "italic",
            }}
          >
            &ldquo;The greatest religion is to be true to your own nature.&rdquo;
          </p>
          <p style={{ fontSize: "0.875rem", color: "#D97706", fontWeight: 600, marginBottom: "2.5rem" }}>
            — Swami Vivekananda
          </p>
          <Link
            href="/course"
            style={{
              textDecoration: "none",
              display: "inline-block",
              backgroundColor: "#D97706",
              color: "#FDFAF5",
              fontWeight: 700,
              fontSize: "0.9375rem",
              padding: "0.875rem 2.25rem",
              borderRadius: "9999px",
            }}
          >
            Start the Free 10-Day Course →
          </Link>
        </div>
      </section>
    </>
  );
}
