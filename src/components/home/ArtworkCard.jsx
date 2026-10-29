import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ArrowRight, X, Check } from 'lucide-react'
import { gsap } from '../../lib/gsapSetup'

export default function ArtworkCard({ art }) {
    const cardRef = useRef(null)
    const [open, setOpen] = useState(false)
    const overlayRef = useRef(null)
    const panelRef = useRef(null)

    useEffect(() => {
        const card = cardRef.current
        const onEnter = () => {
            gsap.to(card, { y: -4, duration: 0.4, ease: 'power2.out' })
        }
        const onLeave = () => {
            gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' })
        }
        card.addEventListener('mouseenter', onEnter)
        card.addEventListener('mouseleave', onLeave)
        return () => {
            card.removeEventListener('mouseenter', onEnter)
            card.removeEventListener('mouseleave', onLeave)
        }
    }, [])

    useEffect(() => {
        if (!open) return
        document.body.style.overflow = 'hidden'
        gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
        gsap.fromTo(
            panelRef.current,
            { scale: 0.92, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: 'power3.out' }
        )
        return () => {
            document.body.style.overflow = ''
        }
    }, [open])

    const closeModal = () => {
        gsap.to(panelRef.current, { scale: 0.92, opacity: 0, duration: 0.25, ease: 'power2.in' })
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.25,
            delay: 0.05,
            onComplete: () => setOpen(false),
        })
    }

    return (
        <>
            <div
                ref={cardRef}
                className="reveal-item group rounded-2xl p-2.5 pb-5 flex flex-col
                 bg-gradient-to-b from-slate-100 via-slate-50 to-white shadow-sm hover:shadow-lg
                 transition-shadow duration-500 max-w-[260px]"
            >
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-200">
                    <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
                </div>

                <div className="px-1.5 pt-3.5">
                    <h3 className="font-display text-base font-semibold text-slate-900">{art.title}</h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {art.description}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                        <button
                            onClick={() => setOpen(true)}
                            className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors duration-300 group/link"
                        >
                            View Artwork
                        </button>
                        <span className="text-xs font-semibold text-slate-900">{art.price}</span>
                    </div>
                </div>
            </div>

            {/* Modal rendered via Portal directly into document.body - immune to any parent transforms */}
            {open && createPortal(
                    <div
                        ref={overlayRef}
                        className="fixed top-0 left-0 w-screen h-screen z-[999] bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={(e) => e.target === overlayRef.current && closeModal()}
                    >
                        <div
                            ref={panelRef}
                            className="bg-white rounded-2xl w-full max-w-3xl max-h-[55vh] shadow-2xl grid sm:grid-cols-2 overflow-hidden"
                        >
                            {/* Image side - desktop */}
                            <div className="hidden sm:block overflow-hidden">
                                <img src={art.image} alt={art.title} className="w-full h-full object-cover" />
                            </div>
                            {/* Image side - mobile, capped height */}
                            <div className="sm:hidden h-56 overflow-hidden">
                                <img src={art.image} alt={art.title} className="w-full h-full object-cover" />
                            </div>

                            {/* Info side - scrolls independently if content is tall */}
                            <div className="p-6 sm:p-8 flex flex-col relative overflow-y-auto max-h-[85vh]">
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors"
                                    aria-label="Close"
                                >
                                    <X size={16} />
                                </button>

                                <p className="text-xs uppercase tracking-wide text-slate-400">{art.medium}</p>
                                <h2 className="font-display text-2xl font-semibold text-slate-900 mt-2">
                                    {art.title}
                                </h2>
                                <p className="text-sm text-slate-500">
                                    {art.artist} · {art.year}
                                </p>

                                <p className="text-sm text-slate-500 leading-relaxed mt-4">{art.description}</p>

                                {art.features?.length > 0 && (
                                    <div className="mt-5">
                                        <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">
                                            Features
                                        </p>
                                        <ul className="space-y-1.5">
                                            {art.features.map((f) => (
                                                <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                                                    <Check size={14} className="text-emerald-500 shrink-0" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="mt-6 pt-6 flex items-center justify-between border-t border-slate-100">
                                    <span className="text-xs text-slate-400">{art.size}</span>
                                    <span className="font-semibold text-lg text-slate-900">{art.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    )
}