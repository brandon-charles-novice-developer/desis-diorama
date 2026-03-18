import { sections } from '../../data/sections'

export default function Sidebar() {
  return (
    <nav className="hidden lg:flex flex-col fixed top-8 left-8 w-48 gap-1">
      <div className="mb-4">
        <p className="text-xs font-bold text-accent-pink uppercase tracking-widest">Desi's Diorama</p>
      </div>
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-text-secondary hover:text-text-primary hover:bg-warm-highlight transition-all group"
        >
          <span className="text-base group-hover:scale-110 transition-transform">{s.emoji}</span>
          <span className="font-medium">{s.label}</span>
        </a>
      ))}
    </nav>
  )
}
