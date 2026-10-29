import { useScrollReveal } from '../../hook/useScrollReveal'

export default function MissionSection() {
  const containerRef = useScrollReveal({ selector: '.mission-reveal' })

  return (
    <section ref={containerRef} className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="mission-reveal font-display text-4xl font-semibold text-slate-900">
          Our Mission
        </h2>
        <p className="mission-reveal mt-6 text-base md:text-lg text-slate-500 leading-relaxed">
          ARTISAN Gallery is dedicated to presenting exceptional contemporary art that
          challenges, inspires, and transforms. We believe in the power of art to foster
          understanding, spark dialogue, and enrich lives. Through our carefully curated
          exhibitions and educational programs, we strive to make contemporary art accessible to
          all while supporting artists at every stage of their careers.
        </p>
      </div>
    </section>
  )
}