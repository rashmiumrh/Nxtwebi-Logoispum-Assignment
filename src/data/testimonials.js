import angelinaRose from '../assets/testimonials/angelina-rose.png'
import andrewSimon from '../assets/testimonials/andrew-simon.png'
import mariaDoe from '../assets/testimonials/maria-doe.png'

const reviews = [
  {
    name: 'Angelina Rose',
    avatar: angelinaRose,
    rating: 5,
    quote:
      'Solar panels adorn the roof, harnessing renewable energy to power the home and even feed excess electricity back into the grid. High-performanceinsulation and triple-glazed',
  },
  {
    name: 'Andrew Simon',
    avatar: andrewSimon,
    rating: 5,
    quote:
      'A home that perfectly blends sustainability with luxury until discovered Ecoland Residence. The moment I stepped community, I knew it was where I wanted to live.',
  },
  {
    name: 'Maria Doe',
    avatar: mariaDoe,
    rating: 3,
    quote:
      'The home boasts sleek, contemporary architecture with clean lines and expansive windows, allowing natural light to flood the interiors It incorporates passive design principles',
  },
]

export const testimonials = [...reviews, ...reviews]
