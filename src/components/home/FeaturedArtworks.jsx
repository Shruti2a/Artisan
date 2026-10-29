import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import ArtworkCard from './ArtworkCard'
import { featuredArtworks } from '../../data/artworks'
import { useScrollReveal } from '../../hook/useScrollReveal'

export default function FeaturedArtworks() {
  const containerRef = useScrollReveal({ selector: '.reveal-item', y: 30 })

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          title="Featured Artworks"
          subtitle="Highlights from our current collection"
          action={
            <Button to="/store" variant="outline" icon>
              View All
            </Button>
          }
        />

        <div className="hidden md:grid grid-cols-4 gap-8">
          {featuredArtworks.map((art) => (
            <ArtworkCard key={art.id} art={art} />
          ))}
        </div>

        <div className="md:hidden">
          <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={1.15} navigation={false}>
            {featuredArtworks.map((art) => (
              <SwiperSlide key={art.id}>
                <ArtworkCard art={art} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}