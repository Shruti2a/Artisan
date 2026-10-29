import * as Icons from 'lucide-react'

export default function GettingHereCard({ icon, title, text, items }) {
    const Icon = Icons[icon] || Icons.Info

    return (
        <div className="reveal-item rounded-xl border border-slate-200 bg-white p-6 transition-all duration-400 ease-out hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 cursor-pointer">
            <div className="flex items-center gap-2.5 mb-3">
                <Icon size={18} className="text-slate-900" strokeWidth={1.75} />
                <h3 className="font-semibold text-slate-900">{title}</h3>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-3">{text}</p>
            <ul className="space-y-1.5">
                {items.map((item) => (
                    <li key={item} className="text-sm text-slate-500 flex gap-2">
                        <span className="text-slate-300">•</span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}