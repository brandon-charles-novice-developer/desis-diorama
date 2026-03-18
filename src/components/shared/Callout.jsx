export default function Callout({ children, emoji = '💡', type = 'tip' }) {
  const styles = {
    tip: 'bg-accent-lavender/10 border-accent-lavender/30',
    love: 'bg-accent-pink/10 border-accent-pink/30',
    key: 'bg-accent-gold/10 border-accent-gold/30',
    win: 'bg-accent-mint/10 border-accent-mint/30',
  }

  return (
    <div className={`rounded-2xl border ${styles[type] || styles.tip} p-4 md:p-5 flex gap-3 items-start`}>
      <span className="text-xl flex-shrink-0 mt-0.5">{emoji}</span>
      <div className="text-text-secondary text-sm md:text-base leading-relaxed">
        {children}
      </div>
    </div>
  )
}
