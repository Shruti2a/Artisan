import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Button({
    to,
    href,
    onClick,
    variant = 'primary',
    children,
    icon = false,
    className = '',
    type = 'button',
}) {
    const base =
        'inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-lg transition-colors'

    const variants = {
        primary: 'bg-slate-900 hover:bg-slate-800 text-white',
        outline: 'border border-slate-300 hover:border-slate-900 text-slate-900',
        outlineLight: 'border border-white/40 hover:border-white text-white',
        light: 'bg-white hover:bg-slate-100 text-slate-900',
    }

    const classes = `${base} ${variants[variant]} ${className}`
    const content = (
        <>
            {children}
            {icon && <ArrowRight size={16} />}
        </>
    )

    if (to) {
        return (
            <Link to={to} className={classes}>
                {content}
            </Link>
        )
    }

    if (href) {
        return (
            <a href={href} className={classes}>
                {content}
            </a>
        )
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {content}
        </button>
    )
}