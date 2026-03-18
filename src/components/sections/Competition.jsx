import SectionHeading from '../shared/SectionHeading'
import Callout from '../shared/Callout'

const competitors = [
  {
    name: 'Salesforce & Adobe',
    housewife: 'Kyle Richards',
    housewifeDesc: "Been around forever, everyone knows the name, but the house is a renovation project held together with duct tape and good lighting.",
    badge: 'Slow + Expensive',
    badgeColor: 'text-accent-coral bg-accent-coral/10',
    weaknesses: [
      "Built by buying 20+ companies over a decade — pieces don't talk to each other naturally",
      'No data included — they sell empty software, brand has to bring everything',
      'Takes months (sometimes years) and expensive consultants to implement',
    ],
    counters: [
      'Zeta was built as one system from day one — no stitching required',
      '240M profiles + intent data already loaded at launch',
      'Weeks to deploy, not months. 20-30% lower total cost.',
    ],
  },
  {
    name: 'The Trade Desk',
    housewife: 'Dorit Kemsley',
    housewifeDesc: "Absolutely stunning at one thing (fashion/DSP), but that's literally all she does. Ask her to cook dinner and you're ordering DoorDash.",
    badge: 'Good DSP, Only a DSP',
    badgeColor: 'text-accent-gold bg-accent-gold/10',
    weaknesses: [
      'Only does paid media — no email, no SMS, no owned channels',
      'Needs LiveRamp to onboard brand data — extra cost and data loss',
      "No customer data platform — can't build a full picture of the consumer",
    ],
    counters: [
      'DSP + ESP + SMS + CDP in one system = full consumer journey',
      'Audiences activate in milliseconds — no middleman data loss',
      'Native identity graph means no external onboarding needed',
    ],
  },
  {
    name: 'Google & Meta',
    housewife: 'The Producers',
    housewifeDesc: "They control the show, decide who gets screen time, and you just rent your spot. Try to leave? Good luck getting your data out.",
    badge: 'Rented Audiences',
    badgeColor: 'text-zeta-purple bg-zeta-purple/10',
    weaknesses: [
      "Black boxes — brands can't see or own the audience data",
      "You're renting access every time — no compounding data advantage",
      'Growing regulatory risk and privacy fines globally',
    ],
    counters: [
      'Publisher Cloud rivals their reach with 2,000+ premium pubs',
      'Brands OWN their data and audiences — it compounds over time',
      '20% budget shift to open web = 12-20% better ROI',
    ],
  },
]

export default function Competition() {
  return (
    <section id="competition" className="fade-in">
      <SectionHeading
        emoji="🏆"
        title="Competitive Cheat Sheet"
        subtitle="AKA: The RHOBH Power Rankings"
      />

      <Callout emoji="🌹" type="tip">
        Three competitors you'll face in every deal. Each one has a fatal flaw.
        Here's who they are, what's wrong with them, and how you win.
      </Callout>

      <div className="space-y-4 mt-6">
        {competitors.map((comp, i) => (
          <div key={i} className="bg-warm-card rounded-2xl border border-warm-border shadow-soft overflow-hidden card-hover">
            <div className="bg-warm-highlight px-5 py-3 flex items-center justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-text-primary font-bold">{comp.name}</h3>
                <p className="text-text-muted text-xs italic">
                  = {comp.housewife} — {comp.housewifeDesc}
                </p>
              </div>
              <span className={`text-xs font-bold ${comp.badgeColor} px-3 py-1 rounded-full`}>
                {comp.badge}
              </span>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-bold text-accent-coral mb-2 uppercase tracking-wider">Their Weakness</p>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {comp.weaknesses.map((w, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-accent-coral flex-shrink-0">✕</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-accent-mint mb-2 uppercase tracking-wider">Your Zeta Counter</p>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {comp.counters.map((c, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-accent-mint flex-shrink-0">✓</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
