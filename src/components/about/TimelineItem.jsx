import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function TimelineItem({ item, isLast }) {
    const [active, setActive] = useState(false)

    return (
        <div className="reveal-item relative">
            <div
                onClick={() => setActive((a) => !a)}
                className={`group relative rounded-xl p-6 sm:p-8 mb-6 cursor-pointer overflow-hidden
                    border transition-all duration-300 ease-out
                    hover:shadow-xl hover:-translate-y-1
                    ${item.current ? 'bg-slate-900 border-slate-900' : 'bg-white border-slate-200'}
                    ${active && !item.current ? 'ring-4 ring-slate-900/15 border-slate-900' : ''}
                  `}
            >
                {/* Left accent strip, grows on hover */}
                <div
                    className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300
                      ${item.current ? 'bg-white/40' : 'bg-slate-200 group-hover:bg-slate-900 group-hover:w-1.5'}`}
                />

                <div className="flex items-start justify-between gap-4 pl-3">
                    <div className="flex-1">
                        {/* Year badge */}
                        <span
                            className={`inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full mb-3
                          ${item.current ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-500'}`}
                        >
                            {item.year}
                        </span>

                        <h3
                            className={`font-display text-xl sm:text-2xl font-semibold mb-2
                          ${item.current ? 'text-white' : 'text-slate-900'}`}
                        >
                            {item.title}
                        </h3>
                        <p
                            className={`text-sm leading-relaxed ${item.current ? 'text-slate-300' : 'text-slate-500'}`}
                        >
                            {item.text}
                        </p>
                    </div>

                    {/* Decorative arrow, rotates on hover */}
                    <ArrowUpRight
                        size={20}
                        className={`shrink-0 transition-transform duration-300 group-hover:rotate-45
                        ${item.current ? 'text-white/50' : 'text-slate-300'}`}
                    />
                </div>

                {/* Current badge, top-right corner ribbon-style */}
                {item.current && (
                    <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-slate-900 bg-white px-2.5 py-1 rounded-full">
                        Present
                    </span>
                )}
            </div>
        </div>
    )
}