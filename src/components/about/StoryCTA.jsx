import CTASection from '../ui/CTASection'

export default function StoryCTA() {
    return (
        <CTASection
            title="Be Part of Our Story"
            subtitle="Support our mission and help us continue championing contemporary art for the next 30 years."
            buttons={[
                { label: 'Become a Member', to: '/visit' },
                { label: 'Make a Donation', to: '/contact' },
            ]}
        />
    )
}