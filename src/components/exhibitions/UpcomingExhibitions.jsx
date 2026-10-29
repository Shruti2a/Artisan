import UpcomingExhibitionCard from './UpcomingExhibitionCard'
import { upcomingExhibitions } from '../../data/exhibitions'
import { useScrollReveal } from '../../hook/useScrollReveal'

export default function UpcomingExhibitions() {
    const containerRef = useScrollReveal({ selector: '.reveal-item', y: 30, stagger: 0.15 })

    return (
        <section ref={containerRef} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 mb-10">
                    Upcoming Exhibitions
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {upcomingExhibitions.map((ex) => (
                        <UpcomingExhibitionCard key={ex.id} exhibition={ex} />
                    ))}
                </div>
            </div>
        </section>
    )
}