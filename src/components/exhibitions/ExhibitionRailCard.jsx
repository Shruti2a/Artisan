import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { Calendar, Users } from 'lucide-react'

export default function ExhibitionRailCard({ exhibition }) {
    return (
        <div className="rail-item shrink-0 w-[85vw] sm:w-[560px] snap-center rounded-2xl border border-slate-200 bg-white overflow-hidden select-none">
            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    draggable="false"
                    className="w-full h-full object-cover pointer-events-none"
                />
            </div>
            <div className="p-6 sm:p-7">
                <Badge variant="live">{exhibition.status}</Badge>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 mt-3">
                    {exhibition.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {exhibition.dates}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Users size={14} />
                        {exhibition.artworkCount}
                    </span>
                </div>

                <p className="mt-3 text-xs text-slate-400">Featured Artists</p>
                <p className="text-sm text-slate-700 font-medium truncate">
                    {exhibition.artists.join(', ')}
                </p>

                <p className="mt-3 text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {exhibition.description}
                </p>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <Button to="/visit" icon>
                        Plan Your Visit
                    </Button>
                    <Button to="/artists" variant="outline">
                        View Artists
                    </Button>
                </div>
            </div>
        </div>
    )
}