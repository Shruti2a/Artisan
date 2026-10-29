import ContactHero from '../components/contact/ContactHero'
import ContactInfoCard from '../components/contact/ContactInfoCard'
import MessageForm from '../components/contact/MessageForm'
import BookingForm from '../components/contact/BookingForm'
import FAQSection from '../components/contact/FAQSection'
import { contactInfo } from '../data/contact'
import { useScrollReveal } from '../hook/useScrollReveal'

export default function Contact() {
    const containerRef = useScrollReveal({ selector: '.reveal-item', y: 20 })

    return (
        <>
            <ContactHero />

            <section ref={containerRef} className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((info) => (
                            <ContactInfoCard key={info.title} {...info} />
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <MessageForm />
                        <BookingForm />
                    </div>
                </div>
            </section>

            <FAQSection />
        </>
    )
}