#!/usr/bin/env python3
import os

# State data
states = {
    'arkansas': {
        'name': 'Arkansas', 'code': 'AR', 'median': '170,000', 'prop_tax': '0.61',
        'fha_limit': '498,257', 'conv_limit': '766,550',
        'cities': 'Little Rock ($215,000), Fayetteville ($275,000), Fort Smith ($165,000)',
        'bases': 'Little Rock Air Force Base',
        'dpa': 'Arkansas Development Finance Authority (ADFA)',
        'unique': 'very affordable market, low property taxes'
    },
    'arizona': {
        'name': 'Arizona', 'code': 'AZ', 'median': '430,000', 'prop_tax': '0.62',
        'fha_limit': '766,550', 'conv_limit': '766,550',
        'cities': 'Phoenix ($445,000), Scottsdale ($725,000), Tucson ($315,000), Mesa ($420,000)',
        'bases': 'Luke AFB, Davis-Monthan AFB',
        'dpa': 'Arizona Department of Housing',
        'unique': 'hot market, desert climate, retirement destination'
    },
    'kansas': {
        'name': 'Kansas', 'code': 'KS', 'median': '200,000', 'prop_tax': '1.33',
        'fha_limit': '498,257', 'conv_limit': '766,550',
        'cities': 'Wichita ($205,000), Overland Park ($365,000), Kansas City ($245,000)',
        'bases': 'Fort Riley, McConnell AFB',
        'dpa': 'Kansas Housing Resources Corporation (KHRC)',
        'unique': 'affordable Midwest market, tornado considerations'
    },
    'kentucky': {
        'name': 'Kentucky', 'code': 'KY', 'median': '190,000', 'prop_tax': '0.83',
        'fha_limit': '498,257', 'conv_limit': '766,550',
        'cities': 'Louisville ($245,000), Lexington ($265,000), Bowling Green ($215,000)',
        'bases': 'Fort Knox, Fort Campbell',
        'dpa': 'Kentucky Housing Corporation (KHC)',
        'unique': 'horse country, bourbon region, affordable'
    },
    'missouri': {
        'name': 'Missouri', 'code': 'MO', 'median': '230,000', 'prop_tax': '0.91',
        'fha_limit': '498,257', 'conv_limit': '766,550',
        'cities': 'Kansas City ($275,000), St. Louis ($215,000), Springfield ($205,000), Columbia ($250,000)',
        'bases': 'Whiteman AFB, Fort Leonard Wood',
        'dpa': 'Missouri Housing Development Commission (MHDC)',
        'unique': 'two major metros, central location'
    }
}

# Article types to create (skipping already created ones for arkansas)
articles_to_create = {
    'arkansas': ['conventional-loan', 'down-payment-assistance', 'heloc'],
    'arizona': ['mortgage-calculator', 'fha-loan', 'va-loan', 'conventional-loan', 'down-payment-assistance', 'heloc'],
    'kansas': ['mortgage-calculator', 'fha-loan', 'va-loan', 'conventional-loan', 'down-payment-assistance', 'heloc'],
    'kentucky': ['mortgage-calculator', 'fha-loan', 'va-loan', 'conventional-loan', 'down-payment-assistance', 'heloc'],
    'missouri': ['mortgage-calculator', 'fha-loan', 'va-loan', 'conventional-loan', 'down-payment-assistance', 'heloc']
}

# Condensed templates
templates = {
    'conventional-loan': '''import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {{
  title: "Conventional Loans in {name} - Requirements & Rates 2026 | Taylor Eisenbarth",
  description: "Learn about conventional loans in {name}. Competitive rates, flexible down payment options (3-20%), and no upfront mortgage insurance.",
  keywords: "conventional loan {lower}, {lower} conventional mortgage, conventional home loan {lower}",
}};

export default function ConventionalLoan{cap}() {{
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
            Conventional Loans in {name}: Your Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By Taylor Eisenbarth</span>
            <span>•</span>
            <span>Licensed {name} Mortgage Professional</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Conventional loans are the most common type of mortgage in {name}, offering competitive interest rates, flexible terms, and the ability to remove private mortgage insurance once you reach 20% equity.
          </p>

          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Conventional Loan Quick Facts for {name}</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Loan Limits:</strong> Up to ${conv_limit} (2026 conforming limit)</li>
              <li>✓ <strong>Down Payment:</strong> As low as 3% for qualified buyers</li>
              <li>✓ <strong>Credit Score:</strong> Minimum 620 (better rates with 740+)</li>
              <li>✓ <strong>PMI Removal:</strong> Automatic at 78% LTV</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Pre-Approved</h3>
            <p className="text-gray-700 mb-4">
              Let's review your situation and see if a conventional loan offers the best terms for your {name} home purchase.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Contact Taylor Today
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Advantages of Conventional Loans in {name}</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. PMI Can Be Removed</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Unlike FHA's lifetime mortgage insurance, conventional PMI goes away once you reach 20-22% equity.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Competitive Rates</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Borrowers with good credit get excellent rates, often better than FHA for those with 700+ credit scores.
          </p>

          <div className="bg-gradient-to-r from-primary-green to-emerald-600 text-white p-8 rounded-lg my-12 not-prose">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6">
              As a licensed mortgage professional serving {name}, I'll help you determine if a conventional loan is right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-primary-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Get Pre-Approved
              </Link>
              <Link
                href="/articles/mortgage-calculator-{lower}"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Calculate Your Payment
              </Link>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            <Link href="/#contact" className="text-primary-green hover:text-emerald-600 font-bold">
              Contact me today
            </Link> to discuss your conventional loan options.
          </p>
        </div>
      </article>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related {name} Mortgage Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/articles/fha-loan-{lower}" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">FHA Loans in {name}</h3>
              <p className="text-gray-600 mb-4">Compare FHA and conventional loans.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/va-loan-{lower}" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">VA Loans in {name}</h3>
              <p className="text-gray-600 mb-4">Learn about VA loan benefits.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/mortgage-calculator-{lower}" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mortgage Calculator {name}</h3>
              <p className="text-gray-600 mb-4">Calculate your monthly payment.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}}
''',

    'down-payment-assistance': '''import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {{
  title: "Down Payment Assistance in {name} - Programs & Grants 2026 | Taylor Eisenbarth",
  description: "Discover {name} down payment assistance programs including {dpa} grants and first-time homebuyer assistance.",
  keywords: "down payment assistance {lower}, {lower} down payment assistance, first time homebuyer {lower}",
}};

export default function DownPaymentAssistance{cap}() {{
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
            Down Payment Assistance in {name}: Your Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By Taylor Eisenbarth</span>
            <span>•</span>
            <span>{name} Down Payment Assistance Expert</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Saving for a down payment is often the biggest barrier to homeownership. Fortunately, {name} offers several down payment assistance (DPA) programs that can help first-time homebuyers overcome this hurdle.
          </p>

          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{name} DPA Quick Facts</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Primary Program:</strong> {dpa}</li>
              <li>✓ <strong>Assistance Amount:</strong> Varies by program</li>
              <li>✓ <strong>Program Types:</strong> Grants, forgivable loans, second mortgages</li>
              <li>✓ <strong>Combination:</strong> Can be used with FHA, VA, and conventional loans</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Help With Your Down Payment</h3>
            <p className="text-gray-700 mb-4">
              Let me help you identify which down payment assistance programs you qualify for.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Contact Taylor Today
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{dpa} Programs</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The {dpa} is the state's primary source for down payment assistance and affordable mortgage programs.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Eligibility Requirements</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>First-time homebuyer:</strong> Not owned a home in past 3 years</li>
            <li><strong>Income limits:</strong> Vary by county</li>
            <li><strong>Primary residence:</strong> Must occupy home</li>
            <li><strong>Homebuyer education:</strong> Required for most programs</li>
          </ul>

          <div className="bg-gradient-to-r from-primary-green to-emerald-600 text-white p-8 rounded-lg my-12 not-prose">
            <h3 className="text-2xl font-bold mb-4">Ready to Access Down Payment Assistance?</h3>
            <p className="text-lg mb-6">
              As an approved lender, I'll help you navigate the application process for {name} homeownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-white text-primary-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Apply for DPA Now
              </Link>
              <Link
                href="/articles/fha-loan-{lower}"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Learn About FHA Loans
              </Link>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            <Link href="/#contact" className="text-primary-green hover:text-emerald-600 font-bold">
              Contact me today
            </Link> to determine your eligibility.
          </p>
        </div>
      </article>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related {name} Mortgage Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/articles/fha-loan-{lower}" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">FHA Loans in {name}</h3>
              <p className="text-gray-600 mb-4">Pair FHA financing with DPA programs.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/conventional-loan-{lower}" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Conventional Loans {name}</h3>
              <p className="text-gray-600 mb-4">Learn about 3% down conventional loans.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/mortgage-calculator-{lower}" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mortgage Calculator {name}</h3>
              <p className="text-gray-600 mb-4">Calculate your payment with DPA.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}}
''',

    'heloc': '''import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {{
  title: "HELOC in {name} - Home Equity Lines of Credit 2026 | Taylor Eisenbarth",
  description: "Learn about HELOCs in {name}. Access your home equity with flexible credit lines, competitive rates, and potential tax benefits.",
  keywords: "HELOC {lower}, {lower} HELOC, home equity line of credit {lower}",
}};

export default function HELOC{cap}() {{
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
            HELOC in {name}: Unlock Your Home's Equity
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By Taylor Eisenbarth</span>
            <span>•</span>
            <span>{name} HELOC Specialist</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            A Home Equity Line of Credit (HELOC) allows {name} homeowners to tap into their home's equity as needed, providing flexible access to funds for home improvements, debt consolidation, or emergency needs.
          </p>

          <div className="bg-gradient-to-r from-primary-green/10 to-emerald-50 border-l-4 border-primary-green p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{name} HELOC Quick Facts</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Access Amount:</strong> Up to 80-85% of home value minus mortgage</li>
              <li>✓ <strong>Interest Rates:</strong> Variable rates tied to Prime Rate</li>
              <li>✓ <strong>Draw Period:</strong> Typically 10 years</li>
              <li>✓ <strong>Tax Benefits:</strong> Interest may be deductible for home improvements</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Instant HELOC Approval</h3>
            <p className="text-gray-700 mb-4">
              Our AI-powered system can approve your HELOC in just 5 minutes.
            </p>
            <Link
              href="/landing2"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Apply for HELOC Now
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Uses for HELOCs in {name}</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Home Improvements</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            HELOCs are ideal for renovation projects including kitchen remodels, bathroom updates, and adding square footage.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Debt Consolidation</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pay off high-interest debt with your lower-rate HELOC, potentially saving thousands annually.
          </p>

          <div className="bg-gradient-to-r from-primary-green to-emerald-600 text-white p-8 rounded-lg my-12 not-prose">
            <h3 className="text-2xl font-bold mb-4">Ready to Access Your {name} Home's Equity?</h3>
            <p className="text-lg mb-6">
              Get instant HELOC approval in just 5 minutes with our AI-powered system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/landing2"
                className="bg-white text-primary-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Get Instant Approval
              </Link>
              <Link
                href="/#contact"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-lg transition text-center"
              >
                Speak With Taylor
              </Link>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            <Link href="/landing2" className="text-primary-green hover:text-emerald-600 font-bold">
              Get instant approval
            </Link> or <Link href="/#contact" className="text-primary-green hover:text-emerald-600 font-bold">contact me directly</Link>.
          </p>
        </div>
      </article>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related {name} Mortgage Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/articles/mortgage-calculator-{lower}" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mortgage Calculator {name}</h3>
              <p className="text-gray-600 mb-4">Calculate potential HELOC payments.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/conventional-loan-{lower}" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Conventional Loans {name}</h3>
              <p className="text-gray-600 mb-4">Learn about refinancing options.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
            <Link href="/articles/fha-loan-{lower}" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">FHA Loans in {name}</h3>
              <p className="text-gray-600 mb-4">Compare HELOC to cash-out refinancing.</p>
              <span className="text-primary-green font-semibold">Read More →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}}
'''
}

# Note: Mortgage calculator, FHA loan, and VA loan templates would be added here
# For brevity, showing structure for 3 article types

base_path = '/home/user/TaylorEisenbarth/app/articles'

# Create articles
count = 0
for state_key, article_types in articles_to_create.items():
    state_info = states[state_key]

    for article_type in article_types:
        if article_type in templates:
            content = templates[article_type].format(
                name=state_info['name'],
                lower=state_key,
                cap=state_info['name'].replace(' ', ''),
                median=state_info['median'],
                prop_tax=state_info['prop_tax'],
                fha_limit=state_info['fha_limit'],
                conv_limit=state_info['conv_limit'],
                cities=state_info['cities'],
                bases=state_info['bases'],
                dpa=state_info['dpa']
            )

            file_path = f"{base_path}/{article_type}-{state_key}/page.tsx"
            with open(file_path, 'w') as f:
                f.write(content)
            count += 1
            print(f"Created: {file_path}")

print(f"\nTotal articles created: {count}")
