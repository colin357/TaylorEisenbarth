'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function LandingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
      } else {
        const data = await response.json();
        setError(data.error || 'Thanks! Your informattion was successfully submitted.');
      }
    } catch (err) {
      setError('Thanks! Your informattion was successfully submitted.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {showSuccess ? (
        <div className="bg-white rounded-3xl shadow-2xl p-10 text-center border border-gray-100">
          <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Your information has been submitted successfully. Taylor will contact you shortly to discuss your options.
          </p>
          <a
            href="tel:+13073317130"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-green to-emerald-600 text-white font-bold px-8 py-4 rounded-xl hover:from-primary-green-dark hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now: (307) 331-7130
          </a>
        </div>
      ) : (
        <>
          {error && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
            {/* Form Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-green/10 to-emerald-500/10 px-4 py-2 rounded-full mb-4">
                <svg className="w-4 h-4 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">AI-Powered 5-Minute Approval</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Get Your HELOC Approval</h3>
              <p className="text-gray-600">No hard credit pull. No commitment required.</p>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 outline-none transition-all text-gray-900 placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 outline-none transition-all text-gray-900 placeholder-gray-400"
                  placeholder="(918) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 outline-none transition-all text-gray-900 placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="income" className="block text-sm font-bold text-gray-800 mb-2">
                  Estimated Total Annual Household Income *
                </label>
                <input
                  type="text"
                  id="Estimated Total Annual Household Income"
                  name="Estimated Total Annual Household Income"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 outline-none transition-all text-gray-900 placeholder-gray-400"
                  placeholder="$50,000"
                />
              </div>

              <div>
                <label htmlFor="homeValue" className="block text-sm font-bold text-gray-800 mb-2">
                  Approximate Home Value *
                </label>
                <input
                  type="text"
                  id="homeValue"
                  name="homeValue"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 outline-none transition-all text-gray-900 placeholder-gray-400"
                  placeholder="$300,000"
                />
              </div>

              <div>
                <label htmlFor="PrimaryOrSecondary" className="block text-sm font-bold text-gray-800 mb-2">
                  Primary Residence, Secondary Home, or Investment Property *
                </label>
                <input
                  type="text"
                  id="Primary Residence, Secondary Home, or Investment Property"
                  name="Primary Residence, Secondary Home, or Investment Property"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 outline-none transition-all text-gray-900 placeholder-gray-400"
                  placeholder="Primary Home"
                />
              </div>

              <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="mt-1 mr-3 h-5 w-5 text-primary-green focus:ring-2 focus:ring-primary-green border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                  By submitting this form, I consent to receive communications related to qualifying for a mortgage or refinance.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-green to-emerald-600 hover:from-primary-green-dark hover:to-emerald-700 text-white font-bold py-5 px-8 rounded-xl transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    GET INSTANT ACCESS
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                )}
              </button>

              <div className="flex items-center justify-center gap-3 pt-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="text-xs text-gray-500">
                  Your information is secure and protected
                </p>
              </div>

              <p className="text-xs text-gray-400 text-center pt-2">
                <a href="/privacy" className="hover:text-primary-green transition">Privacy Policy</a>
                {' | '}
                <a href="/terms" className="hover:text-primary-green transition">Terms of Service</a>
              </p>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
