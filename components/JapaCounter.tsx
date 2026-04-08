"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const MANTRAS = [
  {
    id: "om",
    name: "Om",
    sanskrit: "ॐ",
    transliteration: "Aum",
    meaning: "The primordial sound — the vibration from which all creation emerged. The name of the infinite.",
    vivekananda: "Om is the symbol of God.",
    color: "#D97706",
    glow: "rgba(217,119,6,0.4)",
    gradFrom: "#78350F",
    gradTo: "#D97706",
  },
  {
    id: "soham",
    name: "Soham",
    sanskrit: "सोऽहम्",
    transliteration: "So · Hum",
    meaning: "I am That. The breath itself speaks it — 'So' on the inhale, 'Ham' on the exhale.",
    vivekananda: "You are the Atman — eternal, pure, free.",
    color: "#4338CA",
    glow: "rgba(67,56,202,0.4)",
    gradFrom: "#1E1B4B",
    gradTo: "#4338CA",
  },
  {
    id: "namah-shivaya",
    name: "Om Namah Shivaya",
    sanskrit: "ॐ नमः शिवाय",
    transliteration: "Om Na-mah Shi-vaa-ya",
    meaning: "I bow to Shiva — the pure consciousness within all beings. The Panchakshara: five sacred syllables.",
    vivekananda: "Shiva is the eternal witness — your own deepest self.",
    color: "#C2410C",
    glow: "rgba(194,65,12,0.4)",
    gradFrom: "#7C2D12",
    gradTo: "#C2410C",
  },
  {
    id: "gayatri",
    name: "Gayatri",
    sanskrit: "ॐ भूर्भुवः स्वः",
    transliteration: "Om Bhur Bhuva Svaha",
    meaning: "We meditate on the divine radiance of the sun. May it illuminate our intellect.",
    vivekananda: "The Gayatri is the essence of all the Vedas.",
    color: "#D97706",
    glow: "rgba(217,119,6,0.4)",
    gradFrom: "#451A03",
    gradTo: "#B45309",
  },
  {
    id: "ram",
    name: "Shri Ram",
    sanskrit: "श्री राम",
    transliteration: "Shree Raam",
    meaning: "The name of God as the highest ideal of virtue and truth. Vivekananda's beloved. Gandhi's last word.",
    vivekananda: "Ram is the one power that can lift the world.",
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.4)",
    gradFrom: "#3B0764",
    gradTo: "#7C3AED",
  },
  {
    id: "mahamrityunjaya",
    name: "Mahamrityunjaya",
    sanskrit: "ॐ त्र्यम्बकम्",
    transliteration: "Om Tryambakam...",
    meaning: "The great death-conquering mantra. For healing, courage, and liberation from the fear of death.",
    vivekananda: "Fear is the root of all misery. This mantra burns it at the root.",
    color: "#059669",
    glow: "rgba(5,150,105,0.4)",
    gradFrom: "#064E3B",
    gradTo: "#059669",
  },
];

// SVG mala constants
const SVG_SIZE = 400;
const CENTER = 200;
const RING_R = 158;
const BEAD_R = 3.4;
const GURU_R = 6.5;
const TOTAL = 108;

function getBeadPos(index: number, total: number) {
  // Guru bead at top (-π/2). Counting beads start just after, go clockwise.
  const angle = -Math.PI / 2 + ((index + 1) / total) * 2 * Math.PI;
  return {
    x: CENTER + Math.cos(angle) * RING_R,
    y: CENTER + Math.sin(angle) * RING_R,
  };
}

// Wooden bead click sound
function playClick(ctx: AudioContext) {
  const buf = ctx.createBuffer(1, ctx.sampleRate * 0.06, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.015));
  }
  const src = ctx.createBufferSource();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 900;
  filter.Q.value = 0.8;
  src.buffer = buf;
  src.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0.35, ctx.currentTime);
  src.start();
}

// Bell for round complete
function playBell(ctx: AudioContext) {
  const harmonics = [
    { freq: 432, gain: 0.5 },
    { freq: 864, gain: 0.2 },
    { freq: 1296, gain: 0.1 },
  ];
  harmonics.forEach(({ freq, gain }) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.connect(g);
    g.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.value = freq;
    g.gain.setValueAtTime(gain, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.5);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 5);
  });
}

function loadStats() {
  if (typeof window === "undefined") return { streak: 0, todayBeads: 0, totalMalas: 0 };
  try {
    const raw = localStorage.getItem("japa-stats");
    if (!raw) return { streak: 0, todayBeads: 0, totalMalas: 0 };
    const s = JSON.parse(raw);
    const today = new Date().toDateString();
    if (s.lastDate === today) return s;
    // New day
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const newStreak = s.lastDate === yesterday.toDateString() ? (s.streak ?? 0) + 1 : 1;
    return { streak: newStreak, todayBeads: 0, totalMalas: s.totalMalas ?? 0 };
  } catch {
    return { streak: 0, todayBeads: 0, totalMalas: 0 };
  }
}

function saveStats(streak: number, todayBeads: number, totalMalas: number) {
  if (typeof window === "undefined") return;
  localStorage.setItem(
    "japa-stats",
    JSON.stringify({ lastDate: new Date().toDateString(), streak, todayBeads, totalMalas })
  );
}

export default function JapaCounter() {
  const [mantra, setMantra] = useState(MANTRAS[0]);
  const [count, setCount] = useState(0); // 0–107 within current mala
  const [rounds, setRounds] = useState(0); // malas this session
  const [ripple, setRipple] = useState(false);
  const [roundFlash, setRoundFlash] = useState(false);
  const [started, setStarted] = useState(false);
  const [stats, setStats] = useState({ streak: 0, todayBeads: 0, totalMalas: 0 });

  const audioCtxRef = useRef<AudioContext | null>(null);
  const countRef = useRef(0);
  const roundsRef = useRef(0);
  const statsRef = useRef(stats);
  statsRef.current = stats;

  useEffect(() => { setStats(loadStats()); }, []);

  const getCtx = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    return audioCtxRef.current;
  }, []);

  const tap = useCallback(() => {
    setStarted(true);
    try { playClick(getCtx()); } catch (_) {}

    setRipple(true);
    setTimeout(() => setRipple(false), 220);

    const next = countRef.current + 1;

    if (next >= TOTAL) {
      // Round complete
      countRef.current = 0;
      roundsRef.current += 1;
      setCount(0);
      setRounds(roundsRef.current);
      setRoundFlash(true);
      setTimeout(() => setRoundFlash(false), 2200);
      try { playBell(getCtx()); } catch (_) {}

      const newTodayBeads = statsRef.current.todayBeads + next;
      const newTotalMalas = statsRef.current.totalMalas + 1;
      const newStats = { ...statsRef.current, todayBeads: newTodayBeads, totalMalas: newTotalMalas };
      setStats(newStats);
      saveStats(newStats.streak, newStats.todayBeads, newStats.totalMalas);
    } else {
      countRef.current = next;
      setCount(next);

      const newTodayBeads = statsRef.current.todayBeads + 1;
      const newStats = { ...statsRef.current, todayBeads: newTodayBeads };
      setStats(newStats);
      saveStats(newStats.streak, newStats.todayBeads, newStats.totalMalas);
    }
  }, [getCtx]);

  // Spacebar / Enter
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        tap();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [tap]);

  const reset = () => {
    countRef.current = 0;
    roundsRef.current = 0;
    setCount(0);
    setRounds(0);
    setStarted(false);
  };

  const switchMantra = (m: typeof MANTRAS[0]) => {
    setMantra(m);
    reset();
  };

  const guruX = CENTER + Math.cos(-Math.PI / 2) * RING_R;
  const guruY = CENTER + Math.sin(-Math.PI / 2) * RING_R - 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem" }}>

      {/* Mantra selector */}
      <div style={{ width: "100%", overflowX: "auto", paddingBottom: "0.5rem" }}>
        <div style={{ display: "flex", gap: "0.625rem", minWidth: "max-content", padding: "0 0.25rem" }}>
          {MANTRAS.map((m) => (
            <button
              key={m.id}
              onClick={() => switchMantra(m)}
              style={{
                background: mantra.id === m.id
                  ? `linear-gradient(135deg, ${m.gradFrom}, ${m.gradTo})`
                  : "rgba(255,255,255,0.04)",
                border: mantra.id === m.id
                  ? `1.5px solid ${m.color}66`
                  : "1.5px solid rgba(255,255,255,0.08)",
                borderRadius: "0.75rem",
                padding: "0.75rem 1.125rem",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.25s ease",
                minWidth: "130px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.25rem",
                  color: mantra.id === m.id ? "#FDFAF5" : "rgba(253,250,245,0.3)",
                  lineHeight: 1,
                  marginBottom: "0.3rem",
                }}
              >
                {m.sanskrit.length > 6 ? m.sanskrit.slice(0, 5) + "…" : m.sanskrit}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: mantra.id === m.id ? m.color : "rgba(253,250,245,0.25)",
                  letterSpacing: "0.06em",
                }}
              >
                {m.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mantra info */}
      <div style={{ textAlign: "center", maxWidth: "500px" }}>
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.75rem",
            color: mantra.color,
            marginBottom: "0.5rem",
            letterSpacing: "0.02em",
          }}
        >
          {mantra.sanskrit}
        </p>
        <p style={{ fontSize: "0.8125rem", color: "rgba(253,250,245,0.35)", letterSpacing: "0.12em", marginBottom: "0.625rem" }}>
          {mantra.transliteration}
        </p>
        <p style={{ fontSize: "0.9rem", color: "rgba(253,250,245,0.5)", lineHeight: 1.75 }}>
          {mantra.meaning}
        </p>
      </div>

      {/* The Mala */}
      <div style={{ position: "relative" }}>
        {/* Round complete flash */}
        {roundFlash && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${mantra.glow} 0%, transparent 70%)`,
              animation: "none",
              pointerEvents: "none",
              zIndex: 10,
            }}
          />
        )}

        <svg
          width={SVG_SIZE}
          height={SVG_SIZE}
          style={{ display: "block", maxWidth: "100%" }}
          viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
        >
          {/* Outer ambient glow */}
          <defs>
            <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={mantra.color} stopOpacity="0.06" />
              <stop offset="100%" stopColor={mantra.color} stopOpacity="0" />
            </radialGradient>
            <filter id="beadGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <circle cx={CENTER} cy={CENTER} r={SVG_SIZE / 2 - 4} fill="url(#glowGrad)" />

          {/* String */}
          <circle
            cx={CENTER} cy={CENTER} r={RING_R}
            fill="none"
            stroke={mantra.color}
            strokeWidth="1"
            strokeOpacity="0.15"
          />

          {/* 108 counting beads */}
          {Array.from({ length: TOTAL }, (_, i) => {
            const pos = getBeadPos(i, TOTAL);
            const filled = i < count;
            const isCurrent = i === count && started;
            return (
              <circle
                key={i}
                cx={pos.x}
                cy={pos.y}
                r={isCurrent ? BEAD_R + 1.5 : BEAD_R}
                fill={filled || isCurrent ? mantra.color : "rgba(255,255,255,0.07)"}
                fillOpacity={filled ? 1 : isCurrent ? 0.9 : 1}
                stroke={isCurrent ? mantra.color : "none"}
                strokeWidth={isCurrent ? "1.5" : "0"}
                strokeOpacity="0.6"
                filter={isCurrent ? "url(#beadGlow)" : undefined}
                style={{ transition: "fill 0.15s ease, r 0.15s ease" }}
              />
            );
          })}

          {/* Guru bead */}
          <circle
            cx={guruX} cy={guruY} r={GURU_R}
            fill="#D97706"
            fillOpacity="0.85"
            stroke="#FDE68A"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <circle cx={guruX} cy={guruY} r={GURU_R - 3} fill="#FDE68A" fillOpacity="0.4" />

          {/* Tap ripple */}
          {ripple && (
            <circle
              cx={CENTER} cy={CENTER} r="85"
              fill="none"
              stroke={mantra.color}
              strokeWidth="1.5"
              strokeOpacity="0.4"
              style={{
                transformOrigin: `${CENTER}px ${CENTER}px`,
                animation: "rippleOut 0.22s ease-out forwards",
              }}
            />
          )}

          {/* Center tap zone */}
          <circle
            cx={CENTER} cy={CENTER} r="130"
            fill="rgba(0,0,0,0)"
            style={{ cursor: "pointer" }}
            onClick={tap}
          />

          {/* Center content */}
          <text
            x={CENTER} y={CENTER - 28}
            textAnchor="middle"
            fill={mantra.color}
            fontSize="28"
            fontFamily="'Playfair Display', Georgia, serif"
            opacity="0.85"
          >
            {mantra.sanskrit.length > 8 ? "ॐ" : mantra.sanskrit}
          </text>

          <text
            x={CENTER} y={CENTER + 22}
            textAnchor="middle"
            fill="#FDFAF5"
            fontSize="42"
            fontWeight="200"
            fontFamily="sans-serif"
            letterSpacing="-1"
          >
            {count === 0 && !started ? "108" : count}
          </text>

          <text
            x={CENTER} y={CENTER + 46}
            textAnchor="middle"
            fill="rgba(253,250,245,0.25)"
            fontSize="11"
            fontFamily="sans-serif"
            letterSpacing="2"
          >
            {count === 0 && !started ? "BEADS" : `OF 108`}
          </text>

          {!started && (
            <text
              x={CENTER} y={CENTER + 68}
              textAnchor="middle"
              fill="rgba(253,250,245,0.18)"
              fontSize="10"
              fontFamily="sans-serif"
              letterSpacing="1.5"
            >
              TAP · SPACEBAR
            </text>
          )}
        </svg>
      </div>

      {/* Round complete message */}
      {roundFlash && (
        <div
          style={{
            backgroundColor: `${mantra.color}18`,
            border: `1px solid ${mantra.color}44`,
            borderRadius: "0.875rem",
            padding: "0.875rem 1.75rem",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: mantra.color, margin: 0 }}>
            🪷 &nbsp; Mala complete — {rounds} {rounds === 1 ? "round" : "rounds"} this session
          </p>
        </div>
      )}

      {/* Session stats */}
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
        {[
          { label: "This session", value: rounds, unit: rounds === 1 ? "mala" : "malas" },
          { label: "Today", value: stats.todayBeads, unit: "beads" },
          { label: "All time", value: stats.totalMalas, unit: "malas" },
          { label: "Streak", value: stats.streak, unit: stats.streak === 1 ? "day" : "days" },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "1.625rem",
                fontWeight: 700,
                color: "#FDFAF5",
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: "0.7rem", color: "rgba(253,250,245,0.3)", marginTop: "0.2rem", letterSpacing: "0.06em" }}>
              {s.unit}
            </div>
            <div style={{ fontSize: "0.65rem", color: "rgba(253,250,245,0.2)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Reset */}
      {started && (
        <button
          onClick={reset}
          style={{
            background: "none",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "9999px",
            padding: "0.6rem 1.5rem",
            fontSize: "0.8125rem",
            color: "rgba(253,250,245,0.25)",
            cursor: "pointer",
          }}
        >
          Reset mala
        </button>
      )}

      <style>{`
        @keyframes rippleOut {
          from { transform: scale(0.6); opacity: 0.6; }
          to   { transform: scale(1.4); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
