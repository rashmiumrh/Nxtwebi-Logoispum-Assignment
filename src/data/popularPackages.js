import coorg from '../assets/popular/coorg.jpg'
import pondicherry from '../assets/popular/pondicherry.jpg'
import ooty from '../assets/popular/ooty.jpg'
import darjeeling from '../assets/popular/darjeeling.jpg'
import andaman from '../assets/popular/andaman.jpg'
import usa from '../assets/packages/usa.jpg'
import langkawi from '../assets/packages/langkawi.jpg'
import paradiseIsland from '../assets/packages/paradise-island.jpg'
import boat from '../assets/why-choose/boat.jpg'
import snow from '../assets/why-choose/snow.jpg'

export const popularPackages = {
  domestic: [
    {
      title: 'Mystic Coorg Retreat',
      location: 'Coorg, Karnataka',
      price: '₹12,999',
      nights: 5,
      image: coorg,
    },
    {
      title: 'Serene Pondicherry Escape',
      location: 'Pondicherry, India',
      price: '₹8,499',
      nights: 2,
      image: pondicherry,
    },
    {
      title: 'Majestic Ooty Getaway',
      location: 'Ooty, Tamilnadu',
      price: '₹15,999',
      nights: 4,
      image: ooty,
    },
    {
      title: 'Darjeeling Hill Magic',
      location: 'Darjeeling, West Bengal',
      price: '₹18,500',
      nights: 5,
      image: darjeeling,
    },
    {
      title: 'Andaman Island Bliss',
      location: 'Andaman and Nicobar Islands',
      price: '₹32,000',
      nights: 5,
      image: andaman,
    },
  ],
  international: [
    {
      title: 'USA Grand Tour',
      location: 'New York, USA',
      price: '₹2,48,989',
      nights: 13,
      image: usa,
    },
    {
      title: 'Best of Langkawi',
      location: 'Langkawi, Malaysia',
      price: '₹35,000',
      nights: 3,
      image: langkawi,
    },
    {
      title: 'Island Resort & Spa',
      location: 'Male, Maldives',
      price: '₹75,000',
      nights: 3,
      image: paradiseIsland,
    },
    {
      title: 'Krabi Island Escape',
      location: 'Krabi, Thailand',
      price: '₹42,500',
      nights: 4,
      image: boat,
    },
    {
      title: 'Swiss Alps Trek',
      location: 'Interlaken, Switzerland',
      price: '₹1,65,000',
      nights: 6,
      image: snow,
    },
  ],
}
