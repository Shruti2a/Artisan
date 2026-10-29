import Hero from '../components/home/Hero'
import WelcomeSection from '../components/home/WelcomeSection'
import FeaturedArtworks from '../components/home/FeaturedArtworks'
import UpcomingEvents from '../components/home/UpcomingEvents'
import VisitGallery from '../components/home/VisitGallery'
import FeaturedArtistSpotlight from '../components/artists/FeaturedArtistSpotlight'
import TestimonialsSection from '../components/home/Testimonials'
import BlogPreview from '../components/home/BlogPreview'
import InstagramFeedStrip from '../components/home/InstagramFeedStrip'

export default function Home() {
    return (
        <>
            <Hero />
            <WelcomeSection />
            <FeaturedArtworks />
            <FeaturedArtistSpotlight/>
            <TestimonialsSection/>
            <BlogPreview/>
            <UpcomingEvents />
            <InstagramFeedStrip/>
            <VisitGallery />
        </>
    )
}