export default function SectionHeading({
    title,
    subtitle,
    align = 'left',
    action,
    light = false,
}) {
    const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

    return (
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 ${align === 'center' ? 'text-center' : ''}`}>
            <div className={`flex flex-col ${alignClass}`}>
                <h2
                    className={`font-display text-3xl md:text-4xl font-semibold tracking-tight ${light ? 'text-white' : 'text-slate-900'
                        }`}
                >
                    {title}
                </h2>
                {subtitle && (
                    <p className={`mt-2 text-base ${light ? 'text-slate-300' : 'text-slate-500'}`}>
                        {subtitle}
                    </p>
                )}
            </div>
            {action && <div className="shrink-0">{action}</div>}
        </div>
    )
}