import Image from 'next/image';
import RSVPForm from './RSVPForm';

type Person = {
  name: string;
  company: string;
  photo: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
};

type Sponsor = {
  name: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
};

export type EventDetails = {
  title: string;
  titleLines: [string, string];
  accent: string;
  heroImage: string;
  heroAlt: string;
  flyer: string;
  description: string;
  dateLabel: string;
  timeLabel: string;
  headline: string;
  venue?: string;
  address: string;
  // UTC timestamps in Google Calendar format, e.g. 20261023T210000Z
  calendarStart: string;
  calendarEnd: string;
  highlights: { title: string; body: string }[];
  hosts: Person[];
  sponsors?: Sponsor[];
};

function googleCalendarUrl(event: EventDetails) {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${event.calendarStart}/${event.calendarEnd}`,
    details: event.description,
    location: event.venue ? `${event.venue}, ${event.address}` : event.address,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export default function EventPage({ event }: { event: EventDetails }) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`;
  const calendarUrl = googleCalendarUrl(event);

  return (
    <main className="min-h-screen bg-white" style={{ '--accent': event.accent } as React.CSSProperties}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image src={event.heroImage} alt={event.heroAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
          <p className="inline-block bg-white/90 text-gray-900 text-sm font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8 shadow">
            Real Estate Networking Event
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-[0.95] text-[var(--accent)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]">
            {event.titleLines[0]}
            <br />
            {event.titleLines[1]}
          </h1>

          <div className="mt-12 max-w-2xl mx-auto bg-[var(--accent)] rounded-3xl shadow-2xl px-6 py-6 md:py-8 text-white">
            <p className="text-3xl md:text-5xl font-extrabold tracking-tight">{event.headline}</p>
            <div className="h-0.5 bg-white/90 my-4 md:my-5" />
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-xl font-bold tracking-wide hover:underline"
            >
              {event.address}
            </a>
          </div>

          <p className="mt-10 text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            {event.description}
          </p>

          <a
            href="#rsvp"
            className="inline-flex items-center gap-2 mt-10 bg-gray-900 hover:bg-black text-white font-bold px-10 py-5 rounded-xl shadow-xl transition-all text-lg"
          >
            RSVP Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
            <svg className="w-10 h-10 text-[var(--accent)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Date</p>
            <p className="text-2xl font-bold text-gray-900">{event.dateLabel}</p>
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-[var(--accent)] font-semibold hover:underline"
            >
              Add to calendar →
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
            <svg className="w-10 h-10 text-[var(--accent)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Time</p>
            <p className="text-2xl font-bold text-gray-900">{event.timeLabel}</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
            <svg className="w-10 h-10 text-[var(--accent)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Location</p>
            {event.venue && <p className="text-2xl font-bold text-gray-900">{event.venue}</p>}
            <p className={event.venue ? 'text-gray-700' : 'text-2xl font-bold text-gray-900'}>{event.address}</p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-[var(--accent)] font-semibold hover:underline"
            >
              Get directions →
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid md:grid-cols-3 gap-6">
          {event.highlights.map((item) => (
            <div key={item.title} className="rounded-2xl bg-gray-50 p-8">
              <div className="w-10 h-1.5 rounded-full bg-[var(--accent)] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RSVP + Hosts */}
      <section id="rsvp" className="py-16 md:py-24 bg-gray-50 scroll-mt-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-900 mb-6">Hosted By</p>
            <div className="flex flex-wrap gap-6 sm:gap-8">
              {event.hosts.map((host) => (
                <div key={host.name} className="text-center w-36 sm:w-48">
                  <div className="relative w-36 h-44 sm:w-48 sm:h-60 rounded-2xl overflow-hidden shadow-lg bg-white">
                    <Image src={host.photo} alt={host.name} fill className="object-cover object-top" sizes="(min-width: 640px) 192px, 144px" />
                  </div>
                  <p className="mt-4 text-lg font-bold text-gray-900">{host.name}</p>
                  <p className="text-sm font-semibold text-gray-600">{host.company}</p>
                  <div className="mt-3 flex justify-center">
                    <Image src={host.logo} alt={host.company} width={host.logoWidth} height={host.logoHeight} />
                  </div>
                </div>
              ))}
            </div>

            {event.sponsors && event.sponsors.length > 0 && (
              <div className="mt-12">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-900 mb-6">Sponsored By</p>
                <div className="flex flex-wrap items-center gap-8">
                  {event.sponsors.map((sponsor) => (
                    <div key={sponsor.name} className="bg-white rounded-2xl shadow-sm px-8 py-6">
                      <Image src={sponsor.logo} alt={sponsor.name} width={sponsor.logoWidth} height={sponsor.logoHeight} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12">
              <a
                href={event.flyer}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-[var(--accent)] transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                View the event flyer
              </a>
            </div>
          </div>

          <RSVPForm eventName={event.title} calendarUrl={calendarUrl} />
        </div>
      </section>

      <footer className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500 space-y-1">
          <p>Questions? Call or text Taylor at <a href="tel:+13073317130" className="font-semibold text-gray-700 hover:underline">(307) 331-7130</a></p>
          <p>Taylor Eisenbarth · Fairway Independent Mortgage Corporation · NMLS #2289</p>
        </div>
      </footer>
    </main>
  );
}
