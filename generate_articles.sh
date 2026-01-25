#!/bin/bash

# This script generates the remaining 29 mortgage articles for 5 states

# Define state data
declare -A STATES
STATES[arkansas]="Arkansas|AR|170000|0.61|498257|766550|Little Rock (\$215,000), Fayetteville (\$275,000), Fort Smith (\$165,000)|Little Rock Air Force Base|Arkansas Development Finance Authority (ADFA)|very affordable market, low property taxes"
STATES[arizona]="Arizona|AZ|430000|0.62|766550|766550|Phoenix (\$445,000), Scottsdale (\$725,000), Tucson (\$315,000), Mesa (\$420,000)|Luke AFB, Davis-Monthan AFB|Arizona Department of Housing|hot market, desert climate, retirement destination"
STATES[kansas]="Kansas|KS|200000|1.33|498257|766550|Wichita (\$205,000), Overland Park (\$365,000), Kansas City (\$245,000)|Fort Riley, McConnell AFB|Kansas Housing Resources Corporation (KHRC)|affordable Midwest market, tornado considerations"
STATES[kentucky]="Kentucky|KY|190000|0.83|498257|766550|Louisville (\$245,000), Lexington (\$265,000), Bowling Green (\$215,000)|Fort Knox, Fort Campbell|Kentucky Housing Corporation (KHC)|horse country, bourbon region, affordable"
STATES[missouri]="Missouri|MO|230000|0.91|498257|766550|Kansas City (\$275,000), St. Louis (\$215,000), Springfield (\$205,000), Columbia (\$250,000)|Whiteman AFB, Fort Leonard Wood|Missouri Housing Development Commission (MHDC)|two major metros, central location"

# Function to create VA loan article
create_va_article() {
  local state_lower=$1
  local state_cap=$2
  local median=$3
  local fha_limit=$4
  local conv_limit=$5
  local cities=$6
  local bases=$7

  cat > "/home/user/TaylorEisenbarth/app/articles/va-loan-${state_lower}/page.tsx" << 'EOF'
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VA Loans in STATE_CAP - Benefits for Veterans 2026 | Taylor Eisenbarth",
  description: "VA loans in STATE_CAP offer zero down payment, no PMI, and competitive rates for veterans and military members. Learn about VA loan benefits near BASES and throughout STATE_CAP.",
  keywords: "VA loan STATE_LOWER, STATE_LOWER VA loan, VA mortgage STATE_LOWER, VA home loan STATE_LOWER",
};

export default function VALoanSTATE_CAPS() {
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
            VA Loans in STATE_CAP: Benefits for Our Veterans
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By Taylor Eisenbarth</span>
            <span>•</span>
            <span>Proud to Serve STATE_CAP Veterans</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            As a combat veteran myself, I understand the unique challenges military families face. VA loans are one of the most powerful benefits available to veterans, active-duty service members, and eligible surviving spouses in STATE_CAP. With zero down payment, no private mortgage insurance, and competitive interest rates, VA loans make homeownership accessible and affordable.
          </p>

          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">VA Loan Quick Facts for STATE_CAP</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Down Payment:</strong> $0 - Zero down payment required</li>
              <li>✓ <strong>Mortgage Insurance:</strong> None - No monthly PMI</li>
              <li>✓ <strong>Loan Limits:</strong> Up to $CONV_LIMIT with full entitlement</li>
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

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Benefits of VA Loans in STATE_CAP</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Zero Down Payment</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Purchase a home with absolutely no down payment. In STATE_CAP where the median home price is $MEDIAN, this is a significant advantage.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. No Private Mortgage Insurance (PMI)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Unlike conventional and FHA loans, VA loans never require mortgage insurance, saving you hundreds per month.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">VA Loans Near BASES</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            STATE_CAP has active military installations including BASES. Popular communities for military families include CITIES.
          </p>

          <div className="bg-gradient-to-r from-primary-green to-emerald-600 text-white p-8 rounded-lg my-12 not-prose">
            <h3 className="text-2xl font-bold mb-4">Ready to Use Your VA Loan Benefit in STATE_CAP?</h3>
            <p className="text-lg mb-6">
              As a combat veteran and licensed mortgage professional, I'm honored to help fellow veterans achieve homeownership in STATE_CAP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-primary-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Start Your VA Loan
              </Link>
              <Link
                href="/articles/mortgage-calculator-STATE_LOWER"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related STATE_CAP Mortgage Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/articles/fha-loan-STATE_LOWER" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">FHA Loans in STATE_CAP</h3>
              <p className="text-gray-600 mb-4">Compare FHA and VA loans to find the best option for you.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/conventional-loan-STATE_LOWER" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Conventional Loans STATE_CAP</h3>
              <p className="text-gray-600 mb-4">Learn about conventional loan options in STATE_CAP.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/mortgage-calculator-STATE_LOWER" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mortgage Calculator STATE_CAP</h3>
              <p className="text-gray-600 mb-4">Calculate your monthly VA loan payment with no PMI.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
EOF

  # Replace placeholders
  sed -i "s/STATE_CAP/${state_cap}/g" "/home/user/TaylorEisenbarth/app/articles/va-loan-${state_lower}/page.tsx"
  sed -i "s/STATE_LOWER/${state_lower}/g" "/home/user/TaylorEisenbarth/app/articles/va-loan-${state_lower}/page.tsx"
  sed -i "s/STATE_CAPS/${state_cap^}/g" "/home/user/TaylorEisenbarth/app/articles/va-loan-${state_lower}/page.tsx"
  sed -i "s/MEDIAN/${median}/g" "/home/user/TaylorEisenbarth/app/articles/va-loan-${state_lower}/page.tsx"
  sed -i "s/CONV_LIMIT/${conv_limit}/g" "/home/user/TaylorEisenbarth/app/articles/va-loan-${state_lower}/page.tsx"
  sed -i "s/CITIES/${cities}/g" "/home/user/TaylorEisenbarth/app/articles/va-loan-${state_lower}/page.tsx"
  sed -i "s/BASES/${bases}/g" "/home/user/TaylorEisenbarth/app/articles/va-loan-${state_lower}/page.tsx"
}

# Process Arkansas VA loan (4 remaining)
IFS='|' read -r state_name code median prop_tax fha_limit conv_limit cities bases dpa unique <<< "${STATES[arkansas]}"
create_va_article "arkansas" "$state_name" "$median" "$fha_limit" "$conv_limit" "$cities" "$bases"

echo "Created VA article for Arkansas"

# Create remaining files for other states (will add in next command)
echo "Script ready to generate remaining articles"
