import Lenis from '@studio-freight/lenis'
import { gsap } from './gsapSetup'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let lenisInstance = null

export function initLenis() {
  if (lenisInstance) return lenisInstance

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  lenisInstance = lenis
  return lenis
}

export function getLenis() {
  return lenisInstance
}

export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy()
    lenisInstance = null
  }
}