# Arise & Awake — Growth Playbook
## Goal: 100,000 Email Subscribers

**BHAG**: "To awaken 1 billion people to the understanding that they are the light — and that their rising rises the world."

---

## Current State (March 2026)

### What's Built
- ✅ Full site live at ariseandawake.com
- ✅ 10 long-form blog posts (5 origin + 5 SEO-targeted)
- ✅ 10-day free email course (Day 1-10 all designed and ready for Kit)
- ✅ Kit form connected (Form ID: 9235410)
- ✅ Viral sharing loop in signup success state (Twitter + WhatsApp share)
- ✅ Blueprint lead magnet page (/blueprint)
- ✅ Newsletter page (/newsletter) — "The Sacred Dispatch"
- ✅ Sitemap.xml, robots.txt, RSS feed
- ✅ JSON-LD structured data on blog posts
- ✅ 30 Twitter/X threads ready to post (see twitter-threads.txt)
- ✅ 15 Reddit posts ready to publish (see reddit-posts.txt)

### What's Needed in Kit
- [ ] Set up 10-day email sequence (paste HTML from kit-emails/ directory)
- [ ] Create automation: On subscribe → start Day 1 sequence
- [ ] Add tags: source, day-completed, referred-by

---

## Channel Strategy (Bullseye Framework)

### TIER 1 — Highest Leverage Channels
These are your 20% that produce 80% of subscribers.

#### 1. Twitter/X (Primary Distribution)
**Why**: Your audience (Naval/Shaan/Tim Ferriss followers) lives here. Long-form thread content is the native format. One viral thread can bring 1,000+ signups overnight.

**Cadence**: 1 thread per day, 7 days/week
**Content**: Use the 30 threads in `twitter-threads.txt` — you have Day 1-30 ready
**Engagement**: Reply to 10 tweets/day in philosophy, self-help, entrepreneurship spaces
**Pinned tweet**: Always your highest-performing thread with CTA to free course
**Bio**: "Arise & Awake | Ancient wisdom for modern pioneers | Free 10-day course ↓"

**Week 1 posts (in order)**:
- Thread 001: "A 19th-century monk said something so radical..."
- Thread 003: "You can have a great resume, a full calendar, and a dead inner life..."
- Thread 005: "The most underrated book of the 20th century..."
- Thread 007: "What 7 words from a monk did to my entire framework for success..."
- Thread 011: "I read Vivekananda's complete works. 18 things stood out."

#### 2. SEO / Google (Compound Growth)
**Why**: Takes 3-6 months to build, then pays forever. The keywords we're targeting have high buyer intent.

**Posts live now**:
- "Vivekananda quotes on success" → targets navigational + informational
- "how to build mental strength" → high-volume, conversion-ready
- "Eastern philosophy for entrepreneurs" → founder audience
- "meaning of arise awake Vivekananda" → branded + educational
- "spiritual awakening signs" → massive search volume

**Submit to Google Search Console immediately**:
1. Go to search.google.com/search-console
2. Add property: ariseandawake.com
3. Verify via DNS (GoDaddy → add TXT record)
4. Submit sitemap: ariseandawake.com/sitemap.xml

**Internal linking**: All posts link to /course — this is critical for conversion

#### 3. Reddit (Credibility + Traffic)
**Why**: Reddit ranks on Google for years. One post in r/philosophy with 500 upvotes can drive 5,000 visits and persist for 5 years.

**Use `reddit-posts.txt` — 15 complete posts ready**
**Rule**: Post genuine value first. Build karma (3-4 posts minimum) before dropping any link.
**Post order**:
1. r/philosophy — "Vivekananda predicted the mental health crisis 130 years ago"
2. r/Meditation — "The difference between meditation and awakening"
3. r/stoicism — "Vivekananda vs Stoics"
4. r/productivity — "Why hustle culture fails"
5. r/selfimprovement — "7 principles that changed everything"
6. r/Entrepreneur — "The Bhagavad Gita is the original startup manual"

---

### TIER 2 — Medium-Leverage Channels

#### 4. Substack Notes + Cross-posting
**Why**: Substack has 35M active readers and its own discovery algorithm.
**Action**: Create a free Substack (ariseandawake.substack.com). Cross-post your essays as Substack notes. Include canonical link back to site.
**Time**: 30 minutes to set up, 20 minutes per essay to cross-post.

#### 5. LinkedIn (Founders + Professionals)
**Why**: Your "Eastern philosophy for entrepreneurs" angle is perfect for LinkedIn's audience.
**Content**: Adapt Twitter threads into LinkedIn posts (longer, more professional tone)
**Cadence**: 3x/week
**Hook format**: "I read the Bhagavad Gita 17 times. Here's what I learned about building companies."

#### 6. Pinterest (Surprisingly effective for spirituality content)
**Why**: Spiritual + self-improvement content performs well. Pins link back to blog posts. Very long content half-life.
**Action**: Create pins for each Vivekananda quote from the blog posts. Link to full article.
**Tool**: Canva — create 1080×1920 pins with quote + brand aesthetic (dark indigo, amber)

#### 7. YouTube Shorts + TikTok (Emerging)
**Why**: Short-form video is the fastest growing format. Philosophy content does well.
**Format**: 60-second reading of one Twitter thread hook + 2-3 tweets. Text on screen.
**Tool**: CapCut — you can create these in 15 minutes

---

### TIER 3 — Slow-Build Channels (Set and Forget)

#### 8. Podcast Guest Appearances
Target podcasts in: philosophy, Eastern wisdom, entrepreneurship, Naval/Tim Ferriss adjacent
Pitch angle: "Ancient Indian wisdom for modern high performers — the philosophy Silicon Valley is rediscovering"
**Tools**: PodMatch, Rephonic, Manual outreach via Twitter

#### 9. Email Newsletter Swaps
Once you have 1,000 subscribers: reach out to complementary newsletters for cross-promotion
Targets: Daily Stoic (Ryan Holiday), The Profile (Polina Pompliano), Morning Brew (if big enough)

#### 10. Product Hunt (When you have a feature launch)
When you build a new resource (e.g., a curated Vivekananda reading guide), launch it on Product Hunt

---

## Referral Loop Strategy

### Current (What's Live)
After signup, users see:
- Pre-written Tweet: "I just signed up for 'Arise & Awake' — a free 10-day course..."
- WhatsApp share button
- Vivekananda quote: "Arise, awake — and wake others"

### Next Version (Build When You Have 500 Subscribers)
Add a proper referral program:
1. Create a /refer page at ariseandawake.com/refer
2. Each subscriber gets a unique link: ariseandawake.com?ref=FIRSTNAME-HASH
3. When someone subscribes via that link, tag both in Kit
4. At 3 referrals: send bonus "Sacred Dispatch" issue
5. At 10 referrals: send exclusive Vivekananda Deep Dive PDF

Tools needed: ReferralHero (free for <500 referrals) or build with Upstash KV

---

## Email Sequence Setup (Kit)

### Step 1: Create the sequence
1. Login to Kit → Automations → Sequences
2. Create new sequence: "Arise & Awake 10-Day Course"
3. Add 10 emails, one per day (use files in kit-emails/ directory)

### Subject lines (copy-paste ready)
- Day 1: "Day 1: The Wake-Up Call — Why Most People Are Alive But Not Awake"
- Day 2: "Day 2: The Strength Doctrine — Why Weakness Is the Real Sin"
- Day 3: "Day 3: One Light, One Million — The Sacred Math of Awakening"
- Day 4: "Day 4: Karma Yoga — The Art of Working Without Attachment"
- Day 5: "Day 5: Fearlessness — The Only Religion Worth Teaching"
- Day 6: "Day 6: The Pioneering Spirit — Going Where No One Has Gone Before"
- Day 7: "Day 7: The Divine Within — Why You Are Not Who You Think You Are"
- Day 8: "Day 8: Service as Worship — The Highest Form of Practice"
- Day 9: "Day 9: Stop Not — The Sacred Obligation to Keep Moving"
- Day 10: "Day 10: The Mission — Your Rising Rises the World"

### Step 2: Create the automation
Automations → Visual Automations → New
- Trigger: Subscriber joins form #9235410
- Wait: 0 minutes
- Start sequence: "Arise & Awake 10-Day Course"

### Step 3: Add tags
- Tag all subscribers from course page: "course-signup"
- Tag by source: "source-homepage", "source-blueprint", "source-newsletter"

---

## 30-Day Sprint Plan

### Week 1 (Days 1-7): Foundation
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Twitter profile with new bio + pinned thread
- [ ] Post Twitter Thread 001 (Monday)
- [ ] Post Reddit r/philosophy (Tuesday)
- [ ] Set up Kit email sequence with Day 1 email
- [ ] Post Twitter Thread 003 (Wednesday)
- [ ] Post Reddit r/Meditation (Thursday)
- [ ] Post Twitter Thread 005 (Friday)
- [ ] Set up Substack cross-posting (Saturday)

### Week 2 (Days 8-14): Distribution
- [ ] Twitter threads 007, 009, 011, 013, 015
- [ ] Reddit posts: r/stoicism, r/productivity, r/selfimprovement
- [ ] LinkedIn: 3 posts adapted from Twitter threads
- [ ] Add Kit emails Day 2-5 to sequence

### Week 3 (Days 15-21): Amplification
- [ ] Twitter threads 016-022
- [ ] Reddit posts: r/Entrepreneur, r/IndianPhilosophy
- [ ] Create 5 Pinterest pins (Canva + Vivekananda quotes)
- [ ] Add Kit emails Day 6-10 to sequence
- [ ] Identify 5 podcast targets and send pitches

### Week 4 (Days 22-30): Compound
- [ ] Twitter threads 023-030
- [ ] Remaining Reddit posts
- [ ] YouTube/TikTok: Record first 3 Shorts
- [ ] Review analytics: Which content performed best? Double down
- [ ] Start referral program setup

---

## Metrics to Track Weekly

| Metric | Week 1 Target | Month 1 Target | Month 3 Target |
|--------|--------------|----------------|----------------|
| Email subscribers | 50 | 500 | 5,000 |
| Twitter followers | 100 | 1,000 | 10,000 |
| Blog organic traffic | 100 visits | 1,000/mo | 10,000/mo |
| Newsletter open rate | — | 40%+ | 40%+ |
| Referral rate | — | 10% | 15% |

---

## The Compounding Truth

Vivekananda built his movement with letters, lectures, and word of mouth. No algorithms. No ads. Just: show up, say something true, and let the work speak.

The same physics apply now. The platform is different. The principle is the same.

One light can light a million lights.

Start with your light. Start today.

---

*Generated by Claude Code on March 24, 2026*
*ariseandawake.com | hello@ariseandawake.com*
