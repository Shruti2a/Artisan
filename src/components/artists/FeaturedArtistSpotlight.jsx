import { useState, useEffect, useRef, useCallback } from 'react'
import { gsap } from '../../lib/gsapSetup'
import { artists } from '../../data/artists'
import { MapPin, Quote } from 'lucide-react'

const AUTO_ROTATE_MS = 5000

export default function FeaturedArtistSpotlight() {
    const featured = artists.slice(0, Math.min(5, artists.length))
    const [active, setActive] = useState(0)
    const imageRef = useRef(null)
    const textRef = useRef(null)
    const timerRef = useRef(null)

    const goTo = useCallback((index) => {
        const tl = gsap.timeline()
        tl.to([imageRef.current, textRef.current], {
            opacity: 0,
            y: -8,
            duration: 0.3,
            ease: 'power2.in',
        }).call(() => setActive(index))
    }, [])

    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            { opacity: 0, scale: 1.04 },
            { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' }
        )
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.1 }
        )
    }, [active])

    useEffect(() => {
        clearInterval(timerRef.current)
        timerRef.current = setInterval(() => {
            goTo((active + 1) % featured.length)
        }, AUTO_ROTATE_MS)
        return () => clearInterval(timerRef.current)
    }, [active, featured.length, goTo])

    if (featured.length === 0) return null
    const artist = featured[active]

    return (
        <section className="relative bg-slate-900 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12 grid md:grid-cols-2 gap-8 items-center">
                {/* Image — smaller, capped width */}
                <div
                    ref={imageRef}
                    className="relative aspect-[4/3] max-w-sm mx-auto md:mx-0 w-full rounded-xl overflow-hidden bg-slate-800"
                >
                    <img
                        src={artist.image}
                        alt={artist.name}
                        className="absolute inset-0 w-full h-full object-contain block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-semibold tracking-wide text-white/80 uppercase bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        Spotlight
                    </span>
                </div>

                {/* Text — smaller font sizes */}
                <div ref={textRef}>
                    <Quote size={20} className="text-white/20 mb-3" />
                    <p className="font-display text-lg md:text-xl text-white leading-snug">
                        {artist.bio}
                    </p>

                    <div className="mt-4">
                        <p className="text-white text-sm font-semibold">{artist.name}</p>
                        <div className="flex items-center gap-1.5 mt-1 text-xs text-white/50">
                            <MapPin size={12} />
                            {artist.location}
                            <span className="mx-1.5 text-white/20">•</span>
                            {artist.category}
                        </div>
                    </div>

                    {/* Dot navigation */}
                    <div className="flex gap-2 mt-6">
                        {featured.map((a, i) => (
                            <button
                                key={a.id}
                                onClick={() => goTo(i)}
                                aria-label={`View ${a.name}`}
                                className={`h-1.5 rounded-full transition-all duration-400 ${i === active ? 'w-6 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}