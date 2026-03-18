export default function StatCard({ number, label, accent = 'blue' }) {
  const colors = {
    blue: 'text-zeta-blue',
    pink: 'text-accent-pink',
    purple: 'text-zeta-purple',
    mint: 'text-accent-mint',
    coral: 'text-accent-coral',
    gold: 'text-accent-gold',
  }

  return (
    <div className="bg-warm-card rounded-2xl border border-warm-border shadow-soft p-4 text-center card-hover">
      <p className={`text-2xl md:text-3xl font-extrabold ${colors[accent] || colors.blue}`}>
        {number}
      </p>
      <p className="text-text-muted text-xs md:text-sm mt-1">{label}</p>
    </div>
  )
}
