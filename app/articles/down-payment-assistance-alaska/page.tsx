import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Down Payment Assistance in Alaska - Programs & Grants 2026 | Taylor Eisenbarth",
  description: "Discover Alaska down payment assistance programs including AHFC grants, DPA programs, and first-time homebuyer assistance. Get help with your Alaska down payment.",
  keywords: "down payment assistance alaska, alaska down payment assistance, first time homebuyer alaska, AHFC down payment assistance, alaska housing finance corporation",
};

export default function DownPaymentAssistanceAlaska() {
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
            Down Payment Assistance in Alaska: Your Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By Taylor Eisenbarth</span>
            <span>•</span>
            <span>Alaska Down Payment Assistance Expert</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Saving for a down payment is challenging in Alaska's high-cost housing market. Fortunately, Alaska offers several down payment assistance (DPA) programs through the Alaska Housing Finance Corporation (AHFC) that can help first-time homebuyers and eligible repeat buyers overcome this hurdle despite Alaska's higher home prices.
          </p>

          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Alaska DPA Quick Facts</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Primary Program:</strong> Alaska Housing Finance Corporation (AHFC)</li>
              <li>✓ <strong>Assistance Amount:</strong> Varies by program and location</li>
              <li>✓ <strong>Program Types:</strong> Grants, forgivable loans, second mortgages</li>
              <li>✓ <strong>Combination:</strong> Can be used with FHA, VA, USDA, and conventional loans</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Help With Your Down Payment</h3>
            <p className="text-gray-700 mb-4">
              Let me help you identify which down payment assistance programs you qualify for and maximize your benefits.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Contact Taylor Today
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Alaska Housing Finance Corporation (AHFC) Programs</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The Alaska Housing Finance Corporation (AHFC) is the state's primary source for down payment assistance and affordable mortgage programs. AHFC offers several programs designed to help Alaska families achieve homeownership despite the state's unique challenges and higher costs.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">AHFC First-Time Homebuyer Programs</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            AHFC provides various assistance options including:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Low-interest rate mortgages</li>
            <li>Down payment and closing cost assistance</li>
            <li>Special programs for rural Alaska</li>
            <li>Veteran-specific programs</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Eligibility Requirements</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>First-time homebuyer:</strong> Not owned a home in the past 3 years (some exceptions apply)</li>
            <li><strong>Income limits:</strong> Vary by location and household size</li>
            <li><strong>Purchase price limits:</strong> Based on area median home prices</li>
            <li><strong>Primary residence:</strong> Must occupy the home as your primary residence</li>
            <li><strong>Credit score:</strong> Minimum requirements vary by program</li>
            <li><strong>Homebuyer education:</strong> Required for most programs</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Combining DPA with Different Loan Types</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">DPA + FHA Loans</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Example: $350,000 Home with FHA + DPA</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Purchase Price: $350,000</li>
              <li>• FHA Down Payment (3.5%): $12,250</li>
              <li>• Estimated Closing Costs: $9,000</li>
              <li>• Total Cash Needed: $21,250</li>
              <li>• <strong>DPA Grant: $12,000-$21,000</strong></li>
              <li>• <strong>Your Out-of-Pocket: $0-$9,000</strong></li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">DPA + Conventional Loans</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Conventional loans can also be paired with DPA, offering better rates for borrowers with good credit while still reducing upfront costs.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">DPA + VA Loans</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            While VA loans require no down payment, DPA can help cover the VA funding fee and closing costs, reducing out-of-pocket expenses to near-zero.
          </p>

          <div className="bg-gradient-to-r from-primary-green to-emerald-600 text-white p-8 rounded-lg my-12 not-prose">
            <h3 className="text-2xl font-bold mb-4">Ready to Access Down Payment Assistance?</h3>
            <p className="text-lg mb-6">
              As an AHFC-approved lender specializing in down payment assistance programs, I'll help you navigate the application process and maximize your benefits for Alaska homeownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-primary-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Apply for DPA Now
              </Link>
              <Link
                href="/articles/fha-loan-alaska"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Learn About FHA Loans
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Do I have to be a first-time homebuyer?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            For most programs, yes—defined as not owning a home in the past 3 years. However, some Alaska programs have exceptions for veterans and those purchasing in certain rural areas.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Are there special programs for rural Alaska?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Yes, AHFC offers enhanced assistance for rural Alaska communities with higher income limits and more flexible requirements.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How long does the DPA application process take?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            DPA approval typically adds 5-10 days to your mortgage approval process. Total time from application to closing is usually 30-45 days.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Work With an AHFC-Approved Lender</h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            <Link href="/#contact" className="text-primary-green hover:text-emerald-600 font-bold">
              Contact me today
            </Link> to determine your eligibility and start your journey to Alaska homeownership with down payment assistance.
          </p>
        </div>
      </article>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Alaska Mortgage Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/articles/fha-loan-alaska" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">FHA Loans in Alaska</h3>
              <p className="text-gray-600 mb-4">Pair FHA financing with down payment assistance programs.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/conventional-loan-alaska" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Conventional Loans Alaska</h3>
              <p className="text-gray-600 mb-4">Learn about 3% down conventional loans with DPA.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/mortgage-calculator-alaska" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mortgage Calculator Alaska</h3>
              <p className="text-gray-600 mb-4">Calculate your payment with down payment assistance.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
