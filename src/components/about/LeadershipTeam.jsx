import TeamCard from './TeamCard'
import { leadershipTeam } from '../../data/about'
import { useScrollReveal } from '../../hook/useScrollReveal'

export default function LeadershipTeam() {
    const containerRef = useScrollReveal({ selector: '.reveal-item', y: 40, stagger: 0.15 })

    return (
        <section ref={containerRef} className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-xs font-semibold tracking-wide text-slate-400">
                        The People Behind ARTISAN
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 mt-3">
                        Leadership Team
                    </h2>
                    <p className="mt-3 text-slate-500 max-w-xl mx-auto">
                        Our passionate team of curators, educators, and art professionals dedicated to our
                        mission
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-6">
                    {leadershipTeam.map((member, i) => (
                        <TeamCard key={member.name} member={member} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}