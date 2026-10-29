import { ShoppingCart, Plus } from 'lucide-react'
import Badge from '../ui/Badge'

export default function ProductCard({ product, onAdd }) {
    return (
        <div className="reveal-item group relative rounded-2xl border border-slate-200 bg-white overflow-hidden transition-shadow duration-500 hover:shadow-xl">
            {/* Image area */}
            <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Floating badge, top-left over image */}
                <div className="absolute top-3 left-3">
                    <Badge
                        variant={
                            product.badge === 'Limited'
                                ? 'limited'
                                : product.badge === 'Original'
                                    ? 'live'
                                    : 'default'
                        }
                    >
                        {product.badge}
                    </Badge>
                </div>

                {/* Quick-add circular button, top-right, appears on hover */}
                <button
                    onClick={() => onAdd?.(product)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out hover:bg-slate-900 hover:text-white"
                    aria-label="Quick add to cart"
                >
                    <Plus size={17} />
                </button>

                {/* Bottom gradient + price tag revealed on hover */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span
                    className="absolute bottom-3 left-3 text-white font-semibold text-sm
                     opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                     transition-all duration-300 ease-out"
                >
                    {product.price}
                </span>
            </div>

            {/* Info block */}
            <div className="p-5">
                <h3 className="font-semibold text-slate-900">{product.title}</h3>
                <p className="text-sm text-slate-500 mt-0.5">{product.artist}</p>
                <div className="flex items-center justify-between mt-3">
                    <p className="text-xs text-slate-400">{product.size}</p>
                    <span className="font-semibold text-slate-900">{product.price}</span>
                </div>

                <button
                    onClick={() => onAdd?.(product)}
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 text-sm font-semibold py-2.5 rounded-lg transition-colors duration-300"
                >
                    <ShoppingCart size={15} />
                    Add to Cart
                </button>
            </div>
        </div>
    )
}