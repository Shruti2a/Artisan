import * as Icons from 'lucide-react'
import { useCounter } from '../../hook/useCounter'
import { impactStats } from '../../data/about'
import { useScrollReveal } from '../../hook/useScrollReveal'

function StatCard({ stat }) {
    const Icon = Icons[stat.icon] || Icons.Star
    const counterRef = useCounter(stat.value, stat.suffix)

    return (
        <div className="reveal-item rounded-xl bg-slate-50 p-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-slate-900 mb-4">
                <Icon size={22} className="text-white" strokeWidth={1.75} />
            </div>
            <p ref={counterRef} className="font-display text-3xl font-bold text-slate-900">
                0{stat.suffix}
            </p>
            <p className="text-sm text-slate-500 mt-2">{stat.label}</p>
        </div>
    )
}

export default function ImpactStats() {
    const containerRef = useScrollReveal({ selector: '.reveal-item', y: 20 })

    return (
        <section ref={containerRef} className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-12">
                    Our Impact
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {impactStats.map((stat) => (
                        <StatCard key={stat.label} stat={stat} />
                    ))}
                </div>
            </div>
        </section>
    )
}