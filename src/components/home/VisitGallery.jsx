import { useRef, useEffect } from 'react'
import Button from '../ui/Button'
import { gsap, ScrollTrigger } from '../../lib/gsapSetup'

export default function VisitGallery() {
    const imgRef = useRef(null)
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                imgRef.current,
                { scale: 1.1 },
                {
                    scale: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">
                        Visit Our Gallery
                    </h2>
                    <p className="mt-5 text-slate-300 text-base leading-relaxed max-w-md">
                        Experience art in person at our gallery space. Open Tuesday through Sunday,
                        10 AM – 6 PM.
                    </p>
                    <div className="mt-6 space-y-1 text-slate-300 text-sm">
                        <p>123 Art District</p>
                        <p>New York, NY 10001</p>
                        <p>Tuesday – Sunday: 10:00 AM – 6:00 PM</p>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Button to="/visit#map" variant="light">Get Directions</Button>
                        <Button to="/contact" variant="outlineLight">
                            Contact Us
                        </Button>
                    </div>
                </div>

                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                        ref={imgRef}
                        src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=1600&auto=format&fit=crop"
                        alt="Gallery interior"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}