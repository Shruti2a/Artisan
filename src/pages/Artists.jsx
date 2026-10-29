import ArtistsHero from '../components/artists/ArtistsHero'
import ArtistsList from '../components/artists/ArtistsList'
import CTASection from '../components/ui/CTASection'

export default function Artists() {
    return (
        <>
            <ArtistsHero />
            <ArtistsList />
            <CTASection
                title="Interested in Representing Your Work?"
                subtitle="We're always looking for exceptional emerging and established artists to join our roster."
                buttons={[
                    { label: 'Submit Your Portfolio', to: '/contact' },
                    { label: 'Learn More', to: '/about' },
                ]}
            />
        </>
    )
}