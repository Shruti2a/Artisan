export default function CategoryFilter({ categories, active, onChange }) {
    return (
        <div className="flex flex-wrap gap-2 mb-10">
            <button
                onClick={() => onChange('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === 'All'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
            >
                All Artists
            </button>
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onChange(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === cat
                            ? 'bg-slate-900 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    )
}