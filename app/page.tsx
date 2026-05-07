import Image from "next/image";
import FAQAccordion from "./components/FAQAccordion";
import StickyContact from "./components/StickyContact";
import SocialProof from "./components/SocialProof";
import ProcessTimeline from "./components/ProcessTimeline";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Sticky Components */}
      <StickyContact />
      <SocialProof />
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/images/Fairway Home Mortgage.webp"
                alt="Fairway Independent Mortgage"
                width={180}
                height={45}
                className="h-10 w-auto"
              />
            </div>
            <div className="flex items-center gap-6">
              <a href="#blog" className="text-gray-700 hover:text-primary-green transition font-medium hidden md:inline">Blog/Resources</a>
              <a
                href="#contact"
                className="bg-primary-green hover:bg-primary-green-dark text-white font-semibold px-8 py-3 rounded-lg transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
              Helping You
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-green to-emerald-600 bg-clip-text text-transparent mb-8 leading-tight">
              Buy Your Dream Home
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Buying a home is a big decision. We are here to answer questions, explain your options, and help you make the right move.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-green to-emerald-600 hover:from-primary-green-dark hover:to-emerald-700 text-white font-bold px-10 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg"
            >
              GET IN TOUCH
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Tilted Photos */}
          <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap mt-20">
            <div className="group transform -rotate-6 transition-all duration-500 hover:rotate-0 hover:scale-105 shadow-2xl hover:shadow-3xl">
              <div className="overflow-hidden rounded-2xl border-4 border-white">
                <Image
                  src="/images/Image 1.jpg"
                  alt="Happy homeowners"
                  width={240}
                  height={320}
                  className="md:w-[320px] md:h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="hidden md:block group transform rotate-3 transition-all duration-500 hover:rotate-0 hover:scale-105 shadow-2xl hover:shadow-3xl">
              <div className="overflow-hidden rounded-2xl border-4 border-white">
                <Image
                  src="/images/Image 2.jpg"
                  alt="Successful home closing"
                  width={320}
                  height={420}
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="hidden md:block group transform -rotate-3 transition-all duration-500 hover:rotate-0 hover:scale-105 shadow-2xl hover:shadow-3xl">
              <div className="overflow-hidden rounded-2xl border-4 border-white">
                <Image
                  src="/images/Image 3.jpg"
                  alt="Happy clients"
                  width={320}
                  height={420}
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
            <div className="text-center md:text-left md:pt-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-green to-emerald-400 bg-clip-text text-transparent">Real Results</h3>
              <p className="text-gray-400 mt-2">That speak for themselves</p>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-bold mb-2 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform">5.0</div>
              <div className="text-gray-400 text-lg mb-2">Average Review</div>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-bold mb-2 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform">75</div>
              <div className="text-gray-400 text-lg">Happy Families</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-bold mb-2 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform">40</div>
              <div className="text-gray-400 text-lg">Loans This Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Your Path to Homeownership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and designed to get you into your dream home faster
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-green to-emerald-600 mx-auto rounded-full mt-6"></div>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Meet Taylor Eisenbarth
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-green to-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-center mb-16">
            <div className="md:col-span-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-green to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition"></div>
                <div className="relative">
                  <Image
                    src="/images/taylor-eisenbarth.png"
                    alt="Taylor Eisenbarth - Mortgage Loan Officer"
                    width={400}
                    height={400}
                    className="rounded-3xl shadow-2xl object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Taylor Eisenbarth is a mortgage loan officer focused on making home financing <span className="font-semibold text-primary-green">simple, transparent, and stress-free</span>. He helps first-time buyers, repeat homeowners, and investors understand their options clearly so they can make confident decisions.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Taylor believes the mortgage process should never feel confusing or rushed. His approach is <span className="font-semibold text-primary-green">education-first</span>, walking clients through numbers, loan programs, and strategies so there are no surprises at the closing table. Whether it's finding the right program, minimizing upfront costs, or structuring a loan that fits long-term goals, Taylor works to put clients in the strongest position possible.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Based in <span className="font-semibold">Florida</span>, Taylor works with a wide range of borrowers and prides himself on fast communication, honest advice, and solutions that make sense for real life. His goal is not just to get loans approved, but to build long-term relationships built on trust and results.
                </p>

                <p className="text-gray-500 text-sm mt-4">
                  NMLS #2471936
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-green to-emerald-600 hover:from-primary-green-dark hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    LET'S TALK
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Client Success Photos */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Happy Clients</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                <Image
                  src="/images/Image 4.jpg"
                  alt="Happy homeowners"
                  width={600}
                  height={450}
                  className="object-cover object-top w-full h-80 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                <Image
                  src="/images/Image 5.jpg"
                  alt="Successful home closing"
                  width={600}
                  height={450}
                  className="object-cover object-top w-full h-80 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              What My Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real homeowners who trusted me with their dreams
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-green to-emerald-600 mx-auto rounded-full mt-6"></div>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about the mortgage process
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-green to-emerald-600 mx-auto rounded-full mt-6"></div>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Your Free Pre-Approval
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and I'll get back to you right away
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-green via-emerald-600 to-primary-green-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Contact me today for a free pre-approval.
              </h2>
              <p className="text-xl text-white/95 leading-relaxed mb-6">
                Let's get started—understand your options, and see what you qualify for before you start shopping.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-white/90">
                <a href="tel:+13073317130" className="inline-flex items-center gap-2 hover:text-white transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (307) 331-7130
                </a>
                <a href="mailto:taylor@highplainsteam.com" className="inline-flex items-center gap-2 hover:text-white transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  taylor@highplainsteam.com
                </a>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://www.instagram.com/taylor_mortgagepro/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/p/Taylor-Eisenbarth-High-Plains-Mortgage-Team-NMLS-2471936-100093000714847/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/taylor-eisenbarth-418708279/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <a
                href="tel:+13073317130"
                className="group inline-flex items-center gap-3 bg-white text-primary-green hover:bg-gray-50 font-bold px-10 py-5 rounded-full transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                GET IN TOUCH
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
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
                  <p>924 Alt 19 Suite E</p>
                  <p>Palm Harbor, FL 34683</p>
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

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a href="mailto:taylor@highplainsteam.com" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-green transition text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                taylor@highplainsteam.com
              </a>
              <span className="text-gray-600">|</span>
              <a href="https://www.instagram.com/taylor_mortgagepro/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-primary-green transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/p/Taylor-Eisenbarth-High-Plains-Mortgage-Team-NMLS-2471936-100093000714847/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-primary-green transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/taylor-eisenbarth-418708279/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-primary-green transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
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
