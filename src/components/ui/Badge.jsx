export default function Badge({ children, variant = 'default' }) {
    const variants = {
        default: 'bg-slate-100 text-slate-700',
        live: 'bg-emerald-100 text-emerald-700',
        soon: 'bg-blue-100 text-blue-700',
        limited: 'bg-orange-100 text-orange-700',
    }

    return (
        <span
            className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${variants[variant]}`}
        >
            {children}
        </span>
    )
}