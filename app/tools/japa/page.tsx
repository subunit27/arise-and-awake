import type { Metadata } from "next";
import Link from "next/link";
import JapaCounter from "@/components/JapaCounter";

export const metadata: Metadata = {
  title: "Japa Counter — Digital Mala | Arise & Awake",
  description:
    "A digital mala for mantra repetition. 108 beads, 6 sacred mantras, streak tracking. Tap or press spacebar to count.",
};

function MalaDecor() {
  const beads = Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * 2 * Math.PI - Math.PI / 2;
    return { x: 50 + Math.cos(angle) * 42, y: 50 + Math.sin(angle) * 42 };
  });
  return (
    <svg viewBox="0 0 100 100" style={{ width: "72px", height: "72px" }}>
      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(217,119,6,0.15)" strokeWidth="1" />
      {beads.map((b, i) => (
        <circle key={i} cx={b.x} cy={b.y} r={i % 6 === 0 ? 3.5 : 2} fill="#D97706" fillOpacity={i % 6 === 0 ? 0.7 : 0.25} />
      ))}
      <circle cx="50" cy="50" r="16" fill="rgba(217,119,6,0.08)" stroke="rgba(217,119,6,0.3)" strokeWidth="1.5" />
      <text x="50" y="55" textAnchor="middle" fontSize="13" fill="#D97706" fontFamily="serif" opacity="0.8">ॐ</text>
    </svg>
  );
}

export default function JapaPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(170deg, #0A0500 0%, #1A0E00 45%, #1E1B4B 100%)",
          padding: "5rem 1.5rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "450px", height: "450px", borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "380px", height: "380px", borderRadius: "50%", background: "radial-gradient(circle, rgba(194,65,12,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #D97706, #C2410C, #D97706, transparent)" }} />

        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <Link
            href="/tools"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem", color: "rgba(253,250,245,0.35)", textDecoration: "none", marginBottom: "2.5rem", letterSpacing: "0.04em" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Tools
          </Link>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.75rem" }}>
            <MalaDecor />
          </div>

          <div style={{ display: "inline-block", backgroundColor: "rgba(217,119,6,0.12)", border: "1px solid rgba(217,119,6,0.35)", borderRadius: "9999px", padding: "0.35rem 1.125rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "0.775rem", fontWeight: 700, color: "#FDE68A", letterSpacing: "0.1em" }}>
              जप &nbsp;·&nbsp; Japa
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
            The Digital{" "}
            <span style={{ color: "#D97706" }}>Mala</span>
          </h1>

          <p style={{ fontSize: "clamp(1rem, 2.2vw, 1.15rem)", color: "rgba(253,250,245,0.55)", lineHeight: 1.85, maxWidth: "520px", margin: "0 auto 2rem" }}>
            108 beads. One mantra. The oldest technology for stilling the mind — now in your hands.
          </p>

          <blockquote style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.9875rem", fontStyle: "italic", color: "rgba(253,250,245,0.38)", margin: 0, borderTop: "1px solid rgba(217,119,6,0.18)", paddingTop: "1.5rem" }}>
            &ldquo;Repetition of the Name of God is the easiest way in this age.&rdquo;
            <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.8rem", color: "#D97706", fontStyle: "normal", fontWeight: 600 }}>
              — Swami Vivekananda
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── WHAT IS JAPA ── */}
      <section style={{ backgroundColor: "#F5EFE0", borderBottom: "1px solid #EDE8DF", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
          {[
            { sanskrit: "जप", word: "Japa", def: "The repetition of a mantra or divine name. Each repetition is a bead counted on the mala — a way of anchoring the wandering mind to the infinite.", color: "#D97706" },
            { sanskrit: "माला", word: "Mala", def: "A string of 108 beads, plus one guru bead. The number 108 is sacred — 1 (God), 0 (humility), 8 (infinity). 108 Upanishads. 108 names of the divine.", color: "#C2410C" },
            { sanskrit: "नाम", word: "Nama", def: "The divine name. In Bhakti Yoga, repeating God's name with love IS the practice — not a preparation for it. The name and the named become one.", color: "#4338CA" },
          ].map((item) => (
            <div key={item.word} style={{ backgroundColor: "#FDFAF5", border: "1px solid #EDE8DF", borderRadius: "1rem", padding: "1.75rem", borderTop: `3px solid ${item.color}` }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "2rem", color: item.color, marginBottom: "0.25rem" }}>{item.sanskrit}</div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: item.color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{item.word}</div>
              <p style={{ fontSize: "0.9375rem", color: "#5C5348", lineHeight: 1.8, margin: 0 }}>{item.def}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE COUNTER ── */}
      <section
        style={{
          background: "linear-gradient(170deg, #0A0500 0%, #0F0C24 50%, #0A0500 100%)",
          padding: "5rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(217,119,6,0.4), rgba(194,65,12,0.4), rgba(217,119,6,0.4), transparent)" }} />

        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#D97706", letterSpacing: "0.15em", textTransform: "uppercase" }}>Your Mala</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#FDFAF5", marginTop: "0.75rem", letterSpacing: "-0.02em" }}>
              Begin Your Practice
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(253,250,245,0.35)", marginTop: "0.625rem" }}>
              Choose your mantra. Tap the mala or press spacebar.
            </p>
          </div>

          <JapaCounter />
        </div>
      </section>

      {/* ── HOW TO PRACTISE ── */}
      <section style={{ backgroundColor: "#FDFAF5", padding: "5rem 1.5rem", borderBottom: "1px solid #EDE8DF" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#D97706", letterSpacing: "0.12em", textTransform: "uppercase" }}>The Method</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", fontWeight: 700, color: "#1E1B4B", marginTop: "0.625rem", letterSpacing: "-0.02em" }}>
              How to Practise Japa
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "1.25rem" }}>
            {[
              { icon: "🧘", title: "Sit first", desc: "Do your pranayama and a few minutes of stillness before japa. The prepared mind receives the mantra more deeply." },
              { icon: "🔔", title: "Set an intention", desc: "Before the first bead, pause. Why are you here? Offer this practice to something larger than yourself." },
              { icon: "👄", title: "Lips or mind", desc: "Beginners: murmur quietly. Intermediate: lips move, no sound. Advanced: japa in the mind alone — the most powerful form." },
              { icon: "🪷", title: "Guru bead", desc: "When you reach the guru bead, don't cross it. Reverse direction for the next mala. The guru bead is a boundary of reverence." },
              { icon: "📿", title: "108 repetitions", desc: "One full mala = 108 repetitions. Three malas (324) is a traditional daily practice. Begin with one — consistency beats quantity." },
              { icon: "🌅", title: "Best time", desc: "Morning, before the world has spoken to you. The mind is clear. The practice sets the tone for the entire day." },
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: "#F5EFE0", border: "1px solid #EDE8DF", borderRadius: "0.875rem", padding: "1.375rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1E1B4B", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#5C5348", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section style={{ background: "linear-gradient(135deg, #1A0E00 0%, #1E1B4B 100%)", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "2rem" }}>
            {[...Array(5)].map((_, i) => (
              <div key={i} style={{ width: i === 2 ? "8px" : "5px", height: i === 2 ? "8px" : "5px", borderRadius: "50%", backgroundColor: "#D97706", opacity: i === 2 ? 1 : 0.3, alignSelf: "center" }} />
            ))}
          </div>

          <blockquote style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.375rem, 3.5vw, 2rem)", fontWeight: 600, fontStyle: "italic", color: "#FDFAF5", lineHeight: 1.6, marginBottom: "1.75rem" }}>
            &ldquo;The name of God repeated with love is all we need in this world and the next.&rdquo;
          </blockquote>
          <p style={{ fontSize: "0.875rem", color: "#D97706", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "3rem" }}>— Swami Vivekananda</p>

          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/tools/dhyana" style={{ textDecoration: "none", display: "inline-block", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(253,250,245,0.55)", fontWeight: 600, fontSize: "0.875rem", padding: "0.75rem 1.75rem", borderRadius: "9999px" }}>
              ← Dhyana Timer
            </Link>
            <Link href="/tools" style={{ textDecoration: "none", display: "inline-block", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(253,250,245,0.35)", fontWeight: 500, fontSize: "0.875rem", padding: "0.75rem 1.75rem", borderRadius: "9999px" }}>
              All Tools
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
