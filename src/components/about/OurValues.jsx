import * as Icons from 'lucide-react'
import { values } from '../../data/about'
import { useScrollReveal } from '../../hook/useScrollReveal'

function ValueCard({ value, index }) {
  const Icon = Icons[value.icon] || Icons.Star

  return (
    <div className="reveal-item group relative rounded-2xl border border-slate-200 bg-white p-7 overflow-hidden cursor-default">
      {/* Sliding dark background - enters from bottom on hover */}
      <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

      {/* Large faint number, top-right */}
      <span className="absolute top-4 right-5 font-display text-5xl font-bold text-slate-900/[0.06] group-hover:text-white/[0.08] transition-colors duration-500 select-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Content */}
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-white/10 flex items-center justify-center mb-5 transition-colors duration-500">
          <Icon
            size={22}
            className="text-slate-900 group-hover:text-white transition-colors duration-500"
            strokeWidth={1.75}
          />
        </div>

        <h3 className="font-display text-lg font-semibold text-slate-900 group-hover:text-white mb-3 transition-colors duration-500">
          {value.title}
        </h3>
        <p className="text-sm text-slate-500 group-hover:text-slate-300 leading-relaxed transition-colors duration-500">
          {value.text}
        </p>
      </div>
    </div>
  )
}

export default function OurValues() {
  const containerRef = useScrollReveal({ selector: '.reveal-item', y: 30, stagger: 0.1 })

  return (
    <section ref={containerRef} className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-wide text-slate-400">
            What Drives Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 mt-3">
            Our Values
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <ValueCard key={value.title} value={value} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}