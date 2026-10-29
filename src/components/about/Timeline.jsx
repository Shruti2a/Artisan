import TimelineItem from './TimelineItem'
import { timeline } from '../../data/about'
import { useScrollReveal } from '../../hook/useScrollReveal'

export default function Timeline() {
  const containerRef = useScrollReveal({ selector: '.reveal-item', y: 24, stagger: 0.12 })

  return (
    <section ref={containerRef} className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 mb-12">
          Our Journey
        </h2>
        {timeline.map((item, i) => (
          <TimelineItem key={item.year} item={item} isLast={i === timeline.length - 1} />
        ))}
      </div>
    </section>
  )
}