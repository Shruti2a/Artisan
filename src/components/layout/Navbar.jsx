import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Palette, Menu, X } from 'lucide-react'
import { gsap } from '../../lib/gsapSetup'
import { navLinks } from '../../data/navLinks'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const navRef = useRef(null)
    const mobileRef = useRef(null)

    // Entrance animation on mount
    useEffect(() => {
        gsap.fromTo(
            navRef.current,
            { y: -24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
        )
    }, [])

    // Shadow/border on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Mobile menu open/close animation
    useEffect(() => {
        if (!mobileRef.current) return
        if (open) {
            gsap.set(mobileRef.current, { display: 'flex', height: 0, opacity: 0 })
            gsap.to(mobileRef.current, {
                height: 'auto',
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out',
            })
        } else {
            gsap.to(mobileRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => gsap.set(mobileRef.current, { display: 'none' }),
            })
        }
    }, [open])

    return (
        <header
            ref={navRef}
            className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-sm border-b border-slate-200' : 'border-b border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-17">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2.5 shrink-0">
                    <Palette size={26} strokeWidth={1.75} className="text-slate-900" />
                    <span className="font-display text-xl tracking-tight font-semibold text-slate-900">
                        ARTISAN
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-[15px] transition-colors ${isActive
                                    ? 'text-slate-900 font-semibold'
                                    : 'text-slate-600 hover:text-slate-900'
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                {/* CTA */}
                <Link
                    to="/visit"
                    className="hidden lg:inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                    Plan Your Visit
                </Link>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen((o) => !o)}
                    className="lg:hidden p-2 text-slate-900"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile nav */}
            <div
                ref={mobileRef}
                className="hidden flex-col lg:hidden overflow-hidden bg-white border-t border-slate-200"
            >
                <div className="flex flex-col px-6 py-4 gap-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `py-2.5 text-[15px] ${isActive ? 'text-slate-900 font-semibold' : 'text-slate-600'
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <Link
                        to="/visit"
                        onClick={() => setOpen(false)}
                        className="mt-3 inline-flex justify-center items-center bg-slate-900 text-white text-sm font-semibold px-5 py-3 rounded-lg"
                    >
                        Plan Your Visit
                    </Link>
                </div>
            </div>
        </header>
    )
}