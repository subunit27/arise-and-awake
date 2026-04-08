"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const DURATIONS = [5, 10, 15, 20, 30, 45, 60];
const INTERVAL_OPTIONS = [
  { label: "No intervals", value: 0 },
  { label: "Every 5 min", value: 5 },
  { label: "Every 10 min", value: 10 },
];

type Phase = "setup" | "active" | "paused" | "complete";

// Singing bowl sound via Web Audio API
function createBell(ctx: AudioContext, volume = 0.55) {
  const harmonics = [
    { freq: 432, gain: volume },
    { freq: 864, gain: volume * 0.38 },
    { freq: 1296, gain: volume * 0.18 },
  ];
  harmonics.forEach(({ freq, gain }) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.connect(g);
    g.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.value = freq;
    g.gain.setValueAtTime(gain, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 5);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 5.1);
  });
}

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

// SVG progress ring
function ProgressRing({
  total,
  remaining,
  size = 300,
  hidden,
}: {
  total: number;
  remaining: number;
  size?: number;
  hidden: boolean;
}) {
  const strokeWidth = 3;
  const r = size / 2 - strokeWidth * 2 - 8;
  const circ = 2 * Math.PI * r;
  const progress = total > 0 ? (total - remaining) / total : 0;
  const offset = circ * (1 - progress);

  return (
    <svg
      width={size}
      height={size}
      style={{ transform: "rotate(-90deg)", position: "absolute", inset: 0 }}
    >
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={strokeWidth}
      />
      {/* Progress */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={hidden ? "rgba(255,255,255,0.1)" : "rgba(253,250,245,0.55)"}
        strokeWidth={strokeWidth}
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 1s linear, stroke 0.8s ease" }}
      />
      {/* Tick marks at each quarter */}
      {[0, 90, 180, 270].map((a) => {
        const rad = (a * Math.PI) / 180;
        const ox = size / 2 + Math.cos(rad) * (r + 10);
        const oy = size / 2 + Math.sin(rad) * (r + 10);
        return (
          <circle key={a} cx={ox} cy={oy} r="2" fill="rgba(217,119,6,0.35)" />
        );
      })}
    </svg>
  );
}

export default function DhyanaTimer() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [durationMin, setDurationMin] = useState(10);
  const [intervalMin, setIntervalMin] = useState(0);
  const [openingBell, setOpeningBell] = useState(true);
  const [intention, setIntention] = useState("");
  const [showIntention, setShowIntention] = useState(false);

  const [remaining, setRemaining] = useState(0);
  const [timerHidden, setTimerHidden] = useState(false);
  const [pulseScale, setPulseScale] = useState(1);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const nextBellRef = useRef<number>(0); // seconds until next interval bell
  const remainingRef = useRef(0);

  const getAudioCtx = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext)();
    }
    return audioCtxRef.current;
  }, []);

  const ring = useCallback(() => {
    try {
      createBell(getAudioCtx());
    } catch (_) {}
  }, [getAudioCtx]);

  // Slow ambient pulse for active state
  useEffect(() => {
    if (phase !== "active") { setPulseScale(1); return; }
    let t = 0;
    const pulse = setInterval(() => {
      t += 0.04;
      setPulseScale(1 + Math.sin(t) * 0.045);
    }, 80);
    return () => clearInterval(pulse);
  }, [phase]);

  const start = useCallback(() => {
    const total = durationMin * 60;
    remainingRef.current = total;
    setRemaining(total);
    nextBellRef.current = intervalMin > 0 ? intervalMin * 60 : Infinity;
    setPhase("active");
    setTimerHidden(false);

    if (openingBell) setTimeout(() => ring(), 400);

    intervalRef.current = setInterval(() => {
      remainingRef.current -= 1;
      setRemaining(remainingRef.current);

      // Interval bell
      if (intervalMin > 0) {
        nextBellRef.current -= 1;
        if (nextBellRef.current <= 0) {
          ring();
          nextBellRef.current = intervalMin * 60;
        }
      }

      // Done
      if (remainingRef.current <= 0) {
        clearInterval(intervalRef.current!);
        ring();
        setTimeout(() => ring(), 2500); // double closing bell
        setPhase("complete");
      }
    }, 1000);
  }, [durationMin, intervalMin, openingBell, ring]);

  const pause = () => {
    clearInterval(intervalRef.current!);
    setPhase("paused");
  };

  const resume = () => {
    setPhase("active");
    if (openingBell) ring();
    intervalRef.current = setInterval(() => {
      remainingRef.current -= 1;
      setRemaining(remainingRef.current);
      if (intervalMin > 0) {
        nextBellRef.current -= 1;
        if (nextBellRef.current <= 0) {
          ring();
          nextBellRef.current = intervalMin * 60;
        }
      }
      if (remainingRef.current <= 0) {
        clearInterval(intervalRef.current!);
        ring();
        setTimeout(() => ring(), 2500);
        setPhase("complete");
      }
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current!);
    setPhase("setup");
    setRemaining(0);
    setTimerHidden(false);
  };

  useEffect(() => () => { clearInterval(intervalRef.current!); }, []);

  // ── SETUP ──
  if (phase === "setup") {
    return (
      <div style={{ maxWidth: "600px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.25rem" }}>

        {/* Duration */}
        <div>
          <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "rgba(253,250,245,0.4)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Session Duration
          </label>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {DURATIONS.map((d) => (
              <button
                key={d}
                onClick={() => setDurationMin(d)}
                style={{
                  padding: "0.6rem 1.125rem",
                  borderRadius: "9999px",
                  border: durationMin === d ? "1.5px solid rgba(253,250,245,0.5)" : "1.5px solid rgba(255,255,255,0.1)",
                  background: durationMin === d ? "rgba(253,250,245,0.1)" : "transparent",
                  color: durationMin === d ? "#FDFAF5" : "rgba(253,250,245,0.35)",
                  fontSize: "0.9rem",
                  fontWeight: durationMin === d ? 700 : 400,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {d} min
              </button>
            ))}
          </div>
        </div>

        {/* Interval bells */}
        <div>
          <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "rgba(253,250,245,0.4)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Interval Bells
          </label>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {INTERVAL_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setIntervalMin(opt.value)}
                style={{
                  padding: "0.6rem 1.125rem",
                  borderRadius: "9999px",
                  border: intervalMin === opt.value ? "1.5px solid rgba(253,250,245,0.5)" : "1.5px solid rgba(255,255,255,0.1)",
                  background: intervalMin === opt.value ? "rgba(253,250,245,0.1)" : "transparent",
                  color: intervalMin === opt.value ? "#FDFAF5" : "rgba(253,250,245,0.35)",
                  fontSize: "0.875rem",
                  fontWeight: intervalMin === opt.value ? 700 : 400,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Opening bell toggle */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: "0.875rem", color: "rgba(253,250,245,0.65)", fontWeight: 500 }}>Opening bell</div>
            <div style={{ fontSize: "0.775rem", color: "rgba(253,250,245,0.3)", marginTop: "0.2rem" }}>A singing bowl tone to mark the beginning</div>
          </div>
          <button
            onClick={() => setOpeningBell(!openingBell)}
            style={{
              width: "44px",
              height: "24px",
              borderRadius: "9999px",
              border: "none",
              background: openingBell ? "rgba(217,119,6,0.6)" : "rgba(255,255,255,0.1)",
              cursor: "pointer",
              position: "relative",
              transition: "background 0.25s ease",
              flexShrink: 0,
            }}
          >
            <div style={{
              position: "absolute",
              top: "3px",
              left: openingBell ? "23px" : "3px",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#FDFAF5",
              transition: "left 0.25s ease",
            }} />
          </button>
        </div>

        {/* Intention (optional) */}
        <div>
          <button
            onClick={() => setShowIntention(!showIntention)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: 0,
              marginBottom: showIntention ? "0.875rem" : 0,
            }}
          >
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(253,250,245,0.3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Set an intention
            </span>
            <svg
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(253,250,245,0.25)" strokeWidth="2"
              style={{ transform: showIntention ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s ease" }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
            <span style={{ fontSize: "0.7rem", color: "rgba(253,250,245,0.2)", letterSpacing: "0.06em" }}>optional</span>
          </button>
          {showIntention && (
            <textarea
              value={intention}
              onChange={(e) => setIntention(e.target.value)}
              placeholder="What do you bring to this sit? What do you let go of?"
              rows={2}
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "0.75rem",
                padding: "0.875rem 1rem",
                color: "#FDFAF5",
                fontSize: "0.9rem",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                resize: "none",
                outline: "none",
                lineHeight: 1.7,
              }}
            />
          )}
        </div>

        {/* Begin */}
        <button
          onClick={start}
          style={{
            background: "linear-gradient(135deg, #1E1B4B, #4338CA)",
            border: "1px solid rgba(165,180,252,0.25)",
            borderRadius: "9999px",
            padding: "1rem 3rem",
            fontSize: "1rem",
            fontWeight: 700,
            color: "#FDFAF5",
            cursor: "pointer",
            letterSpacing: "0.05em",
            alignSelf: "center",
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
          }}
        >
          <span style={{ fontSize: "1rem" }}>🪷</span>
          Begin Session
        </button>
      </div>
    );
  }

  // ── ACTIVE / PAUSED ──
  if (phase === "active" || phase === "paused") {
    const total = durationMin * 60;
    const elapsed = total - remaining;
    const pct = Math.round((elapsed / total) * 100);

    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem" }}>
        {/* Intention reminder */}
        {intention && !timerHidden && (
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "0.9375rem",
              color: "rgba(253,250,245,0.35)",
              textAlign: "center",
              maxWidth: "420px",
              lineHeight: 1.75,
            }}
          >
            &ldquo;{intention}&rdquo;
          </p>
        )}

        {/* Timer circle */}
        <div
          onClick={() => setTimerHidden(!timerHidden)}
          style={{
            position: "relative",
            width: "300px",
            height: "300px",
            cursor: "pointer",
            userSelect: "none",
          }}
          title="Tap to hide/show timer"
        >
          {/* Ambient pulse */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
              transform: `scale(${pulseScale})`,
              transition: "transform 0.08s ease",
              pointerEvents: "none",
            }}
          />

          {/* Outer glow ring */}
          <div
            style={{
              position: "absolute",
              inset: "20px",
              borderRadius: "50%",
              boxShadow: phase === "active"
                ? `0 0 60px rgba(99,102,241,0.2), 0 0 120px rgba(99,102,241,0.08)`
                : "none",
              transition: "box-shadow 1s ease",
              pointerEvents: "none",
            }}
          />

          <ProgressRing total={total} remaining={remaining} size={300} hidden={timerHidden} />

          {/* Center content */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.25rem",
            }}
          >
            {timerHidden ? (
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "2.75rem",
                  color: "rgba(253,250,245,0.08)",
                  lineHeight: 1,
                }}
              >
                ॐ
              </span>
            ) : (
              <>
                {phase === "paused" && (
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "rgba(253,250,245,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                    Paused
                  </span>
                )}
                <span
                  style={{
                    fontSize: "3rem",
                    fontWeight: 200,
                    color: "#FDFAF5",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {formatTime(remaining)}
                </span>
                <span style={{ fontSize: "0.7rem", color: "rgba(253,250,245,0.22)", letterSpacing: "0.1em", marginTop: "0.25rem" }}>
                  {pct}% complete
                </span>
              </>
            )}
          </div>
        </div>

        {timerHidden && (
          <p style={{ fontSize: "0.72rem", color: "rgba(253,250,245,0.18)", letterSpacing: "0.1em" }}>
            tap to reveal
          </p>
        )}

        {/* Controls */}
        <div style={{ display: "flex", gap: "0.75rem" }}>
          {phase === "active" ? (
            <button
              onClick={pause}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "9999px",
                padding: "0.8rem 1.875rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "rgba(253,250,245,0.65)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
              Pause
            </button>
          ) : (
            <button
              onClick={resume}
              style={{
                background: "linear-gradient(135deg, #1E1B4B, #4338CA)",
                border: "1px solid rgba(165,180,252,0.25)",
                borderRadius: "9999px",
                padding: "0.8rem 1.875rem",
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "#FDFAF5",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Resume
            </button>
          )}
          <button
            onClick={stop}
            style={{
              background: "none",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "9999px",
              padding: "0.8rem 1.5rem",
              fontSize: "0.875rem",
              color: "rgba(253,250,245,0.25)",
              cursor: "pointer",
            }}
          >
            End
          </button>
        </div>

        <p style={{ fontSize: "0.75rem", color: "rgba(253,250,245,0.18)", textAlign: "center" }}>
          Tap the circle to hide the timer
        </p>
      </div>
    );
  }

  // ── COMPLETE ──
  if (phase === "complete") {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", textAlign: "center" }}>
        {/* Glow orb */}
        <div
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(217,119,6,0.25) 0%, rgba(99,102,241,0.15) 50%, transparent 80%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 60px rgba(217,119,6,0.15)",
          }}
        >
          <span style={{ fontSize: "3.5rem" }}>🪷</span>
        </div>

        <div>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "2rem",
              fontWeight: 700,
              color: "#FDFAF5",
              marginBottom: "0.5rem",
            }}
          >
            Session Complete
          </h3>
          <p style={{ fontSize: "0.9375rem", color: "rgba(253,250,245,0.45)", lineHeight: 1.75 }}>
            {durationMin} minutes of stillness. Well done.
          </p>
        </div>

        {intention && (
          <div
            style={{
              backgroundColor: "rgba(217,119,6,0.08)",
              border: "1px solid rgba(217,119,6,0.2)",
              borderRadius: "0.875rem",
              padding: "1.25rem 1.75rem",
              maxWidth: "440px",
            }}
          >
            <p style={{ fontSize: "0.875rem", color: "rgba(253,250,245,0.35)", marginBottom: "0.35rem", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.65rem", fontWeight: 700 }}>
              Your intention
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: "0.9375rem",
                color: "rgba(253,250,245,0.6)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              &ldquo;{intention}&rdquo;
            </p>
          </div>
        )}

        <blockquote
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontSize: "1rem",
            color: "rgba(253,250,245,0.35)",
            maxWidth: "420px",
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          &ldquo;Meditation is the one thing that will carry us to the other shore.&rdquo;
          <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.75rem", color: "#D97706", fontStyle: "normal", fontWeight: 600 }}>
            — Swami Vivekananda
          </cite>
        </blockquote>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button
            onClick={() => { setPhase("setup"); setTimerHidden(false); }}
            style={{
              background: "linear-gradient(135deg, #1E1B4B, #4338CA)",
              border: "1px solid rgba(165,180,252,0.25)",
              borderRadius: "9999px",
              padding: "0.875rem 2.25rem",
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "#FDFAF5",
              cursor: "pointer",
            }}
          >
            Sit Again
          </button>
        </div>
      </div>
    );
  }

  return null;
}
