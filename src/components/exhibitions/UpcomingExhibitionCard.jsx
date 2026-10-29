import { useState } from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { Calendar, Bell, CheckCircle2 } from 'lucide-react'

export default function UpcomingExhibitionCard({ exhibition }) {
    const [notifying, setNotifying] = useState(false)
    const [email, setEmail] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [notified, setNotified] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email) return
        setSubmitting(true)
        await new Promise((r) => setTimeout(r, 900))
        setSubmitting(false)
        setNotified(true)
        setEmail('')
    }

    return (
        <div className="reveal-item rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex flex-col">
            <div className="aspect-[16/10] overflow-hidden">
                <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6 flex flex-col flex-1">
                <Badge variant="soon">{exhibition.status}</Badge>
                <h3 className="font-display text-xl font-semibold text-slate-900 mt-3">
                    {exhibition.title}
                </h3>
                <div className="flex items-center gap-1.5 mt-3 text-sm text-slate-500">
                    <Calendar size={15} />
                    {exhibition.dates}
                </div>

                <p className="mt-3 text-sm text-slate-400">Featured Artists:</p>
                <p className="text-sm text-slate-700 font-medium">{exhibition.artists.join(', ')}</p>

                <p className="mt-3 text-sm text-slate-500 leading-relaxed flex-1">
                    {exhibition.description}
                </p>

                {notified ? (
                    <div className="mt-5 flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium px-4 py-3 rounded-lg">
                        <CheckCircle2 size={16} className="shrink-0" />
                        You'll be notified when this opens!
                    </div>
                ) : notifying ? (
                    <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-2">
                        <div className="flex gap-2">
                            <input
                                type="email"
                                required
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-slate-900/15"
                            />
                            <Button type="submit" disabled={submitting} className="px-4 shrink-0">
                                {submitting ? '...' : 'Notify'}
                            </Button>
                        </div>
                        <button
                            type="button"
                            onClick={() => setNotifying(false)}
                            className="text-xs text-slate-400 hover:text-slate-600 self-start"
                        >
                            Cancel
                        </button>
                    </form>
                ) : (
                    <Button
                        variant="outline"
                        className="mt-5 w-full inline-flex items-center justify-center gap-2"
                        onClick={() => setNotifying(true)}
                    >
                        
                        Get Notified
                        <Bell size={17} />
                    </Button>
                )}
            </div>
        </div>
    )
}