import { useState } from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import ArtistDetailModal from './ArtistDetailModal'
import { MapPin } from 'lucide-react'

export default function ArtistProfileCard({ artist, index = 0 }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="reveal-item group relative rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-400 hover:shadow-xl hover:-translate-y-1">
                <span className="absolute top-3 right-4 font-display text-4xl font-bold text-slate-900/[0.05] select-none z-10">
                    {String(index + 1).padStart(2, '0')}
                </span>

                <div className="flex">
                    <div className="w-32 sm:w-40 shrink-0 aspect-square overflow-hidden bg-slate-100">
                        <img
                            src={artist.image}
                            alt={artist.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    <div className="p-4 sm:p-5 flex flex-col justify-center min-w-0 flex-1">
                        <Badge>{artist.category}</Badge>
                        <h3 className="font-display text-lg font-semibold text-slate-900 mt-2 truncate">
                            {artist.name}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-500">
                            <MapPin size={12} className="shrink-0" />
                            <span className="truncate">{artist.location}</span>
                        </div>

                        <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">
                            {artist.bio}
                        </p>

                        {artist.featuredWorks?.length > 0 && (
                            <div className="flex gap-1.5 mt-3">
                                {artist.featuredWorks.slice(0, 3).map((work, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-md overflow-hidden bg-slate-100 border border-slate-200"
                                    >
                                        <img src={work} alt="" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-end">
                    <Button variant="outline" className="text-xs px-3 py-1.5" onClick={() => setOpen(true)}>
                        View Profile
                    </Button>
                </div>
            </div>

            {open && <ArtistDetailModal artist={artist} onClose={() => setOpen(false)} />}
        </>
    )
}