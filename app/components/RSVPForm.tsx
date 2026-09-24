'use client';

import { useState } from 'react';

type RSVPFormProps = {
  eventName: string;
  calendarUrl: string;
};

const inputClass =
  'w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[var(--accent)] outline-none transition-all text-gray-900 placeholder-gray-400';

export default function RSVPForm({ eventName, calendarUrl }: RSVPFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('event', eventName);

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-10 text-center border border-gray-100">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-3">You&apos;re on the list!</h3>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Thanks for confirming. We can&apos;t wait to see you at {eventName}.
        </p>
        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[var(--accent)] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:brightness-110"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Add to Calendar
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Reserve Your Spot</h3>
        <p className="text-gray-600">Space is limited — RSVP to confirm your attendance.</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-2">
            Full Name *
          </label>
          <input type="text" id="name" name="name" required className={inputClass} placeholder="Jane Smith" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-2">
            Phone *
          </label>
          <input type="tel" id="phone" name="phone" required className={inputClass} placeholder="(813) 555-1234" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2">
            Email *
          </label>
          <input type="email" id="email" name="email" required className={inputClass} placeholder="jane@example.com" />
        </div>

        <div>
          <label htmlFor="brokerage" className="block text-sm font-bold text-gray-800 mb-2">
            Brokerage / Company
          </label>
          <input type="text" id="brokerage" name="brokerage" className={inputClass} placeholder="Your brokerage" />
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm font-bold text-gray-800 mb-2">
            Bringing a Guest?
          </label>
          <select id="guests" name="guests" className={inputClass} defaultValue="0">
            <option value="0">Just me</option>
            <option value="1">+1 guest</option>
            <option value="2">+2 guests</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--accent)] hover:brightness-110 text-white font-bold py-5 px-8 rounded-xl transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed text-lg"
        >
          {isSubmitting ? 'Submitting...' : 'RSVP NOW'}
        </button>
      </div>
    </form>
  );
}
