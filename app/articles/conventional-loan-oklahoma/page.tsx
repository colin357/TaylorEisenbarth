import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conventional Loans in Oklahoma - Requirements & Rates 2026 | Daniel Fowler",
  description: "Learn about conventional loans in Oklahoma. Competitive rates, flexible down payment options (3-20%), and no upfront mortgage insurance. Get expert guidance from Daniel Fowler.",
  keywords: "conventional loan oklahoma, oklahoma conventional mortgage, conventional home loan oklahoma, conventional mortgage rates oklahoma",
};

export default function ConventionalLoanOklahoma() {
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
            Conventional Loans in Oklahoma: Your Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By Daniel Fowler</span>
            <span>•</span>
            <span>Licensed Oklahoma Mortgage Professional</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Conventional loans are the most common type of mortgage in Oklahoma, offering competitive interest rates, flexible terms, and the ability to remove private mortgage insurance once you reach 20% equity. Whether you're a first-time homebuyer or an experienced homeowner, understanding conventional loans can help you secure the best financing for your Oklahoma home purchase.
          </p>

          {/* Quick Facts Box */}
          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Conventional Loan Quick Facts for Oklahoma</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Loan Limits:</strong> Up to $766,550 (2026 conforming limit)</li>
              <li>✓ <strong>Down Payment:</strong> As low as 3% for qualified buyers</li>
              <li>✓ <strong>Credit Score:</strong> Minimum 620 (better rates with 740+)</li>
              <li>✓ <strong>Debt-to-Income:</strong> Typically up to 43-45%</li>
              <li>✓ <strong>PMI Removal:</strong> Automatic at 78% LTV, request at 80% LTV</li>
              <li>✓ <strong>Property Types:</strong> Single-family, condos, multi-family, investment</li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Pre-Approved for a Conventional Loan</h3>
            <p className="text-gray-700 mb-4">
              Let's review your situation and see if a conventional loan offers the best terms for your Oklahoma home purchase.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Contact Daniel Today
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What Is a Conventional Loan?</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            A conventional loan is a mortgage that's not insured or guaranteed by the federal government (unlike FHA, VA, or USDA loans). These loans conform to guidelines set by Fannie Mae and Freddie Mac, government-sponsored enterprises that buy mortgages from lenders, providing liquidity to the mortgage market.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Conventional loans are the most popular mortgage type in Oklahoma, accounting for over 60% of home purchases. They offer flexibility, competitive rates, and work well for buyers with good credit and stable income.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conventional Loan Requirements in Oklahoma</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Credit Score Requirements</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your credit score significantly impacts your eligibility and interest rate:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>620:</strong> Minimum score for conventional approval</li>
            <li><strong>680-699:</strong> Qualify for standard rates</li>
            <li><strong>700-739:</strong> Access to better rates</li>
            <li><strong>740+:</strong> Best rates available (tier 1 pricing)</li>
          </ul>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Rate Impact by Credit Score</h4>
            <p className="text-gray-700 mb-2">On a $250,000 30-year mortgage:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• 760+ score: 6.5% rate = $1,580/month</li>
              <li>• 700-759 score: 6.75% rate = $1,621/month</li>
              <li>• 680-699 score: 7.0% rate = $1,663/month</li>
              <li>• 660-679 score: 7.25% rate = $1,705/month</li>
              <li>• 640-659 score: 7.5% rate = $1,748/month</li>
              <li>• 620-639 score: 7.75% rate = $1,791/month</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Down Payment Options</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Conventional loans offer flexible down payment options:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>3% down:</strong> Available for first-time buyers (HomeReady/Home Possible programs)</li>
            <li><strong>5% down:</strong> Standard low down payment option</li>
            <li><strong>10% down:</strong> Reduced PMI costs</li>
            <li><strong>15% down:</strong> Further reduced PMI</li>
            <li><strong>20% down:</strong> No PMI required</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            Down payment funds can come from savings, gift funds from family members, down payment assistance programs, or proceeds from selling a previous home.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Debt-to-Income Ratio</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lenders evaluate your debt-to-income (DTI) ratio to ensure you can afford the payment:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Front-end ratio:</strong> Housing expenses should not exceed 28% of gross monthly income</li>
            <li><strong>Back-end ratio:</strong> Total debt payments typically capped at 43-45% of gross income</li>
            <li><strong>With strong credit:</strong> May qualify with DTI up to 50% in some cases</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Income and Employment</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Conventional loans require documented, stable income:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Two years of employment history (same field or industry)</li>
            <li>Stable or increasing income</li>
            <li>Current employment verification</li>
            <li>For self-employed: Two years of tax returns and additional documentation</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cash Reserves</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            While not always required, having cash reserves strengthens your application. Most lenders like to see 2-6 months of mortgage payments in savings after closing, especially for:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Investment properties</li>
            <li>Multi-family homes</li>
            <li>Borrowers with lower credit scores</li>
            <li>High DTI ratios</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conventional Loan Limits in Oklahoma</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            For 2026, the conforming loan limit in Oklahoma is $766,550 for single-family homes. This limit is more than sufficient for the Oklahoma market where the median home price is $193,500.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">2026 Oklahoma Conventional Loan Limits</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Single-family home:</strong> $766,550</li>
              <li>• <strong>2-unit property:</strong> $981,500</li>
              <li>• <strong>3-unit property:</strong> $1,186,350</li>
              <li>• <strong>4-unit property:</strong> $1,474,400</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Loans above these limits are considered "jumbo loans" and have different requirements and rates.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Private Mortgage Insurance (PMI)</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            If you put down less than 20%, you'll pay PMI, which protects the lender if you default. PMI typically costs 0.5% to 1.5% of the original loan amount annually.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Monthly PMI Examples</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• $200,000 loan: $83-250/month</li>
              <li>• $250,000 loan: $104-313/month</li>
              <li>• $300,000 loan: $125-375/month</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Removing PMI</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The good news: PMI can be removed from conventional loans once you reach sufficient equity:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Automatic removal:</strong> At 78% loan-to-value ratio (22% equity)</li>
            <li><strong>Borrower-requested removal:</strong> At 80% LTV (20% equity) with good payment history</li>
            <li><strong>Early removal:</strong> Possible with new appraisal showing increased home value</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            This is a major advantage over FHA loans, where mortgage insurance typically lasts the life of the loan.
          </p>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Calculate Your Conventional Loan Payment</h3>
            <p className="text-gray-700 mb-4">
              Let me show you exactly what your monthly payment would be with different down payment amounts and how PMI affects your cost.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary-green hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Get Your Quote
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Conventional Loans</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Fixed-Rate Mortgages</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your interest rate stays the same for the entire loan term:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>30-year fixed:</strong> Lower monthly payment, more total interest</li>
            <li><strong>20-year fixed:</strong> Middle ground between 15 and 30-year</li>
            <li><strong>15-year fixed:</strong> Higher payment, significant interest savings</li>
            <li><strong>10-year fixed:</strong> Fastest equity building, highest monthly payment</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjustable-Rate Mortgages (ARMs)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Interest rate is fixed for an initial period, then adjusts periodically:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>5/1 ARM:</strong> Fixed for 5 years, then adjusts annually</li>
            <li><strong>7/1 ARM:</strong> Fixed for 7 years, then adjusts annually</li>
            <li><strong>10/1 ARM:</strong> Fixed for 10 years, then adjusts annually</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            ARMs typically offer lower initial rates but carry the risk of payment increases when rates adjust.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Special Programs</h3>

          <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">HomeReady® (Fannie Mae)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>3% down payment for first-time buyers</li>
            <li>Income limits apply (typically 80% of area median income)</li>
            <li>Flexible income sources (boarder income, income from non-occupant co-borrowers)</li>
            <li>Reduced PMI costs</li>
          </ul>

          <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Home Possible® (Freddie Mac)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>3% down payment</li>
            <li>Income limits (up to 100% of area median in some cases)</li>
            <li>Lower PMI rates</li>
            <li>Allows gifts and grants for entire down payment and closing costs</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Advantages of Conventional Loans in Oklahoma</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Competitive Interest Rates</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Borrowers with good credit get excellent rates, often better than FHA for those with 700+ credit scores.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. PMI Can Be Removed</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Unlike FHA's lifetime mortgage insurance, conventional PMI goes away once you reach 20-22% equity. This can save you thousands over the life of the loan.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Flexible Property Types</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Conventional loans work for:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Primary residences</li>
            <li>Second homes</li>
            <li>Investment properties</li>
            <li>Condos and co-ops</li>
            <li>Multi-family properties (2-4 units)</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Higher Loan Limits</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            At $766,550, conventional loan limits exceed FHA limits ($498,257), giving you more purchasing power for higher-priced Oklahoma homes.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Less Stringent Property Requirements</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Conventional appraisals are less strict than FHA, making it easier to buy homes that need minor repairs or updates.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Faster Closing Process</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Without government oversight, conventional loans often close faster than FHA or VA loans.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Disadvantages of Conventional Loans</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Stricter Credit Requirements</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The 620 minimum credit score is higher than FHA's 580 requirement. Borrowers with lower scores may not qualify or will face very high rates.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Higher PMI Costs Initially</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Conventional PMI can be more expensive than FHA mortgage insurance, especially for borrowers with lower credit scores or smaller down payments.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Larger Down Payment Often Needed</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            While 3% down programs exist, many borrowers need 5-10% down to get reasonable rates, compared to FHA's consistent 3.5% option.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conventional vs. FHA vs. VA Loans in Oklahoma</h2>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="pb-3 pr-4"></th>
                    <th className="pb-3 pr-4 text-primary-green font-bold">Conventional</th>
                    <th className="pb-3 pr-4 text-blue-600 font-bold">FHA</th>
                    <th className="pb-3 text-orange-600 font-bold">VA</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-semibold">Min. Down Payment</td>
                    <td className="py-3 pr-4">3%</td>
                    <td className="py-3 pr-4">3.5%</td>
                    <td className="py-3">0%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-semibold">Min. Credit Score</td>
                    <td className="py-3 pr-4">620</td>
                    <td className="py-3 pr-4">580</td>
                    <td className="py-3">~620</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-semibold">Mortgage Insurance</td>
                    <td className="py-3 pr-4">Removable at 20%</td>
                    <td className="py-3 pr-4">Life of loan</td>
                    <td className="py-3">None</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-semibold">Loan Limit</td>
                    <td className="py-3 pr-4">$766,550</td>
                    <td className="py-3 pr-4">$498,257</td>
                    <td className="py-3">$766,550+</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold">Best For</td>
                    <td className="py-3 pr-4">Good credit buyers</td>
                    <td className="py-3 pr-4">Lower credit scores</td>
                    <td className="py-3">Veterans</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Who Should Choose a Conventional Loan?</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Conventional loans are ideal for:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Borrowers with good credit (680+):</strong> You'll get the best rates and terms</li>
            <li><strong>Those with 5-20% down payment saved:</strong> Competitive with or better than FHA</li>
            <li><strong>Buyers planning to stay long-term:</strong> Benefit from PMI removal</li>
            <li><strong>Second home or investment property buyers:</strong> Often the only option</li>
            <li><strong>Buyers purchasing above FHA limits:</strong> Needed for higher-priced homes</li>
            <li><strong>Sellers who prefer conventional buyers:</strong> Faster closing, less restrictive appraisals</li>
          </ul>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-primary-green to-emerald-600 text-white p-8 rounded-lg my-12 not-prose">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started with a Conventional Loan?</h3>
            <p className="text-lg mb-6">
              As a licensed mortgage professional serving Oklahoma, I'll help you determine if a conventional loan offers the best terms for your situation. Let's review your options and get you pre-approved today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-primary-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Get Pre-Approved
              </Link>
              <Link
                href="/articles/mortgage-calculator-oklahoma"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Calculate Your Payment
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What credit score do I need for a conventional loan in Oklahoma?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The minimum is 620, but you'll get much better rates with a score of 740 or higher. Each 20-point improvement in your score can lower your rate by 0.25% or more.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can I use gift funds for my down payment?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Yes, conventional loans allow gift funds from family members for your down payment and closing costs. You'll need a gift letter stating the funds don't need to be repaid.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How long does it take to close on a conventional loan?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Typically 30-45 days, though it can be faster with complete documentation and a smooth appraisal. Conventional loans often close faster than government-backed loans.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can I buy an investment property with a conventional loan?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Absolutely. Conventional loans are the primary option for investment properties. You'll typically need 15-25% down and will face slightly higher interest rates than for primary residences.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Should I put 20% down to avoid PMI?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            It depends on your situation. While 20% down eliminates PMI, you might benefit more from a smaller down payment if you can invest the difference elsewhere or need to maintain cash reserves. PMI is also removable once you reach 20% equity through payments or appreciation.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Work With an Oklahoma Conventional Loan Expert</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Choosing the right loan program and structuring it properly can save you thousands over the life of your mortgage. As a licensed mortgage professional with extensive experience in Oklahoma's market, I'll help you navigate conventional loan options and secure the best possible terms.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            <Link href="/#contact" className="text-primary-green hover:text-emerald-600 font-bold">
              Contact me today
            </Link> to discuss your conventional loan options and start your Oklahoma home buying journey.
          </p>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Oklahoma Mortgage Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/articles/fha-loan-oklahoma" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">FHA Loans in Oklahoma</h3>
              <p className="text-gray-600 mb-4">Compare FHA and conventional loans for your situation.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/va-loan-oklahoma" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">VA Loans in Oklahoma</h3>
              <p className="text-gray-600 mb-4">Learn about VA loan benefits for Oklahoma veterans.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/mortgage-calculator-oklahoma" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mortgage Calculator Oklahoma</h3>
              <p className="text-gray-600 mb-4">Calculate your monthly conventional loan payment.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
