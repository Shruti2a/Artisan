import Button from '../ui/Button'
import { useScrollReveal } from '../../hook/useScrollReveal'

export default function WelcomeSection() {
    const containerRef = useScrollReveal({ selector: '.welcome-reveal', y: 24 })

    return (
        <section ref={containerRef} className="pt-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="welcome-reveal font-display text-4xl md:text-5xl font-semibold text-slate-900">
                    Welcome to ARTISAN Gallery
                </h2>
                <p className="welcome-reveal mt-6 text-base md:text-lg text-slate-500 leading-relaxed">
                    For over three decades, ARTISAN Gallery has been a cornerstone of the contemporary art
                    scene, showcasing groundbreaking work from both established masters and emerging
                    talents. Our mission is to foster dialogue between artists and audiences, creating a
                    space where art transforms perspectives and enriches lives.
                </p>
                <div className="welcome-reveal mt-8">
                    <Button to="/about" variant="outline">
                        About Us
                    </Button>
                </div>
            </div>
        </section>
    )
}