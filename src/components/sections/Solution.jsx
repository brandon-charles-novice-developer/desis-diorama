import SectionHeading from '../shared/SectionHeading'
import Card from '../shared/Card'
import Callout from '../shared/Callout'

const layers = [
  {
    emoji: '🧠',
    num: 'Layer 1',
    name: 'Know Who',
    title: 'Identity & Data',
    desc: "Think of this as the world's largest Rolodex — but instead of business cards, it's 240 million real people with 2,500+ data points each. Zeta knows who they are, what they want, and when they're ready to buy.",
    tags: ['240M US profiles', '2.5B global profiles', 'Email, phone, CRM matching', 'Cookie-proof IDs'],
    bgClass: 'bg-zeta-blue/5 border-zeta-blue/15',
    tagClass: 'bg-zeta-blue/10 text-zeta-blue',
  },
  {
    emoji: '⚡',
    num: 'Layer 2',
    name: 'Know What',
    title: 'AI Intelligence (Athena)',
    desc: 'The AI reads all that data and tells the marketer: "This person is about to buy. Here\'s the best message. Here\'s the best channel. Go now." It\'s like having a data scientist sitting inside every campaign — built with OpenAI.',
    tags: ['Athena AI co-pilot', 'Ask questions in plain English', 'Auto-optimizes campaigns', 'Predicts outcomes before spend'],
    bgClass: 'bg-zeta-purple/5 border-zeta-purple/15',
    tagClass: 'bg-zeta-purple/10 text-zeta-purple',
  },
  {
    emoji: '🚀',
    num: 'Layer 3',
    name: 'Go Do It',
    title: 'Activation (Every Channel)',
    desc: "From that same screen, the marketer hits go on email, SMS, display ads, CTV, video, and native ads. No exporting. No syncing. No waiting. Audiences built upstairs activate downstairs in milliseconds.",
    tags: ['Built-in DSP', 'Built-in email', 'Built-in SMS', 'CTV & video', '2,000+ publishers'],
    bgClass: 'bg-accent-mint/5 border-accent-mint/15',
    tagClass: 'bg-accent-mint/10 text-emerald-600',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="fade-in">
      <SectionHeading
        emoji="⭐"
        title="Zeta = Everything in One Box"
        subtitle="AKA: The Blair Waldorf of Marketing Platforms"
      />

      <Callout emoji="👑" type="tip">
        <strong>Think Blair Waldorf:</strong> Why have five unreliable minions when you can
        run the entire Upper East Side yourself? Zeta doesn't need a coalition of messy vendors —
        it IS the operation. Data, intelligence, and activation all under one roof.
        One queen, one throne, zero drama between departments.
      </Callout>

      <div className="mt-6 rounded-3xl overflow-hidden border border-warm-border shadow-soft">
        <div className="bg-gradient-to-r from-zeta-blue to-zeta-purple px-6 py-4">
          <h3 className="text-white font-bold text-lg">Zeta Marketing Platform</h3>
          <p className="text-white/70 text-xs">Three layers, one system, zero data leakage</p>
        </div>

        {layers.map((layer, i) => (
          <div key={i} className={`${layer.bgClass} border-b last:border-b-0 p-5 md:p-6`}>
            <div className="flex items-start gap-4">
              <div className="bg-warm-card rounded-xl p-3 text-center flex-shrink-0 w-20 shadow-soft">
                <div className="text-2xl mb-1">{layer.emoji}</div>
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{layer.num}</div>
                <div className="text-xs font-bold text-text-primary">{layer.name}</div>
              </div>
              <div>
                <h4 className="text-text-primary font-bold text-base mb-1">{layer.title}</h4>
                <p className="text-text-secondary text-sm mb-3 leading-relaxed">{layer.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {layer.tags.map((t) => (
                    <span key={t} className={`px-2.5 py-1 ${layer.tagClass} text-xs rounded-full font-medium`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Callout emoji="💡" type="win" className="mt-6">
        <strong className="text-text-primary">Why this matters in a pitch:</strong> When you tell
        a VP of Marketing "your audience data, your AI, and your campaign execution all live in the
        same system" — their eyes light up. No more waiting. No more blaming the other vendor.{' '}
        <strong className="text-accent-mint">One throat to choke, one partner to thank.</strong>
      </Callout>
    </section>
  )
}
