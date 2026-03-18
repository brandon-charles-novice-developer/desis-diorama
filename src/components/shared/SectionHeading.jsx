export default function SectionHeading({ emoji, title, subtitle }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl emoji-bounce cursor-default">{emoji}</span>
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg ml-12">{subtitle}</p>
      )}
    </div>
  )
}
