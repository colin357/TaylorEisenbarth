'use client';

import { ReactNode } from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Application",
    description: "Submit your application and get pre-approved in as little as 24 hours",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Documentation",
    description: "I'll guide you through gathering the necessary documents and paperwork",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Processing",
    description: "Your loan goes through underwriting while I keep you updated every step",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Clear to Close",
    description: "Get final approval and prepare for your closing day celebration",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    )
  }
];

export default function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Desktop Timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-primary-green to-gray-200" style={{ top: '5rem' }}></div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Circle with Icon */}
                <div className="relative z-10 mx-auto w-40 h-40 mb-6 bg-gradient-to-br from-primary-green to-emerald-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {step.icon}
                  </div>
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold text-primary-green">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="relative flex gap-6">
            {/* Vertical Line */}
            {index < steps.length - 1 && (
              <div className="absolute left-10 top-24 bottom-0 w-1 bg-gradient-to-b from-primary-green to-emerald-400" style={{ top: '6rem' }}></div>
            )}

            {/* Circle with Icon */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-green to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
                <div className="text-white">
                  {step.icon}
                </div>
              </div>
              {/* Number Badge */}
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-primary-green">{step.number}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pt-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
