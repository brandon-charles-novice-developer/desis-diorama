import SectionHeading from '../shared/SectionHeading'
import Callout from '../shared/Callout'

const checklist = [
  "Zeta = data + AI + activation in ONE platform. That's the whole pitch.",
  '240M profiles on Day 1. Brands don\'t bring data — Zeta already has it.',
  'LiveIntent ($250M acquisition) = 235M email IDs/month + 2,000 publishers.',
  'vs. Salesforce/Adobe: they sell empty software. Zeta comes full.',
  'vs. Trade Desk: great DSP, but that\'s all they do. Zeta does everything.',
  "Your role = relationships + strategy + opening doors. CS handles activation.",
  '$1.3B revenue in 2025. 18 straight beat-and-raise quarters. This company is on fire.',
]

export default function Closing() {
  return (
    <section id="closing" className="fade-in">
      <SectionHeading
        emoji="🎉"
        title="You've Got This, Desi"
        subtitle="Morning-of cheat sheet + a reminder of who you are"
      />

      <div className="bg-warm-card rounded-3xl border border-accent-pink/20 shadow-soft p-6 md:p-8">
        <h3 className="text-text-primary font-bold text-lg mb-4 flex items-center gap-2">
          <span>📋</span> Morning-Of Checklist
        </h3>
        <div className="space-y-3">
          {checklist.map((item, i) => (
            <label key={i} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 rounded border-warm-border text-accent-pink focus:ring-accent-pink/50 accent-pink-400"
              />
              <span className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary transition-colors">
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-br from-accent-pink/10 via-accent-lavender/10 to-zeta-blue/10 rounded-3xl border border-accent-pink/15 p-6 md:p-8">
        <h3 className="text-text-primary font-bold text-lg mb-3 flex items-center gap-2">
          <span>🌟</span> The One Sentence To Memorize
        </h3>
        <div className="bg-warm-card rounded-2xl p-5 shadow-soft border border-warm-border">
          <p className="text-text-primary text-base md:text-lg font-medium leading-relaxed italic">
            "Zeta is the only platform that comes with the data, the AI, and every activation
            channel built in — so your team goes from insight to live campaign across email,
            CTV, display, and SMS without ever leaving one screen."
          </p>
        </div>
      </div>

      <Callout emoji="💌" type="love" className="mt-8">
        <div className="space-y-3">
          <p>
            <strong className="text-text-primary">Hey.</strong> You're going to be amazing tomorrow.
          </p>
          <p>
            You've spent 5 years building relationships, opening doors, and making people want to work
            with you. That doesn't change because the product is different. The way you light up a room,
            the way clients trust you, the way you connect strategy to outcomes — that's the rare stuff.
            That's what they're hiring for.
          </p>
          <p>
            Zeta doesn't need someone who can build campaigns in the platform. They need someone who
            can walk into a room, make a CMO feel understood, and show them a better way. That's{' '}
            <strong className="text-accent-pink">literally what you do</strong>.
          </p>
          <p>
            The technical stuff? You'll learn it. You always do. But the part they can't teach?
            You already have it.
          </p>
          <p className="text-text-primary font-semibold">
            Go get it, Desi. Job's not finished. 🌸
          </p>
        </div>
      </Callout>

      <div className="mt-8 text-center">
        <p className="text-text-muted text-xs">
          Desi's Diorama on the Path to Greatness — March 2026
        </p>
        <p className="text-2xl mt-2">🌸⭐💪</p>
      </div>
    </section>
  )
}
