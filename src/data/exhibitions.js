import place1 from '../assets/images/Exhibition1.jpg'
import place2 from '../assets/images/Exhibition2.jpg'
import place3 from '../assets/images/Exhibition3.jpg'
import place4 from '../assets/images/Exhibition4.jpg'
import place5 from '../assets/images/Exhibition5.jpg'

export const currentExhibitions = [
    {
        id: 1,
        title: 'New Perspectives: Contemporary Visions',
        status: 'Now Showing',
        dates: 'January 15, 2026 - March 30, 2026',
        artworkCount: '42 artworks',
        artists: ['Elena Rodriguez', 'Marcus Chen', 'Sophia Laurent'],
        description:
            "This groundbreaking exhibition brings together three of today's most innovative contemporary artists. Each artist presents a unique vision that challenges conventional perspectives and invites viewers to see the world through fresh eyes. The exhibition features over 40 works including paintings, sculptures, and mixed media installations.",
        image: place1,
    },
    {
        id: 2,
        title: 'Urban Stories: City Life in Art',
        status: 'Now Showing',
        dates: 'February 1, 2026 - April 15, 2026',
        artworkCount: '35 artworks',
        artists: ['Marcus Chen', 'Isabella Martinez', 'James Park'],
        description:
            'An exploration of urban landscapes and city life through diverse artistic lenses. From abstract interpretations to realistic portrayals, this exhibition captures the pulse, energy, and complexity of metropolitan existence in the 21st century.',
        image: place2,
    },
]

export const upcomingExhibitions = [
    {
        id: 3,
        title: 'Sculptural Forms: Classical Meets Contemporary',
        status: 'Coming Soon',
        dates: 'April 5, 2026 - June 20, 2026',
        artists: ['Sophia Laurent', 'David Kim', 'Ana Silva'],
        description:
            'A comprehensive survey of contemporary sculpture that bridges classical techniques with modern concepts. This exhibition features bronze, marble, and mixed media works that demonstrate the...',
        image: place3,
    },
    {
        id: 4,
        title: 'Minimalist Expressions',
        status: 'Coming Soon',
        dates: 'May 15, 2026 - July 30, 2026',
        artists: ['James Park', 'Maya Tanaka', 'Robert Foster'],
        description:
            'Celebrating the power of simplicity, this exhibition showcases minimalist art that speaks volumes through restraint. Clean lines, subtle color palettes, and carefully considered compositions create a meditative viewing experience.',
        image: place4,
    },
    {
        id: 5,
        title: 'Nature Reimagined: Botanical Visions',
        status: 'Coming Soon',
        dates: 'August 10, 2026 - October 25, 2026',
        artists: ['Ana Silva', 'Robert Foster', 'Isabella Martinez'],
        description:
            'A vivid exploration of the natural world through contemporary eyes, blending botanical illustration traditions with bold color and abstract form. This exhibition celebrates growth, decay, and renewal across painting, textile, and installation work.',
        image: place5,
    },
]