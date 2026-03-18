import SectionHeading from '../shared/SectionHeading'
import Card from '../shared/Card'
import Callout from '../shared/Callout'

export default function DataEdge() {
  return (
    <section id="data-edge" className="fade-in">
      <SectionHeading
        emoji="📱"
        title="The Data Advantage"
        subtitle="AKA: Lisa Barlow's Contact List on Steroids"
      />

      <Callout emoji="📞" type="tip">
        <strong>Picture Lisa Barlow's phone</strong> — but instead of every power player in
        Salt Lake City, it's <strong className="text-zeta-blue">240 million real Americans</strong> with
        2,500 data points each. She knows who they are, what they buy, where they browse, and what
        makes them open their wallets. <em>That's</em> what Zeta hands you on Day 1.
      </Callout>

      <Card className="mt-6" accent="blue">
        <h3 className="text-text-primary font-bold text-lg mb-4">
          Two Ways to Identify People Online
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-accent-mint/10 border border-accent-mint/20 rounded-2xl p-5">
            <div className="text-3xl mb-3">🪪</div>
            <h4 className="text-emerald-600 font-bold text-base mb-2">
              Method 1: They Told Us
            </h4>
            <p className="text-text-secondary text-sm mb-3">
              They logged in, gave their email, or filled out a form. We <em>know</em> it's them.
              Like checking someone's driver's license at the door of PUMP.
            </p>
            <div className="flex items-center gap-2">
              <div className="h-2 flex-1 bg-accent-mint rounded-full"></div>
              <span className="text-emerald-600 text-xs font-bold">~100% accurate</span>
            </div>
            <p className="text-text-muted text-xs mt-2">
              This is called <strong>"deterministic"</strong> — fancy word for "we know for sure"
            </p>
          </div>

          <div className="bg-accent-gold/10 border border-accent-gold/20 rounded-2xl p-5">
            <div className="text-3xl mb-3">🔍</div>
            <h4 className="text-amber-600 font-bold text-base mb-2">
              Method 2: Smart Guess
            </h4>
            <p className="text-text-secondary text-sm mb-3">
              Same device, same neighborhood, same browsing pattern. AI says there's a 92%
              chance it's the same person. Like recognizing someone by their walk at BravoCon.
            </p>
            <div className="flex items-center gap-2">
              <div className="h-2 w-4/5 bg-accent-gold rounded-full"></div>
              <span className="text-amber-600 text-xs font-bold">High confidence</span>
            </div>
            <p className="text-text-muted text-xs mt-2">
              This is called <strong>"probabilistic"</strong> — fancy word for "really good educated guess"
            </p>
          </div>
        </div>

        <div className="bg-zeta-blue/5 border border-zeta-blue/15 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-3xl">🏆</div>
            <h4 className="text-zeta-blue font-bold text-base">
              Zeta's Play: Use Both. Together.
            </h4>
          </div>
          <p className="text-text-secondary text-sm">
            Start with what they <em>know</em> (Method 1) as the anchor. Use smart guesses
            (Method 2) to fill the gaps. Result:{' '}
            <strong className="text-text-primary">every person in the audience is addressable</strong>,
            without sacrificing accuracy. This is why brands can target real purchase intent on
            Day 1 — not just demographic guesses.
          </p>
        </div>
      </Card>

      <Card className="mt-6" accent="lavender">
        <h3 className="text-text-primary font-bold text-lg mb-2">
          The LiveIntent Acquisition 💰
        </h3>
        <p className="text-text-secondary text-sm mb-4">
          In late 2024, Zeta bought a company called LiveIntent for <strong>$250M</strong>.
          Here's why that's a huge deal:
        </p>
        <div className="space-y-3">
          {[
            {
              icon: '📬',
              title: '235 million email identities per month',
              desc: "Email addresses are the most reliable way to ID someone online. They don't disappear when cookies get blocked. Zeta just added a massive pile of them.",
            },
            {
              icon: '📰',
              title: '2,000+ premium publishers',
              desc: 'Think top news sites, lifestyle publications — places brands actually want their ads. Zeta can now connect advertisers directly to those publishers.',
            },
            {
              icon: '🛒',
              title: 'Retail media superpowers',
              desc: 'Brands can now serve personalized ads inside email newsletters and premium content. Huge for retail clients trying to reach shoppers with real intent.',
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-warm-highlight rounded-xl p-4">
              <div className="text-2xl flex-shrink-0 emoji-bounce">{item.icon}</div>
              <div>
                <h4 className="text-text-primary font-semibold text-sm">{item.title}</h4>
                <p className="text-text-muted text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Callout emoji="🔑" type="key" className="mt-6">
        <strong className="text-text-primary">The one-liner:</strong> Most platforms sell you an
        empty toolbox and say "bring your own data." Zeta hands you the toolbox{' '}
        <strong className="text-accent-pink">already full</strong>.
      </Callout>
    </section>
  )
}
