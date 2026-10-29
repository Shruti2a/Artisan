import { ArrowRight, Clock } from 'lucide-react'
import { blogPosts } from '../../data/blogPosts'
import { useScrollReveal } from '../../hook/useScrollReveal'

export default function BlogPreview() {
    const containerRef = useScrollReveal({ selector: '.reveal-item', y: 24, stagger: 0.1 })

    return (
        <section ref={containerRef} className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="reveal-item flex items-end justify-between mb-10">
                    <div>
                        <span className="inline-block text-xs font-semibold tracking-wide text-slate-400 mb-2">
                            FROM THE JOURNAL
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900">
                            Stories &amp; insights
                        </h2>
                    </div>
                    <a
                        href="/journal"
                        className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        View all
                        <ArrowRight size={15} />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <a
                            key={post.id}
                            href={`/journal/${post.id}`}
                            className="reveal-item group rounded-xl overflow-hidden bg-white border border-slate-200 hover:shadow-lg transition-shadow duration-400 block"
                        >
                            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5">
                                <span className="text-[10px] font-semibold tracking-wide uppercase text-slate-400">
                                    {post.category}
                                </span>
                                <h3 className="font-display text-base font-semibold text-slate-900 mt-2 leading-snug line-clamp-2 group-hover:text-slate-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400">
                                    <span>{post.date}</span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={11} />
                                        {post.readTime}
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}