import { Calendar, Users } from 'lucide-react'

export default function ExhibitionCard({ exhibition }) {
    const isLive = exhibition.status === 'Now Showing'

    return (
        <div className="reveal-item group rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-400 hover:shadow-lg hover:-translate-y-1">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                    className={`absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full backdrop-blur-sm ${
                        isLive ? 'bg-emerald-500/90 text-white' : 'bg-white/85 text-slate-700'
                    }`}
                >
                    {isLive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                    {exhibition.status}
                </span>
            </div>

            <div className="p-5">
                <h3 className="font-display text-base font-semibold text-slate-900 leading-snug line-clamp-2">
                    {exhibition.title}
                </h3>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2.5 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exhibition.dates}
                    </span>
                    {exhibition.artworkCount && (
                        <span className="flex items-center gap-1">
                            <Users size={12} />
                            {exhibition.artworkCount}
                        </span>
                    )}
                </div>

                <p className="mt-2 text-xs text-slate-400 truncate">
                    {exhibition.artists.join(', ')}
                </p>

                <p className="mt-2.5 text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {exhibition.description}
                </p>
            </div>
        </div>
    )
}