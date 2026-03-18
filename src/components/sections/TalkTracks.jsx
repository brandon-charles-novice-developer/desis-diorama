import { useState } from 'react'
import SectionHeading from '../shared/SectionHeading'
import StatCard from '../shared/StatCard'
import Callout from '../shared/Callout'

const personas = [
  {
    key: 'cmo',
    label: 'CMO / VP Mktg',
    emoji: '👩‍💼',
    careAbout: '"Can I reach the right people, at the right time, on the right channel — and prove it worked?"',
    opener: '"What if you could stop renting audiences from Meta and Google — and instead own a system that already knows 240 million people, what they want, and the best way to reach them? One platform, every channel, same identity everywhere."',
    proofs: [
      { num: '240M+', label: 'Ready-to-target profiles on Day 1', accent: 'blue' },
      { num: '6 Channels', label: 'Email, SMS, Display, CTV, OLV, Native — one screen', accent: 'purple' },
      { num: 'AI Co-Pilot', label: 'Ask questions in English, get dashboards in seconds', accent: 'pink' },
    ],
    bgClass: 'bg-zeta-blue/5 border-zeta-blue/15',
    accentClass: 'text-zeta-blue',
  },
  {
    key: 'cfo',
    label: 'CFO / Procurement',
    emoji: '📊',
    careAbout: '"How much are we spending on martech, can we consolidate, and will we actually see ROI?"',
    opener: '"Right now you\'re paying for a CDP, an ESP, a DSP, a data onboarder, and probably a systems integrator to make them talk. We replace all of that with one contract and cut your total marketing tech cost by 20-30%."',
    proofs: [
      { num: '20-30%', label: 'Total cost reduction vs. fragmented stack', accent: 'mint' },
      { num: '1 Contract', label: 'Replaces 4-5 separate vendor agreements', accent: 'mint' },
      { num: '18 Qtrs', label: 'Consecutive beat-and-raise earnings', accent: 'mint' },
    ],
    bgClass: 'bg-accent-mint/5 border-accent-mint/15',
    accentClass: 'text-accent-mint',
  },
  {
    key: 'cto',
    label: 'CTO / Data Team',
    emoji: '💻',
    careAbout: '"Is the data architecture clean? Is it privacy-compliant? Will it break when we scale?"',
    opener: '"Schema-less CDP — no IT tickets to add new data fields. Ingests 6 terabytes in under 10 minutes. Snowflake Clean Room integration for privacy-first activation. And zero cookie dependency."',
    proofs: [
      { num: '6 TB', label: 'Ingested in under 10 minutes', accent: 'purple' },
      { num: '10+ PB', label: 'Data under management', accent: 'purple' },
      { num: 'Zero', label: 'Cookie dependency — deterministic identity', accent: 'purple' },
    ],
    bgClass: 'bg-zeta-purple/5 border-zeta-purple/15',
    accentClass: 'text-zeta-purple',
  },
]

const stats = [
  { num: '$1.3B', label: '2025 revenue (record year)', accent: 'blue' },
  { num: '$1.76B', label: '2026 revenue target', accent: 'purple' },
  { num: '18', label: 'beat-and-raise quarters in a row', accent: 'pink' },
  { num: '$500K+', label: 'avg scaled customer ARR', accent: 'mint' },
  { num: '240M+', label: 'US deterministic profiles', accent: 'blue' },
  { num: '2,500+', label: 'data points per person', accent: 'coral' },
  { num: '235M', label: 'monthly hashed emails (LiveIntent)', accent: 'gold' },
  { num: '2,000+', label: 'premium publishers', accent: 'lavender' },
]

export default function TalkTracks() {
  const [active, setActive] = useState('cmo')
  const persona = personas.find((p) => p.key === active)

  return (
    <section id="talk-tracks" className="fade-in">
      <SectionHeading
        emoji="🎤"
        title="Talk Tracks by Buyer"
        subtitle="Different buyers care about different things. Tap each one."
      />

      <div className="flex gap-2 bg-warm-highlight p-1 rounded-xl w-fit mb-6 border border-warm-border">
        {personas.map((p) => (
          <button
            key={p.key}
            onClick={() => setActive(p.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              active === p.key
                ? 'bg-warm-card text-text-primary shadow-soft'
                : 'text-text-muted hover:text-text-secondary'
            }`}
          >
            <span>{p.emoji}</span>
            {p.label}
          </button>
        ))}
      </div>

      <div className={`${persona.bgClass} border rounded-2xl p-5 md:p-6 space-y-4`}>
        <div>
          <p className={`text-xs font-bold ${persona.accentClass} uppercase tracking-widest mb-1`}>
            What They Care About
          </p>
          <p className="text-text-primary text-base font-semibold italic">{persona.careAbout}</p>
        </div>
        <div>
          <p className={`text-xs font-bold ${persona.accentClass} uppercase tracking-widest mb-2`}>
            Your Opening Line
          </p>
          <div className="bg-warm-card rounded-xl p-4 border border-warm-border shadow-soft">
            <p className="text-text-secondary text-sm italic leading-relaxed">{persona.opener}</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-2">
            Key Proof Points
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {persona.proofs.map((p, i) => (
              <StatCard key={i} number={p.num} label={p.label} accent={p.accent} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-text-primary font-bold text-lg mb-4 flex items-center gap-2">
          <span className="text-xl">🔢</span> Numbers Worth Memorizing
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <StatCard key={i} number={s.num} label={s.label} accent={s.accent} />
          ))}
        </div>
      </div>

      <Callout emoji="🎤" type="win" className="mt-6">
        <strong className="text-text-primary">The one sentence that wins every room:</strong>{' '}
        "Zeta is the only platform that comes with the data, the AI, and every activation channel
        built in — so your team can go from audience insight to live campaign across email, CTV,
        display, and SMS without ever leaving one screen."
      </Callout>
    </section>
  )
}
