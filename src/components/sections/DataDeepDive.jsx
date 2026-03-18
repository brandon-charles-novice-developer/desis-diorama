import SectionHeading from '../shared/SectionHeading'
import Card from '../shared/Card'
import Callout from '../shared/Callout'

const dataTypes = [
  {
    emoji: '📧',
    name: 'Email Engagement',
    what: 'Opens, clicks, forwards, unsubscribes across billions of emails',
    why: "Email is the most stable identifier online. It survives cookie deletion, device switches, and privacy changes. When someone opens a brand's email, Zeta knows exactly who they are.",
    color: 'bg-zeta-blue/10 border-zeta-blue/15',
  },
  {
    emoji: '🌐',
    name: 'Website Behavior',
    what: 'Pages visited, products viewed, time on site, cart adds, search queries',
    why: "The Zync tag on a client's website watches what people browse — like someone lingering at the shoe section at Nordstrom. That browsing pattern feeds directly into their profile.",
    color: 'bg-zeta-purple/10 border-zeta-purple/15',
  },
  {
    emoji: '📱',
    name: 'Mobile & App Activity',
    what: 'App opens, in-app purchases, push notification engagement, location signals',
    why: 'Mobile behavior reveals real-time intent. Someone opening a travel app at 11pm is probably planning a trip — that signal can trigger an ad the next morning.',
    color: 'bg-accent-pink/10 border-accent-pink/15',
  },
  {
    emoji: '🛒',
    name: 'Transaction & Purchase History',
    what: 'Past purchases, purchase frequency, average order value, product categories',
    why: "This is the gold. If someone bought running shoes 6 months ago, the AI knows they're likely due for a new pair. Past behavior predicts future behavior better than anything.",
    color: 'bg-accent-mint/10 border-accent-mint/15',
  },
  {
    emoji: '📍',
    name: 'Location & Geo Signals',
    what: 'Neighborhood, store visits, regional patterns, IP-based location',
    why: 'Someone browsing from Beverly Hills gets a different message than someone in Omaha. Location data lets brands localize without guessing.',
    color: 'bg-accent-gold/10 border-accent-gold/15',
  },
  {
    emoji: '🏢',
    name: 'CRM & Loyalty Data',
    what: "The brand's own customer database — loyalty IDs, membership tiers, support tickets",
    why: "This is the client's first-party data. Zeta ingests it, matches it to their 240M profiles, and suddenly the brand's 2M customers become targetable across the entire internet.",
    color: 'bg-accent-lavender/10 border-accent-lavender/15',
  },
  {
    emoji: '📰',
    name: 'Publisher & Content Engagement',
    what: 'Which articles people read, which newsletters they open, content categories',
    why: 'Via LiveIntent and the Publisher Cloud. Someone reading luxury travel content on Condé Nast? That interest signal goes straight to the Data Cloud.',
    color: 'bg-accent-coral/10 border-accent-coral/15',
  },
]

const intentSignals = [
  {
    emoji: '🔥',
    level: 'High Intent',
    analogy: "It's like watching someone at SUR order the goat cheese balls, a cocktail, AND ask for the check — they're buying.",
    signals: [
      'Added product to cart but didn\'t buy (cart abandonment)',
      'Visited the pricing/checkout page multiple times',
      'Searched for a brand or product name directly',
      'Opened 3+ emails from the same brand in a week',
    ],
    color: 'text-accent-coral',
    bg: 'bg-accent-coral/10 border-accent-coral/20',
  },
  {
    emoji: '🌡️',
    level: 'Warm Intent',
    analogy: "Like someone at a Housewives dinner party who keeps looking at the wine list — they're interested, just need a nudge.",
    signals: [
      'Browsing product category pages (not just the homepage)',
      'Engaging with competitor content or comparison articles',
      'Downloading a whitepaper or signing up for a webinar',
      'Returning to the site 2+ times in a week',
    ],
    color: 'text-accent-gold',
    bg: 'bg-accent-gold/10 border-accent-gold/20',
  },
  {
    emoji: '❄️',
    level: 'Early Interest',
    analogy: 'Like someone at BravoCon walking past a booth and glancing — aware, not committed.',
    signals: [
      'Visiting a brand\'s site for the first time',
      'Engaging with a social ad (liked, commented, saved)',
      'Reading content in a related category (e.g., "best running shoes 2026")',
      'Located in a geographic area matching the target demo',
    ],
    color: 'text-zeta-blue',
    bg: 'bg-zeta-blue/10 border-zeta-blue/20',
  },
]

export default function DataDeepDive() {
  return (
    <section id="data-deep-dive" className="fade-in">
      <SectionHeading
        emoji="🔬"
        title="How the Data Actually Works"
        subtitle="The behind-the-scenes that makes you sound brilliant in meetings"
      />

      <Callout emoji="💅" type="love">
        You don't need to explain this like an engineer. But understanding <em>what</em> Zeta
        knows and <em>how</em> they know it is the difference between "I sell a platform" and
        "I understand why this platform wins." This is your secret confidence layer.
      </Callout>

      {/* What Data Feeds the Machine */}
      <div className="mt-8">
        <h3 className="text-text-primary font-bold text-lg mb-2 flex items-center gap-2">
          <span className="text-xl">📊</span> What's Actually Inside Those 2,500+ Data Points?
        </h3>
        <p className="text-text-secondary text-sm mb-4">
          When we say Zeta has 240M profiles with 2,500+ data points each, here's what that means.
          Think of it like a dating profile — but instead of "loves hiking," it's "browsed Nike
          running shoes three times, opened two emails from Hoka, and lives in a zip code where
          people spend 2x the national average on athletic wear."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {dataTypes.map((dt, i) => (
            <div key={i} className={`${dt.color} border rounded-2xl p-4 card-hover`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl emoji-bounce">{dt.emoji}</span>
                <h4 className="text-text-primary font-bold text-sm">{dt.name}</h4>
              </div>
              <p className="text-text-primary text-xs font-medium mb-1">{dt.what}</p>
              <p className="text-text-muted text-xs leading-relaxed">{dt.why}</p>
            </div>
          ))}
        </div>

        <Callout emoji="🧩" type="key" className="mt-4">
          <strong className="text-text-primary">The magic:</strong> None of these data types
          are special on their own. Every platform has <em>some</em> of them. What makes Zeta
          different is they have <strong>all seven in one place</strong>, attached to the same
          identity. No exporting. No syncing. No hoping the data matches up.
        </Callout>
      </div>

      {/* How Intent Works */}
      <div className="mt-10">
        <h3 className="text-text-primary font-bold text-lg mb-2 flex items-center gap-2">
          <span className="text-xl">🎯</span> How Zeta Knows Someone Is "About to Buy"
        </h3>
        <p className="text-text-secondary text-sm mb-4">
          The AI layer (Zeta Alpha) doesn't just store data — it reads <em>patterns</em>.
          It processes <strong>trillions of signals</strong> and assigns every person an
          intent score: how likely are they to buy, right now? Think of it like reading
          body language at a party.
        </p>

        <div className="space-y-4">
          {intentSignals.map((level, i) => (
            <div key={i} className={`${level.bg} border rounded-2xl p-5`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{level.emoji}</span>
                <div>
                  <h4 className={`${level.color} font-bold text-base`}>{level.level}</h4>
                  <p className="text-text-muted text-xs italic">{level.analogy}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {level.signals.map((s, j) => (
                  <div key={j} className="flex items-start gap-2 bg-warm-card/60 rounded-lg p-2.5">
                    <span className={`${level.color} text-xs mt-0.5`}>●</span>
                    <span className="text-text-secondary text-xs">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Callout emoji="⚡" type="win" className="mt-4">
          <strong className="text-text-primary">The AI in action:</strong> When someone hits
          "High Intent," Athena doesn't wait for a human. It automatically triggers the best
          next action — maybe it's a personalized email, a CTV ad that night, or an SMS with
          a limited-time offer. The channel is chosen based on what's worked for people{' '}
          <em>like them</em> before.
        </Callout>
      </div>

      {/* Zeta vs Amazon/Walmart */}
      <div className="mt-10">
        <h3 className="text-text-primary font-bold text-lg mb-2 flex items-center gap-2">
          <span className="text-xl">🏪</span> "But What About Amazon and Walmart?"
        </h3>
        <p className="text-text-secondary text-sm mb-4">
          Great question that might come up. Here's the honest answer and why Zeta still wins
          for most brands.
        </p>

        <Card accent="blue">
          <div className="space-y-5">
            <div>
              <h4 className="text-text-primary font-bold text-sm mb-2 flex items-center gap-2">
                <span>🛒</span> Amazon / Walmart Connect: Closed-Loop (But Walled)
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                Amazon and Walmart see the <strong>actual purchase</strong> happen on their platform.
                Ad → click → buy → done. That's "closed-loop attribution" — they can prove exactly
                which ad led to which sale. It's powerful.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mt-2">
                <strong className="text-accent-coral">But here's the catch:</strong> They only see
                what happens <em>inside their walls</em>. If someone sees an ad on Amazon, leaves,
                Googles the product, and buys it on the brand's website? Amazon has no idea.
                They also don't share their data — the brand can't take those audiences anywhere else.
                You're renting, not owning.
              </p>
            </div>

            <div className="border-t border-warm-border pt-4">
              <h4 className="text-text-primary font-bold text-sm mb-2 flex items-center gap-2">
                <span>💎</span> Zeta: Open Ecosystem (The Full Picture)
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                Zeta doesn't own a store, so they can't see the cash register ring. But they see
                <strong> everything else</strong>: the browsing, the email opens, the ad clicks,
                the site visits, the return visits, the content consumption — across the{' '}
                <em>entire open web</em>.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mt-2">
                Instead of closed-loop, Zeta uses <strong>multi-touch attribution</strong> — tracking
                every touchpoint in the customer journey and assigning credit to each one. They can
                see: "This person saw a CTV ad on Tuesday, opened an email on Wednesday, and visited
                the checkout page on Thursday." Even without seeing the final purchase, they can
                measure <strong>lift</strong> — did the people who saw our campaign buy more than
                those who didn't?
              </p>
            </div>

            <div className="bg-warm-highlight rounded-xl p-4">
              <p className="text-xs font-bold text-zeta-blue uppercase tracking-wider mb-2">
                The Honest Pitch
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                "Amazon gives you a cash register receipt but keeps you locked in their store.
                Zeta gives you the full customer journey across the entire internet — and the
                audiences are <em>yours</em> to keep. For brands whose sales happen on their
                own website, in stores, or through partners, Zeta's model is more complete
                than any walled garden."
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* How Behavior Triggers Omnichannel */}
      <div className="mt-10">
        <h3 className="text-text-primary font-bold text-lg mb-2 flex items-center gap-2">
          <span className="text-xl">🎬</span> How One Action Triggers a Whole Campaign
        </h3>
        <p className="text-text-secondary text-sm mb-4">
          This is the omnichannel magic. Because everything lives in one system, a behavior on
          one channel can <em>instantly</em> trigger an action on another. Here's how it actually
          flows — think of it like a Housewives drama domino effect.
        </p>

        <Card accent="lavender">
          <div className="space-y-0">
            {[
              {
                step: 1,
                emoji: '📧',
                action: 'Sarah opens a brand email and clicks on a summer dress',
                system: 'Email engagement captured → profile updated with "fashion intent" signal',
                color: 'text-zeta-blue',
              },
              {
                step: 2,
                emoji: '🌐',
                action: 'Later that day, she visits the brand\'s website and browses 3 more dresses',
                system: 'Zync tag captures behavior → intent score jumps to "high" → AI triggers next action',
                color: 'text-zeta-purple',
              },
              {
                step: 3,
                emoji: '📺',
                action: 'That evening, she sees a CTV ad for the same brand while streaming',
                system: 'DSP serves targeted ad to her household → matched via deterministic email + device graph',
                color: 'text-accent-pink',
              },
              {
                step: 4,
                emoji: '📱',
                action: 'Next morning, she gets a personalized SMS with a 15% off code',
                system: 'SMS triggered automatically → timing optimized by AI based on her past open patterns',
                color: 'text-accent-mint',
              },
              {
                step: 5,
                emoji: '🛍️',
                action: 'She clicks the link and buys the dress on her phone',
                system: 'Conversion captured → profile updated → suppressed from acquisition campaigns → moved to loyalty flow',
                color: 'text-accent-gold',
              },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 py-4 border-b last:border-b-0 border-warm-border">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full bg-warm-highlight flex items-center justify-center text-sm font-bold ${s.color}`}>
                    {s.step}
                  </div>
                  {i < 4 && <div className="w-0.5 flex-1 bg-warm-border mt-1"></div>}
                </div>
                <div className="flex-1 pb-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{s.emoji}</span>
                    <p className="text-text-primary text-sm font-semibold">{s.action}</p>
                  </div>
                  <p className="text-text-muted text-xs italic ml-7">{s.system}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Callout emoji="🔑" type="key" className="mt-4">
          <strong className="text-text-primary">Why this only works at Zeta:</strong> In a
          fragmented stack, step 1 lives in Braze, step 3 lives in The Trade Desk, and step 4
          lives in Twilio. They don't share data. Sarah gets the wrong ad, the wrong text, at
          the wrong time. At Zeta, <strong className="text-accent-pink">it's all one brain</strong>{' '}
          — every touchpoint feeds the same profile, and the AI orchestrates the whole journey in real time.
        </Callout>
      </div>

      {/* Quick Recap */}
      <div className="mt-8 bg-gradient-to-br from-zeta-blue/5 via-zeta-purple/5 to-accent-pink/5 rounded-3xl border border-zeta-blue/10 p-6">
        <h3 className="text-text-primary font-bold text-base mb-3">📝 If They Ask "How Does the Data Work?"</h3>
        <div className="space-y-2">
          {[
            'Zeta has 240M profiles built from email engagement, web behavior, transactions, mobile, location, CRM data, and publisher content — all in one place.',
            'The AI reads those signals in real-time and assigns intent scores — from "just browsing" to "about to buy."',
            "Unlike Amazon/Walmart, Zeta works across the open web. You don't get a cash register receipt, but you get the full customer journey and the audiences are yours to keep.",
            'A single action (email click) can trigger the entire omnichannel journey (CTV → SMS → display) because all channels share the same identity. No other platform does this natively.',
          ].map((bullet, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-accent-pink font-bold text-sm mt-0.5">{i + 1}.</span>
              <p className="text-text-secondary text-sm leading-relaxed">{bullet}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
