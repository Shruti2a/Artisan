import { useEffect, useRef } from 'react'
import Button from '../ui/Button'
import { gsap } from '../../lib/gsapSetup'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    const bgRef = useRef(null)
    const headingRef = useRef(null)
    const subRef = useRef(null)
    const btnsRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.fromTo(
            bgRef.current,
            { scale: 1.15, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.4 }
        )
            .fromTo(
                headingRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9 },
                '-=0.8'
            )
            .fromTo(
                subRef.current,
                { y: 24, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                '-=0.5'
            )
            .fromTo(
                btnsRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 },
                '-=0.4'
            )

        // Subtle parallax on scroll
        gsap.to(bgRef.current, {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
                trigger: bgRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        })
    }, [])

    return (
        <section className="relative h-[92vh] min-h-[600px] flex items-end overflow-hidden">
            {/* Background image */}
            <div
                ref={bgRef}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://i.pinimg.com/1200x/63/4a/71/634a7128f68c8f0c6fd33d3a3a2094ab.jpg')",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 w-full">
                <h1
                    ref={headingRef}
                    className="font-display text-5xl md:text-7xl leading-[1.05] font-semibold text-white max-w-3xl"
                >
                    Discover
                    <br />
                    Contemporary Art
                </h1>
                <p ref={subRef} className="mt-6 text-lg text-slate-200 max-w-xl leading-relaxed">
                    Explore our curated collection of exceptional artworks from emerging and established
                    artists around the world.
                </p>
                <div ref={btnsRef} className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Button to="/exhibitions" variant="light">
                        Current Exhibitions
                    </Button>
                    <Button to="/visit" variant="outlineLight">
                        Plan Your Visit
                    </Button>
                </div>
            </div>
        </section>
    )
}