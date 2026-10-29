import * as Icons from 'lucide-react'

export default function InfoCard({ icon, title, lines, note }) {
    const Icon = Icons[icon] || Icons.Info

    return (
        <div className="reveal-item group relative rounded-xl border border-slate-200 bg-white p-6 overflow-hidden cursor-pointer">
            {/* Sliding dark overlay - starts off-screen left, slides in on hover, slides back out left on leave */}
            <div
                className="absolute inset-0 bg-slate-900
                   -translate-x-full group-hover:translate-x-0
                   transition-transform duration-500 ease-out"
            />

            {/* Content sits above the overlay */}
            <div className="relative z-10">
                <div className="w-11 h-11 rounded-lg bg-slate-100 group-hover:bg-white/10 flex items-center justify-center mb-4 transition-colors duration-500">
                    <Icon
                        size={20}
                        className="text-slate-900 group-hover:text-white transition-colors duration-500"
                        strokeWidth={1.75}
                    />
                </div>

                <h3 className="font-semibold text-slate-900 group-hover:text-white mb-2 transition-colors duration-500">
                    {title}
                </h3>

                <div className="space-y-1">
                    {lines.map((line) => (
                        <p
                            key={line}
                            className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors duration-500"
                        >
                            {line}
                        </p>
                    ))}
                </div>

                {note && (
                    <p className="text-sm text-slate-400 mt-2 transition-colors duration-500">
                        {note}
                    </p>
                )}
            </div>
        </div>
    )
}