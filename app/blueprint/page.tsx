import type { Metadata } from "next";
import CourseSignupForm from "@/components/CourseSignupForm";

export const metadata: Metadata = {
  title: "The Vivekananda Blueprint — 7 Ancient Principles for Modern Mastery | Arise & Awake",
  description:
    "The complete framework from Swami Vivekananda that transforms average performers into forces of nature. Free with the 10-day Arise & Awake course.",
  openGraph: {
    title: "The Vivekananda Blueprint — 7 Ancient Principles for Modern Mastery",
    description:
      "The complete framework from Swami Vivekananda that transforms average performers into forces of nature.",
    type: "website",
  },
};

const principles = [
  {
    number: "I",
    title: "Strength Is the Only Religion",
    sanskrit: "बलं बलं च ब्रह्मास्मि",
    hook: "Weakness is the greatest sin",
    body: `Vivekananda's most radical teaching: every form of weakness — physical, mental, moral — is a form of death. He didn't mean cruelty. He meant that you cannot help the world from a position of collapse. The lotus rises from mud, not from other mud.

    The practical question: What are you strengthening right now? Your body, your mind, your convictions? Or are you strengthening your excuses, your fears, your comparisons?

    The blueprint principle: Build one dimension of strength every single day. Physical → mental → moral. The sequence matters.`,
  },
  {
    number: "II",
    title: "Each Soul Is Potentially Divine",
    sanskrit: "तत्त्वमसि",
    hook: "You are not becoming something — you are uncovering it",
    body: `The most liberating idea in the history of philosophy: you don't need to be fixed. You need to be uncovered. The gold is already there. The work is removing the dirt.

    This reframes everything. You're not broken. You're not behind. You're not less than. You are the infinite wearing a costume of limitation — and the costume is optional.

    The blueprint principle: Stop trying to become. Start trying to remember. Every morning, ask: "What costume am I wearing today that isn't me?"`,
  },
  {
    number: "III",
    title: "Arise, Awake — or Be Left Behind",
    sanskrit: "उत्तिष्ठत जाग्रत",
    hook: "The sleeping life is the only wasted life",
    body: `From the Katha Upanishad. Vivekananda turned this into a war cry. The original context: Yama (Death) himself is speaking these words. Even death says: wake up before I come for you.

    Most people live their entire lives in a kind of spiritual sleep. They respond to stimuli. They react to the world. They float downstream on the current of habit and other people's expectations. They die having never truly lived.

    The blueprint principle: Identify the one area of your life where you're still asleep. That's where your growth lives. That's your next arena.`,
  },
  {
    number: "IV",
    title: "Infinite Energy, Infinite Patience",
    sanskrit: "अयं आत्मा ब्रह्म",
    hook: "The tiger who does not hurry still catches the deer",
    body: `Vivekananda crossed oceans, lectured to thousands, built institutions, and wrote volumes — all while suffering from multiple diseases. He was not productive because he was healthy. He was productive because he operated from a different source than most humans.

    That source: the conviction that energy is not finite. That what you draw from the infinite is replaced by the infinite. Modern science calls this state "flow." Vivekananda called it "drawing from the Atman."

    The blueprint principle: Stop managing your energy. Start opening the channel to the source. Meditation is not rest. It is refueling.`,
  },
  {
    number: "V",
    title: "Karma Yoga — Action Without Attachment",
    sanskrit: "योगः कर्मसु कौशलम्",
    hook: "Work as worship, not as transaction",
    body: `The Gita's supreme practical teaching, made modern by Vivekananda: do the work with full intensity, but release the outcome. Not because outcomes don't matter — but because attachment to outcomes corrupts the work and destroys the worker.

    Every great entrepreneur, artist, and leader eventually learns this by failure. Either they discover it by crashing into outcome-attachment — or they learn it in advance from ancient wisdom.

    The blueprint principle: In every major project, separate the output you control (the work) from the outcome you don't control (the result). Measure yourself only on the former.`,
  },
  {
    number: "VI",
    title: "One Light Lights a Million — The Compounding of Awakening",
    sanskrit: "जागो और जगाओ",
    hook: "Your rising is never just yours",
    body: `Guru Baba Hardev Singh Ji's teaching: Jago Aur Jagao. Wake up and awaken others. This is the compounding that most growth frameworks miss.

    When you awaken, you create the conditions for others to awaken. Your children. Your team. Your readers. Your students. The ripple is the real return on investment of any inner work.

    This is why Vivekananda said the highest spiritual practice is not meditation in a cave — it is service. Every person you lift becomes a lighthouse. Every lighthouse awakens more ships.

    The blueprint principle: Ask daily: who did I help awaken today? Even a single conversation that shifts someone's perspective counts. This is the work.`,
  },
  {
    number: "VII",
    title: "Stop Not Till the Goal Is Reached",
    sanskrit: "न तत्र सूर्यो भाति",
    hook: "The only failure is stopping before the goal",
    body: `Vivekananda's final war cry. Not "work harder." Not "hustle." But something deeper: do not stop. Momentum is sacred. The moment you stop, the world rushes in to fill the void with its own agenda for your life.

    He didn't live past 39. He knew. He packed 10 lifetimes into four decades because stopping was not an option. Not because of ambition — but because of mission.

    The blueprint principle: Define your goal so clearly that stopping feels like betrayal. Not betrayal of success — betrayal of your purpose. That's what keeps you moving when motivation evaporates.`,
  },
];

export default function BlueprintPage() {
  return (
    <div style={{ backgroundColor: "#0F0D0A", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(180deg, #1C1814 0%, #0F0D0A 100%)",
        borderBottom: "1px solid rgba(232,160,32,0.15)",
        padding: "5rem 1.5rem 4rem",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <p style={{
            fontSize: "0.75rem", fontWeight: 700, color: "#E8A020",
            letterSpacing: "0.16em", textTransform: "uppercase",
            marginBottom: "1.25rem", fontFamily: "Georgia, serif",
          }}>
            🕯️ &nbsp; The Arise & Awake Blueprint
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.25rem, 6vw, 3.5rem)",
            fontWeight: 900, color: "#F9F4EC",
            lineHeight: 1.1, letterSpacing: "-0.025em",
            marginBottom: "1.25rem",
          }}>
            7 Ancient Principles<br />
            <span style={{ color: "#E8A020" }}>for Modern Mastery</span>
          </h1>
          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "rgba(249,244,236,0.65)",
            lineHeight: 1.7, fontFamily: "Georgia, serif",
            maxWidth: "580px", margin: "0 auto 2.5rem",
          }}>
            Swami Vivekananda built a philosophy that turned ordinary people into
            forces of nature. This is the complete framework — distilled for how you
            live and work today.
          </p>

          {/* Email capture */}
          <div style={{
            maxWidth: "480px", margin: "0 auto",
            backgroundColor: "rgba(232,160,32,0.06)",
            border: "1px solid rgba(232,160,32,0.25)",
            borderRadius: "1rem", padding: "1.75rem",
          }}>
            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1rem", fontWeight: 700,
              color: "#F9F4EC", marginBottom: "1rem",
            }}>
              Get the full Blueprint + the free 10-Day Course
            </p>
            <CourseSignupForm source="blueprint-hero" variant="inline" />
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "4rem 1.5rem" }}>

        <p style={{
          textAlign: "center",
          fontFamily: "Georgia, serif",
          fontSize: "1rem",
          color: "rgba(249,244,236,0.5)",
          fontStyle: "italic",
          marginBottom: "3.5rem",
          lineHeight: 1.7,
        }}>
          &ldquo;The history of the world is the history of a few men who had faith in themselves.
          That faith calls out the divinity within.&rdquo;<br />
          <span style={{ color: "rgba(249,244,236,0.35)", fontStyle: "normal", fontSize: "0.8125rem" }}>
            — Swami Vivekananda
          </span>
        </p>

        {principles.map((p) => (
          <div key={p.number} style={{
            marginBottom: "3.5rem",
            paddingBottom: "3.5rem",
            borderBottom: "1px solid rgba(232,160,32,0.1)",
          }}>
            {/* Number + title */}
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", marginBottom: "0.75rem" }}>
              <div style={{
                width: "3rem", height: "3rem", flexShrink: 0,
                borderRadius: "50%",
                backgroundColor: "rgba(232,160,32,0.1)",
                border: "1px solid rgba(232,160,32,0.35)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "0.9375rem", fontWeight: 800, color: "#E8A020",
                }}>
                  {p.number}
                </span>
              </div>
              <div>
                <h2 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.25rem, 3vw, 1.625rem)",
                  fontWeight: 800, color: "#F9F4EC",
                  lineHeight: 1.25, margin: 0, marginBottom: "0.25rem",
                }}>
                  {p.title}
                </h2>
                <p style={{
                  fontSize: "0.8125rem", color: "rgba(249,244,236,0.3)",
                  fontFamily: "Georgia, serif", fontStyle: "italic", margin: 0,
                }}>
                  {p.sanskrit}
                </p>
              </div>
            </div>

            {/* Hook */}
            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.0625rem", fontWeight: 700,
              color: "#E8A020",
              fontStyle: "italic",
              marginBottom: "1rem",
              paddingLeft: "4.25rem",
            }}>
              &ldquo;{p.hook}&rdquo;
            </p>

            {/* Body */}
            <div style={{ paddingLeft: "4.25rem" }}>
              {p.body.trim().split(/\n\s*\n/).map((para, i) => (
                <p key={i} style={{
                  fontSize: "1rem",
                  color: "rgba(249,244,236,0.75)",
                  lineHeight: 1.8,
                  fontFamily: "Georgia, serif",
                  marginBottom: "1rem",
                }}>
                  {para.trim()}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div style={{
          backgroundColor: "rgba(232,160,32,0.08)",
          border: "1px solid rgba(232,160,32,0.25)",
          borderRadius: "1.25rem",
          padding: "2.5rem",
          textAlign: "center",
        }}>
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.5rem", fontWeight: 800,
            color: "#F9F4EC", lineHeight: 1.3,
            marginBottom: "0.75rem",
          }}>
            Ready to live these principles —<br />
            <span style={{ color: "#E8A020" }}>not just read them?</span>
          </p>
          <p style={{
            fontSize: "0.9375rem", color: "rgba(249,244,236,0.55)",
            fontFamily: "Georgia, serif", lineHeight: 1.7,
            marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem",
          }}>
            The free 10-day email course walks you through each of these principles
            with daily practices, Vivekananda&apos;s original teachings, and one
            concrete action to take.
          </p>
          <div style={{ maxWidth: "480px", margin: "0 auto" }}>
            <CourseSignupForm source="blueprint-bottom" variant="inline" />
          </div>
        </div>
      </section>
    </div>
  );
}
