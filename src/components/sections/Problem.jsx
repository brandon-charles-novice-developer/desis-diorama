import SectionHeading from '../shared/SectionHeading'
import Card from '../shared/Card'
import Callout from '../shared/Callout'

const vendors = [
  { icon: '📦', label: 'Customer Data Platform', desc: 'Where they store audience data', vendor: 'e.g. Segment, Tealium' },
  { icon: '🔗', label: 'Identity Onboarder', desc: 'Translates that data for ad platforms', vendor: 'e.g. LiveRamp' },
  { icon: '📺', label: 'Ad Buying Platform (DSP)', desc: 'Actually runs the media', vendor: 'e.g. The Trade Desk' },
  { icon: '📧', label: 'Email Platform', desc: 'Sends emails separately', vendor: 'e.g. Salesforce MC, Braze' },
  { icon: '📱', label: 'SMS Platform', desc: 'Yet another vendor for texts', vendor: 'e.g. Twilio, Attentive' },
]

const problems = [
  {
    emoji: '🐌',
    title: 'Data Takes Forever',
    desc: "Moving audience data between systems takes hours to days. By the time ads run, the intent signal is stale. It's like texting someone back three days later — the moment's gone.",
    color: 'bg-accent-coral/10 border-accent-coral/20',
  },
  {
    emoji: '💸',
    title: 'Money Leaks Everywhere',
    desc: "Every vendor takes a cut. Brands pay 5 separate licenses + integration costs + consultants. It's like hiring five different party planners who each charge full price.",
    color: 'bg-accent-gold/10 border-accent-gold/20',
  },
  {
    emoji: '👻',
    title: 'People Disappear',
    desc: "When data hops between systems, 30-40% of audience matches get lost. You're sending invitations to a party and half go to the wrong address.",
    color: 'bg-accent-lavender/10 border-accent-lavender/20',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="fade-in">
      <SectionHeading
        emoji="🍝"
        title="The Problem Zeta Solves"
        subtitle="AKA: The Housewives Dinner Party from Hell"
      />

      <Callout emoji="🎬" type="tip">
        <strong>Picture this:</strong> Every Housewife at a dinner party hired a <em>different</em> party planner,
        and none of them talked to each other. The table settings clash, the music fights the vibe,
        and someone ordered sushi when the theme was Italian. That's how most brands run their
        marketing today — five disconnected vendors creating chaos.
      </Callout>

      <Card className="mt-6" accent="coral">
        <p className="text-xs font-bold text-accent-coral uppercase tracking-widest mb-4">
          How Most Brands Run Today (The Messy Stack)
        </p>
        <div className="flex flex-col gap-3">
          {vendors.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-warm-highlight text-xl flex-shrink-0 emoji-bounce">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-text-primary font-semibold text-sm">{item.label}</span>
                  <span className="text-text-muted text-xs">{item.vendor}</span>
                </div>
                <p className="text-text-muted text-xs">{item.desc}</p>
              </div>
              {i < vendors.length - 1 && (
                <div className="text-accent-coral text-lg font-bold flex-shrink-0">↓</div>
              )}
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {problems.map((item, i) => (
          <div key={i} className={`${item.color} border rounded-2xl p-5 card-hover`}>
            <div className="text-2xl mb-2 emoji-bounce">{item.emoji}</div>
            <h3 className="text-text-primary font-bold text-sm mb-1">{item.title}</h3>
            <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <Callout emoji="🎯" type="key" className="mt-6">
        <strong className="text-text-primary">The bottom line:</strong> Brands are spending millions
        on tools that don't connect, targeting people they can't actually identify, and measuring
        results they can't fully trust. <strong className="text-accent-pink">That's the gap Zeta fills.</strong>
      </Callout>
    </section>
  )
}
