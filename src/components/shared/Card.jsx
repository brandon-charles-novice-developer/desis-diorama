export default function Card({ children, className = '', accent = 'pink' }) {
  const borderColors = {
    pink: 'border-accent-pink/20',
    coral: 'border-accent-coral/20',
    lavender: 'border-accent-lavender/20',
    mint: 'border-accent-mint/20',
    sky: 'border-accent-sky/20',
    gold: 'border-accent-gold/20',
    blue: 'border-zeta-blue/20',
    purple: 'border-zeta-purple/20',
  }

  return (
    <div
      className={`bg-warm-card rounded-2xl border ${borderColors[accent] || borderColors.pink} shadow-soft p-5 md:p-6 card-hover ${className}`}
    >
      {children}
    </div>
  )
}
