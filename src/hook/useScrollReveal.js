import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsapSetup'

export function useScrollReveal({
    selector = '.reveal-item',
    y = 28,
    stagger = 0.08,
    start = 'top 82%',
} = {}) {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = containerRef.current?.querySelectorAll(selector)
            if (!items || items.length === 0) return

            gsap.set(items, { opacity: 0, y })

            ScrollTrigger.batch(items, {
                start,
                onEnter: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        stagger,
                        ease: 'power3.out',
                        overwrite: true,
                    }),
            })
        }, containerRef)

        return () => ctx.revert()
    }, [selector, y, stagger, start])   
    return containerRef
}