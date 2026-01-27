import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import MortgageCalculator from "./MortgageCalculator";

export const metadata: Metadata = {
  title: "Mortgage Calculator Florida - Calculate Your Monthly Payment | Taylor Eisenbarth",
  description: "Use our Florida mortgage calculator to estimate your monthly payment. Get accurate calculations including property taxes, insurance, and HOA fees for Florida homes.",
  keywords: "mortgage calculator florida, florida mortgage calculator, home loan calculator florida, florida home payment calculator, mortgage payment calculator florida",
};

export default function MortgageCalculatorFlorida() {
  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="bg-gradient-to-br from-primary-green/5 via-emerald-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <Link href="/" className="text-primary-green hover:text-emerald-600 font-medium">
              ← Back to Home
            </Link>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mortgage Calculator Florida: Estimate Your Monthly Payment
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By Taylor Eisenbarth</span>
            <span>•</span>
            <span>Licensed in Florida</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Want a clearer picture of your Florida mortgage payment? This quick guide breaks down the main costs, shows a few local price examples, and highlights the levers that change your total. It’s designed to be scannable so you can get answers fast.
          </p>

          <div className="grid gap-6 md:grid-cols-3 my-10 not-prose">
            {[
              {
                title: "What you’ll pay",
                description: "Monthly costs usually include principal, interest, taxes, insurance, and sometimes PMI/HOA.",
              },
              {
                title: "Florida advantage",
                description: "Home prices and taxes are typically lower than many states, helping affordability.",
              },
              {
                title: "Biggest levers",
                description: "Rate, down payment, and loan type have the largest impact on your payment.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-primary-green uppercase tracking-wide">{item.title}</p>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>

          <MortgageCalculator />

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Your Personalized Payment Quote</h3>
            <p className="text-gray-700 mb-4">
              Ready to see exactly what your monthly payment would be? Contact me for a detailed breakdown based on current Florida rates and your specific situation.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary-green hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Contact Taylor Today
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Your Mortgage Payment Components</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Your monthly payment is usually called PITI (plus extras if needed). Here’s the short version:
          </p>

          <div className="grid gap-6 md:grid-cols-2 my-8 not-prose">
            {[
              {
                title: "Principal + Interest",
                description: "The loan amount and the cost to borrow it. Early payments lean more toward interest.",
              },
              {
                title: "Property Taxes",
                description: "Florida’s effective rate averages about 0.87%, with county variations.",
              },
              {
                title: "Homeowners Insurance",
                description: "Rates are higher due to weather risk. Many buyers budget $240–$290/month.",
              },
              {
                title: "PMI + HOA",
                description: "PMI applies under 20% down on conventional loans. HOA fees vary by neighborhood.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Florida Home Price Overview</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Florida stays affordable compared to many states. Here’s a quick snapshot:
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Median Home Prices (Approx.)</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-sm text-gray-500">Statewide</p>
                <p className="text-xl font-semibold text-gray-900">$193,500</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-sm text-gray-500">Florida City</p>
                <p className="text-xl font-semibold text-gray-900">$225,000</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-sm text-gray-500">Tulsa</p>
                <p className="text-xl font-semibold text-gray-900">$210,000</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-sm text-gray-500">Edmond</p>
                <p className="text-xl font-semibold text-gray-900">$325,000</p>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">See Your Exact Payment</h3>
            <p className="text-gray-700 mb-4">
              Every buyer's situation is unique. Let me calculate your specific monthly payment based on current rates, your credit profile, and down payment amount.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Get Your Custom Quote
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Factors That Affect Your Payment</h2>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm not-prose">
            <ul className="space-y-3 text-gray-700">
              <li><strong>Credit score:</strong> Better scores unlock lower rates.</li>
              <li><strong>Down payment:</strong> More down lowers the loan amount and can remove PMI.</li>
              <li><strong>Loan term:</strong> 30-year = lower payment; 15-year = lower total interest.</li>
              <li><strong>Loan type:</strong> Conventional, FHA, VA, and USDA each price differently.</li>
            </ul>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-primary-green to-emerald-600 text-white p-8 rounded-lg my-12 not-prose">
            <h3 className="text-2xl font-bold mb-4">Let's Calculate Your Exact Florida Mortgage Payment</h3>
            <p className="text-lg mb-6">
              As a licensed mortgage professional serving Florida, I'll provide you with accurate payment calculations based on current rates, your credit profile, and the specific home you're considering. No guesswork—just real numbers you can count on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-primary-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Get Your Payment Quote
              </Link>
              <Link
                href="/articles/fha-loan-florida"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Learn About FHA Loans
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                question: "Are taxes and insurance included?",
                answer: "Most lenders escrow taxes and insurance, so they’re bundled into your monthly payment.",
              },
              {
                question: "Can I buy with less than 20% down?",
                answer: "Yes. Conventional can be as low as 3% down, FHA is 3.5%, and VA/USDA may be zero down for eligible buyers.",
              },
              {
                question: "Why do payments vary so much?",
                answer: "Rates, down payment size, credit score, and insurance costs all move the needle.",
              },
            ].map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-gray-900">
                  <span>{item.question}</span>
                  <span className="ml-4 text-primary-green transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Florida Mortgage Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/articles/fha-loan-florida" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">FHA Loans in Florida</h3>
              <p className="text-gray-600 mb-4">Learn about FHA loan requirements and benefits for Florida homebuyers.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/va-loan-florida" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">VA Loans in Florida</h3>
              <p className="text-gray-600 mb-4">Explore VA loan benefits for veterans and military members in Florida.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/down-payment-assistance-florida" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Down Payment Assistance Florida</h3>
              <p className="text-gray-600 mb-4">Discover programs that help Florida first-time homebuyers with down payments.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
