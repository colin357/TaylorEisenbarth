import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HELOC in Arkansas - Home Equity Lines of Credit 2026 | Taylor Eisenbarth",
  description: "Learn about HELOCs in Arkansas. Access your home equity with flexible credit lines, competitive rates, and potential tax benefits. Get expert HELOC guidance from Taylor Eisenbarth.",
  keywords: "HELOC Arkansas, Arkansas HELOC, home equity line of credit arkansas, arkansas home equity loan, HELOC rates arkansas",
};

export default function HELOCArkansas() {
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
            HELOC in Arkansas: Unlock Your Home's Equity
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By Taylor Eisenbarth</span>
            <span>•</span>
            <span>Arkansas HELOC Specialist</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            A Home Equity Line of Credit (HELOC) allows Arkansas homeowners to tap into their home's equity as needed, providing flexible access to funds for home improvements, debt consolidation, education expenses, or emergency needs. With competitive rates, potential tax benefits, and Arkansas's very affordable housing market with the lowest property taxes in the region (0.61%), HELOCs are a smart financial tool for homeowners with substantial equity built up in their Arkansas properties.
          </p>

          {/* Quick Facts Box */}
          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Arkansas HELOC Quick Facts</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Access Amount:</strong> Up to 80-90% of home value minus mortgage balance</li>
              <li>✓ <strong>Interest Rates:</strong> Variable rates tied to Prime Rate (currently lower than credit cards)</li>
              <li>✓ <strong>Draw Period:</strong> Typically 10 years (interest-only payments allowed)</li>
              <li>✓ <strong>Repayment Period:</strong> 10-20 years after draw period ends</li>
              <li>✓ <strong>Tax Benefits:</strong> Interest may be tax-deductible if used for home improvements</li>
              <li>✓ <strong>No Prepayment Penalty:</strong> Pay off anytime without penalty</li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Instant HELOC Approval</h3>
            <p className="text-gray-700 mb-4">
              Our AI-powered system can approve your HELOC in just 5 minutes. No hard credit pull until you're ready to move forward.
            </p>
            <Link
              href="/landing2"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Apply for HELOC Now
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What Is a HELOC?</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            A Home Equity Line of Credit (HELOC) is a revolving credit line secured by your home. Think of it like a credit card, but with your home as collateral and much lower interest rates. You're approved for a maximum credit limit and can borrow any amount up to that limit during the "draw period."
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Unlike a home equity loan where you receive a lump sum, a HELOC gives you flexibility to borrow only what you need, when you need it. You only pay interest on the amount you actually borrow, not your entire credit limit. This is especially valuable in Arkansas's affordable market where homeowners often build equity quickly.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">HELOC vs. Home Equity Loan</h3>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="pb-3 pr-4"></th>
                    <th className="pb-3 pr-4 text-primary-green font-bold">HELOC</th>
                    <th className="pb-3 text-blue-600 font-bold">Home Equity Loan</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-semibold">Funds Access</td>
                    <td className="py-3 pr-4">Draw as needed</td>
                    <td className="py-3">Lump sum</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-semibold">Interest Rate</td>
                    <td className="py-3 pr-4">Variable</td>
                    <td className="py-3">Fixed</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-semibold">Payment Structure</td>
                    <td className="py-3 pr-4">Interest-only during draw period</td>
                    <td className="py-3">Fixed monthly payment</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-semibold">Best For</td>
                    <td className="py-3 pr-4">Ongoing expenses</td>
                    <td className="py-3">One-time need</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold">Flexibility</td>
                    <td className="py-3 pr-4">High</td>
                    <td className="py-3">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How Much Can You Borrow?</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The amount you can borrow with a HELOC depends on three factors:
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Your Home's Current Value</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lenders will order an appraisal or use an automated valuation model (AVM) to determine your home's current market value. In Arkansas's appreciating market, many homeowners are surprised by how much equity they've built, especially with home values rising in Little Rock, Fayetteville, and Fort Smith.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Your Mortgage Balance</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your available equity is your home's value minus what you owe on your mortgage(s).
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Combined Loan-to-Value (CLTV) Limits</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most lenders allow you to borrow up to 80-90% of your home's value when combining your mortgage and HELOC. Some factors affecting your limit:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>80% CLTV:</strong> Standard for most borrowers</li>
            <li><strong>85% CLTV:</strong> Available with excellent credit (740+)</li>
            <li><strong>90% CLTV:</strong> Rare, requires exceptional credit and income</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">HELOC Amount Example (Little Rock)</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Current Home Value: $215,000</li>
              <li>• Mortgage Balance: $120,000</li>
              <li>• Maximum CLTV: 85% ($182,750)</li>
              <li>• Available HELOC Amount: $182,750 - $120,000 = <strong>$62,750</strong></li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">HELOC Qualification Requirements in Arkansas</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Credit Score</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most Arkansas lenders require:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Minimum 640:</strong> Can qualify but may face higher rates</li>
            <li><strong>680-699:</strong> Standard rates</li>
            <li><strong>700-739:</strong> Better rates and terms</li>
            <li><strong>740+:</strong> Best rates and highest CLTV limits</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Debt-to-Income Ratio</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lenders typically want your total debt payments (including the new HELOC payment) to be no more than 43-50% of your gross monthly income.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Income Verification</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            You'll need to provide:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Recent pay stubs (30 days)</li>
            <li>W-2s or tax returns (2 years)</li>
            <li>Bank statements (2 months)</li>
            <li>For self-employed: Additional documentation</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Home Equity</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            You'll need at least 15-20% equity in your home after the HELOC is approved (80-85% CLTV).
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Property Requirements</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Primary residence, second home, or investment property</li>
            <li>Single-family home, condo, or townhouse</li>
            <li>Property insurance current and adequate</li>
            <li>No significant liens or title issues</li>
          </ul>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">See How Much You Can Borrow</h3>
            <p className="text-gray-700 mb-4">
              Get an instant HELOC approval in just 5 minutes with our AI-powered system. No commitment required.
            </p>
            <Link
              href="/landing2"
              className="inline-block bg-primary-green hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Get Instant Approval
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">HELOC Interest Rates in Arkansas</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            HELOC rates are variable and typically tied to the Prime Rate plus a margin. As of early 2026:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Current Rate Environment</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Prime Rate:</strong> ~8.5%</li>
              <li>• <strong>Typical Margin:</strong> -0.5% to +2.0%</li>
              <li>• <strong>Resulting HELOC Rates:</strong> 8.0% - 10.5%</li>
              <li>• <strong>Credit Cards:</strong> 18% - 29% (for comparison)</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            While this seems high compared to mortgage rates, HELOCs are significantly cheaper than credit cards or personal loans, making them ideal for debt consolidation. Plus, with Arkansas's very low property taxes (0.61%), the overall cost of homeownership remains affordable.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Factors Affecting Your Rate</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Credit score:</strong> Higher scores = lower margins</li>
            <li><strong>CLTV ratio:</strong> Lower CLTV = better rates</li>
            <li><strong>Debt-to-income:</strong> Lower DTI = preferred pricing</li>
            <li><strong>Relationship discounts:</strong> Existing bank customers may get rate reductions</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How HELOC Payments Work</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Draw Period (Years 1-10)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            During the draw period, you can borrow up to your credit limit and typically make interest-only payments. For example:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Draw Period Payment Example</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• HELOC Limit: $50,000</li>
              <li>• Amount Borrowed: $30,000</li>
              <li>• Interest Rate: 9%</li>
              <li>• <strong>Monthly Payment: ~$225 (interest-only)</strong></li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">You can pay more than the minimum to reduce principal if you choose.</p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Repayment Period (Years 11-30)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            After the draw period ends, you can no longer borrow and must repay the balance over the repayment period (typically 10-20 years). Payments include both principal and interest.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Repayment Period Payment Example</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Remaining Balance: $30,000</li>
              <li>• Interest Rate: 9%</li>
              <li>• Repayment Term: 15 years</li>
              <li>• <strong>Monthly Payment: ~$304 (principal + interest)</strong></li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Uses for HELOCs in Arkansas</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Home Improvements</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            HELOCs are ideal for renovation projects in Arkansas:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Kitchen or bathroom remodels</li>
            <li>Adding square footage or second story</li>
            <li>New roof or HVAC system</li>
            <li>Pool or outdoor living spaces</li>
            <li>Storm shelter installation (essential in tornado-prone Arkansas!)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bonus: Interest paid on HELOCs used for substantial home improvements may be tax-deductible.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Debt Consolidation</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pay off high-interest debt with your lower-rate HELOC:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Credit card balances (18-29% APR)</li>
            <li>Personal loans (10-20% APR)</li>
            <li>Auto loans</li>
            <li>Student loans</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Debt Consolidation Savings Example</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Credit Card Debt: $25,000 at 22% = $550/month payment</li>
              <li>• HELOC: $25,000 at 9% = $188/month payment (interest-only)</li>
              <li>• <strong>Monthly Savings: $362</strong></li>
              <li>• <strong>Annual Savings: $4,344</strong></li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Education Expenses</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Fund college tuition at University of Arkansas, Arkansas State, or other institutions with lower rates than private student loans.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Emergency Fund</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Keep a HELOC available as a financial safety net for unexpected expenses like medical bills or major home repairs.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Business Expenses</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Self-employed Arkansans often use HELOCs for:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Business startup costs</li>
            <li>Equipment purchases</li>
            <li>Working capital</li>
            <li>Inventory</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Advantages of HELOCs</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Flexibility</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Borrow only what you need, when you need it. You're not paying interest on unused funds.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Lower Interest Rates</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Significantly cheaper than credit cards, personal loans, and most other forms of consumer debt.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Interest-Only Payment Option</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            During the draw period, you can make lower interest-only payments, improving cash flow flexibility.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Tax Deductibility</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Interest may be tax-deductible if used for substantial home improvements (consult your tax advisor).
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Reusable Credit</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            As you pay down the balance during the draw period, that credit becomes available again—like a credit card.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Risks and Considerations</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Variable Interest Rates</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your rate and payment can increase if the Prime Rate rises. However, most HELOCs have rate caps limiting how much your rate can increase.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Your Home Is Collateral</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you can't make payments, you could lose your home to foreclosure. Only borrow what you can comfortably repay.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Payment Shock</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            When the draw period ends, your payment increases significantly as you start paying principal plus interest. Plan ahead for this transition.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Temptation to Overspend</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Easy access to credit can lead to overspending. Use your HELOC responsibly and avoid lifestyle creep.
          </p>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-primary-green to-emerald-600 text-white p-8 rounded-lg my-12 not-prose">
            <h3 className="text-2xl font-bold mb-4">Ready to Access Your Arkansas Home's Equity?</h3>
            <p className="text-lg mb-6">
              Get instant HELOC approval in just 5 minutes with our AI-powered system. No hard credit pull, no commitment required. See how much you qualify for and start accessing your home equity today in Arkansas's affordable housing market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/landing2"
                className="bg-white text-primary-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Get Instant HELOC Approval
              </Link>
              <Link
                href="/#contact"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Speak With Taylor
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How long does HELOC approval take?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            With our AI-powered system, you can get approved in just 5 minutes. Traditional lenders typically take 2-4 weeks for full approval and funding.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can I pay off my HELOC early?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Yes, there are no prepayment penalties on HELOCs. You can pay off the balance anytime without additional fees.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What happens to my HELOC if home values drop?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lenders can freeze or reduce your credit line if your home value declines significantly. This happened during the 2008 financial crisis but is rare in stable markets like Arkansas.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can I convert my HELOC to a fixed-rate loan?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many lenders offer the option to convert all or part of your HELOC balance to a fixed-rate loan, protecting you from rate increases.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Is HELOC interest tax-deductible?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Yes, if you use the funds for substantial home improvements. Interest used for other purposes (debt consolidation, etc.) is not tax-deductible under current tax law. Consult a tax professional for your specific situation.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Work With an Arkansas HELOC Expert</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            HELOCs are powerful financial tools when used responsibly. As a licensed mortgage professional specializing in home equity lending in Arkansas, I'll help you understand your options, calculate your borrowing capacity, and structure a HELOC that meets your financial goals in Arkansas's very affordable housing market with the lowest property taxes in the region.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            <Link href="/landing2" className="text-primary-green hover:text-emerald-600 font-bold">
              Get instant approval
            </Link> in just 5 minutes, or <Link href="/#contact" className="text-primary-green hover:text-emerald-600 font-bold">contact me directly</Link> to discuss your specific needs.
          </p>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Arkansas Mortgage Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/articles/mortgage-calculator-arkansas" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mortgage Calculator Arkansas</h3>
              <p className="text-gray-600 mb-4">Calculate potential HELOC payments and borrowing capacity.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/conventional-loan-arkansas" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Conventional Loans Arkansas</h3>
              <p className="text-gray-600 mb-4">Learn about refinancing options to access equity.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/fha-loan-arkansas" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">FHA Loans in Arkansas</h3>
              <p className="text-gray-600 mb-4">Compare HELOC to cash-out refinancing options.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
