import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FHA Loans in Arkansas - Requirements & Benefits 2026 | Taylor Eisenbarth",
  description: "Learn about FHA loans in Arkansas. Low down payment (3.5%), flexible credit requirements, and competitive rates for Arkansas homebuyers. Get expert guidance from Taylor Eisenbarth.",
  keywords: "FHA loan Arkansas, Arkansas FHA loan, FHA mortgage Arkansas, FHA loan requirements Arkansas",
};

export default function FHALoanArkansas() {
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
            FHA Loans in Arkansas: Your Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By Taylor Eisenbarth</span>
            <span>•</span>
            <span>Licensed Arkansas Mortgage Professional</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            FHA loans are one of the most popular mortgage options for Arkansas homebuyers, especially first-time buyers and those with less-than-perfect credit. In Arkansas's affordable housing market, FHA loans make homeownership even more accessible with low down payments and flexible credit requirements.
          </p>

          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">FHA Loan Quick Facts for Arkansas</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Minimum Down Payment:</strong> 3.5% with 580+ credit score</li>
              <li>✓ <strong>Loan Limits:</strong> Up to $498,257 in Arkansas counties</li>
              <li>✓ <strong>Credit Score:</strong> As low as 580 (sometimes 500 with 10% down)</li>
              <li>✓ <strong>Debt-to-Income:</strong> Up to 43% (sometimes higher)</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">See If You Qualify for an FHA Loan</h3>
            <p className="text-gray-700 mb-4">
              Let's review your situation and determine if an FHA loan is right for you. I'll walk you through the requirements and help you get pre-approved.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Contact Taylor Today
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">FHA Loan Limits in Arkansas</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">2026 Arkansas FHA Loan Limits</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Standard Limit (Most Counties):</strong> $498,257</li>
              <li>• <strong>Pulaski County (Little Rock):</strong> $498,257</li>
              <li>• <strong>Washington County (Fayetteville):</strong> $498,257</li>
              <li>• <strong>Sebastian County (Fort Smith):</strong> $498,257</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            These limits are more than sufficient for Arkansas's affordable housing market where the median home price is approximately $170,000.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Down Payment Examples for Arkansas Homes</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• $165,000 home: $5,775 down (3.5%)</li>
              <li>• $170,000 home: $5,950 down (3.5%)</li>
              <li>• $215,000 home: $7,525 down (3.5%)</li>
              <li>• $275,000 home: $9,625 down (3.5%)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Advantages of FHA Loans in Arkansas</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Low Down Payment</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            With just 3.5% down, you can become a homeowner much sooner. In Arkansas's affordable market, this means you need just $5,950 for a median-priced home instead of $34,000 for a conventional 20% down payment.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Perfect for Arkansas's Affordable Market</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Arkansas's combination of low home prices and low property taxes makes FHA loans particularly attractive, keeping overall housing costs very affordable.
          </p>

          <div className="bg-gradient-to-r from-primary-green to-emerald-600 text-white p-8 rounded-lg my-12 not-prose">
            <h3 className="text-2xl font-bold mb-4">Ready to Apply for an FHA Loan in Arkansas?</h3>
            <p className="text-lg mb-6">
              As a licensed mortgage professional and FHA-approved lender, I'll guide you through every step of the FHA loan process for your Arkansas home purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-primary-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Get Pre-Approved Today
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

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can I refinance out of an FHA loan later?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Absolutely. Once you build sufficient equity (typically 20%) and your credit improves, you can refinance to a conventional loan to eliminate mortgage insurance.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            <Link href="/#contact" className="text-primary-green hover:text-emerald-600 font-bold">
              Contact me today
            </Link> to discuss your FHA loan options and get started on your path to Arkansas homeownership.
          </p>
        </div>
      </article>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Arkansas Mortgage Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/articles/conventional-loan-arkansas" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Conventional Loans Arkansas</h3>
              <p className="text-gray-600 mb-4">Compare conventional loans to FHA and see which is right for you.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/down-payment-assistance-arkansas" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Down Payment Assistance Arkansas</h3>
              <p className="text-gray-600 mb-4">Learn about programs that can help with your FHA down payment.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/mortgage-calculator-arkansas" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mortgage Calculator Arkansas</h3>
              <p className="text-gray-600 mb-4">Calculate your monthly FHA loan payment including MIP.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
