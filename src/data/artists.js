import elenaImg from '../assets/images/elenaImg.jpg'
import marcusImg from '../assets/images/marcus-chen.jpg'
import sophiaImg from '../assets/images/sophia-laurent.jpg'
import jamesImg from '../assets/images/james-park.jpg'

import work1 from '../assets/images/art4.jpg'
import work2 from '../assets/images/Charomatic Dreames.jpg'
import work3 from '../assets/images/urban Melody.jpg'

export const artists = [
  {
    id: 1,
    name: 'Elena Rodriguez',
    category: 'Abstract Painting',
    location: 'Barcelona, Spain',
    bio: "Elena Rodriguez is a contemporary abstract painter whose vibrant compositions explore the intersection of color theory and emotional expression. Her work has been exhibited internationally and is held in numerous private collections.",
    image: elenaImg,
    awards: ['Contemporary Art Prize 2025', 'Venice Biennale Finalist 2024'],
    upcomingShows: ['New Perspectives - ARTISAN Gallery (Current)', 'European Art Fair - Paris (May 2026)'],
    featuredWorks: [work1, work2],
  },
  {
    id: 2,
    name: 'Marcus Chen',
    category: 'Mixed Media',
    location: 'San Francisco, USA',
    bio: "Marcus Chen's work explores the intersection of urban life and abstract expression, using layered textures and bold color fields to capture the energy of contemporary city living.",
    image: marcusImg,
    awards: ['Urban Art Award 2024', 'SF MOMA Emerging Artist 2023'],
    upcomingShows: ['Urban Stories - ARTISAN Gallery (Current)', 'Art Basel Hong Kong (June 2026)'],
    featuredWorks: [work2],
  },
  {
    id: 3,
    name: 'Sophia Laurent',
    category: 'Sculpture',
    location: 'Paris, France',
    bio: 'Sophia Laurent works primarily in bronze and marble, creating figurative sculptures that bridge classical technique with contemporary themes of identity and transformation.',
    image: sophiaImg,
    awards: ['National Sculpture Prize 2025', 'Rodin Museum Fellowship 2022'],
    upcomingShows: ['New Perspectives - ARTISAN Gallery (Current)', 'Sculptural Forms - ARTISAN Gallery (April 2026)'],
    featuredWorks: [work3],
  },
  {
    id: 4,
    name: 'James Park',
    category: 'Urban Photography',
    location: 'Seoul, South Korea',
    bio: 'James Park captures the quiet, overlooked corners of modern cityscapes, using natural light and long exposures to reveal rhythm and stillness within urban chaos.',
    image: jamesImg,
    awards: ['International Photography Award 2024', 'Seoul Arts Fellowship 2023'],
    upcomingShows: ['Urban Stories - ARTISAN Gallery (Current)', 'Minimalist Expressions - ARTISAN Gallery (May 2026)'],
    featuredWorks: [work1],
  },
]