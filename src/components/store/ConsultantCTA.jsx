import CTASection from '../ui/CTASection'

export default function ConsultantCTA() {
    return (
        <CTASection
            title="Questions About a Piece?"
            subtitle="Our art consultants are here to help you find the perfect artwork for your collection. Contact us for detailed information, additional images, or to arrange a private viewing."
            buttons={[{ label: 'Contact an Art Consultant', to: '/contact' }]}
        />
    )
}