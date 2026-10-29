import { useEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsapSetup'
import { Palette } from 'lucide-react'

export default function Loader({ onComplete }) {
    const [hidden, setHidden] = useState(false)
    const overlayRef = useRef(null)
    const iconRef = useRef(null)
    const textRef = useRef(null)
    const barRef = useRef(null)
    const barFillRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                // fade out the whole overlay, then unmount
                gsap.to(overlayRef.current, {
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        setHidden(true)
                        onComplete?.()
                    },
                })
            },
        })

        tl.fromTo(
            iconRef.current,
            { scale: 0.6, opacity: 0, rotate: -8 },
            { scale: 1, opacity: 1, rotate: 0, duration: 0.6, ease: 'back.out(1.7)' }
        )
            .fromTo(
                textRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
                '-=0.25'
            )
            .fromTo(
                barRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3 },
                '-=0.2'
            )
            .fromTo(
                barFillRef.current,
                { width: '0%' },
                { width: '100%', duration: 1.1, ease: 'power2.inOut' }
            )

        return () => tl.kill()
    }, [onComplete])

    if (hidden) return null

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center gap-5"
        >
            <div ref={iconRef} className="flex items-center gap-2.5">
                <Palette size={32} strokeWidth={1.6} className="text-slate-900" />
                <span className="font-display text-2xl font-semibold tracking-tight text-slate-900">
                    ARTISAN
                </span>
            </div>

            <p ref={textRef} className="text-sm text-slate-400 tracking-wide">
                Curating the experience
            </p>

            <div ref={barRef} className="w-40 h-[3px] rounded-full bg-slate-100 overflow-hidden">
                <div ref={barFillRef} className="h-full bg-slate-900 rounded-full" style={{ width: '0%' }} />
            </div>
        </div>
    )
}