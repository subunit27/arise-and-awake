"use client";

import { useState, useEffect, useRef } from "react";

const TOTAL_ROUNDS = 5;

const techniques = [
  {
    id: "nadi-shodhana",
    name: "Nadi Shodhana",
    sanskrit: "नाडी शोधन",
    meaning: "Channel Purification",
    tagline: "Balance your inner sun and moon",
    description:
      "The jewel of pranayama. 72,000 nadis run through the body — this breath purifies them all. Practise before meditation or important decisions.",
    instruction:
      "Right thumb closes right nostril → Inhale left → Close both → Exhale right → Inhale right → Close both → Exhale left. Repeat.",
    phases: [
      { name: "Inhale", sanskrit: "पूरक", duration: 4, scale: 1 },
      { name: "Hold", sanskrit: "कुम्भक", duration: 4, scale: 1 },
      { name: "Exhale", sanskrit: "रेचक", duration: 4, scale: 0.56 },
      { name: "Hold", sanskrit: "कुम्भक", duration: 4, scale: 0.56 },
    ],
    accent: "#D97706",
    glow: "rgba(217,119,6,0.4)",
    gradientFrom: "#78350F",
    gradientTo: "#D97706",
  },
  {
    id: "sama-vritti",
    name: "Sama Vritti",
    sanskrit: "समवृत्ति",
    meaning: "Box Breathing",
    tagline: "The warrior's breath — equal on all sides",
    description:
      "Four equal counts, like a perfect square. Used by ancient yogis and modern special forces. Activates the parasympathetic system within minutes.",
    instruction:
      "Sit upright, spine tall. Breathe through the nose only. Each side is 4 counts — no rushing, no forcing.",
    phases: [
      { name: "Inhale", sanskrit: "पूरक", duration: 4, scale: 1 },
      { name: "Hold", sanskrit: "कुम्भक", duration: 4, scale: 1 },
      { name: "Exhale", sanskrit: "रेचक", duration: 4, scale: 0.56 },
      { name: "Hold", sanskrit: "कुम्भक", duration: 4, scale: 0.56 },
    ],
    accent: "#C2410C",
    glow: "rgba(194,65,12,0.4)",
    gradientFrom: "#7C2D12",
    gradientTo: "#C2410C",
  },
  {
    id: "shanti-breath",
    name: "4-7-8 Pranayama",
    sanskrit: "शान्ति श्वास",
    meaning: "Peace Breath",
    tagline: "Nature's tranquilizer — ancient and proven",
    description:
      "Rooted in Kumbhaka practice. The long hold pressurises prana in the lungs. The extended exhale stimulates the vagus nerve, releasing stored tension from the body.",
    instruction:
      "Inhale 4 counts. Hold 7 — feel the prana build. Exhale completely through the mouth for 8. Practise 4 cycles minimum.",
    phases: [
      { name: "Inhale", sanskrit: "पूरक", duration: 4, scale: 1 },
      { name: "Hold", sanskrit: "कुम्भक", duration: 7, scale: 1 },
      { name: "Exhale", sanskrit: "रेचक", duration: 8, scale: 0.56 },
    ],
    accent: "#4338CA",
    glow: "rgba(67,56,202,0.4)",
    gradientFrom: "#1E1B4B",
    gradientTo: "#4338CA",
  },
];

type Technique = (typeof techniques)[0];

// Mandala ring decorations around the circle
function MandalaRings({ color, active }: { color: string; active: boolean }) {
  const pts = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg
      viewBox="-160 -160 320 320"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    >
      {/* Outer dotted ring */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
        <circle
          key={a}
          cx={Math.cos((a * Math.PI) / 180) * 148}
          cy={Math.sin((a * Math.PI) / 180) * 148}
          r="3"
          fill={color}
          opacity={active ? 0.5 : 0.15}
          style={{ transition: "opacity 1s ease" }}
        />
      ))}
      {/* 8 petal shapes */}
      {pts.map((a) => {
        const rad = (a * Math.PI) / 180;
        const cx = Math.cos(rad) * 100;
        const cy = Math.sin(rad) * 100;
        return (
          <ellipse
            key={a}
            cx={cx}
            cy={cy}
            rx="13"
            ry="28"
            fill={color}
            fillOpacity={active ? 0.13 : 0.04}
            stroke={color}
            strokeWidth="1"
            strokeOpacity={active ? 0.35 : 0.1}
            transform={`rotate(${a}, ${cx}, ${cy})`}
            style={{ transition: "fill-opacity 1s ease, stroke-opacity 1s ease" }}
          />
        );
      })}
      {/* Mid ring */}
      <circle
        cx="0" cy="0" r="82"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeOpacity={active ? 0.2 : 0.06}
        strokeDasharray="5 10"
        style={{ transition: "stroke-opacity 1s ease" }}
      />
      {/* Inner ring */}
      <circle
        cx="0" cy="0" r="58"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeOpacity={active ? 0.25 : 0.08}
        style={{ transition: "stroke-opacity 1s ease" }}
      />
    </svg>
  );
}

export default function PranayamaTimer() {
  const [selected, setSelected] = useState<Technique>(techniques[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [round, setRound] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const phaseIdxRef = useRef(0);
  const roundRef = useRef(1);
  const selectedRef = useRef(selected);
  useEffect(() => { selectedRef.current = selected; }, [selected]);

  const currentPhase = isRunning ? selected.phases[phaseIdx] : null;
  const isHold = currentPhase?.name === "Hold";
  const targetScale = isRunning ? (currentPhase?.scale ?? 1) : 0.72;
  const transitionDuration = isRunning
    ? (isHold ? 0.5 : (currentPhase?.duration ?? 4))
    : 1.2;

  const accent = selected.accent;
  const glow = selected.glow;

  const start = () => {
    setIsComplete(false);
    phaseIdxRef.current = 0;
    roundRef.current = 1;
    setPhaseIdx(0);
    setRound(1);
    setSecondsLeft(selected.phases[0].duration);
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
    setPhaseIdx(0);
    setSecondsLeft(0);
    setRound(1);
    setIsComplete(false);
  };

  const switchTechnique = (t: Technique) => {
    stop();
    setSelected(t);
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 1) return prev - 1;

        const tech = selectedRef.current;
        const nextIdx = (phaseIdxRef.current + 1) % tech.phases.length;

        if (nextIdx === 0) {
          if (roundRef.current >= TOTAL_ROUNDS) {
            setTimeout(() => {
              setIsRunning(false);
              setIsComplete(true);
            }, 50);
            return 0;
          }
          roundRef.current++;
          setRound(roundRef.current);
        }

        phaseIdxRef.current = nextIdx;
        setPhaseIdx(nextIdx);
        return tech.phases[nextIdx].duration;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  // Phase colour for non-running state
  const idleColor = "#5C5348";

  const displayColor = isRunning ? accent : idleColor;
  const displayGlow = isRunning ? glow : "rgba(92,83,72,0.2)";

  return (
    <div>
      {/* Technique Picker */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0.75rem",
          marginBottom: "3rem",
        }}
        className="technique-grid"
      >
        {techniques.map((t) => (
          <button
            key={t.id}
            onClick={() => switchTechnique(t)}
            style={{
              background: selected.id === t.id
                ? `linear-gradient(135deg, ${t.gradientFrom} 0%, ${t.gradientTo} 100%)`
                : "rgba(255,255,255,0.04)",
              border: selected.id === t.id
                ? `2px solid ${t.accent}`
                : "2px solid rgba(255,255,255,0.1)",
              borderRadius: "1rem",
              padding: "1.25rem 1rem",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: selected.id === t.id ? "rgba(253,250,245,0.6)" : "rgba(255,255,255,0.3)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.35rem",
              }}
            >
              {t.meaning}
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1rem",
                fontWeight: 700,
                color: selected.id === t.id ? "#FDFAF5" : "rgba(255,255,255,0.55)",
                marginBottom: "0.2rem",
              }}
            >
              {t.name}
            </div>
            <div
              style={{
                fontSize: "0.85rem",
                color: selected.id === t.id ? t.accent : "rgba(255,255,255,0.25)",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              {t.sanskrit}
            </div>
          </button>
        ))}
      </div>

      {/* Main Exercise Area */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
        className="exercise-grid"
      >
        {/* Breathing Circle */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
          <div
            style={{
              position: "relative",
              width: "320px",
              height: "320px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MandalaRings color={displayColor} active={isRunning} />

            {/* Outer glow ring */}
            <div
              style={{
                position: "absolute",
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${displayGlow} 0%, transparent 70%)`,
                transform: `scale(${targetScale})`,
                transition: `transform ${transitionDuration}s ease-in-out`,
                pointerEvents: "none",
              }}
            />

            {/* Main breathing circle */}
            <div
              style={{
                position: "absolute",
                width: "210px",
                height: "210px",
                borderRadius: "50%",
                background: isRunning
                  ? `radial-gradient(circle at 40% 35%, ${accent}55 0%, ${accent}22 50%, ${accent}08 100%)`
                  : "radial-gradient(circle at 40% 35%, rgba(92,83,72,0.3) 0%, rgba(92,83,72,0.1) 100%)",
                border: `1.5px solid ${displayColor}55`,
                boxShadow: `0 0 50px ${displayGlow}, 0 0 100px ${isRunning ? glow.replace("0.4", "0.15") : "transparent"}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transform: `scale(${targetScale})`,
                transition: `transform ${transitionDuration}s ease-in-out, box-shadow 1.2s ease, background 1.2s ease, border-color 1.2s ease`,
                cursor: isRunning ? "default" : "pointer",
                gap: "0.25rem",
              }}
              onClick={!isRunning && !isComplete ? start : undefined}
            >
              {isRunning && currentPhase ? (
                <>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: accent,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    {currentPhase.name}
                  </span>
                  <span
                    style={{
                      fontSize: "4rem",
                      fontWeight: 900,
                      color: "#FDFAF5",
                      lineHeight: 1,
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {secondsLeft}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(253,250,245,0.45)",
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {currentPhase.sanskrit}
                  </span>
                </>
              ) : isComplete ? (
                <>
                  <span style={{ fontSize: "2rem" }}>🪷</span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: accent,
                      textAlign: "center",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Complete
                  </span>
                </>
              ) : (
                <>
                  <span
                    style={{
                      fontSize: "1.75rem",
                      color: "rgba(253,250,245,0.15)",
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    ॐ
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(253,250,245,0.3)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginTop: "0.25rem",
                    }}
                  >
                    tap to begin
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Round tracker */}
          {(isRunning || isComplete) && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {Array.from({ length: TOTAL_ROUNDS }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: "28px",
                      height: "4px",
                      borderRadius: "9999px",
                      backgroundColor: i < round || isComplete
                        ? accent
                        : "rgba(255,255,255,0.12)",
                      transition: "background-color 0.4s ease",
                    }}
                  />
                ))}
              </div>
              <span style={{ fontSize: "0.8rem", color: "rgba(253,250,245,0.35)", letterSpacing: "0.06em" }}>
                {isComplete ? "All rounds complete" : `Round ${round} of ${TOTAL_ROUNDS}`}
              </span>
            </div>
          )}

          {/* Controls */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {!isRunning && !isComplete && (
              <button
                onClick={start}
                style={{
                  background: `linear-gradient(135deg, ${selected.gradientFrom}, ${selected.accent})`,
                  border: "none",
                  borderRadius: "9999px",
                  padding: "0.875rem 2.5rem",
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  color: "#FDFAF5",
                  cursor: "pointer",
                  letterSpacing: "0.04em",
                }}
              >
                Begin Practice
              </button>
            )}
            {isRunning && (
              <button
                onClick={stop}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "9999px",
                  padding: "0.875rem 2.5rem",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "rgba(253,250,245,0.7)",
                  cursor: "pointer",
                }}
              >
                Stop
              </button>
            )}
            {isComplete && (
              <button
                onClick={start}
                style={{
                  background: `linear-gradient(135deg, ${selected.gradientFrom}, ${selected.accent})`,
                  border: "none",
                  borderRadius: "9999px",
                  padding: "0.875rem 2.5rem",
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  color: "#FDFAF5",
                  cursor: "pointer",
                }}
              >
                Practise Again
              </button>
            )}
          </div>
        </div>

        {/* Info panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <div>
            <div
              style={{
                display: "inline-block",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: accent,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.625rem",
              }}
            >
              {selected.meaning}
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "2rem",
                fontWeight: 800,
                color: "#FDFAF5",
                marginBottom: "0.25rem",
                lineHeight: 1.15,
              }}
            >
              {selected.name}
            </h3>
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.1rem",
                color: accent,
                marginBottom: "1.25rem",
                fontStyle: "italic",
              }}
            >
              {selected.sanskrit}
            </p>
            <p style={{ fontSize: "0.9375rem", color: "rgba(253,250,245,0.62)", lineHeight: 1.8 }}>
              {selected.description}
            </p>
          </div>

          {/* Phase breakdown */}
          <div>
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "rgba(253,250,245,0.35)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "0.875rem",
              }}
            >
              Pattern
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {selected.phases.map((p, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: phaseIdx === i && isRunning
                      ? `${accent}22`
                      : "rgba(255,255,255,0.04)",
                    border: phaseIdx === i && isRunning
                      ? `1px solid ${accent}66`
                      : "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "0.625rem",
                    padding: "0.625rem 0.875rem",
                    transition: "all 0.4s ease",
                    minWidth: "72px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: phaseIdx === i && isRunning ? accent : "rgba(253,250,245,0.55)",
                      lineHeight: 1,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {p.duration}s
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(253,250,245,0.35)", letterSpacing: "0.06em" }}>
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: phaseIdx === i && isRunning ? accent : "rgba(253,250,245,0.2)",
                      fontFamily: "'Playfair Display', Georgia, serif",
                      marginTop: "0.15rem",
                    }}
                  >
                    {p.sanskrit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instruction */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "0.875rem",
              padding: "1.25rem",
              borderLeft: `3px solid ${accent}66`,
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "rgba(253,250,245,0.3)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "0.625rem",
              }}
            >
              How to practise
            </div>
            <p style={{ fontSize: "0.875rem", color: "rgba(253,250,245,0.6)", lineHeight: 1.75, margin: 0 }}>
              {selected.instruction}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .technique-grid { grid-template-columns: 1fr !important; }
          .exercise-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
