import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from '../../lib/gsapSetup'

export default function PageTransition({ children }) {
  const location = useLocation()
  const [displayChildren, setDisplayChildren] = useState(children)
  const containerRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(containerRef.current, {
      opacity: 0,
      y: 12,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        setDisplayChildren(children)
        window.scrollTo(0, 0)
      },
    }).to(containerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
    })

    return () => tl.kill()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return <div ref={containerRef}>{displayChildren}</div>
}