import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Compass } from 'lucide-react'
import { gsap } from '../lib/gsapSetup'

export default function NotFound() {
  const numberRef = useRef(null)
  const contentRef = useRef(null)
  const compassRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(
      numberRef.current,
      { opacity: 0, y: 40, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.5)' }
    ).fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    )

    // Continuous slow rotation on the compass icon
    gsap.to(compassRef.current, {
      rotate: 360,
      duration: 8,
      repeat: -1,
      ease: 'none',
    })
  }, [])

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-6 text-center bg-white">
      <div ref={compassRef} className="mb-2 text-slate-200">
        <Compass size={48} strokeWidth={1} />
      </div>

      <h1
        ref={numberRef}
        className="font-display text-8xl sm:text-9xl font-bold text-slate-900 leading-none"
      >
        404
      </h1>

      <div ref={contentRef} className="mt-4 max-w-md">
        <h2 className="font-display text-2xl font-semibold text-slate-900">
          This gallery wall is empty
        </h2>
        <p className="mt-3 text-slate-500 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved to a different
          exhibition.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-900 text-slate-900 text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}