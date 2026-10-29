import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Palette, Globe, Camera, MessageCircle, Mail } from 'lucide-react'
import { footerData } from '../../data/navLinks'
import { useScrollReveal } from '../../hook/useScrollReveal'

const socialIcons = [Globe, Camera, MessageCircle, Mail]

export default function Footer() {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)
    const containerRef = useScrollReveal({ selector: '.footer-reveal', y: 20 })

    const handleSubscribe = (e) => {
        e.preventDefault()
        if (!email) return
        setSubscribed(true)
        setEmail('')
        setTimeout(() => setSubscribed(false), 3000)
    }

    return (
        <footer ref={containerRef} className="bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
                {/* Top grid */}
                <div className="footer-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Palette size={22} strokeWidth={1.75} className="text-slate-900" />
                            <span className="font-display text-lg font-semibold text-slate-900">
                                {footerData.brand.name}
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed mb-5">
                            {footerData.brand.description}
                        </p>
                        <div className="flex gap-3">
                            {socialIcons.map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 flex items-center justify-center transition-colors"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Visit */}
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4">{footerData.visit.heading}</h4>
                        <ul className="space-y-1.5 text-sm text-slate-500">
                            {footerData.visit.address.map((line) => (
                                <li key={line}>{line}</li>
                            ))}
                        </ul>
                        <ul className="space-y-1.5 text-sm text-slate-500 mt-4">
                            {footerData.visit.hours.map((line, i) => (
                                <li key={line} className={i === footerData.visit.hours.length - 1 ? 'text-slate-400' : ''}>
                                    {line}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4">{footerData.explore.heading}</h4>
                        <ul className="space-y-2">
                            {footerData.explore.links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4">{footerData.connect.heading}</h4>
                        <ul className="space-y-2">
                            {footerData.connect.links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="footer-reveal border-t border-slate-200 mt-12 pt-8">
                    <h4 className="font-semibold text-slate-900 mb-1.5">Stay Connected</h4>
                    <p className="text-sm text-slate-500 mb-4">
                        Subscribe to receive exhibition updates, event invitations, and art news.
                    </p>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="flex-1 bg-slate-100 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-slate-900/20"
                        />
                        <button
                            type="submit"
                            className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                        >
                            {subscribed ? 'Subscribed ✓' : 'Subscribe'}
                        </button>
                    </form>
                </div>

                {/* Bottom bar */}
                <div className="footer-reveal border-t border-slate-200 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>{footerData.bottom.copyright}</p>
                    <div className="flex gap-6">
                        {footerData.bottom.links.map((link) => (
                            <a key={link.label} href={link.path} className="hover:text-slate-900 transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}