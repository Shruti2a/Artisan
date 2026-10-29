import ExhibitionCard from './ExhibitionCard'
import { currentExhibitions } from '../../data/exhibitions'
import { useScrollReveal } from '../../hook/useScrollReveal'

export default function CurrentExhibitions() {
    const containerRef = useScrollReveal({ selector: '.reveal-item', y: 24, stagger: 0.08 })

    return (
        <section ref={containerRef} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="reveal-item mb-10">
                    <span className="inline-block text-xs font-semibold tracking-wide text-slate-400 mb-2">
                        ON VIEW NOW
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900">
                        Current Exhibitions
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentExhibitions.map((ex) => (
                        <ExhibitionCard key={ex.id} exhibition={ex} />
                    ))}
                </div>

                {currentExhibitions.length === 0 && (
                    <p className="text-center text-slate-400 py-16">No current exhibitions right now.</p>
                )}
            </div>
        </section>
    )
}