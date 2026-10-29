import { useState } from 'react'
import Button from '../ui/Button'
import { useScrollReveal } from '../../hook/useScrollReveal'

export default function NewsletterCTA() {
    const containerRef = useScrollReveal({ selector: '.news-reveal' })
    const [email, setEmail] = useState('')
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email) return
        setSent(true)
        setEmail('')
        setTimeout(() => setSent(false), 3000)
    }

    return (
        <section ref={containerRef} className="bg-slate-900 py-20">
            <div className="news-reveal max-w-2xl mx-auto px-6 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
                    Stay Updated
                </h2>
                <p className="mt-4 text-slate-300 leading-relaxed">
                    Subscribe to our newsletter to receive updates about upcoming exhibitions, artist
                    talks, and special events.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
                >
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-white/30"
                    />
                    <Button variant="light" type="submit">
                        {sent ? 'Subscribed ✓' : 'Subscribe Now'}
                    </Button>
                </form>
            </div>
        </section>
    )
}