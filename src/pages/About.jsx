import AboutHero from '../components/about/AboutHero'
import MissionSection from '../components/about/MissionSection'
import Timeline from '../components/about/Timeline'
import ImpactStats from '../components/about/ImpactStats'
import LeadershipTeam from '../components/about/LeadershipTeam'
import OurValues from '../components/about/OurValues'
import StoryCTA from '../components/about/StoryCTA'

export default function About() {
    return (
        <>
            <AboutHero />
            <MissionSection />
            <Timeline />
            <ImpactStats />
            <LeadershipTeam />
            <OurValues />
            <StoryCTA />
        </>
    )
}