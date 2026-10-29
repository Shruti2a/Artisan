import { useState } from 'react'
import StoreHero from '../components/store/StoreHero'
import FilterTabs from '../components/store/FilterTabs'
import ProductGrid from '../components/store/ProductGrid'
import TrustBadges from '../components/store/TrustBadges'
import ConsultantCTA from '../components/store/ConsultantCTA'
import { featuredArtworks } from '../data/artworks'
import { limitedPrints } from '../data/prints'

export default function Store() {
    const [filter, setFilter] = useState('All Items')

    const showOriginals = filter === 'All Items' || filter === 'Original Artworks'
    const showPrints = filter === 'All Items' || filter === 'Art Prints'

    return (
        <>
            <StoreHero />
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <FilterTabs active={filter} onChange={setFilter} />

                    {showOriginals && (
                        <ProductGrid heading="Original Artworks" products={featuredArtworks} />
                    )}
                    {showPrints && (
                        <ProductGrid heading="Limited Edition Prints" products={limitedPrints} />
                    )}

                    <TrustBadges />
                </div>
            </section>
            <ConsultantCTA />
        </>
    )
}