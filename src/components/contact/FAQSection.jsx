import { faqs } from '../../data/contact'
import { useScrollReveal } from '../../hook/useScrollReveal'

export default function FAQSection() {
    const containerRef = useScrollReveal({ selector: '.reveal-item', y: 20 })

    return (
        <section ref={containerRef} className="py-20 bg-slate-50">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="font-display text-3xl font-semibold text-slate-900 mb-10">
                    Frequently Asked Questions
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    {faqs.map((faq) => (
                        <div key={faq.question} className="reveal-item rounded-xl bg-white border border-slate-200 p-6">
                            <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}