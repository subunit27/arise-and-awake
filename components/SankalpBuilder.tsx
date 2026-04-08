"use client";

import { useState, useEffect, useRef } from "react";

const PILLARS = [
  {
    id: "shakti",
    name: "Shakti",
    sanskrit: "शक्ति",
    meaning: "Inner Strength",
    color: "#D97706",
    gradFrom: "#78350F",
    gradTo: "#D97706",
    glow: "rgba(217,119,6,0.35)",
    icon: "⚡",
    affirmations: [
      "I am infinite strength. Weakness is not my nature — it is only a dream I have believed in.",
      "Arise, awake, stop not till the goal is reached. Every single breath brings me closer.",
      "Within me is a power that has never been defeated and never will be.",
      "I do not ask for a lighter burden. I ask for broader shoulders.",
    ],
  },
  {
    id: "viveka",
    name: "Viveka",
    sanskrit: "विवेक",
    meaning: "Clarity & Discernment",
    color: "#4338CA",
    gradFrom: "#1E1B4B",
    gradTo: "#4338CA",
    glow: "rgba(67,56,202,0.35)",
    icon: "🔮",
    affirmations: [
      "I see clearly. The noise of the world cannot cloud the silence within me.",
      "The mind is its own master. I choose what I feed it — and I choose wisely.",
      "Truth is my compass. I follow it even when the path is uncertain.",
      "I am not my thoughts. I am the one who watches them, undisturbed.",
    ],
  },
  {
    id: "abhaya",
    name: "Abhaya",
    sanskrit: "अभय",
    meaning: "Fearlessness",
    color: "#C2410C",
    gradFrom: "#7C2D12",
    gradTo: "#C2410C",
    glow: "rgba(194,65,12,0.35)",
    icon: "🦁",
    affirmations: [
      "I am the Atman — unborn, undying, beyond all fear. What in this world can truly touch me?",
      "I do not shrink. I do not retreat. I face what comes with an open chest and a still heart.",
      "Fear is only a thought. I am not my thoughts. I stand free.",
      "Be not afraid. These three words are my armour every morning I wake.",
    ],
  },
  {
    id: "seva",
    name: "Seva",
    sanskrit: "सेवा",
    meaning: "Selfless Service",
    color: "#059669",
    gradFrom: "#064E3B",
    gradTo: "#059669",
    glow: "rgba(5,150,105,0.35)",
    icon: "🙏",
    affirmations: [
      "My work is worship. Every effort I make is an offering to the divine in all beings.",
      "He gives most who gives in love. Today I lead with love in everything I do.",
      "I am an instrument — not the musician, not the music. Just the willing, open instrument.",
      "When I serve others, I serve the infinite. My work is never small.",
    ],
  },
  {
    id: "dharma",
    name: "Dharma",
    sanskrit: "धर्म",
    meaning: "Purpose & Mission",
    color: "#7C3AED",
    gradFrom: "#3B0764",
    gradTo: "#7C3AED",
    glow: "rgba(124,58,237,0.35)",
    icon: "☸️",
    affirmations: [
      "I know what I am here for. I will not waste this one life on what does not matter.",
      "Each soul is potentially divine. My work is to manifest that divinity — in myself and in others.",
      "My purpose is larger than my comfort. I choose purpose, again and again.",
      "I was born for this moment. This work. This life. I am exactly where I need to be.",
    ],
  },
];

type Pillar = (typeof PILLARS)[0];
type Step = "pillar" | "choose" | "commit";

// Ring progress for focus mode
function FocusRing({
  progress,
  color,
  size = 200,
}: {
  progress: number;
  color: string;
  size?: number;
}) {
  const r = size / 2 - 8;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - progress);
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 1s linear" }}
      />
    </svg>
  );
}

export default function SankalpBuilder() {
  const [step, setStep] = useState<Step>("pillar");
  const [pillar, setPillar] = useState<Pillar | null>(null);
  const [chosen, setChosen] = useState<string | null>(null);
  const [custom, setCustom] = useState("");
  const [customActive, setCustomActive] = useState(false);

  // Focus mode
  const [focusActive, setFocusActive] = useState(false);
  const [focusSeconds, setFocusSeconds] = useState(30);
  const [focusDone, setFocusDone] = useState(false);
  const focusRef = useRef<NodeJS.Timeout | null>(null);

  // Copy state
  const [copied, setCopied] = useState(false);

  const finalSankalpa = customActive ? custom.trim() : chosen;
  const accent = pillar?.color ?? "#D97706";
  const glow = pillar?.glow ?? "rgba(217,119,6,0.3)";

  const selectPillar = (p: Pillar) => {
    setPillar(p);
    setChosen(null);
    setCustom("");
    setCustomActive(false);
    setStep("choose");
  };

  const commit = () => {
    if (!finalSankalpa) return;
    setFocusSeconds(30);
    setFocusDone(false);
    setStep("commit");
  };

  const reset = () => {
    setStep("pillar");
    setPillar(null);
    setChosen(null);
    setCustom("");
    setCustomActive(false);
    setFocusActive(false);
    setFocusDone(false);
    setCopied(false);
    if (focusRef.current) clearInterval(focusRef.current);
  };

  const startFocus = () => {
    setFocusActive(true);
    setFocusDone(false);
    setFocusSeconds(30);
    focusRef.current = setInterval(() => {
      setFocusSeconds((s) => {
        if (s <= 1) {
          clearInterval(focusRef.current!);
          setFocusDone(true);
          setFocusActive(false);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  };

  const copyToClipboard = () => {
    if (finalSankalpa) {
      navigator.clipboard.writeText(finalSankalpa).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  useEffect(() => {
    return () => { if (focusRef.current) clearInterval(focusRef.current); };
  }, []);

  // ── STEP: PILLAR SELECTION ──
  if (step === "pillar") {
    return (
      <div>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "0.9375rem", color: "rgba(253,250,245,0.5)", lineHeight: 1.75 }}>
            A sankalpa begins with knowing what you are calling forth. Choose your pillar.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "0.875rem",
          }}
          className="pillar-grid"
        >
          {PILLARS.map((p) => (
            <button
              key={p.id}
              onClick={() => selectPillar(p)}
              style={{
                background: `linear-gradient(160deg, ${p.gradFrom} 0%, ${p.gradTo} 100%)`,
                border: `1.5px solid ${p.color}44`,
                borderRadius: "1.125rem",
                padding: "1.75rem 1rem",
                cursor: "pointer",
                textAlign: "center",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 30px ${p.glow}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <span style={{ fontSize: "2rem" }}>{p.icon}</span>
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.25rem",
                    color: "#FDFAF5",
                    marginBottom: "0.2rem",
                  }}
                >
                  {p.sanskrit}
                </div>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: p.color, letterSpacing: "0.08em" }}>
                  {p.name}
                </div>
                <div style={{ fontSize: "0.7rem", color: "rgba(253,250,245,0.4)", marginTop: "0.2rem" }}>
                  {p.meaning}
                </div>
              </div>
            </button>
          ))}
        </div>
        <style>{`
          @media (max-width: 700px) { .pillar-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 400px) { .pillar-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    );
  }

  // ── STEP: CHOOSE AFFIRMATION ──
  if (step === "choose" && pillar) {
    return (
      <div>
        {/* Back + heading */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
          <button
            onClick={() => setStep("pillar")}
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "9999px",
              padding: "0.4rem 1rem",
              fontSize: "0.8rem",
              color: "rgba(253,250,245,0.5)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back
          </button>
          <div>
            <span style={{ fontSize: "1.5rem", fontFamily: "'Playfair Display', Georgia, serif", color: accent }}>
              {pillar.sanskrit}
            </span>
            <span style={{ fontSize: "0.85rem", color: "rgba(253,250,245,0.35)", marginLeft: "0.75rem" }}>
              {pillar.meaning}
            </span>
          </div>
        </div>

        <p style={{ fontSize: "0.9rem", color: "rgba(253,250,245,0.45)", marginBottom: "1.75rem", lineHeight: 1.7 }}>
          Choose the words that resonate — or write your own below.
        </p>

        {/* Affirmation cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
          {pillar.affirmations.map((aff, i) => {
            const isSelected = chosen === aff && !customActive;
            return (
              <button
                key={i}
                onClick={() => { setChosen(aff); setCustomActive(false); }}
                style={{
                  background: isSelected
                    ? `linear-gradient(135deg, ${pillar.gradFrom}cc, ${pillar.gradTo}88)`
                    : "rgba(255,255,255,0.04)",
                  border: isSelected
                    ? `1.5px solid ${accent}99`
                    : "1.5px solid rgba(255,255,255,0.08)",
                  borderRadius: "0.875rem",
                  padding: "1.25rem 1.5rem",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.25s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: `2px solid ${isSelected ? accent : "rgba(255,255,255,0.2)"}`,
                    backgroundColor: isSelected ? accent : "transparent",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                >
                  {isSelected && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                </div>
                <span
                  style={{
                    fontSize: "0.9375rem",
                    color: isSelected ? "#FDFAF5" : "rgba(253,250,245,0.62)",
                    lineHeight: 1.75,
                    fontFamily: isSelected ? "'Playfair Display', Georgia, serif" : "inherit",
                    fontStyle: isSelected ? "italic" : "normal",
                    transition: "color 0.2s ease",
                  }}
                >
                  &ldquo;{aff}&rdquo;
                </span>
              </button>
            );
          })}

          {/* Write your own */}
          <div
            style={{
              background: customActive ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.025)",
              border: customActive ? `1.5px solid ${accent}66` : "1.5px dashed rgba(255,255,255,0.12)",
              borderRadius: "0.875rem",
              padding: "1.25rem 1.5rem",
              transition: "all 0.25s ease",
            }}
          >
            <button
              onClick={() => { setCustomActive(true); setChosen(null); }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
                padding: 0,
                marginBottom: customActive ? "0.875rem" : 0,
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  border: `2px solid ${customActive ? accent : "rgba(255,255,255,0.2)"}`,
                  backgroundColor: customActive ? accent : "transparent",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
              >
                {customActive && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </div>
              <span style={{ fontSize: "0.875rem", color: "rgba(253,250,245,0.4)", letterSpacing: "0.04em" }}>
                Write your own sankalpa...
              </span>
            </button>
            {customActive && (
              <textarea
                autoFocus
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                placeholder="Speak it as if it is already true..."
                rows={3}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  resize: "none",
                  fontSize: "1rem",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: "italic",
                  color: "#FDFAF5",
                  lineHeight: 1.75,
                }}
              />
            )}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
          <button
            onClick={commit}
            disabled={!finalSankalpa}
            style={{
              background: finalSankalpa
                ? `linear-gradient(135deg, ${pillar.gradFrom}, ${pillar.color})`
                : "rgba(255,255,255,0.06)",
              border: "none",
              borderRadius: "9999px",
              padding: "0.9rem 2.75rem",
              fontSize: "0.9375rem",
              fontWeight: 700,
              color: finalSankalpa ? "#FDFAF5" : "rgba(255,255,255,0.25)",
              cursor: finalSankalpa ? "pointer" : "not-allowed",
              letterSpacing: "0.04em",
              transition: "all 0.2s ease",
            }}
          >
            Set My Sankalpa →
          </button>
        </div>
      </div>
    );
  }

  // ── STEP: COMMIT SCREEN ──
  if (step === "commit" && pillar && finalSankalpa) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem" }}>
        {/* Pillar badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: `${accent}18`,
            border: `1px solid ${accent}44`,
            borderRadius: "9999px",
            padding: "0.35rem 1rem",
          }}
        >
          <span style={{ fontSize: "0.9rem" }}>{pillar.icon}</span>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: accent, letterSpacing: "0.1em" }}>
            {pillar.name} · {pillar.sanskrit}
          </span>
        </div>

        {/* The Sankalpa */}
        <div
          style={{
            maxWidth: "680px",
            textAlign: "center",
            padding: "3rem 2rem",
            background: `radial-gradient(ellipse at center, ${glow} 0%, transparent 70%)`,
            position: "relative",
          }}
        >
          {/* Decorative quotes */}
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "5rem",
              color: `${accent}22`,
              lineHeight: 0.6,
              marginBottom: "1rem",
              userSelect: "none",
            }}
          >
            &ldquo;
          </div>
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.375rem, 3.5vw, 2rem)",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#FDFAF5",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {finalSankalpa}
          </p>
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "5rem",
              color: `${accent}22`,
              lineHeight: 0.4,
              marginTop: "0.5rem",
              textAlign: "right",
              userSelect: "none",
            }}
          >
            &rdquo;
          </div>
        </div>

        {/* Focus mode */}
        {focusActive && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FocusRing progress={focusSeconds / 30} color={accent} size={110} />
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "1.75rem", fontWeight: 800, color: "#FDFAF5", lineHeight: 1 }}>
                  {focusSeconds}
                </span>
                <span style={{ fontSize: "0.65rem", color: "rgba(253,250,245,0.35)", letterSpacing: "0.08em" }}>
                  seconds
                </span>
              </div>
            </div>
            <p style={{ fontSize: "0.8rem", color: "rgba(253,250,245,0.35)", letterSpacing: "0.06em" }}>
              Breathe. Let it settle.
            </p>
          </div>
        )}

        {focusDone && (
          <div
            style={{
              backgroundColor: `${accent}18`,
              border: `1px solid ${accent}44`,
              borderRadius: "0.875rem",
              padding: "1rem 1.5rem",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "0.9rem", color: accent, fontWeight: 600, margin: 0 }}>
              🪷 &nbsp; Your sankalpa is planted. It will grow.
            </p>
          </div>
        )}

        {/* Controls */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
          {!focusActive && !focusDone && (
            <button
              onClick={startFocus}
              style={{
                background: `linear-gradient(135deg, ${pillar.gradFrom}, ${pillar.color})`,
                border: "none",
                borderRadius: "9999px",
                padding: "0.875rem 2rem",
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#FDFAF5",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
              </svg>
              Hold for 30 seconds
            </button>
          )}

          <button
            onClick={copyToClipboard}
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "9999px",
              padding: "0.875rem 1.75rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: copied ? accent : "rgba(253,250,245,0.65)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "color 0.2s ease",
            }}
          >
            {copied ? (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                Copied
              </>
            ) : (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg>
                Copy
              </>
            )}
          </button>

          <button
            onClick={reset}
            style={{
              background: "none",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "9999px",
              padding: "0.875rem 1.75rem",
              fontSize: "0.9rem",
              color: "rgba(253,250,245,0.3)",
              cursor: "pointer",
            }}
          >
            Start Over
          </button>
        </div>

        {/* Daily practice hint */}
        <p style={{ fontSize: "0.8125rem", color: "rgba(253,250,245,0.25)", textAlign: "center", maxWidth: "420px", lineHeight: 1.75 }}>
          Speak your sankalpa three times upon waking and three times before sleep.
          Let it be the first and last thought of each day.
        </p>
      </div>
    );
  }

  return null;
}
