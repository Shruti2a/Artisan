import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { gsap } from '../../lib/gsapSetup'
import ArtworkCard from './ArtworkCard'

export default function AllArtworksModal({ artworks, onClose }) {
    const overlayRef = useRef(null)
    const panelRef = useRef(null)

    useEffect(() => {
        // Lock background scroll while modal is open
        document.body.style.overflow = 'hidden'

        gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
        gsap.fromTo(
            panelRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.05 }
        )

        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    const handleClose = () => {
        gsap.to(panelRef.current, { y: 40, opacity: 0, duration: 0.3, ease: 'power2.in' })
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
            delay: 0.1,
            onComplete: onClose,
        })
    }

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[90] bg-slate-900/60 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 sm:p-6"
            onClick={(e) => e.target === overlayRef.current && handleClose()}
        >
            <div
                ref={panelRef}
                className="bg-white rounded-2xl w-full max-w-6xl max-h-[85vh] overflow-y-auto shadow-2xl"
            >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-slate-200 px-6 sm:px-8 py-5 flex items-center justify-between z-10">
                    <div>
                        <h2 className="font-display text-2xl font-semibold text-slate-900">
                            All Artworks
                        </h2>
                        <p className="text-sm text-slate-500 mt-0.5">
                            {artworks.length} pieces in our current collection
                        </p>
                    </div>
                    <button
                        onClick={handleClose}
                        className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors"
                        aria-label="Close"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Grid */}
                <div className="p-6 sm:p-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {artworks.map((art) => (
                            <ArtworkCard key={art.id} art={art} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}