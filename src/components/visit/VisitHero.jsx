export default function VisitHero() {
    return (
        <section className="relative h-[60vh] min-h-[380px] flex items-end overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://i.pinimg.com/1200x/e2/ed/48/e2ed48690a6f229fe1eb612bcdb536fb.jpg')",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-14 w-full">
                <h1 className="font-display text-5xl md:text-6xl font-semibold text-white">
                    Plan Your Visit
                </h1>
                <p className="mt-3 text-lg text-slate-200">
                    Everything you need to know before visiting ARTISAN Gallery
                </p>
            </div>
        </section>
    )
}