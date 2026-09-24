import type { Metadata } from 'next';
import EventPage, { type EventDetails } from '../components/EventPage';

const event: EventDetails = {
  title: 'Poolside Happy Hour',
  titleLines: ['POOLSIDE', 'HAPPY HOUR'],
  accent: '#e06a0b',
  heroImage: '/images/events/poolside-mansion.jpg',
  heroAlt: 'Aerial view of the waterfront mansion in Tampa',
  flyer: '/images/events/poolside-happy-hour-flyer.jpg',
  description: 'An evening at the mansion for local real estate agents to connect and collaborate.',
  dateLabel: 'Friday, October 23rd',
  timeLabel: '5 – 8 PM',
  headline: 'FRIDAY @ 5 PM',
  address: '507 S 58th St, Tampa, FL 33619',
  calendarStart: '20261023T210000Z',
  calendarEnd: '20261024T000000Z',
  highlights: [
    { title: 'Waterfront Mansion', body: 'Unwind poolside at a stunning Mediterranean-style estate on the water in Tampa.' },
    { title: 'Drinks & Bites', body: 'Kick off the weekend with happy hour drinks and good company.' },
    { title: 'Connect & Collaborate', body: 'Meet fellow agents and industry pros, swap referrals, and build partnerships.' },
  ],
  hosts: [
    {
      name: 'Taylor Eisenbarth',
      company: 'Fairway Home Mortgage',
      photo: '/images/taylor-eisenbarth.png',
      logo: '/images/Fairway Home Mortgage.webp',
      logoWidth: 150,
      logoHeight: 56,
    },
    {
      name: 'Brooke Morris',
      company: 'Keller Williams',
      photo: '/images/events/brooke-morris.jpg',
      logo: '/images/events/keller-williams-logo.png',
      logoWidth: 150,
      logoHeight: 89,
    },
  ],
};

export const metadata: Metadata = {
  title: 'Poolside Happy Hour | Friday, Oct 23 · Tampa',
  description: 'An evening at the mansion for local real estate agents to connect and collaborate. Friday, October 23rd, 5–8 PM at 507 S 58th St, Tampa. RSVP now.',
  openGraph: {
    title: 'Poolside Happy Hour | Friday, Oct 23 · Tampa',
    description: 'An evening at the mansion for local real estate agents to connect and collaborate.',
    images: ['/images/events/poolside-mansion.jpg'],
  },
};

export default function PoolPartyPage() {
  return <EventPage event={event} />;
}
