import { useState } from 'react'
import { artists } from '../../data/artists'
import { useScrollReveal } from '../../hook/useScrollReveal'
import ArtistDetailModal from './ArtistDetailModal'
import { MapPin, Eye } from 'lucide-react'

// Varying heights create the Pinterest-style masonry rhythm
const HEIGHT_CLASSES = ['h-64', 'h-80', 'h-72', 'h-96', 'h-60', 'h-84']

export default function ArtistGalleryWall() {
    const [selected, setSelected] = useState(null)
    const containerRef = useScrollReveal({ selector: '.wall-item', y: 24, stagger: 0.08 })

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <span className="inline-block text-xs font-semibold tracking-wide text-slate-400 mb-3">
                    THE GALLERY WALL
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 max-w-xl">
                    Every face behind the work
                </h2>

                <div
                    ref={containerRef}
                    className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]"
                >
                    {artists.map((artist, i) => (
                        <button
                            key={artist.id}
                            onClick={() => setSelected(artist)}
                            className={`wall-item group relative w-full mb-5 break-inside-avoid rounded-2xl overflow-hidden bg-slate-200 block text-left ${
                                HEIGHT_CLASSES[i % HEIGHT_CLASSES.length]
                            }`}
                        >
                            <img
                                src={artist.image}
                                alt={artist.name}
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            />

                            {/* Base gradient — always faintly visible for text legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent" />

                            {/* Category tag — top */}
                            <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-wide uppercase text-white/90 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full">
                                {artist.category}
                            </span>

                            {/* Hover reveal panel */}
                            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350 ease-out">
                                <p className="font-display text-lg font-semibold text-white leading-tight">
                                    {artist.name}
                                </p>
                                <div className="flex items-center gap-1.5 mt-1 text-xs text-white/70">
                                    <MapPin size={11} />
                                    {artist.location}
                                </div>

                                <p className="mt-2 text-xs text-white/80 leading-relaxed line-clamp-2 max-h-0 opacity-0 group-hover:max-h-16 group-hover:opacity-100 transition-all duration-400 ease-out overflow-hidden">
                                    {artist.bio}
                                </p>
                            </div>

                            {/* View icon — appears on hover, top right */}
                            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                                <Eye size={14} className="text-white" />
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {selected && (
                <ArtistDetailModal artist={selected} onClose={() => setSelected(null)} />
            )}
        </section>
    )
}