import CTASection from '../ui/CTASection'

export default function MembershipCTA() {
    return (
        <CTASection
            title="Become a Member"
            subtitle="Enjoy unlimited free admission, exclusive previews, discounts, and special member events. Support the arts while experiencing the best of contemporary art."
            buttons={[
                { label: 'Join Now', to: '/contact' },
                { label: 'Learn More', to: '/about' },
            ]}
        />
    )
}