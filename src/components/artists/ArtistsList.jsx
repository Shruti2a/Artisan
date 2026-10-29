import { useState, useMemo } from 'react'
import ArtistProfileCard from './ArtistProfileCard'
import CategoryFilter from './CategoryFilter'
import { artists } from '../../data/artists'
import { useScrollReveal } from '../../hook/useScrollReveal'

export default function ArtistsList() {
    const [activeCategory, setActiveCategory] = useState('All')
    const containerRef = useScrollReveal({ selector: '.reveal-item', y: 30, stagger: 0.12 })

    const categories = useMemo(() => [...new Set(artists.map((a) => a.category))], [])

    const filteredArtists = useMemo(
        () =>
            activeCategory === 'All'
                ? artists
                : artists.filter((a) => a.category === activeCategory),
        [activeCategory]
    )

    return (
        <section ref={containerRef} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <CategoryFilter
                    categories={categories}
                    active={activeCategory}
                    onChange={setActiveCategory}
                />

                <div className="grid md:grid-cols-2 gap-6">
                    {filteredArtists.map((artist, i) => (
                        <ArtistProfileCard key={artist.id} artist={artist} index={i} />
                    ))}
                </div>

                {filteredArtists.length === 0 && (
                    <p className="text-center text-slate-400 py-16">No artists found in this category.</p>
                )}
            </div>
        </section>
    )
}