'use client';

import { useState, useEffect } from 'react';

export default function MortgageCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(350000);
  const [downPaymentPct, setDownPaymentPct] = useState(10);
  const [downPaymentAmt, setDownPaymentAmt] = useState(35000);
  const [interestRate, setInterestRate] = useState(6.0);
  const [loanTerm, setLoanTerm] = useState(30);

  const loanAmount = purchasePrice - downPaymentAmt;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;

  const principalAndInterest =
    monthlyRate === 0
      ? loanAmount / numPayments
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);

  // Estimates: ~0.83% of purchase price per year for taxes (Florida avg), ~0.5% for insurance
  const monthlyTaxes = (purchasePrice * 0.0083) / 12;
  const monthlyInsurance = (purchasePrice * 0.005) / 12;
  const totalMonthly = principalAndInterest + monthlyTaxes + monthlyInsurance;

  // Keep down payment amount and percent in sync
  const handleDownPct = (pct: number) => {
    setDownPaymentPct(pct);
    setDownPaymentAmt(Math.round(purchasePrice * (pct / 100)));
  };

  const handleDownAmt = (amt: number) => {
    const clamped = Math.min(amt, purchasePrice);
    setDownPaymentAmt(clamped);
    setDownPaymentPct(parseFloat(((clamped / purchasePrice) * 100).toFixed(1)));
  };

  const handlePurchasePrice = (price: number) => {
    setPurchasePrice(price);
    setDownPaymentAmt(Math.round(price * (downPaymentPct / 100)));
  };

  const fmt = (val: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  const fmtFull = (val: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(val);

  const downPct = downPaymentPct;
  const isLowDown = downPct < 20;

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-green to-emerald-600 rounded-full mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Mortgage Calculator</h3>
        <p className="text-gray-500">Estimate your full monthly payment</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="space-y-7">
          {/* Purchase Price */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-700">Purchase Price</label>
              <span className="text-xl font-bold text-primary-green">{fmt(purchasePrice)}</span>
            </div>
            <input
              type="range"
              min="100000"
              max="1500000"
              step="5000"
              value={purchasePrice}
              onChange={(e) => handlePurchasePrice(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-green"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>$100K</span><span>$1.5M</span>
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-700">Down Payment</label>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-primary-green">{fmt(downPaymentAmt)}</span>
                <span className="text-xs text-gray-400">({downPaymentPct}%)</span>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="0.5"
              value={downPaymentPct}
              onChange={(e) => handleDownPct(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-green"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0%</span><span>50%</span>
            </div>
            {isLowDown && (
              <p className="text-xs text-amber-600 mt-2 flex items-center gap-1">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                Under 20% down — PMI may apply. Ask Taylor for details.
              </p>
            )}
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-700">Interest Rate</label>
              <span className="text-xl font-bold text-primary-green">{interestRate.toFixed(2)}%</span>
            </div>
            <input
              type="range"
              min="3"
              max="12"
              step="0.125"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-green"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>3%</span><span>12%</span>
            </div>
          </div>

          {/* Loan Term */}
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-3">Loan Term</label>
            <div className="flex gap-3">
              {[10, 15, 20, 30].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setLoanTerm(yr)}
                  className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    loanTerm === yr
                      ? 'bg-primary-green text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {yr}yr
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-4">
          {/* Loan summary */}
          <div className="bg-gray-50 rounded-2xl p-5 space-y-3 border border-gray-100">
            <h4 className="font-bold text-gray-700 text-sm uppercase tracking-wide">Loan Summary</h4>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Purchase Price</span>
              <span className="font-semibold text-gray-800">{fmt(purchasePrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Down Payment</span>
              <span className="font-semibold text-gray-800">− {fmt(downPaymentAmt)}</span>
            </div>
            <div className="border-t border-gray-200 pt-2 flex justify-between text-sm">
              <span className="text-gray-500">Loan Amount</span>
              <span className="font-bold text-primary-green">{fmt(Math.max(0, loanAmount))}</span>
            </div>
          </div>

          {/* Monthly breakdown */}
          <div className="bg-gradient-to-br from-primary-green to-emerald-600 rounded-2xl p-6 text-white flex-1">
            <p className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wide">Monthly Payment Breakdown</p>

            <div className="space-y-3 mb-5">
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-sm">Principal & Interest</span>
                <span className="font-bold">{fmtFull(principalAndInterest)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-sm">Est. Property Taxes</span>
                <span className="font-bold">{fmtFull(monthlyTaxes)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-sm">Est. Homeowners Insurance</span>
                <span className="font-bold">{fmtFull(monthlyInsurance)}</span>
              </div>
              <div className="border-t border-white/30 pt-3 flex justify-between items-center">
                <span className="font-bold text-lg">Total / Month</span>
                <span className="text-3xl font-black">{fmt(totalMonthly)}</span>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed">
              *Taxes and insurance are estimates. Actual amounts vary by location and coverage. Does not include PMI or HOA fees.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 text-primary-green hover:text-primary-green-dark font-semibold transition border-2 border-primary-green hover:bg-primary-green hover:text-white rounded-xl py-3 px-5 text-sm"
          >
            Get my exact rate from Taylor
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
