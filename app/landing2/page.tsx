'use client';

import Image from "next/image";

export default function Landing2Page() {
  const helocUrl = "https://fairwayheloc.com/account/heloc/register?referrer=88b2a55c-5069-415d-b729-0351c4c574ce";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with CTA */}
      <section className="relative bg-gradient-to-br from-primary-green/5 via-emerald-50 to-blue-50 py-16 md:py-24 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Badge */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg border border-primary-green/20">
              <svg className="w-5 h-5 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-gray-800">AI-Powered HELOC Approval in 5 Minutes</span>
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Copy */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
                  Unlock Your Home's <span className="bg-gradient-to-r from-primary-green to-emerald-600 bg-clip-text text-transparent">Hidden Equity</span>
                </h1>
                <div className="space-y-4">
                  <p className="text-2xl md:text-3xl text-gray-800 font-semibold">
                    Get approved for your HELOC in just <span className="text-primary-green">5 minutes</span>
                  </p>
                  <p className="text-xl md:text-2xl text-gray-700">
                    No commitment. <span className="font-bold text-primary-green">No hard credit pull.</span> Powered by AI.
                  </p>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary-green/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-green to-emerald-600 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No Commitment Required</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our AI-powered system gives you instant approval without locking you in or impacting your credit score. You're in control every step of the way.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Access Cash from Your Home Equity</h3>
                    <p className="text-gray-700">
                      Pay off high-interest debt, fund home improvements, or cover unexpected expenses. Your home equity gives you financial flexibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - CTA Button */}
            <div className="lg:sticky lg:top-8">
              <div className="relative">
                {/* Card glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-green via-emerald-500 to-blue-500 rounded-3xl blur opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-10">
                  <div className="text-center space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-green/10 to-emerald-500/10 px-4 py-2 rounded-full">
                      <svg className="w-4 h-4 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-700">AI-Powered 5-Minute Approval</span>
                    </div>

                    {/* Heading */}
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get Started Today</h3>
                      <p className="text-lg text-gray-600">
                        No hard credit pull. No commitment required.
                      </p>
                    </div>

                    {/* Benefits List */}
                    <div className="space-y-4 py-6">
                      <div className="flex items-center gap-3 text-left">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700 font-medium">5-minute AI approval process</p>
                      </div>
                      <div className="flex items-center gap-3 text-left">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700 font-medium">No impact on credit score</p>
                      </div>
                      <div className="flex items-center gap-3 text-left">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700 font-medium">Zero commitment required</p>
                      </div>
                      <div className="flex items-center gap-3 text-left">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700 font-medium">Access funds when you need them</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={helocUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-primary-green to-emerald-600 hover:from-emerald-600 hover:to-primary-green text-white font-bold px-8 py-5 rounded-xl transition-all shadow-lg hover:shadow-2xl transform hover:scale-105 text-lg"
                    >
                      <span className="flex items-center justify-center gap-3">
                        Start Your HELOC Application
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </a>

                    {/* Security Badge */}
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>Secure & Confidential</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Does This Sound Like You Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-green font-semibold mb-2">WHY HELOC?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Is a HELOC Right for <span className="text-primary-green">You?</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Tap into your home's equity for what matters most. Fast, flexible, and designed for homeowners like you.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">
                You own your home and have built up equity that's just sitting there unused.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">
                You need cash for home improvements, debt consolidation, or unexpected expenses.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">
                You want lower interest rates than credit cards or personal loans without the hassle.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">
                You're looking for a flexible line of credit you can use when you need it, not a lump sum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-green font-semibold mb-2">TESTIMONIALS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What My Clients Have To Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "Taylor and the Fairway team helped us navigate every step with clear communication. No surprises, just excellent service from start to finish!"
              </p>
              <p className="font-bold text-gray-900">Drew C</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "Working with Taylor was amazing! He made the entire process smooth and was always available to answer my questions. Highly recommend!"
              </p>
              <p className="font-bold text-gray-900">Justin J</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "As a first-time home buyer, I had a lot of questions. Taylor was patient and helped me understand every step. We got the perfect home!"
              </p>
              <p className="font-bold text-gray-900">Sarah M</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Steps Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-green font-semibold mb-2">HOW IT WORKS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get Your HELOC in 3 Simple Steps
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-8 top-12 bottom-12 w-0.5 bg-blue-200"></div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary-green to-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  1
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Submit Your Information
                  </h3>
                  <p className="text-gray-600">
                    Fill out our quick 5-minute form. Our AI system analyzes your information instantly with no hard credit pull or commitment required.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary-green to-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  2
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Instant AI Approval
                  </h3>
                  <p className="text-gray-600">
                    Receive your pre-approval decision in minutes, not days. See exactly how much you qualify for and your potential rates—all without impacting your credit.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary-green to-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  3
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Finalize & Access Your Funds
                  </h3>
                  <p className="text-gray-600">
                    When you're ready to move forward, we'll finalize your HELOC and you can start accessing your home equity. Fast, flexible, and hassle-free.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href={helocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                GET INSTANT ACCESS
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Taylor Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="relative">
                <Image
                  src="/images/taylor-eisenbarth.png"
                  alt="Taylor Eisenbarth"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Hi, I'm Taylor Eisenbarth
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As a former financial advisor and Iraq War combat vet, I've been dedicated to helping individuals and families achieve their real estate dreams. My goal is simple: make the mortgage process clear, straightforward, and stress-free—so you can focus on finding your perfect home. I genuinely care about my clients' needs and well-being, and I always prioritize transparency over sales tactics. Let me help you navigate your home financing with the highest levels of integrity and care.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 font-medium">Recognized Expert in Mortgage Lending</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 font-medium">Trusted by Clients Throughout Iowa</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 font-medium">Offering Same-Day Pre-Approvals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="mb-6">
                <Image
                  src="/images/Fairway Home Mortgage.webp"
                  alt="Fairway Independent Mortgage"
                  width={150}
                  height={40}
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <div className="text-sm text-gray-400 space-y-3">
                <div>
                  <p className="font-semibold text-white mb-1">NMLS ADDRESS</p>
                  <p>4164 South Harvard Ave Suite E-1</p>
                  <p>Tulsa, OK 74135</p>
                </div>
                <div className="pt-3">
                  <p className="font-semibold text-white mb-1">Madison Headquarters</p>
                  <p>2750 E Beltline Lane</p>
                  <p>Madison, WI 53718</p>
                </div>
                <div className="pt-3">
                  <p className="font-semibold text-white">Toll Free: 866-912-4800</p>
                  <p className="text-xs">Monday–Friday, 8:30 a.m.–5:00 p.m. Central</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-primary-green">Customer Service</h4>
              <div className="text-sm text-gray-400 space-y-3">
                <p className="font-semibold text-white">Toll Free: 800-320-7544</p>
                <a href="#" className="block text-primary-green hover:text-emerald-400 transition">Contact Customer Service</a>
                <div className="pt-3">
                  <p className="font-semibold text-white mb-1">Loan Serviced in New York?</p>
                  <a href="#" className="text-primary-green hover:text-emerald-400 transition">Click Here</a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-primary-green">Report Fraud</h4>
              <div className="text-sm text-gray-400 space-y-3">
                <div>
                  <p className="font-semibold text-white mb-1">Suspicious Activity</p>
                  <p>Hotline: 858-605-0067</p>
                </div>
                <a href="#" className="block text-primary-green hover:text-emerald-400 transition pt-2">Report An Incident Online</a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-primary-green">Complaints</h4>
              <div className="text-sm text-gray-400 space-y-3">
                <p className="font-semibold text-white">Toll Free: 877-529-3276</p>
                <a href="#" className="text-primary-green hover:text-emerald-400 transition">Submit Complaint</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 mt-8">
            <div className="text-sm text-gray-400 space-y-4 mb-6">
              <p className="font-bold text-white text-base">Legal Information & Links</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a href="#" className="text-primary-green hover:text-emerald-400 transition">Privacy Policy</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-primary-green hover:text-emerald-400 transition">Terms of Use</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-primary-green hover:text-emerald-400 transition">Legal Disclosures</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-primary-green hover:text-emerald-400 transition">Cease Consumer Complaints</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-primary-green hover:text-emerald-400 transition">IL Community Reinvestment Notice</a>
              </div>
            </div>

            <div className="text-xs text-gray-500 mb-8 leading-relaxed">
              <p>© Copyright 2025 Fairway Independent Mortgage Corporation | NMLS # 2289 | All rights reserved. <a href="https://nmlsconsumeraccess.org/" className="text-primary-green hover:text-emerald-400 transition">nmlsconsumeraccess.org</a></p>
            </div>

            <div className="flex flex-wrap items-center gap-12 justify-center md:justify-start pt-6 border-t border-gray-800">
              <div className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">
                <Image
                  src="/images/Equal Housing.webp"
                  alt="Equal Housing Opportunity"
                  width={60}
                  height={60}
                  className="h-16 w-auto"
                />
              </div>
              <div className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">
                <Image
                  src="/images/NAHREP.webp"
                  alt="NAHREP - National Association of Hispanic Real Estate Professionals"
                  width={80}
                  height={60}
                  className="h-16 w-auto"
                />
              </div>
              <div className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">
                <Image
                  src="/images/NMLS.webp"
                  alt="NMLS Consumer Access"
                  width={100}
                  height={60}
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
