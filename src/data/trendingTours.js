import gardensByTheBay from '../assets/trending/gardens-by-the-bay.jpg'
import parisianCharm from '../assets/trending/parisian-charm.jpg'
import kualaLumpur from '../assets/trending/kuala-lumpur.jpg'
import italianWonder from '../assets/trending/italian-wonder.jpg'
import huzhouSprings from '../assets/trending/huzhou-springs.jpg'

export const trendingTours = [
  {
    title: 'Gardens by the Bay',
    price: '₹1.55 lakh',
    image: gardensByTheBay,
    imagePosition: '47% center',
  },
  { title: 'Parisian Charm', price: '₹1.55 lakh', image: parisianCharm, framed: true },
  { title: 'Kuala Lumpur', price: '₹1 lakh', image: kualaLumpur, imagePosition: 'center' },
  { title: 'Italian Wonder', price: '₹2 lakh', image: italianWonder, imagePosition: 'center' },
  {
    title: 'Huzhou Springs',
    price: '₹2.5 lakh',
    image: huzhouSprings,
    imagePosition: '15% center',
  },
]
