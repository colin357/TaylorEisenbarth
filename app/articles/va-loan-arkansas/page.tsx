import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VA Loans in Arkansas - Benefits for Veterans 2026 | Taylor Eisenbarth",
  description: "VA loans in Arkansas offer zero down payment, no PMI, and competitive rates for veterans and military members. Learn about VA loan benefits near Little Rock Air Force Base and throughout Arkansas.",
  keywords: "VA loan arkansas, arkansas VA loan, VA mortgage arkansas, VA home loan arkansas",
};

export default function VALoanArkansasS() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary-green/5 via-emerald-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <Link href="/" className="text-primary-green hover:text-emerald-600 font-medium">
              ← Back to Home
            </Link>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            VA Loans in Arkansas: Benefits for Our Veterans
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By Taylor Eisenbarth</span>
            <span>•</span>
            <span>Proud to Serve Arkansas Veterans</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            As a combat veteran myself, I understand the unique challenges military families face. VA loans are one of the most powerful benefits available to veterans, active-duty service members, and eligible surviving spouses in Arkansas. With zero down payment, no private mortgage insurance, and competitive interest rates, VA loans make homeownership accessible and affordable.
          </p>

          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">VA Loan Quick Facts for Arkansas</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Down Payment:</strong> $0 - Zero down payment required</li>
              <li>✓ <strong>Mortgage Insurance:</strong> None - No monthly PMI</li>
              <li>✓ <strong>Loan Limits:</strong> Up to $766550 with full entitlement</li>
              <li>✓ <strong>Funding Fee:</strong> 2.15%-3.3% (can be financed, waived for disabled veterans)</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You for Your Service</h3>
            <p className="text-gray-700 mb-4">
              Let me help you leverage your VA home loan benefit. As a fellow veteran, I understand your needs and will ensure you get the best possible terms.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Contact Taylor Today
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Benefits of VA Loans in Arkansas</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Zero Down Payment</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Purchase a home with absolutely no down payment. In Arkansas where the median home price is $170000, this is a significant advantage.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. No Private Mortgage Insurance (PMI)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Unlike conventional and FHA loans, VA loans never require mortgage insurance, saving you hundreds per month.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">VA Loans Near Little Rock Air Force Base</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Arkansas has active military installations including Little Rock Air Force Base. Popular communities for military families include Little Rock ($215,000), Fayetteville ($275,000), Fort Smith ($165,000).
          </p>

          <div className="bg-gradient-to-r from-primary-green to-emerald-600 text-white p-8 rounded-lg my-12 not-prose">
            <h3 className="text-2xl font-bold mb-4">Ready to Use Your VA Loan Benefit in Arkansas?</h3>
            <p className="text-lg mb-6">
              As a combat veteran and licensed mortgage professional, I'm honored to help fellow veterans achieve homeownership in Arkansas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-primary-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Start Your VA Loan
              </Link>
              <Link
                href="/articles/mortgage-calculator-arkansas"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Calculate Your Payment
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can I use a VA loan more than once?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Yes! Your VA loan benefit is reusable. Once you sell a home or pay off a VA loan, your entitlement is restored.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            <Link href="/#contact" className="text-primary-green hover:text-emerald-600 font-bold">
              Contact me today
            </Link> to discuss your VA loan options. Thank you for your service.
          </p>
        </div>
      </article>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Arkansas Mortgage Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/articles/fha-loan-arkansas" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">FHA Loans in Arkansas</h3>
              <p className="text-gray-600 mb-4">Compare FHA and VA loans to find the best option for you.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/conventional-loan-arkansas" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Conventional Loans Arkansas</h3>
              <p className="text-gray-600 mb-4">Learn about conventional loan options in Arkansas.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/mortgage-calculator-arkansas" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mortgage Calculator Arkansas</h3>
              <p className="text-gray-600 mb-4">Calculate your monthly VA loan payment with no PMI.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
