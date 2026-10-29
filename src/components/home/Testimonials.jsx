import { Star, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import { useScrollReveal } from '../../hook/useScrollReveal'

export default function TestimonialsSection() {
    const containerRef = useScrollReveal({ selector: '.reveal-item', y: 24, stagger: 0.1 })

    return (
        <section ref={containerRef} className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="reveal-item text-center max-w-xl mx-auto mb-12">
                    <span className="inline-block text-xs font-semibold tracking-wide text-slate-400 mb-2">
                        TESTIMONIALS
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900">
                        What visitors are saying
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="reveal-item rounded-2xl border border-slate-200 bg-white p-6 flex flex-col"
                        >
                            <Quote size={22} className="text-slate-200 mb-3" />

                            <div className="flex gap-0.5 mb-3">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        className={i < t.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}
                                    />
                                ))}
                            </div>

                            <p className="text-sm text-slate-600 leading-relaxed flex-1">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-3 mt-5 pt-5 border-t border-slate-100">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-9 h-9 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                                    <p className="text-xs text-slate-400">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}