import VisitHero from '../components/visit/VisitHero'
import InfoCard from '../components/visit/InfoCard'
import GettingHereCard from '../components/visit/GettingHereCard'
import MapPlaceholder from '../components/visit/MapPlaceholder'
import GuidelineCard from '../components/visit/GuidelineCard'
import MembershipCTA from '../components/visit/MembershipCTA'
import { visitInfo, gettingHere, visitorGuidelines } from '../data/visit'
import { useScrollReveal } from '../hook/useScrollReveal'

export default function Visit() {
    const containerRef = useScrollReveal({ selector: '.reveal-item', y: 24, stagger: 0.08 })

    return (
        <>
            <VisitHero />

            <section ref={containerRef} className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    {/* Info cards */}
                    <div className="grid sm:grid-cols-3 gap-6 mb-16">
                        {visitInfo.map((info) => (
                            <InfoCard key={info.title} {...info} />
                        ))}
                    </div>

                    {/* Getting here */}
                    <h2 className="font-display text-3xl font-semibold text-slate-900 mb-8">
                        Getting Here
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        {gettingHere.map((item) => (
                            <GettingHereCard key={item.title} {...item} />
                        ))}
                    </div>

                    <MapPlaceholder />

                    {/* Visitor guidelines */}
                    <h2 className="font-display text-3xl font-semibold text-slate-900 mt-16 mb-8">
                        Visitor Guidelines
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visitorGuidelines.map((item) => (
                            <GuidelineCard key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            <MembershipCTA />
        </>
    )
}