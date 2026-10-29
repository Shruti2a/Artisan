import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X, MapPin, Award, Calendar } from 'lucide-react'
import { gsap } from '../../lib/gsapSetup'
import Badge from '../ui/Badge'

export default function ArtistDetailModal({ artist, onClose }) {
    const overlayRef = useRef(null)
    const panelRef = useRef(null)

    useEffect(() => {
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
    }, [])

    const closeModal = () => {
        gsap.to(panelRef.current, { scale: 0.92, opacity: 0, duration: 0.25, ease: 'power2.in' })
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.25,
            delay: 0.05,
            onComplete: onClose,
        })
    }

    return createPortal(
        <div
            ref={overlayRef}
            className="fixed top-0 left-0 w-screen h-screen z-[999] bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={(e) => e.target === overlayRef.current && closeModal()}
        >
            <div
                ref={panelRef}
                className="bg-white rounded-2xl w-full max-w-4xl max-h-[85vh] shadow-2xl overflow-hidden grid sm:grid-cols-2"
            >
                {/* Image side */}
                <div className="hidden sm:block bg-slate-100 overflow-hidden">
                    <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                </div>
                <div className="sm:hidden h-48 bg-slate-100 overflow-hidden">
                    <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                </div>

                {/* Info side */}
                <div className="p-6 sm:p-8 overflow-y-auto max-h-[85vh] relative">
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors z-10"
                        aria-label="Close"
                    >
                        <X size={16} />
                    </button>

                    <Badge>{artist.category}</Badge>
                    <h2 className="font-display text-2xl font-semibold text-slate-900 mt-3">
                        {artist.name}
                    </h2>
                    <div className="flex items-center gap-1.5 mt-1.5 text-sm text-slate-500">
                        <MapPin size={14} />
                        {artist.location}
                    </div>

                    <p className="mt-4 text-sm text-slate-500 leading-relaxed">{artist.bio}</p>

                    {artist.awards?.length > 0 && (
                        <div className="mt-5">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
                                <Award size={15} />
                                Awards & Recognition
                            </div>
                            <ul className="space-y-1.5">
                                {artist.awards.map((award) => (
                                    <li key={award} className="text-sm text-slate-500 flex gap-2">
                                        <span className="text-slate-300">•</span>
                                        {award}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {artist.upcomingShows?.length > 0 && (
                        <div className="mt-5">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
                                <Calendar size={15} />
                                Upcoming Shows
                            </div>
                            <ul className="space-y-1.5">
                                {artist.upcomingShows.map((show) => (
                                    <li key={show} className="text-sm text-slate-500 flex gap-2">
                                        <span className="text-slate-300">•</span>
                                        {show}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {artist.featuredWorks?.length > 0 && (
                        <div className="mt-5">
                            <p className="text-sm font-semibold text-slate-900 mb-3">Featured Works</p>
                            <div className="grid grid-cols-3 gap-3">
                                {artist.featuredWorks.map((work, i) => (
                                    <div
                                        key={i}
                                        className="aspect-square rounded-lg overflow-hidden bg-slate-100 border border-slate-200"
                                    >
                                        <img src={work} alt="" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
    )
}