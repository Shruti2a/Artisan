import Button from './Button'
import { useScrollReveal } from '../../hook/useScrollReveal'

export default function CTASection({ title, subtitle, buttons = [] }) {
    const containerRef = useScrollReveal({ selector: '.cta-reveal' })

    return (
        <section ref={containerRef} className="bg-slate-900 py-20">
            <div className="cta-reveal max-w-3xl mx-auto px-6 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
                    {title}
                </h2>
                {subtitle && (
                    <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">
                        {subtitle}
                    </p>
                )}
                {buttons.length > 0 && (
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        {buttons.map((btn, i) => (
                            <Button
                                key={i}
                                to={btn.to}
                                variant={i === 0 ? 'light' : 'outlineLight'}
                            >
                                {btn.label}
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}