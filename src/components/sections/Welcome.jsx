export default function Welcome() {
  return (
    <section id="welcome" className="fade-in">
      <div className="text-center py-8 md:py-12">
        <div className="text-6xl md:text-7xl mb-6">🌸</div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="gradient-text">Desi's Diorama</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary font-medium mb-2">
          on the Path to Greatness
        </p>
        <p className="text-base text-accent-pink font-semibold italic">
          Job's not finished.
        </p>

        <div className="mt-10 max-w-lg mx-auto">
          <div className="bg-warm-card rounded-3xl border border-accent-pink/20 shadow-soft p-6 md:p-8 pulse-pink">
            <p className="text-text-primary text-base md:text-lg leading-relaxed">
              Everything you need to walk into that interview and{' '}
              <strong className="text-accent-pink">own the room</strong>. No jargon.
              No stress. Just the stuff that matters, explained the way you actually think.
            </p>
            <p className="text-text-secondary text-sm mt-4">
              Scroll down. By the time you hit the bottom, you'll know Zeta better
              than most people who work there. ✨
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          {[
            { emoji: '🍝', label: 'Why Zeta exists' },
            { emoji: '⭐', label: 'How it works' },
            { emoji: '📱', label: 'The secret weapon' },
            { emoji: '🌉', label: 'Your bridge' },
            { emoji: '🏆', label: 'Beat the competition' },
            { emoji: '🎤', label: 'What to say' },
          ].map((item) => (
            <span
              key={item.label}
              className="bg-warm-highlight px-3 py-1.5 rounded-full text-text-secondary border border-warm-border"
            >
              {item.emoji} {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
