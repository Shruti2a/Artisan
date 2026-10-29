import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsapSetup'

export function useCounter(target, suffix = '') {
    const elRef = useRef(null)

    useEffect(() => {
        const el = elRef.current
        if (!el) return

        const obj = { val: 0 }
        const trigger = ScrollTrigger.create({
            trigger: el,
            start: 'top 90%',
            once: true,
            onEnter: () => {
                gsap.to(obj, {
                    val: target,
                    duration: 1.6,
                    ease: 'power2.out',
                    onUpdate: () => {
                        el.textContent = Math.floor(obj.val).toLocaleString() + suffix
                    },
                })
            },
        })

        return () => trigger.kill()
    }, [target, suffix])

    return elRef
}