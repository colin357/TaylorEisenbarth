import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Down Payment Assistance in Oklahoma - Programs & Grants 2026 | Daniel Fowler",
  description: "Discover Oklahoma down payment assistance programs including OHFA grants, DPA programs, and first-time homebuyer assistance. Get up to $15,000 in down payment help.",
  keywords: "down payment assistance oklahoma, oklahoma down payment assistance, first time homebuyer oklahoma, OHFA down payment assistance, oklahoma housing finance agency",
};

export default function DownPaymentAssistanceOklahoma() {
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
            Down Payment Assistance in Oklahoma: Your Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By Daniel Fowler</span>
            <span>•</span>
            <span>Oklahoma Down Payment Assistance Expert</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Saving for a down payment is often the biggest barrier to homeownership. Fortunately, Oklahoma offers several down payment assistance (DPA) programs that can help first-time homebuyers and eligible repeat buyers overcome this hurdle. These programs provide grants, forgivable loans, and low-interest second mortgages to make homeownership accessible to more Oklahoma families.
          </p>

          {/* Quick Facts Box */}
          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Oklahoma DPA Quick Facts</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Assistance Amount:</strong> Up to $15,000 or 5% of purchase price</li>
              <li>✓ <strong>Program Types:</strong> Grants, forgivable loans, second mortgages</li>
              <li>✓ <strong>Primary Program:</strong> Oklahoma Housing Finance Agency (OHFA)</li>
              <li>✓ <strong>Eligibility:</strong> First-time buyers and repeat buyers in targeted areas</li>
              <li>✓ <strong>Income Limits:</strong> Vary by county (typically 80-115% of area median)</li>
              <li>✓ <strong>Combination:</strong> Can be used with FHA, VA, USDA, and conventional loans</li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Help With Your Down Payment</h3>
            <p className="text-gray-700 mb-4">
              Let me help you identify which down payment assistance programs you qualify for and maximize your benefits.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Contact Daniel Today
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Oklahoma Housing Finance Agency (OHFA) Programs</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The Oklahoma Housing Finance Agency (OHFA) is the state's primary source for down payment assistance and affordable mortgage programs. OHFA offers several programs designed to help Oklahoma families achieve homeownership:
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">OHFA Down Payment Assistance Program</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            This is the main DPA program available to Oklahoma homebuyers. Key features include:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Program Details</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Assistance Amount:</strong> Up to $15,000 or 5% of purchase price (whichever is less)</li>
              <li>• <strong>Structure:</strong> Second mortgage with deferred payment</li>
              <li>• <strong>Interest Rate:</strong> 0% interest</li>
              <li>• <strong>Repayment:</strong> Due when you sell, refinance, or pay off first mortgage</li>
              <li>• <strong>Forgiveness:</strong> Some programs offer forgiveness after 10 years of occupancy</li>
            </ul>
          </div>

          <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Eligibility Requirements</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>First-time homebuyer:</strong> Not owned a home in the past 3 years (some exceptions apply)</li>
            <li><strong>Income limits:</strong> Vary by county (typically 80% of area median income)</li>
            <li><strong>Purchase price limits:</strong> Cannot exceed OHFA maximum for your county</li>
            <li><strong>Primary residence:</strong> Must occupy the home as your primary residence</li>
            <li><strong>Credit score:</strong> Minimum 640 (may vary by program)</li>
            <li><strong>Complete homebuyer education:</strong> Required 8-hour course</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">OHFA Advantage Program</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            This program combines below-market interest rate financing with down payment assistance:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Interest rates typically 0.25% to 0.75% below market</li>
            <li>Available for first-time and repeat homebuyers</li>
            <li>Can be paired with DPA grants</li>
            <li>Works with FHA, VA, USDA, and conventional loans</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Targeted Area Programs</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            OHFA offers enhanced benefits for homes purchased in targeted areas (typically rural or underserved communities):
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Higher income limits (up to 115% of area median income)</li>
            <li>No first-time homebuyer requirement</li>
            <li>Additional assistance available</li>
            <li>More flexible qualification standards</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Income and Purchase Price Limits</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            OHFA programs have income and purchase price limits that vary by county. Here are examples for major Oklahoma counties:
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">2026 Income Limits (1-2 Person Household)</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Oklahoma County:</strong> $74,400 (standard), $85,560 (targeted areas)</li>
              <li>• <strong>Tulsa County:</strong> $71,200 (standard), $81,880 (targeted areas)</li>
              <li>• <strong>Cleveland County:</strong> $74,400 (standard), $85,560 (targeted areas)</li>
              <li>• <strong>Canadian County:</strong> $79,200 (standard), $91,080 (targeted areas)</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">*Limits are higher for households with 3+ people. Contact OHFA for specific limits.</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">2026 Purchase Price Limits</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Most Oklahoma Counties:</strong> $410,000</li>
              <li>• <strong>High-cost areas:</strong> Up to $498,257</li>
              <li>• <strong>New construction:</strong> May have different limits</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            These limits are updated annually and can change. I'll help you determine the current limits for your specific county and situation.
          </p>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Check Your DPA Eligibility</h3>
            <p className="text-gray-700 mb-4">
              Let me verify your eligibility for Oklahoma down payment assistance programs and calculate how much help you can receive.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary-green hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Check Eligibility Now
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">City and County Programs</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Oklahoma City Programs</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Oklahoma City offers additional assistance through various programs:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>OKC Housing Authority:</strong> Down payment assistance for low-to-moderate income buyers</li>
            <li><strong>Neighborhood Stabilization Program:</strong> Assistance in designated revitalization areas</li>
            <li><strong>Police and Fire Department Programs:</strong> Special assistance for first responders buying in Oklahoma City</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tulsa Area Programs</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Tulsa Housing Authority:</strong> DPA for income-qualified buyers</li>
            <li><strong>Tulsa Development Authority:</strong> Targeted area assistance</li>
            <li><strong>Community Development Programs:</strong> Neighborhood-specific grants</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Rural Oklahoma Programs</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>USDA Rural Development:</strong> Zero down payment loans for eligible rural areas</li>
            <li><strong>Rural Housing Grants:</strong> Additional assistance for very low-income buyers</li>
            <li><strong>Native American Programs:</strong> Special programs for tribal members</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Apply for Down Payment Assistance</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 1: Complete Homebuyer Education</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most Oklahoma DPA programs require completion of a homebuyer education course. Options include:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>OHFA-approved in-person classes</li>
            <li>Online homebuyer education courses</li>
            <li>HUD-approved counseling agencies</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            The course typically takes 6-8 hours and covers budgeting, credit, mortgage options, and the home buying process. You'll receive a certificate upon completion that's valid for 12 months.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 2: Get Pre-Approved</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Work with an OHFA-approved lender (like me!) to get pre-approved. You'll need:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Proof of income (pay stubs, tax returns)</li>
            <li>Bank statements</li>
            <li>Credit report authorization</li>
            <li>Homebuyer education certificate</li>
            <li>Government-issued ID</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 3: Find an Eligible Home</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Shop for homes within OHFA purchase price limits. The home must:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Be your primary residence</li>
            <li>Meet minimum property standards</li>
            <li>Be located in Oklahoma</li>
            <li>Be a single-family home, condo, or manufactured home (on permanent foundation)</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 4: Submit DPA Application</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your lender submits the down payment assistance application along with your mortgage application. This includes:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Completed DPA application form</li>
            <li>Income verification documents</li>
            <li>Purchase agreement</li>
            <li>Homebuyer education certificate</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 5: Close on Your Home</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Once approved, your DPA funds are delivered at closing and applied to your down payment and/or closing costs. You'll sign documents for both your first mortgage and the DPA second mortgage.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Combining DPA with Different Loan Types</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">DPA + FHA Loans</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            FHA loans require just 3.5% down, making them perfect for pairing with DPA:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>DPA covers your 3.5% down payment</li>
            <li>May also cover closing costs</li>
            <li>Lower credit score requirements (580+)</li>
            <li>Flexible debt-to-income ratios</li>
          </ul>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Example: $200,000 Home with FHA + DPA</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Purchase Price: $200,000</li>
              <li>• FHA Down Payment (3.5%): $7,000</li>
              <li>• Estimated Closing Costs: $6,000</li>
              <li>• Total Cash Needed: $13,000</li>
              <li>• <strong>DPA Grant: $10,000-$13,000</strong></li>
              <li>• <strong>Your Out-of-Pocket: $0-$3,000</strong></li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">DPA + Conventional Loans</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Conventional loans can also be paired with DPA:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>3% down payment programs available</li>
            <li>DPA covers down payment and costs</li>
            <li>Better rates for borrowers with good credit</li>
            <li>PMI can be removed at 20% equity</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">DPA + VA Loans</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            While VA loans require no down payment, DPA can help with:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Covering the VA funding fee</li>
            <li>Paying closing costs</li>
            <li>Reducing out-of-pocket expenses to near-zero</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">DPA + USDA Loans</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            USDA loans in rural Oklahoma also don't require down payment, but DPA helps with:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Closing costs</li>
            <li>USDA guarantee fee</li>
            <li>Prepaid items (taxes, insurance)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Repayment and Forgiveness</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Understanding DPA repayment is crucial:
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Deferred Payment Second Mortgages</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>No monthly payments required</li>
            <li>0% interest</li>
            <li>Due when you sell, refinance, or pay off first mortgage</li>
            <li>If home increases in value, your equity is protected</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Forgivable Loans</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Some programs forgive the loan after 5-10 years</li>
            <li>Must remain in the home as primary residence</li>
            <li>Typically forgiven at 10% or 20% per year</li>
            <li>Becomes a grant if you stay the required period</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Happens If You Sell Early?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you sell or refinance before the forgiveness period, you'll need to repay the DPA amount. However:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Repayment comes from sale proceeds</li>
            <li>Partial forgiveness may apply based on years lived in home</li>
            <li>You keep all equity beyond the DPA amount</li>
          </ul>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-primary-green to-emerald-600 text-white p-8 rounded-lg my-12 not-prose">
            <h3 className="text-2xl font-bold mb-4">Ready to Access Down Payment Assistance?</h3>
            <p className="text-lg mb-6">
              As an OHFA-approved lender specializing in down payment assistance programs, I'll help you navigate the application process and maximize your benefits. Let's make your Oklahoma homeownership dreams a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-primary-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Apply for DPA Now
              </Link>
              <Link
                href="/articles/fha-loan-oklahoma"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Learn About FHA Loans
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Do I have to be a first-time homebuyer?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            For most programs, yes—defined as not owning a home in the past 3 years. However, repeat buyers can qualify if purchasing in targeted areas or meet certain exceptions (veterans, displaced homemakers, single parents).
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can I use DPA for a manufactured home?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Yes, as long as the manufactured home is on a permanent foundation and meets all program requirements. Land-lease situations typically don't qualify.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How long does the DPA application process take?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            DPA approval typically adds 5-10 days to your mortgage approval process. Total time from application to closing is usually 30-45 days.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can I combine multiple DPA programs?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sometimes. You may be able to combine OHFA assistance with local city/county programs, but total assistance cannot exceed the down payment and closing costs needed.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What if I don't meet the income limits?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            If your income exceeds limits for standard programs, you might still qualify for targeted area programs which have higher income limits. Additionally, conventional 3% down programs don't have income limits.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Work With an OHFA-Approved Lender</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Navigating down payment assistance programs requires expertise in both the programs themselves and how to structure the transaction for maximum benefit. As an OHFA-approved lender with extensive experience in Oklahoma DPA programs, I'll guide you through every step.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            <Link href="/#contact" className="text-primary-green hover:text-emerald-600 font-bold">
              Contact me today
            </Link> to determine your eligibility and start your journey to homeownership with down payment assistance.
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
              <p className="text-gray-600 mb-4">Pair FHA financing with down payment assistance programs.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/conventional-loan-oklahoma" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Conventional Loans Oklahoma</h3>
              <p className="text-gray-600 mb-4">Learn about 3% down conventional loans with DPA.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/mortgage-calculator-oklahoma" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mortgage Calculator Oklahoma</h3>
              <p className="text-gray-600 mb-4">Calculate your payment with down payment assistance.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
