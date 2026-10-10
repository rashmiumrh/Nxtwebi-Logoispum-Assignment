import indiaTravelAwards from '../assets/awards/india-travel-awards.jpg'
import mostPopular from '../assets/awards/most-popular.jpg'
import nationalTourism from '../assets/awards/national-tourism.jpg'
import leadershipInnovation from '../assets/awards/leadership-innovation.jpg'
import lokpriyaBrand from '../assets/awards/lokpriya-brand.jpg'
import businessExcellence from '../assets/awards/business-excellence.jpg'
import todaysTraveller from '../assets/awards/todays-traveller.jpg'
import boltIcon from '../assets/icons/features/bolt.svg'
import syncIcon from '../assets/icons/features/sync.svg'
import headsetIcon from '../assets/icons/features/headset.svg'
import shieldIcon from '../assets/icons/features/shield.svg'

export const awards = [
  { title: 'Best Innovation Excellence Award', image: indiaTravelAwards },
  { title: 'Customer Success Leadership Award', image: mostPopular },
  { title: 'Customer Success Leadership Award', image: nationalTourism },
  { title: 'Top Digital Transformation Partner', image: leadershipInnovation },
  { title: 'Outstanding Technology Solution Award', image: lokpriyaBrand },
  { title: 'Excellence in Software Development', image: businessExcellence },
  { title: 'Enterprise Growth & Impact Award', image: todaysTraveller },
]

export const supportFeatures = [
  {
    title: 'Instant Assistance, Anytime',
    text: 'Support for pre-trip questions, itinerary updates, visa and document guidance',
    icon: boltIcon,
  },
  {
    title: 'Real-Time Trip Adjustments',
    text: 'Weather-aware planning with live updates and confirmations',
    icon: syncIcon,
  },
  {
    title: '24/7 Customer Care',
    text: 'Seamless support via WhatsApp or Call throughout the journey',
    icon: headsetIcon,
  },
  {
    title: 'Trusted by Travellers Worldwide',
    text: 'High satisfaction ratings backed by millions of happy customers',
    icon: shieldIcon,
  },
]
