import ExhibitionsHero from '../components/exhibitions/ExhibitionsHero'
import CurrentExhibitions from '../components/exhibitions/CurrentExhibitions'
import UpcomingExhibitions from '../components/exhibitions/UpcomingExhibitions'
import NewsletterCTA from '../components/exhibitions/NewsletterCTA'

export default function Exhibitions() {
  return (
    <>
      <ExhibitionsHero />
      <CurrentExhibitions />
      <UpcomingExhibitions />
      <NewsletterCTA />
    </>
  )
}