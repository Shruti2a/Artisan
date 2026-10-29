import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsapSetup'
import { useCounter } from '../../hook/useCounter'
import { artists } from '../../data/artists'

function StatBlock({ value, suffix, label }) {
    const ref = useCounter(value, suffix)
    return (
        <div>
            <p ref={ref} className="font-display text-3xl font-bold text-slate-900">0{suffix}</p>
            <p className="text-xs text-slate-400 uppercase tracking-wide mt-1">{label}</p>
        </div>
    )
}

export default function ArtistsHero() {
    const headingRef = useRef(null)
    const wordsRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo(
            headingRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
        ).fromTo(
            wordsRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.6, ease: 'power2.out' },
            '-=0.4'
        )
    }, [])

    const categories = [...new Set(artists.map((a) => a.category))]

    return (
        <section className="relative bg-white border-b border-slate-200 overflow-hidden">
            {/* Decorative giant background word */}
            <span className="absolute -top-6 -right-4 font-display text-[200px] leading-none font-bold text-slate-900/[0.03] select-none pointer-events-none hidden lg:block">
                ART
            </span>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20">
                <span className="inline-block text-xs font-semibold tracking-wide text-slate-400 mb-4">
                    {artists.length} FEATURED CREATORS
                </span>

                <h1
                    ref={headingRef}
                    className="font-display text-5xl md:text-7xl font-semibold text-slate-900 leading-[1.05] max-w-3xl"
                >
                    The voices shaping
                    <br />
                    contemporary art
                </h1>

                <p
                    ref={wordsRef}
                    className="mt-6 text-lg text-slate-500 max-w-xl leading-relaxed"
                >
                    Meet the talented artists who make ARTISAN Gallery a vibrant center for contemporary
                    art — {categories.join(', ')}, and more.
                </p>

                {/* Stats row */}
                <div className="flex flex-wrap gap-10 mt-12 pt-10 border-t border-slate-100">
                    <StatBlock value={artists.length} suffix="" label="Featured Artists" />
                    <StatBlock value={categories.length} suffix="" label="Art Disciplines" />
                    <StatBlock value={12} suffix="+" label="Countries Represented" />
                    <StatBlock value={300} suffix="+" label="Total Artworks" />
                </div>
            </div>
        </section>
    )
}