/**
 * Generates all 10 course emails as HTML files ready to paste into Kit.
 * Run: node scripts/generate-kit-emails.mjs
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "../kit-emails");
mkdirSync(OUT, { recursive: true });

// ── Course data (inlined so we don't need TS compilation) ──────────────────
const lessons = [
  {
    day: 1,
    subject: "The sleeping life is over. (Day 1 of 10)",
    preheader: "You signed up because something in you already knows it's time.",
    title: "The Wake-Up Call",
    subtitle: "Why most people are alive but not awake — and what it costs them",
    theme: "Awakening",
    quote: { text: "Arise, Awake, and Stop Not Till the Goal is Reached.", attribution: "Swami Vivekananda" },
    opening: "Most people die without ever having truly lived. Not because life was cruel to them — but because they never fully showed up for it.",
    body: `There is a difference between being alive and being awake.

Being alive is biological. Your heart beats. Your lungs expand. You move through days, accumulate experiences, pay bills, scroll feeds, repeat.

Being awake is something else entirely. It means you are *present* to your life — that the intelligence behind your eyes is actually engaged, that you're not running on autopilot, that you've asked the question that Nachiketa asked at the door of death: *What is real? What am I actually after? What survives?*

Swami Vivekananda spent his life trying to wake people up. Not gently. He didn't offer a morning routine or a journaling prompt. He offered a command: **Arise. Awake.** Present tense. Imperative mood. The tone of someone who has seen what's at stake and can't afford to be polite about it.

What's at stake? Your life. The one you're actually living, not the one you're deferring to some future moment when things settle down, when the timing is right, when you feel ready.

That moment isn't coming. The readiness isn't a destination. It's a decision.

**Here is the truth of Day 1:** You signed up for this course because something in you already knows it's time. That something — that flicker, that restlessness, that sense that there is more — is the beginning of waking up. Don't dismiss it. Don't intellectualize it away. Follow it.

The 10 days ahead of you are not information delivery. They are an invitation to transformation. The difference is that transformation requires your participation. You have to bring yourself to this fully — your real questions, your honest assessment of where you are, your willingness to be different at the end than you were at the beginning.

Wake up. We start now.`,
    practiceTitle: "The Honest Inventory",
    practice: `Write down — without editing, without performing — the honest answer to this question:

"In what areas of my life am I sleepwalking?"

Don't write what sounds good. Write what's true. Career. Relationships. Health. Spiritual life. Creative ambitions. Where are you going through the motions?

This list is your map. Everything we do in the next 9 days points back to it.`,
    closingLine: "Tomorrow: the ancient command that contains everything — and what it actually means to obey it.",
  },
  {
    day: 2,
    subject: "Four words that split my life in two. (Day 2 of 10)",
    preheader: "Jago. Aur. Jagao. Wake up. And awaken others.",
    title: "Jago Aur Jagao",
    subtitle: "Wake up — and then awaken others. The command that changes everything.",
    theme: "Transmission",
    quote: { text: "You cannot help others if you are not helping yourself. But you cannot truly help yourself if you are not helping others.", attribution: "Swami Vivekananda" },
    opening: "Four words in Punjabi that split my life in two. My Guru said them once and I've never stopped hearing them.",
    body: `*Jago. Aur. Jagao.*

Wake up. And awaken others.

When Baba Hardev Singh Ji shared Vivekananda's teaching with me, he didn't present it as a philosophical concept. He presented it as a personal instruction. *This is for you. Now. Go.*

The command has two parts, and the sequence matters.

**First: Jago.** Wake yourself up. Do the inner work. Confront your sleepwalking. Face the gap between who you are and who you're capable of being. You cannot pour from an empty vessel. You cannot transmit a flame you don't carry.

**Second: Jagao.** Now awaken others. Once your light is burning — even partially, even imperfectly — turn toward those around you. Your family. Your colleagues. The stranger whose life intersects yours for five minutes.

Here is the paradox that Vivekananda understood deeply: these two movements are not sequential. They are simultaneous and mutually reinforcing. You awaken others *while* awakening yourself. Teaching is learning. Giving is receiving.

There is a candle metaphor I cannot escape: when one flame touches another wick, the first flame does not diminish. It multiplies. The original candle is still burning. But now there are two. Then four. Then a thousand. The mathematics of genuine transmission is multiplicative, not additive.

This is why Arise & Awake exists. Not to build a platform or accumulate followers, but to be a wick-to-wick transmission — to pass on, with full force, what was given.

**Here is your question for Day 2:** Who lit you? And who are you currently lighting?

If you can't name anyone in either category, that is important information. The first category tells you where to go for refueling. The second tells you where your energy needs to flow.`,
    practiceTitle: "The Lineage Map",
    practice: `**Part 1:** Write the name of the person or moment that first lit something in you. What did they give you? Write it down specifically — not "they inspired me" but *what exactly they said or did or were that changed something.*

**Part 2:** Write the name of one person in your life who you sense is waiting to be lit. You don't need to know how. Just name them. The universe tends to handle the how once you've committed to the who.`,
    closingLine: "Tomorrow: The most important thing you'll ever do — and why most people get it completely wrong.",
  },
  {
    day: 3,
    subject: "What are you actually after? (Day 3 of 10)",
    preheader: "Not the socially acceptable version. The real one.",
    title: "The Sacred Goal",
    subtitle: "How to name what you're actually after — before life names it for you",
    theme: "Goal Setting",
    quote: { text: "Take up one idea. Make that one idea your life — think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea.", attribution: "Swami Vivekananda" },
    opening: "Most people don't fail because they're lazy. They fail because their goal isn't real enough to sustain them through the dark.",
    body: `There is a difference between a goal and a sacred goal.

A goal is something you want. A sacred goal is something you *are*. It's not on your to-do list — it's in your bones. It doesn't motivate you with external reward — it pulls you forward with internal necessity.

Vivekananda's instruction is radical: *Take up one idea. Make that one idea your life.* Not one of several priorities. One idea. Total commitment. Every part of you aligned.

This is terrifying to modern ears because we're trained for optionality. Keep your choices open. Don't put all your eggs in one basket. Have a backup plan. Hedge.

But the hedge is the problem. The hedge is what keeps you safe *and* mediocre. The hedge makes it possible to give 70% — enough to feel like you're trying, not enough to actually transform.

**A sacred goal has three qualities:**

**1. It costs you something emotionally to admit.** If you can state your real goal without any vulnerability, it probably isn't your real goal. The real one is the one you're almost embarrassed to say out loud because it sounds too big, or too personal, or too far from where you are.

**2. It organizes everything else.** When you have a sacred goal, decisions become easier. Does this serve the goal? Yes → do it. No → don't.

**3. Failing to pursue it would feel like a betrayal.** Not of someone else's expectations — of *yourself.*

Nachiketa, sitting at Death's door for three days without food, had a sacred goal: to understand what survives. That goal was so real that even Death couldn't turn him away. Yama tried. He offered wealth, pleasure, kingdoms. Nachiketa refused them all. *I want only this: the truth about the self.*

That's a sacred goal.

**What is yours?**`,
    practiceTitle: "Finding Your Sacred Goal",
    practice: `Answer these three questions — honestly, not performatively:

1. *What would I build, create, or become if I knew I couldn't fail?*
2. *What would I regret most not having tried, at the end of my life?*
3. *What am I currently doing that I know, deep down, is a substitute for something I actually want?*

At the intersection of your answers to these three questions is something that wants to be your sacred goal. Name it. Even if it feels too big. Especially if it feels too big.`,
    closingLine: "Tomorrow: The Bhagavad Gita's deepest secret — how to act with full force while remaining completely free.",
  },
  {
    day: 4,
    subject: "How to give everything — and remain completely free. (Day 4 of 10)",
    preheader: "The Bhagavad Gita's operating system. It changes everything.",
    title: "Act Without Attachment",
    subtitle: "The Bhagavad Gita's operating system for a life of full engagement and inner freedom",
    theme: "Nishkama Karma",
    quote: { text: "Work always produces results, but do not be attached to the fruits of work.", attribution: "Bhagavad Gita, 2.47" },
    opening: "What if you could give everything to what you're building — and remain completely free of whether it succeeds?",
    body: `This is the question at the heart of the Bhagavad Gita. On the surface, it sounds like a contradiction. If you're not attached to results, why try at all?

Arjuna asked Krishna exactly this. Standing on a battlefield, looking at his teachers and cousins arranged across from him, he dropped his bow. *I cannot fight,* he said. *What is the point?*

Krishna's answer — eighteen chapters of some of the most philosophically dense and beautiful writing in human history — comes down to this: *The action is yours. The outcome is not.* Your job is to act from your highest nature, with full engagement, with zero attachment to whether the result matches your expectation.

This is *nishkama karma* — desireless action. Not indifference. Not passivity. It's something more sophisticated: you care so completely about the work that you've stopped needing the work to validate you.

Think of the greatest athletes, artists, and builders you've ever admired. What separates the extraordinary ones isn't that they care less — it's that they've separated their *effort* from their *ego*. They can go all in on the shot without needing the shot to go in in order to be okay.

**Here's why this matters for your sacred goal:**

The biggest reason people abandon their goals isn't laziness. It's that they've tied their self-worth to the result. When results don't come quickly, they interpret it as evidence that they were wrong to try.

But what if the setback is just data? What if the unexpected outcome is the universe redirecting you, not rejecting you? What if your only job is to keep showing up, at full capacity, without requiring the universe to confirm your timeline?

Vivekananda didn't know that his speech in Chicago would electrify a room of thousands. He knew he had something real to say, and he said it with everything he had. The action — the preparation, the courage to stand up, the refusal to dilute the teaching — that was his to offer regardless of outcome.

Offer what is yours to offer. Stop not. Let the results be what they will.`,
    practiceTitle: "The Full Commitment Practice",
    practice: `Identify one area where you're currently *waiting for results before fully committing.* The business you're 70% into. The relationship you're hedging in. The creative project you're keeping small so it doesn't hurt too much if it fails.

Now write: *What would I do differently if I committed fully, right now, knowing that the outcome is not mine to control?*

Then do one thing from that list today.`,
    closingLine: "Tomorrow: finding your specific fire — the thing only you can do.",
  },
  {
    day: 5,
    subject: "The thing only you can do. (Day 5 of 10)",
    preheader: "Not because you're special. Because you're specific.",
    title: "The Flame Within",
    subtitle: "Your specific fire — the thing only you can do, only you can give",
    theme: "Authenticity & Specific Knowledge",
    quote: { text: "The greatest sin is to think yourself weak.", attribution: "Swami Vivekananda" },
    opening: "There is something in you that the world needs and cannot get from anyone else. Not because you're special — because you're specific.",
    body: `Naval Ravikant has a concept he calls *specific knowledge* — the thing you know that the market can't easily replicate, that emerged from your particular obsessions, that you'd pursue even if no one paid you for it.

Vivekananda would recognize this concept immediately. He called it *svadharma* — the individual's unique path. The Bhagavad Gita says it plainly: *"Better is one's own dharma, though imperfect, than the dharma of another well-performed."* Better to be an imperfect version of yourself than a perfect imitation of someone else.

This is countercultural. We live in an era of templates. There is a template for the successful entrepreneur, the good parent, the fulfilled person. These templates are everywhere and they are profoundly dangerous — because they teach you to optimize for someone else's version of aliveness rather than your own.

Your flame is yours. It has a specific heat, a specific color, a specific quality that distinguishes it from every other flame.

**What does your specific flame look like?**

It's usually found at the intersection of three things:
- **What you can't stop thinking about** (even when you try to think about something else)
- **What you've always been told is "too much"** (your intensity, your obsession, your refusal to let things go)
- **What you would do even if no one watched** (the thing you do when there's no audience, no reward, no validation)

Vivekananda couldn't stop thinking about the nature of consciousness and the possibility that every human being carries infinite potential. People told him he was "too much." He wandered India for years with nothing but this obsession, before the stage in Chicago, before the books, before the impact. The flame was there the whole time.

Yours is there too. It has been, all along.`,
    practiceTitle: "Mapping Your Specific Fire",
    practice: `Complete these three sentences — write the first thing that comes, without editing:

1. *I can't stop thinking about...*
2. *People have told me I'm "too much" when it comes to...*
3. *If no one was watching and there was no financial reward, I would spend my time...*

Read back what you wrote. The pattern at the center of these three answers is pointing directly at your specific flame. Name it.`,
    closingLine: "Tomorrow: the only skill that makes everything else work — and how to build it.",
  },
  {
    day: 6,
    subject: "The gap where everything real gets built. (Day 6 of 10)",
    preheader: "Everyone starts. Almost no one continues past the point where it gets hard.",
    title: "Stop Not",
    subtitle: "Building the only habit that actually matters",
    theme: "Persistence & Resilience",
    quote: { text: "It is the patient building of character, the intense struggle to realize the truth, which alone will tell in the long run.", attribution: "Swami Vivekananda" },
    opening: "Everyone starts. Almost no one continues past the point where it gets hard. That gap — that terrifying, clarifying gap — is where everything real gets built.",
    body: `Let's be direct: you've started things before. You've felt the aliveness of a new beginning, the clarity of a fresh commitment, the energy of Day 1. And then something happened. Life intervened. The results didn't come fast enough. The resistance showed up. The goal that seemed so urgent became less urgent when faced with the ordinary friction of actually pursuing it.

You're not unusual in this. You're human.

Vivekananda didn't produce his transformation of Western philosophy in a moment of inspiration. He wandered India as a penniless monk for years before Chicago. He got sick repeatedly. He faced rejection. He had periods of profound doubt about whether his mission was real or whether he was deluding himself. He kept going. Not because the path was easy, but because stopping felt like a greater loss than continuing.

**The science of not stopping:**

Research on expertise consistently shows that the distinguishing factor isn't raw talent — it's *practice that continues past the point of discomfort.* Not the comfortable practice you do when you're feeling motivated. The practice you return to when motivation has entirely left the building and all you have left is commitment.

**Three practices of people who stop not:**

**1. They define victory in terms of inputs, not outputs.** Not "I will succeed" but "I will show up, every day, with full effort." The showing up is within their control. The success is not.

**2. They have an anchor.** A phrase, a person, a memory, a reason that pulls them back when the pull away is strongest. For Vivekananda, the anchor was his teacher Ramakrishna's belief in him. What is yours?

**3. They distinguish between rest and quitting.** Rest is strategic. It refuels the engine. Quitting is permanent. The person who stops not knows how to rest without stopping.

You have made it to Day 6. That is not nothing. That is evidence of something real in you. Don't let it stop here.`,
    practiceTitle: "Your Stop Not Protocol",
    practice: `Design your personal plan for when the pull to quit is strongest.

Answer these three questions:
1. *My anchor — the deepest reason I cannot stop — is:*
2. *When I feel like quitting, the first thing I will do is:*
3. *The person I will call, text, or reach out to when I'm about to stop is:*

Write this down and put it somewhere visible. This document will save you.`,
    closingLine: "Tomorrow: the frontier — and why the person you're becoming needs you to step into it.",
  },
  {
    day: 7,
    subject: "There's a version of your life that's waiting. (Day 7 of 10)",
    preheader: "The frontier is where you meet it.",
    title: "The Frontier",
    subtitle: "The version of your life that's waiting on the other side of your comfort zone",
    theme: "Pioneering Spirit",
    quote: { text: "Be a hero. Always say, 'I have no fear.' Tell this to everyone — 'Have no fear.'", attribution: "Swami Vivekananda" },
    opening: "There is a version of your life that is larger than the one you're currently living. The frontier is where you meet it.",
    body: `The pioneers weren't fearless. Read the journals and letters of the explorers, the reformers, the builders, the monks who went where no one had gone — they were afraid. They wrote about the fear in extraordinary detail. They felt it in their bodies.

And then they moved anyway.

Vivekananda was terrified before Chicago. He had no confirmed speaking slot. He was a stranger in an unfamiliar country. He'd spent years wandering India without a plan, sustained only by his conviction that he had something real to offer. Standing in front of the Parliament of the World's Religions, he didn't know if they would receive him or dismiss him.

He spoke anyway. He said "Sisters and brothers of America" — and the room erupted.

But here's what I want you to understand: the eruption was not the point. If the room had sat in silence, if Chicago had been a failure — the act of stepping to that podium would still have been the right thing to do. Because the frontier doesn't guarantee results. It guarantees *expansion*.

Every time you step into genuine uncertainty — toward the thing you want but haven't claimed, toward the version of yourself you sense but haven't become — you expand. You become more.

**What is your frontier?**

The frontier is always in the direction of what you're not quite ready for. That's how you know it's real. It might be:
- The business you've been thinking about for three years but haven't started
- The conversation you've been avoiding that would change everything
- The creative work you've been keeping small so it doesn't hurt too much if it fails

Vivekananda said: *"Have no fear."* He didn't mean feel no fear. He meant: do not let fear govern your direction. Do not organize your life around what is comfortable.

The frontier is calling.`,
    practiceTitle: "Name Your Frontier",
    practice: `Name your frontier — specifically.

Not "I want to be more courageous" but: *What is the one specific thing I've been avoiding because it scares me, that I know would expand my life if I pursued it?*

Write it down. Then write this: *The first concrete step I will take toward this, within the next 48 hours, is:*

Take the step.`,
    closingLine: "Tomorrow: what it means to be truly wealthy — in the way that matters most.",
  },
  {
    day: 8,
    subject: "They alone live who live for others. (Day 8 of 10)",
    preheader: "What you accumulate eventually disappears. What you transmit lives forever.",
    title: "True Wealth",
    subtitle: "What you accumulate eventually disappears. What you transmit lives forever.",
    theme: "Legacy & Service",
    quote: { text: "They alone live who live for others. The rest are more dead than alive.", attribution: "Swami Vivekananda" },
    opening: "At the end of your life, you will not wish you'd accumulated more. You will wish you'd given more — more fully, more honestly, more completely.",
    body: `We live in an era that has confused the accumulation of resources with wealth. People optimize for net worth, follower count, square footage, career titles — as if these things, aggregated, will eventually produce the sense of aliveness and meaning that they're actually seeking.

They won't. Every wisdom tradition in human history is unanimous on this.

Vivekananda was explicit and unsparing: *"They alone live who live for others. The rest are more dead than alive."*

This is not an argument against ambition. It's an argument for the *direction* of ambition. The person who builds so they can give is building toward something real. The person who builds so they can have is running on a treadmill that only speeds up.

**The true wealthy are the transmitters.**

Think about the people who have mattered most to you — the ones whose influence you can feel even now, years or decades after the encounter. What did they give you? Was it money? Status? Or was it something more difficult to name — attention, belief, a question that cracked something open?

That's the wealth that doesn't depreciate. That's the return on investment that compounds not just over a lifetime but across generations. Ramakrishna gave Vivekananda something that Vivekananda gave to the West, which eventually wound its way to me, through Baba Hardev Singh Ji, and now to you.

Think about that chain. One man, who died in 1886 in a small village in Bengal, set off a chain of transmission that reached you today. That's wealth. That's impact. That's a life that lived far beyond its own boundaries.

**What are you transmitting?**

Not eventually. Not when you've figured it all out. Right now, with your current understanding — what are you giving?

You don't have to be finished to be useful. You don't have to be perfect to be a transmitter. You just have to be honest, and present, and willing to share what you've actually learned.`,
    practiceTitle: "The Transmission Letter",
    practice: `Write a short "transmission letter" to one person in your life — someone you care about, someone you sense is in a moment where they need what you have.

You're not trying to teach them or fix them. You're sharing something real: something you've learned, something you've been through, something you believe that you've never said directly.

This doesn't have to be sent. Write it first. Then decide. But write it as if it will be sent — with the full honesty that deserves.`,
    closingLine: "Tomorrow: bringing it all together — the life that integrates everything.",
  },
  {
    day: 9,
    subject: "You don't have to choose. (Day 9 of 10)",
    preheader: "Spiritual depth and worldly ambition aren't opposites. They're the same force.",
    title: "The Integrated Life",
    subtitle: "Ancient wisdom and modern ambition are not opposites — they are the same force",
    theme: "Integration",
    quote: { text: "All power is within you. You can do anything and everything. Believe in that, do not believe that you are weak.", attribution: "Swami Vivekananda" },
    opening: "The war between your spiritual life and your ambitions is false. The integration of the two is where your greatest power lives.",
    body: `Here is the false choice that keeps people small:

*Be spiritual* — meditate, surrender outcomes, accept what is, find inner peace.

OR:

*Be ambitious* — set goals, execute, compete, build, win.

The world sorts people into one camp or the other. As if the inner life and the outer life are in inherent tension, and you must choose which one gets your primary loyalty.

Vivekananda didn't accept this false dichotomy. His entire life was a refutation of it. He called his approach *Practical Vedanta* — taking the highest philosophical understanding ever articulated and making it the operating system for an intensely engaged, world-changing life.

If the self is infinite — if every human being carries within them the same intelligence that organized the cosmos — then building something that lifts people up is an act of worship. Raising a child with full presence and honest love is a devotional act. Pursuing your sacred goal with discipline and courage is prayer.

**You don't have to choose between inner and outer.**

The inner work deepens the outer work. The outer work tests and strengthens the inner. They're two sides of the same coin. The person who meditates and builds, who reflects and acts, who sits in silence and then speaks with full force — that person is living in the integration.

Naval Ravikant has said: *"If you have inner peace, you can accomplish more in the outer world."* Vivekananda would add: *"And if you're accomplishing something real in the outer world, it will deepen your inner life in ways that no amount of sitting alone can."*

**Tomorrow is Day 10.** You're about to write your manifesto. Today, settle the question of whether you're willing to live the full life — or whether you're going to continue splitting yourself in two.

The integration is the point. The full life is not a compromise. It's the highest form of living available to you.`,
    practiceTitle: "Mapping the Integration",
    practice: `Draw a simple two-column chart:

**Left column:** "The things I do for my inner life" (meditation, reflection, prayer, time in nature, etc.)

**Right column:** "The things I do for my outer life" (work, building, creating, serving, etc.)

Look at the two columns. Where are the natural connections? Where does an inner practice strengthen an outer one, or vice versa?

Identify one inner practice you want to bring more directly into your outer work, and one outer commitment you want to approach more consciously from the inside out.`,
    closingLine: "Tomorrow: Day 10. Your manifesto. The beginning of everything.",
  },
  {
    day: 10,
    subject: "This is where it begins. (Day 10 of 10)",
    preheader: "You don't graduate today. You launch.",
    title: "Arise. Awake. Now.",
    subtitle: "Your personal manifesto — and the beginning of the life you've been circling",
    theme: "The Manifesto",
    quote: { text: "Arise! Awake! and stop not till the goal is reached.", attribution: "Swami Vivekananda" },
    opening: "Ten days ago you began. Today you don't graduate — you launch. Everything we've done has been preparation for this: the moment you decide.",
    body: `You've done the work. You've been honest about where you're sleepwalking. You've named your sacred goal. You've mapped your specific fire. You've faced the frontier. You've considered what it means to truly live for something — and to transmit that to others.

Now comes the hardest and most important part: **the decision.**

Not the decision to try. Not the decision to think about it more. Not the decision to come back to this when you're in a better position.

The decision to *arise and awake.*

I want to leave you with three truths I've carried since my Guru first shared Vivekananda's teaching with me:

**Truth 1: The strength you need is already within you.**

Vivekananda was uncompromising on this: the greatest sin is to think yourself weak. You are not weak. You have been *acting* weak, which is a choice, not a fact. The infinite is not something you acquire — it's something you uncover. The practice is removing the layers of doubt and fear and other people's opinions that have covered what was always there.

**Truth 2: You do not have to be finished to begin.**

Nachiketa sat at Death's door without food or sleep, demanding the truth — not when he was ready, not when he felt qualified. He demanded it because the question was real and the need was urgent. Your sacred goal doesn't need you to be perfect. It needs you to be present. Start imperfectly. Start now.

**Truth 3: Your rising rises others.**

This is the promise and the obligation of Jago Aur Jagao. When you arise — when you step into the frontier, pursue your sacred goal, live the integrated life — you give permission to everyone around you to do the same. Your aliveness is contagious. Your courage is a transmission.

One light can light a million lights. The original flame doesn't diminish. It multiplies.

**You are the light.**

Not eventually. Not after you've figured it all out. Right now, in this moment, with every imperfect thing you carry — you are the light.

Arise. Awake. Stop not.

The goal is waiting.`,
    practiceTitle: "Your Arise & Awake Manifesto",
    practice: `Write your personal manifesto — a declaration of who you are, what you're for, and how you commit to live from this day forward.

Use this structure:
- *I am someone who...*
- *I am for...*
- *I refuse to accept...*
- *I commit to...*
- *My sacred goal is...*
- *And I will stop not until...*

Read it aloud. Let your voice carry the commitment into the world.

Then: go live it.`,
    closingLine: "This is not the end of the course. This is the beginning of the life. We'll be with you. Keep going.",
  },
];

// ── Email HTML generator ───────────────────────────────────────────────────
function generateEmail(lesson) {
  const bodyHTML = lesson.body
    .split("\n\n")
    .filter((p) => p.trim())
    .map((p) => {
      const t = p.trim();
      const fmt = t
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>");

      if (t.startsWith("- ")) {
        const items = t.split("\n").filter(l => l.startsWith("- "))
          .map(l => `<li style="font-size:16px;line-height:1.8;color:#3D2E1E;margin-bottom:8px;">${l.slice(2).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")}</li>`)
          .join("");
        return `<ul style="margin:18px 0;padding-left:22px;">${items}</ul>`;
      }
      return `<p style="font-size:16px;line-height:1.85;color:#3D2E1E;margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;">${fmt}</p>`;
    }).join("");

  const practiceHTML = lesson.practice
    .replace(/\*\*(.+?)\*\*/g, "<strong style='color:#F9F4EC;'>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .split("\n").join("<br/>");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Day ${lesson.day}: ${lesson.title} — Arise & Awake</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,600&display=swap" rel="stylesheet"/>
</head>
<body style="margin:0;padding:0;background-color:#F2EBE0;font-family:Georgia,'Times New Roman',serif;">

<div style="display:none;max-height:0;overflow:hidden;">${lesson.preheader}</div>

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F2EBE0;padding:32px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

  <!-- Brand bar -->
  <tr><td align="center" style="padding-bottom:20px;">
    <p style="margin:0;font-family:'Playfair Display',Georgia,serif;font-size:12px;font-weight:700;color:#8A6A3A;letter-spacing:0.14em;text-transform:uppercase;">🕯️ &nbsp; ARISE &amp; AWAKE &nbsp; 🕯️</p>
  </td></tr>

  <!-- Dark hero -->
  <tr><td style="background-color:#1C1814;border-radius:16px 16px 0 0;overflow:hidden;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="padding:44px 44px 0;">
        <!-- Day badge -->
        <table cellpadding="0" cellspacing="0" border="0"><tr>
          <td style="background-color:rgba(232,160,32,0.15);border:1px solid rgba(232,160,32,0.4);border-radius:100px;padding:4px 14px;">
            <p style="margin:0;font-size:11px;font-weight:700;color:#E8C870;letter-spacing:0.12em;text-transform:uppercase;font-family:Georgia,serif;">Day ${lesson.day} of 10 &nbsp;·&nbsp; ${lesson.theme}</p>
          </td>
        </tr></table>
        <!-- Big day number -->
        <p style="margin:12px 0 -14px;font-family:'Playfair Display',Georgia,serif;font-size:110px;font-weight:900;color:rgba(232,160,32,0.07);line-height:1;letter-spacing:-0.04em;">${String(lesson.day).padStart(2,"0")}</p>
        <!-- Title -->
        <h1 style="margin:0 0 10px;font-family:'Playfair Display',Georgia,serif;font-size:36px;font-weight:900;color:#F9F4EC;line-height:1.1;letter-spacing:-0.02em;">${lesson.title}</h1>
        <!-- Subtitle -->
        <p style="margin:0 0 32px;font-family:'Playfair Display',Georgia,serif;font-size:16px;font-style:italic;color:rgba(249,244,236,0.58);line-height:1.5;">${lesson.subtitle}</p>
      </td></tr>
      <!-- Divider -->
      <tr><td style="padding:0 44px;"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-top:1px solid rgba(232,160,32,0.18);"></td></tr></table></td></tr>
      <!-- Quote -->
      <tr><td style="padding:24px 44px 36px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-left:3px solid #E8A020;padding-left:18px;">
          <tr><td>
            <p style="margin:0 0 8px;font-family:'Playfair Display',Georgia,serif;font-size:15px;font-style:italic;color:rgba(249,244,236,0.82);line-height:1.7;">&ldquo;${lesson.quote.text}&rdquo;</p>
            <p style="margin:0;font-size:11px;font-weight:700;color:#E8A020;letter-spacing:0.08em;text-transform:uppercase;font-family:Georgia,serif;">— ${lesson.quote.attribution}</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </td></tr>

  <!-- Parchment body -->
  <tr><td style="background-color:#FBF6EE;border-left:1px solid #E8D9C4;border-right:1px solid #E8D9C4;padding:40px 44px 8px;">
    <!-- Opening -->
    <p style="margin:0 0 24px;font-family:'Playfair Display',Georgia,serif;font-size:20px;font-weight:700;font-style:italic;color:#1C1208;line-height:1.5;border-bottom:1px solid #E8D9C4;padding-bottom:24px;">${lesson.opening}</p>
    ${bodyHTML}
  </td></tr>

  <!-- Practice block -->
  <tr><td style="background-color:#1C1814;padding:32px 44px;">
    <p style="margin:0 0 4px;font-size:10px;font-weight:700;color:#E8A020;letter-spacing:0.14em;text-transform:uppercase;font-family:Georgia,serif;">Today's Practice</p>
    <h3 style="margin:0 0 16px;font-family:'Playfair Display',Georgia,serif;font-size:20px;font-weight:800;color:#F9F4EC;line-height:1.3;">${lesson.practiceTitle}</h3>
    <p style="margin:0;font-size:14px;line-height:1.85;color:rgba(249,244,236,0.72);font-family:Georgia,serif;">${practiceHTML}</p>
  </td></tr>

  <!-- Closing -->
  <tr><td style="background-color:#FBF6EE;border-left:1px solid #E8D9C4;border-right:1px solid #E8D9C4;border-bottom:1px solid #E8D9C4;border-radius:0 0 16px 16px;padding:28px 44px 36px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-top:1px solid #E8D9C4;padding-top:20px;">
      <p style="margin:0 0 10px;font-size:14px;font-style:italic;color:#7A5C38;line-height:1.7;font-family:Georgia,serif;">${lesson.closingLine}</p>
      <p style="margin:10px 0 0;font-family:'Playfair Display',Georgia,serif;font-size:15px;font-weight:700;color:#1C1208;">Keep the flame burning,</p>
      <p style="margin:3px 0 0;font-family:'Playfair Display',Georgia,serif;font-size:14px;color:#8A6A3A;font-style:italic;">Arise &amp; Awake</p>
    </td></tr></table>
  </td></tr>

  <!-- Footer -->
  <tr><td align="center" style="padding:28px 24px 36px;">
    <p style="margin:0 0 6px;font-family:'Playfair Display',Georgia,serif;font-size:12px;font-weight:700;color:#8A6A3A;letter-spacing:0.08em;">ARISE &amp; AWAKE</p>
    <p style="margin:0 0 10px;font-size:11px;color:#A89070;line-height:1.6;font-family:Georgia,serif;">&ldquo;Arise, Awake, and Stop Not Till the Goal is Reached.&rdquo;<br/>— Swami Vivekananda</p>
    <p style="margin:0;font-size:11px;color:#B8A090;font-family:Georgia,serif;">
      You're receiving this because you enrolled in the 10-Day Arise &amp; Awake Course.<br/>
      <a href="{{ unsubscribe_url }}" style="color:#B8A090;">Unsubscribe</a> &nbsp;·&nbsp;
      <a href="https://ariseandawake.com" style="color:#B8A090;">ariseandawake.com</a>
    </p>
  </td></tr>

</table>
</td></tr></table>
</body>
</html>`;
}

// ── Generate all files ─────────────────────────────────────────────────────
let manifest = "# Arise & Awake — Kit Course Setup\n\n";
manifest += "Paste each email into Kit's sequence editor.\n";
manifest += "Set each email to send 1 day after the previous (Day 1 sends immediately).\n\n";
manifest += "---\n\n";

lessons.forEach((lesson) => {
  const html = generateEmail(lesson);
  const filename = `day-${String(lesson.day).padStart(2,"0")}.html`;
  writeFileSync(join(OUT, filename), html);

  manifest += `## Day ${lesson.day}: ${lesson.title}\n`;
  manifest += `**Subject line:** ${lesson.subject}\n`;
  manifest += `**Preview text:** ${lesson.preheader}\n`;
  manifest += `**File:** kit-emails/${filename}\n\n`;

  console.log(`✓ Day ${lesson.day}: ${lesson.title}`);
});

writeFileSync(join(OUT, "SETUP.md"), manifest);

console.log(`\n✅ All 10 emails generated in kit-emails/`);
console.log(`📋 See kit-emails/SETUP.md for subject lines and setup instructions\n`);
