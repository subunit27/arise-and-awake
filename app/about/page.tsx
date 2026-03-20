import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The origin story of Arise & Awake — rooted in Swami Vivekananda's teachings and the wisdom of Guru Baba Hardev Singh Ji.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #1E1B4B 0%, #312E81 100%)",
          padding: "5rem 1.5rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(217,119,6,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#FDE68A",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.25rem",
            }}
          >
            The Philosophy
          </span>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 900,
              color: "#FDFAF5",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              letterSpacing: "-0.025em",
            }}
          >
            What is Arise &amp; Awake?
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              color: "rgba(253, 250, 245, 0.7)",
              lineHeight: 1.8,
              maxWidth: "560px",
            }}
          >
            A philosophy. A practice. A refusal. Born from one Guru&apos;s words
            and three thousand years of human striving.
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "4rem 1.5rem 2rem" }}>
        {/* The Lineage */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#D97706",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.25rem",
            }}
          >
            The Lineage
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#1E1B4B",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            It Started With Four Words
          </h2>

          <div className="prose-arise">
            <p>
              My Guru, Baba Hardev Singh Ji, told me about Swami Vivekananda —
              not as a historical figure, but as a living force. He shared four
              words in Punjabi that changed the shape of my life:
            </p>

            <blockquote>
              <p>Jago. Aur. Jagao. Wake up. And awaken others.</p>
            </blockquote>

            <p>
              Vivekananda&apos;s full command — &ldquo;Arise, Awake, and Stop Not Till the
              Goal is Reached&rdquo; — comes from the Katha Upanishad, an ancient
              dialogue between a young seeker named Nachiketa and Yama, the god
              of death. Nachiketa sits at Death&apos;s door for three days without
              food, demanding the ultimate answer. Death, impressed by his
              refusal to leave, gives him everything.
            </p>

            <p>
              That story is not mythology. It&apos;s a template. And this platform is
              built on it.
            </p>
          </div>
        </div>

        {/* The Mission */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#D97706",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.25rem",
            }}
          >
            The Mission
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#1E1B4B",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            One Light Can Light a Million Lights
          </h2>

          <div className="prose-arise">
            <p>
              Arise &amp; Awake exists to be a wick-to-wick transmission — to take
              what was given to me and pass it on with full force, full honesty,
              full fire.
            </p>

            <p>
              This is not another self-help platform. It doesn&apos;t sell morning
              routines or productivity systems. It writes about what it means to
              be genuinely alive — to carry the ancient wisdom of Vivekananda,
              the Bhagavad Gita, the Stoics, and the great builders into the
              present moment, and to act from it.
            </p>

            <p>
              The philosophy has five pillars: <strong>goal setting</strong> as
              a sacred act, <strong>striving</strong> as a spiritual practice,
              the <strong>intersection of wisdom and ambition</strong>, the
              courage of <strong>authenticity</strong>, and the commitment to{" "}
              <strong>rise to meet every challenge</strong> — not because it is
              easy, but because that is what aliveness requires.
            </p>
          </div>
        </div>

        {/* BHAG */}
        <div
          style={{
            backgroundColor: "#1E1B4B",
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginBottom: "3.5rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(217,119,6,0.2) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#FDE68A",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Our BHAG
            </span>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.375rem, 3.5vw, 2rem)",
                fontWeight: 800,
                color: "#FDFAF5",
                lineHeight: 1.3,
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              To awaken 1 billion people to the understanding that they are the
              light — and that their rising rises the world.
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "rgba(253,250,245,0.65)",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              Not through virality. Through transmission. One genuine spark to
              one cold wick at a time, multiplying across generations, across
              geographies, across the full span of human possibility.
            </p>
          </div>
        </div>

        {/* Why Vivekananda */}
        <div style={{ marginBottom: "4rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#D97706",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.25rem",
            }}
          >
            The Inspiration
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#1E1B4B",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Why Swami Vivekananda?
          </h2>

          <div className="prose-arise">
            <p>
              He was 30 years old when he walked into the Parliament of the
              World&apos;s Religions in Chicago in 1893 — unknown, unsponsored,
              without a confirmed slot on the program. He opened with
              &ldquo;Sisters and brothers of America&rdquo; and the audience stood and
              applauded for two minutes.
            </p>

            <p>
              He died at 39. In nine years of active teaching, he brought the
              most sophisticated philosophical tradition in human history to the
              West — and did it in plain language, with fire, with humor, with
              zero compromise.
            </p>

            <p>
              He didn&apos;t soften Vedanta to make it palatable. He made it useful.
              He showed that the deepest spiritual understanding and the most
              intense engagement with the world were not contradictions — they
              were the same force, seen from two angles.
            </p>

            <p>
              That integration — ancient and modern, inner and outer, sacred and
              strategic — is what this platform is built to carry forward.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "1rem 0 2rem" }}>
          <Link
            href="/blog"
            style={{
              textDecoration: "none",
              display: "inline-block",
              backgroundColor: "#D97706",
              color: "#FDFAF5",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "0.9rem 2.25rem",
              borderRadius: "9999px",
            }}
          >
            Read the Essays →
          </Link>
        </div>
      </section>

      {/* Quote */}
      <section
        style={{
          backgroundColor: "#1E1B4B",
          padding: "5rem 1.5rem",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <div style={{ maxWidth: "650px", margin: "0 auto" }}>
          <blockquote
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.375rem, 3.5vw, 2rem)",
              fontWeight: 600,
              color: "#FDFAF5",
              lineHeight: 1.5,
              fontStyle: "italic",
              marginBottom: "1.25rem",
            }}
          >
            &ldquo;All power is within you. You can do anything and everything.
            Believe in that.&rdquo;
          </blockquote>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "#D97706",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            — Swami Vivekananda
          </p>
        </div>
      </section>
    </>
  );
}
