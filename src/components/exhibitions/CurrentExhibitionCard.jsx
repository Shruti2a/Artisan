import { useState, useMemo } from 'react'
import ExhibitionCard from './ExhibitionCard'
import { currentExhibitions, upcomingExhibitions } from '../../data/exhibitions'
import { useScrollReveal } from '../../hook/useScrollReveal'

const FILTERS = ['All', 'Now Showing', 'Coming Soon']

export default function CurrentExhibitions() {
    const [filter, setFilter] = useState('All')
    const containerRef = useScrollReveal({ selector: '.reveal-item', y: 24, stagger: 0.08 })

    const allExhibitions = useMemo(
        () => [...currentExhibitions, ...upcomingExhibitions],
        []
    )

    const filtered = useMemo(() => {
        if (filter === 'All') return allExhibitions
        return allExhibitions.filter((ex) => ex.status === filter)
    }, [filter, allExhibitions])

    return (
        <section ref={containerRef} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="reveal-item flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
                    <div>
                        <span className="inline-block text-xs font-semibold tracking-wide text-slate-400 mb-2">
                            ON VIEW &amp; ON THE HORIZON
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900">
                            Exhibitions
                        </h2>
                    </div>

                    {/* Filter tabs */}
                    <div className="flex gap-2">
                        {FILTERS.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    filter === f
                                        ? 'bg-slate-900 text-white'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((ex) => (
                        <ExhibitionCard key={ex.id} exhibition={ex} />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <p className="text-center text-slate-400 py-16">No exhibitions in this category.</p>
                )}
            </div>
        </section>
    )
}