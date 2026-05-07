'use client';

import { useState, useCallback } from 'react';

const steps = [
  {
    number: "01",
    title: "Get Pre-Approved",
    subtitle: "Know your budget before you shop",
    description: "The first step is understanding what you can afford. Taylor will review your income, credit, and assets to give you a real pre-approval — not just a pre-qualification estimate. This puts you in a strong position when you find the right home.",
    bullets: ["Fast 24-hour turnaround", "No impact on credit score for initial review", "Strengthens your offer with sellers"],
    color: "from-emerald-500 to-emerald-700",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Find Your Home",
    subtitle: "Shop with confidence",
    description: "With your pre-approval in hand, work with your real estate agent to find the right home. Taylor stays on standby to answer financing questions as you tour homes, so you can move fast when you find the one.",
    bullets: ["Pre-approval letter ready to submit with any offer", "Taylor available to answer questions in real time", "Loan options tailored to the home you choose"],
    color: "from-blue-500 to-blue-700",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Submit Documents",
    subtitle: "Simple, secure, and paperless",
    description: "Once your offer is accepted, Taylor will walk you through exactly what documents are needed. Upload everything securely through Fairway Now — no faxing, no confusion. Taylor reviews everything and guides you through it step by step.",
    bullets: ["Secure document upload through Fairway Now", "Clear checklist so nothing gets missed", "Taylor reviews and communicates with underwriting for you"],
    color: "from-violet-500 to-violet-700",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Underwriting & Approval",
    subtitle: "We handle the heavy lifting",
    description: "Your loan goes to underwriting for final review. Taylor keeps you informed the whole time — no wondering where things stand. He proactively works through any conditions so there are no surprises.",
    bullets: ["Taylor communicates status updates throughout", "Conditions handled quickly and professionally", "Average underwriting time: 3–5 business days"],
    color: "from-orange-500 to-orange-600",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Clear to Close",
    subtitle: "You're almost home",
    description: "This is the moment you've been working toward. You get final approval, sign your closing documents, and get the keys to your new home. Taylor is with you every step of the way and is always just a call away after closing too.",
    bullets: ["Final loan documents prepared and reviewed with you", "Taylor available day-of for any last questions", "Keys in hand — welcome home!"],
    color: "from-primary-green to-emerald-600",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
];

export default function ProcessTimeline() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (animating || index === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 200);
  }, [active, animating]);

  const prev = () => goTo((active - 1 + steps.length) % steps.length);
  const next = () => goTo((active + 1) % steps.length);


  const step = steps[active];

  return (
    <div>
      {/* Step indicators */}
      <div className="flex justify-center gap-3 mb-10">
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
              i === active
                ? 'bg-primary-green text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
              i === active ? 'bg-white text-primary-green' : 'bg-gray-300 text-gray-500'
            }`}>{i + 1}</span>
            <span className="hidden sm:inline">{s.title}</span>
          </button>
        ))}
      </div>

      {/* Slide card */}
      <div
        className={`transition-opacity duration-200 ${animating ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className={`bg-gradient-to-br ${step.color} p-1`}>
            <div className="bg-white rounded-3xl">
              <div className="grid md:grid-cols-2">
                {/* Visual panel */}
                <div className={`bg-gradient-to-br ${step.color} flex flex-col items-center justify-center p-12 text-white rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none min-h-64`}>
                  <div className="mb-6 opacity-90">{step.icon}</div>
                  <div className="text-7xl font-black opacity-20 absolute">{step.number}</div>
                  <p className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-2">Step {step.number}</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-center leading-tight">{step.title}</h3>
                  <p className="mt-3 text-white/80 text-center text-lg">{step.subtitle}</p>
                </div>

                {/* Content panel */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">{step.description}</p>
                  <ul className="space-y-3">
                    {step.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mt-0.5`}>
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {active === steps.length - 1 && (
                    <a
                      href="#contact"
                      className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-primary-green to-emerald-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 self-start"
                    >
                      Get Started Today
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next + progress */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full bg-white border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white transition-all shadow-md flex items-center justify-center"
          aria-label="Previous step"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'bg-primary-green w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-12 h-12 rounded-full bg-white border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white transition-all shadow-md flex items-center justify-center"
          aria-label="Next step"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
