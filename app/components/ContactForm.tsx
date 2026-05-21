'use client';

import { useState } from 'react';

function getCreditScoreLabel(score: number): { label: string; color: string } {
  if (score < 580) return { label: 'Poor', color: 'text-red-600' };
  if (score < 670) return { label: 'Fair', color: 'text-orange-500' };
  if (score < 740) return { label: 'Good', color: 'text-yellow-600' };
  if (score < 800) return { label: 'Very Good', color: 'text-blue-600' };
  return { label: 'Exceptional', color: 'text-emerald-600' };
}

export default function ContactForm() {
  const [page, setPage] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  // Page 1
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Page 2
  const [creditScore, setCreditScore] = useState(680);
  const [purchasePrice, setPurchasePrice] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [market, setMarket] = useState('');

  const handlePage1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(2);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('creditScore', creditScore.toString());
    formData.append('purchasePrice', purchasePrice || 'Not provided');
    formData.append('monthlyPayment', monthlyPayment || 'Not provided');
    formData.append('market', market || 'Not provided');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setShowSuccess(true);
      } else {
        const data = await response.json().catch(() => ({}));
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scoreInfo = getCreditScoreLabel(creditScore);

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition';

  const cardClass =
    'bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100';

  if (showSuccess) {
    return (
      <div className={`${cardClass} text-center`}>
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You, {name}!</h3>
        <p className="text-gray-600">Your information has been received. I&apos;ll be in touch with you shortly!</p>
      </div>
    );
  }

  return (
    <div>
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {/* Step indicator */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step === page
                  ? 'bg-primary-green text-white shadow-md'
                  : step < page
                  ? 'bg-emerald-200 text-emerald-800'
                  : 'bg-gray-200 text-gray-400'
              }`}
            >
              {step < page ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                step
              )}
            </div>
            {step < 2 && (
              <div className={`w-16 h-1 mx-2 rounded transition-all ${step < page ? 'bg-emerald-300' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Page 1 — Contact Info */}
      {page === 1 && (
        <form onSubmit={handlePage1Submit} className={cardClass}>
          <h3 className="text-xl font-bold text-gray-800 mb-6">Your Contact Info</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={inputClass}
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className={inputClass}
                placeholder="(918) 555-1234"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputClass}
              placeholder="john@example.com"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary-green to-emerald-600 hover:from-primary-green-dark hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg"
          >
            Next Step &rarr;
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            By submitting this form, you agree to be contacted about your inquiry.
          </p>
        </form>
      )}

      {/* Page 2 — Home Buying Goals */}
      {page === 2 && (
        <form onSubmit={handleFinalSubmit} className={cardClass}>
          <h3 className="text-xl font-bold text-gray-800 mb-6">Your Home Buying Goals</h3>

          {/* Credit Score Slider */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Approximate Credit Score
            </label>
            <div className="text-center mb-4">
              <span className="text-4xl font-bold text-gray-900">{creditScore}</span>
              <span className={`ml-3 text-base font-semibold ${scoreInfo.color}`}>{scoreInfo.label}</span>
            </div>
            <input
              type="range"
              min="300"
              max="850"
              step="10"
              value={creditScore}
              onChange={(e) => setCreditScore(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              style={{ background: `linear-gradient(to right, #10b981 0%, #10b981 ${((creditScore - 300) / 550) * 100}%, #e5e7eb ${((creditScore - 300) / 550) * 100}%, #e5e7eb 100%)` }}
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2 px-0.5">
              <span>300</span>
              <span>Poor</span>
              <span>Fair</span>
              <span>Good</span>
              <span>Very Good</span>
              <span>850</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="purchasePrice" className="block text-sm font-semibold text-gray-700 mb-2">
                Target Purchase Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                <input
                  type="text"
                  id="purchasePrice"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(e.target.value)}
                  className="w-full pl-7 pr-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition"
                  placeholder="300,000"
                />
              </div>
            </div>
            <div>
              <label htmlFor="monthlyPayment" className="block text-sm font-semibold text-gray-700 mb-2">
                Target Monthly Payment
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                <input
                  type="text"
                  id="monthlyPayment"
                  value={monthlyPayment}
                  onChange={(e) => setMonthlyPayment(e.target.value)}
                  className="w-full pl-7 pr-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition"
                  placeholder="1,500"
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="market" className="block text-sm font-semibold text-gray-700 mb-2">
              What Market Are You Looking In?
            </label>
            <input
              type="text"
              id="market"
              value={market}
              onChange={(e) => setMarket(e.target.value)}
              className={inputClass}
              placeholder="e.g. Tulsa, OK"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setPage(1)}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 px-6 rounded-full transition-all text-lg"
            >
              &larr; Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-[2] bg-gradient-to-r from-primary-green to-emerald-600 hover:from-primary-green-dark hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            By submitting this form, you agree to be contacted about your inquiry.
          </p>
        </form>
      )}
    </div>
  );
}
