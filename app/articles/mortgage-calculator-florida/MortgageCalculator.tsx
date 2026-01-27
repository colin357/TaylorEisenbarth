"use client";

import { useMemo, useState } from "react";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const percentFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const formatCurrency = (value: number) => currencyFormatter.format(value);

const formatPercent = (value: number) => percentFormatter.format(value / 100);

const monthlyPayment = (loanAmount: number, annualRate: number, years: number) => {
  if (loanAmount <= 0 || annualRate <= 0 || years <= 0) {
    return 0;
  }
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;
  return (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
};

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(250000);
  const [downPayment, setDownPayment] = useState(50000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTaxRate, setPropertyTaxRate] = useState(0.87);
  const [insurance, setInsurance] = useState(250);
  const [hoa, setHoa] = useState(0);
  const [pmi, setPmi] = useState(0);

  const loanAmount = Math.max(homePrice - downPayment, 0);

  const principalAndInterest = useMemo(
    () => monthlyPayment(loanAmount, interestRate, loanTerm),
    [loanAmount, interestRate, loanTerm],
  );

  const monthlyTaxes = useMemo(() => (homePrice * (propertyTaxRate / 100)) / 12, [homePrice, propertyTaxRate]);
  const totalMonthlyPayment = principalAndInterest + monthlyTaxes + insurance + hoa + pmi;

  return (
    <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8 not-prose">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="flex-1 space-y-6">
          <div>
            <p className="text-sm font-semibold text-primary-green uppercase tracking-wide">Mortgage calculator</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">Estimate your monthly payment</h3>
            <p className="text-gray-600 mt-2">
              Adjust the values below to see a payment estimate based on today’s assumptions. Defaults to 5.5% interest.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-gray-700">
              Home price
              <input
                type="number"
                min={0}
                value={homePrice}
                onChange={(event) => setHomePrice(Number(event.target.value))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary-green focus:outline-none focus:ring-1 focus:ring-primary-green"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-gray-700">
              Down payment
              <input
                type="number"
                min={0}
                value={downPayment}
                onChange={(event) => setDownPayment(Number(event.target.value))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary-green focus:outline-none focus:ring-1 focus:ring-primary-green"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-gray-700">
              Interest rate
              <input
                type="number"
                min={0}
                step={0.01}
                value={interestRate}
                onChange={(event) => setInterestRate(Number(event.target.value))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary-green focus:outline-none focus:ring-1 focus:ring-primary-green"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-gray-700">
              Loan term (years)
              <select
                value={loanTerm}
                onChange={(event) => setLoanTerm(Number(event.target.value))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary-green focus:outline-none focus:ring-1 focus:ring-primary-green"
              >
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </select>
            </label>

            <label className="space-y-2 text-sm font-medium text-gray-700">
              Property tax rate
              <input
                type="number"
                min={0}
                step={0.01}
                value={propertyTaxRate}
                onChange={(event) => setPropertyTaxRate(Number(event.target.value))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary-green focus:outline-none focus:ring-1 focus:ring-primary-green"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-gray-700">
              Homeowners insurance (monthly)
              <input
                type="number"
                min={0}
                value={insurance}
                onChange={(event) => setInsurance(Number(event.target.value))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary-green focus:outline-none focus:ring-1 focus:ring-primary-green"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-gray-700">
              HOA fees (monthly)
              <input
                type="number"
                min={0}
                value={hoa}
                onChange={(event) => setHoa(Number(event.target.value))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary-green focus:outline-none focus:ring-1 focus:ring-primary-green"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-gray-700">
              PMI (monthly)
              <input
                type="number"
                min={0}
                value={pmi}
                onChange={(event) => setPmi(Number(event.target.value))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary-green focus:outline-none focus:ring-1 focus:ring-primary-green"
              />
            </label>
          </div>
        </div>

        <div className="w-full lg:w-80">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 space-y-4">
            <div>
              <p className="text-sm text-gray-500">Estimated monthly payment</p>
              <p className="text-3xl font-bold text-gray-900">{formatCurrency(totalMonthlyPayment)}</p>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>Principal &amp; Interest</span>
                <span className="font-medium text-gray-900">{formatCurrency(principalAndInterest)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Property taxes</span>
                <span className="font-medium text-gray-900">{formatCurrency(monthlyTaxes)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Insurance</span>
                <span className="font-medium text-gray-900">{formatCurrency(insurance)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>HOA</span>
                <span className="font-medium text-gray-900">{formatCurrency(hoa)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>PMI</span>
                <span className="font-medium text-gray-900">{formatCurrency(pmi)}</span>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4 text-sm text-gray-600 space-y-1">
              <p>Loan amount: <span className="font-medium text-gray-900">{formatCurrency(loanAmount)}</span></p>
              <p>Interest rate: <span className="font-medium text-gray-900">{formatPercent(interestRate)}</span></p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Disclaimer: This estimate is for informational purposes only. Rates and payments are not guaranteed and may
            change based on your credit profile and lender terms. Contact Taylor for professional guidance and a
            personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
}
