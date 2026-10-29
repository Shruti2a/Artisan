import { useState } from 'react'
import { gsap } from '../../lib/gsapSetup'
import { useRef, useEffect } from 'react'

const tabs = ['All Items', 'Original Artworks', 'Art Prints', 'Postcards']

export default function FilterTabs({ active, onChange }) {
    const wrapRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
            wrapRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        )
    }, [])

    return (
        <div
            ref={wrapRef}
            className="inline-flex flex-wrap gap-1 p-1.5 bg-slate-100 rounded-xl mb-10"
        >
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onChange(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${active === tab
                            ? 'bg-white text-slate-900 shadow-sm'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}