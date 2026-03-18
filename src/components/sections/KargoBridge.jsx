import SectionHeading from '../shared/SectionHeading'
import ComparisonRow from '../shared/ComparisonRow'
import Callout from '../shared/Callout'

const comparisons = [
  {
    icon: '🎯',
    left: 'Sold creative + premium inventory',
    leftSub: 'Your value was the ad unit and the placement quality',
    right: 'Sell the entire marketing engine',
    rightSub: 'Your value is the data, the intelligence, AND the activation',
  },
  {
    icon: '📊',
    left: "Depended on brand's targeting data",
    leftSub: 'If their segments were bad, your campaign underperformed',
    right: 'You bring 240M profiles to the table',
    rightSub: "Brands don't need to have great data — you already do",
  },
  {
    icon: '🤖',
    left: 'Ran managed service campaigns',
    leftSub: 'Hands-on-keyboard optimization, reporting, pacing',
    right: 'AI handles the optimization',
    rightSub: "You're the strategic advisor, not the campaign operator",
  },
  {
    icon: '📡',
    left: 'Channel-specific value',
    leftSub: 'Each channel was a separate line item and conversation',
    right: 'Omnichannel from one platform',
    rightSub: 'Email → CTV → Display → SMS, one identity, one journey',
  },
  {
    icon: '💰',
    left: 'Campaign-level budgets',
    leftSub: 'Quarterly IO renewals, always re-pitching',
    right: 'Enterprise platform contracts',
    rightSub: 'Avg scaled customer = $500K+ ARR, growing to $1M+',
  },
]

export default function KargoBridge() {
  return (
    <section id="kargo-bridge" className="fade-in">
      <SectionHeading
        emoji="🌉"
        title="Kargo You → Zeta You"
        subtitle="AKA: Scheana's Rebrand Energy"
      />

      <Callout emoji="💅" type="love">
        Remember when Scheana went from "Sandoval's ex-friend's girlfriend" to main character
        energy with her own narrative? That's this transition. Same hustle, same work ethic,
        same relationship magic — but now you're selling the <em>whole platform</em>,
        not just one piece of the puzzle. And unlike Jax declaring "I'm the number one guy
        in this group" with nothing to back it up — you actually <em>have</em> the receipts.
        Five years of enterprise relationships and agency credibility.
      </Callout>

      <div className="space-y-3 mt-6">
        {comparisons.map((c, i) => (
          <ComparisonRow key={i} {...c} />
        ))}
      </div>

      <div className="mt-6 bg-accent-lavender/10 border border-accent-lavender/20 rounded-2xl p-5 md:p-6">
        <h3 className="text-text-primary font-bold text-base mb-3 flex items-center gap-2">
          <span className="text-xl">🛡️</span> What You WON'T Need To Do
        </h3>
        <p className="text-text-secondary text-sm mb-3">
          This is important. Breathe. You're not expected to be the technical operator.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { no: "Build campaigns in the platform", yes: "That's what Client Services does" },
            { no: "Debug identity resolution", yes: "That's Engineering / Data Science" },
            { no: "Optimize bid rates or frequency caps", yes: "Athena AI + campaign managers handle this" },
            { no: "Write SQL queries or pull raw data", yes: "Athena lets anyone ask in plain English" },
          ].map((item, i) => (
            <div key={i} className="bg-warm-card rounded-xl p-3 border border-warm-border">
              <p className="text-accent-coral text-xs font-bold flex items-center gap-1.5">
                <span>✕</span> {item.no}
              </p>
              <p className="text-accent-mint text-xs font-medium flex items-center gap-1.5 mt-1">
                <span>✓</span> {item.yes}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Callout emoji="💪" type="win" className="mt-6">
        <strong className="text-text-primary">The mental shift:</strong> At Kargo, you proved you
        could sell complex media to enterprise buyers. At Zeta, you use that same muscle —
        but instead of "here's where your ads will run," it's "here's how you'll know exactly
        who to reach, what to say, and how to say it across every channel from one place."{' '}
        <strong className="text-accent-mint">Same muscles, bigger stage. You already know how to do this.</strong>
      </Callout>
    </section>
  )
}
