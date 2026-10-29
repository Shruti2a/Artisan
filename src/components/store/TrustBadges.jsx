import { ShieldCheck, Truck, BadgeCheck } from 'lucide-react'
import { useScrollReveal } from '../../hook/useScrollReveal'

const badges = [
    {
        icon: ShieldCheck,
        title: 'Secure Checkout',
        text: 'All transactions are encrypted and secure. We accept major credit cards and PayPal.',
    },
    {
        icon: Truck,
        title: 'Free Shipping',
        text: 'Free shipping on all orders over $500. Insured delivery for original artworks.',
    },
    {
        icon: BadgeCheck,
        title: 'Certificate of Authenticity',
        text: 'All original artworks and limited edition prints come with a certificate of authenticity.',
    },
]

export default function TrustBadges() {
    const containerRef = useScrollReveal({ selector: '.reveal-item', y: 20 })

    return (
        <div ref={containerRef} className="grid sm:grid-cols-3 gap-6 mb-20">
            {badges.map((b) => (
                <div key={b.title} className="reveal-item rounded-xl bg-slate-50 p-6">
                    <b.icon size={22} className="text-slate-900 mb-3" strokeWidth={1.75} />
                    <h3 className="font-semibold text-slate-900">{b.title}</h3>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">{b.text}</p>
                </div>
            ))}
        </div>
    )
}