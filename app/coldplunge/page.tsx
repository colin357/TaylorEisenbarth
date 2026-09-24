import type { Metadata } from 'next';
import EventPage, { type EventDetails } from '../components/EventPage';

const event: EventDetails = {
  title: 'Hot Worx & Cold Plunge',
  titleLines: ['HOT WORX &', 'COLD PLUNGE'],
  accent: '#0fb5dc',
  heroImage: '/images/events/coldplunge-hero.jpg',
  heroAlt: 'Friends relaxing in a cold plunge',
  flyer: '/images/events/hot-worx-cold-plunge-flyer.jpg',
  description: 'Join us at HOTWORX for a cold plunge, sauna, and get to meet other real estate professionals in the Tampa Bay area.',
  dateLabel: 'Friday, October 23rd',
  timeLabel: '12 – 3 PM',
  headline: 'FRIDAY @ 12 PM',
  venue: 'HOTWORX',
  address: '4611 4th St N, St. Petersburg, FL 33703',
  calendarStart: '20261023T160000Z',
  calendarEnd: '20261023T190000Z',
  highlights: [
    { title: 'Sauna Session', body: 'Heat things up in the HOTWORX infrared sauna.' },
    { title: 'Cold Plunge', body: 'Take the plunge and reset with an ice-cold recovery dip.' },
    { title: 'Meet Tampa Bay Pros', body: 'Connect with other real estate professionals from across the Tampa Bay area.' },
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
  ],
  sponsors: [
    {
      name: 'GreenLeaf Title, LLC',
      logo: '/images/events/greenleaf-title-logo.png',
      logoWidth: 220,
      logoHeight: 102,
    },
  ],
};

export const metadata: Metadata = {
  title: 'Hot Worx & Cold Plunge | Friday, Oct 23 · St. Petersburg',
  description: 'Cold plunge, sauna, and networking with Tampa Bay real estate professionals at HOTWORX St. Petersburg. Friday, October 23rd, 12–3 PM. RSVP now.',
  openGraph: {
    title: 'Hot Worx & Cold Plunge | Friday, Oct 23 · St. Petersburg',
    description: 'Cold plunge, sauna, and networking with Tampa Bay real estate professionals at HOTWORX.',
    images: ['/images/events/coldplunge-hero.jpg'],
  },
};

export default function ColdPlungePage() {
  return <EventPage event={event} />;
}
