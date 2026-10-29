import { Heart } from 'lucide-react'
import { instagramPosts } from '../../data/instagramPosts'
import { useScrollReveal } from '../../hook/useScrollReveal'

function InstagramIcon({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
    )
}

export default function InstagramFeedStrip() {
    const containerRef = useScrollReveal({ selector: '.reveal-item', y: 20, stagger: 0.06 })

    return (
        <section ref={containerRef} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="reveal-item flex items-center justify-between mb-8">
                    <div>
                        <span className="inline-block text-xs font-semibold tracking-wide text-slate-400 mb-2">
                            FOLLOW ALONG
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900">
                            @artisangallery
                        </h2>
                    </div>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        <InstagramIcon size={16} />
                        Follow
                    </a>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    {instagramPosts.map((post) => (
                        <a
                            key={post.id}
                            href={post.url}
                            target="_blank"
                            rel="noreferrer"
                            className="reveal-item group relative aspect-square rounded-lg overflow-hidden bg-slate-100 block"
                        >
                            <img
                                src={post.image}
                                alt=""
                                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/50 transition-colors duration-300 flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100">
                                <Heart size={14} className="fill-white text-white" />
                                <span className="text-white text-xs font-semibold">{post.likes}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}