export default function ComparisonRow({ icon, left, leftSub, right, rightSub }) {
  return (
    <div className="bg-warm-card rounded-2xl border border-warm-border shadow-soft p-4 grid grid-cols-1 md:grid-cols-11 gap-3 items-center card-hover">
      <div className="md:col-span-5 bg-warm-highlight rounded-xl p-4">
        <p className="text-xs font-bold text-accent-coral uppercase tracking-wider mb-1">Kargo</p>
        <p className="text-text-primary text-sm font-semibold">{left}</p>
        <p className="text-text-muted text-xs mt-1">{leftSub}</p>
      </div>

      <div className="md:col-span-1 flex justify-center">
        <div className="w-10 h-10 rounded-full bg-accent-lavender/20 flex items-center justify-center text-xl">
          {icon}
        </div>
      </div>

      <div className="md:col-span-5 bg-zeta-blue/5 border border-zeta-blue/10 rounded-xl p-4">
        <p className="text-xs font-bold text-zeta-blue uppercase tracking-wider mb-1">Zeta</p>
        <p className="text-text-primary text-sm font-semibold">{right}</p>
        <p className="text-text-muted text-xs mt-1">{rightSub}</p>
      </div>
    </div>
  )
}
