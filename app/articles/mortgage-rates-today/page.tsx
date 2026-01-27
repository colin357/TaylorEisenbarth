import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Rates Today - Current Home Loan Rates | Taylor Eisenbarth",
  description: "Check today's mortgage rates and find the best home loan options. Get expert guidance from Taylor Eisenbarth at Fairway Independent Mortgage on current rates and trends.",
  keywords: "mortgage rates today, current mortgage rates, home loan rates, today's rates, mortgage interest rates, refinance rates",
};

export default function MortgageRatesToday() {
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
            Mortgage Rates Today: What You Need to Know
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By Taylor Eisenbarth</span>
            <span>•</span>
            <span>Updated Daily</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Understanding today's mortgage rates is crucial for making informed decisions about buying a home or refinancing your existing mortgage. As a licensed mortgage professional serving multiple states, I help clients navigate the ever-changing landscape of mortgage rates and find the best financing options for their unique situations.
          </p>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Your Personalized Rate Quote</h3>
            <p className="text-gray-700 mb-4">
              Current rates vary based on your credit score, down payment, and location. Contact me for a customized rate quote today.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary-green hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Contact Taylor Today
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What Affects Today's Mortgage Rates?</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Mortgage rates fluctuate daily based on several economic factors. Understanding these factors can help you time your mortgage application more strategically:
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Federal Reserve Policy</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Federal Reserve's decisions on interest rates have a significant impact on mortgage rates. When the Fed raises or lowers the federal funds rate, mortgage rates typically follow suit. The Fed adjusts rates based on inflation, employment data, and overall economic conditions.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Economic Indicators</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Key economic data points influence mortgage rates daily:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Employment reports:</strong> Strong job growth can lead to higher rates as it signals economic strength</li>
            <li><strong>Inflation data:</strong> Higher inflation typically results in higher mortgage rates</li>
            <li><strong>GDP growth:</strong> Strong economic growth can push rates higher</li>
            <li><strong>Consumer spending:</strong> Increased spending can signal economic health and influence rates</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Global Market Conditions</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            International economic events, geopolitical tensions, and global market movements can affect U.S. mortgage rates. When global uncertainty rises, investors often seek the safety of U.S. Treasury bonds, which can lower mortgage rates.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Your Personal Financial Profile</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            While market rates set the baseline, your individual rate depends on:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Credit score:</strong> Higher scores typically qualify for better rates</li>
            <li><strong>Down payment:</strong> Larger down payments often result in lower rates</li>
            <li><strong>Loan type:</strong> Conventional, FHA, VA, and USDA loans have different rate structures</li>
            <li><strong>Loan term:</strong> 15-year mortgages usually have lower rates than 30-year loans</li>
            <li><strong>Property type:</strong> Single-family homes typically get better rates than investment properties</li>
            <li><strong>Debt-to-income ratio:</strong> Lower DTI ratios can help you qualify for better rates</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Current Rate Environment</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Mortgage rates have experienced significant volatility in recent years. After hitting historic lows during the pandemic, rates rose sharply as the Federal Reserve combated inflation. Understanding the current rate environment helps you make informed decisions about timing your home purchase or refinance.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">30-Year Fixed-Rate Mortgages</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The 30-year fixed-rate mortgage remains the most popular loan option for American homebuyers. This loan type offers:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Predictable monthly payments for the entire loan term</li>
            <li>Lower monthly payments compared to shorter-term loans</li>
            <li>Protection from future rate increases</li>
            <li>Maximum flexibility in your monthly budget</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15-Year Fixed-Rate Mortgages</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The 15-year fixed-rate mortgage typically offers lower interest rates than 30-year loans and helps you build equity faster. Benefits include:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Lower interest rates compared to 30-year mortgages</li>
            <li>Significant interest savings over the life of the loan</li>
            <li>Faster equity building</li>
            <li>Debt-free homeownership in half the time</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjustable-Rate Mortgages (ARMs)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            ARMs offer lower initial rates but adjust after a fixed period (typically 5, 7, or 10 years). These loans work well for buyers who:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Plan to sell or refinance before the rate adjusts</li>
            <li>Expect their income to increase significantly</li>
            <li>Want lower initial payments to maximize purchasing power</li>
            <li>Are comfortable with some payment uncertainty in the future</li>
          </ul>

          {/* CTA Box */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Lock in Your Rate?</h3>
            <p className="text-gray-700 mb-4">
              Don't wait for rates to go lower. Get pre-approved today and be ready when you find your dream home.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Get Pre-Approved Now
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Get the Best Mortgage Rate</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Improve Your Credit Score</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your credit score is one of the most important factors in determining your mortgage rate. Here's how to optimize it:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Pay all bills on time for at least 12 months before applying</li>
            <li>Pay down credit card balances to below 30% of your credit limits</li>
            <li>Don't close old credit cards (length of credit history matters)</li>
            <li>Dispute any errors on your credit report</li>
            <li>Avoid opening new credit accounts before applying for a mortgage</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Increase Your Down Payment</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            A larger down payment reduces your loan-to-value ratio (LTV), which can result in a lower interest rate. Consider these strategies:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Save aggressively before home shopping</li>
            <li>Explore down payment assistance programs in your state</li>
            <li>Consider gift funds from family members</li>
            <li>Put bonuses, tax refunds, or windfalls toward your down payment</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Shop Around and Compare Lenders</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Different lenders offer different rates and fees. Getting quotes from multiple lenders helps you find the best deal. When comparing offers, look at:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Interest rate and APR (annual percentage rate)</li>
            <li>Loan origination fees</li>
            <li>Discount points</li>
            <li>Closing costs</li>
            <li>Lender reputation and customer service</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Consider Buying Discount Points</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Discount points allow you to "buy down" your interest rate by paying upfront fees. Each point typically costs 1% of your loan amount and can lower your rate by about 0.25%. This strategy makes sense if you:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Plan to stay in the home long enough to recoup the upfront cost</li>
            <li>Have extra cash available at closing</li>
            <li>Want to maximize your tax deductions (points are tax-deductible)</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Time Your Rate Lock Strategically</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Once you lock your rate, it's protected from market increases during your lock period (typically 30-60 days). Work with your loan officer to time your rate lock when:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>You have a signed purchase agreement</li>
            <li>You're confident you can close within the lock period</li>
            <li>Current rates are favorable based on recent trends</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Should You Wait for Lower Rates?</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            This is one of the most common questions I hear from potential homebuyers. Here's my perspective as a mortgage professional:
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Trying to time the market is nearly impossible.</strong> While it's tempting to wait for rates to drop, several factors make this a risky strategy:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Home prices may rise:</strong> Any savings from a lower rate could be offset by higher home prices</li>
            <li><strong>More competition:</strong> Lower rates bring more buyers into the market</li>
            <li><strong>You can always refinance:</strong> If rates drop significantly, you can refinance to a lower rate</li>
            <li><strong>Time in the market matters:</strong> Building equity sooner can be more valuable than waiting for the "perfect" rate</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            The best time to buy is when you're financially ready and have found the right home for your needs. Focus on what you can control: your credit score, down payment, and choosing the right loan program.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Loan Programs and Their Rates</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conventional Loans</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Conventional loans typically offer competitive rates for borrowers with good credit and sufficient down payment. These loans require:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Minimum credit score of 620 (higher scores get better rates)</li>
            <li>Down payment as low as 3%, but 20% avoids PMI</li>
            <li>Debt-to-income ratio typically below 43%</li>
            <li>Stable employment and income history</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">FHA Loans</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            FHA loans are government-backed and designed for borrowers with lower credit scores or smaller down payments. Key features:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Minimum credit score of 580 for 3.5% down payment</li>
            <li>More lenient qualification requirements</li>
            <li>Competitive interest rates despite lower credit requirements</li>
            <li>Require mortgage insurance throughout the loan term</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">VA Loans</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Available to eligible veterans, active-duty service members, and surviving spouses, VA loans offer excellent terms:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>No down payment required</li>
            <li>No private mortgage insurance</li>
            <li>Competitive interest rates</li>
            <li>Lenient credit requirements</li>
            <li>One-time funding fee (can be rolled into the loan)</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">USDA Loans</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            USDA loans support homebuyers in rural and suburban areas with:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Zero down payment options</li>
            <li>Competitive interest rates</li>
            <li>Income limits based on location</li>
            <li>Property must be in an eligible rural area</li>
          </ul>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-primary-green to-emerald-600 text-white p-8 rounded-lg my-12 not-prose">
            <h3 className="text-2xl font-bold mb-4">Let's Find Your Best Rate Today</h3>
            <p className="text-lg mb-6">
              As a licensed mortgage professional serving OK, AK, AR, AZ, KS, KY, and MO, I'll help you navigate today's mortgage rates and find the best financing solution for your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-primary-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Get Your Rate Quote
              </Link>
              <Link
                href="/landing"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Apply for HELOC
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What's the difference between interest rate and APR?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The interest rate is the cost of borrowing the principal loan amount. The APR (Annual Percentage Rate) includes the interest rate plus additional costs like origination fees, discount points, and mortgage insurance, giving you a more complete picture of the loan's total cost.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How often do mortgage rates change?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Mortgage rates can change multiple times per day based on bond market activity. Lenders typically update their rate sheets each morning, but significant market movements can trigger intraday rate changes.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can I negotiate my mortgage rate?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            While you can't negotiate the market rate, you can shop around for the best offer and sometimes negotiate lender fees or ask for lender credits. Your loan officer may also offer rate discounts based on your financial profile or relationship with the bank.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What credit score do I need for the best rates?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Generally, a credit score of 740 or higher qualifies you for the best mortgage rates. However, you can still get competitive rates with scores in the 700-739 range. Below 700, you'll see higher rates, and below 620, you may only qualify for FHA or other government-backed loans.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Should I pay points to lower my rate?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            It depends on how long you plan to keep the loan. Calculate your break-even point by dividing the cost of points by your monthly savings. If you'll stay in the home beyond that break-even period, buying points can save you money over time.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Work With an Experienced Mortgage Professional</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Navigating today's mortgage rates requires expertise and local market knowledge. As a licensed mortgage professional with Fairway Independent Mortgage, I serve clients across seven states and help them secure competitive rates tailored to their unique situations.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you're a first-time homebuyer, moving up to a larger home, or refinancing your current mortgage, I'll guide you through the process and ensure you understand all your options. My goal is to help you make informed decisions that align with your long-term financial goals.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            <Link href="/#contact" className="text-primary-green hover:text-emerald-600 font-bold">
              Contact me today
            </Link> to discuss current mortgage rates and get started on your home financing journey.
          </p>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/articles/15-vs-30-year-mortgage" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">15 vs 30 Year Mortgage</h3>
              <p className="text-gray-600 mb-4">Compare mortgage terms to find the best option for your financial situation.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/fha-loan-florida" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">FHA Loans in Florida</h3>
              <p className="text-gray-600 mb-4">Learn about FHA loan requirements and benefits for Florida homebuyers.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/va-loan-florida" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">VA Loans in Florida</h3>
              <p className="text-gray-600 mb-4">Explore VA loan benefits for veterans and active military in Florida.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
