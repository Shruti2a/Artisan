import ProductCard from './ProductCard'
import { useScrollReveal } from '../../hook/useScrollReveal'

export default function ProductGrid({ heading, products, onAdd }) {
    const containerRef = useScrollReveal({ selector: '.reveal-item', y: 30 })

    return (
        <div ref={containerRef} className="mb-16">
            {heading && (
                <h2 className="font-display text-2xl font-semibold text-slate-900 mb-6">{heading}</h2>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onAdd={onAdd} />
                ))}
            </div>
        </div>
    )
}