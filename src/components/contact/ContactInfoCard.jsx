import * as Icons from 'lucide-react'

export default function ContactInfoCard({ icon, title, value }) {
    const Icon = Icons[icon] || Icons.Info

    return (
        <div className="reveal-item group rounded-xl border border-slate-200 bg-white p-6 text-center transition-all duration-400 ease-out hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 cursor-pointer">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 group-hover:bg-slate-900 mb-4 transition-colors duration-400">
                <Icon
                    size={20}
                    className="text-slate-900 group-hover:text-white transition-all duration-400 group-hover:scale-110"
                    strokeWidth={1.75}
                />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
            {value.split('\n').map((line) => (
                <p key={line} className="text-sm text-slate-500">
                    {line}
                </p>
            ))}
        </div>
    )
}