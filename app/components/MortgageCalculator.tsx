'use client';

import { useState, useEffect } from 'react';

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    calculatePayment();
  }, [loanAmount, interestRate, loanTerm]);

  const calculatePayment = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
      return;
    }

    const payment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setMonthlyPayment(payment);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-green to-emerald-600 rounded-full mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Mortgage Calculator</h3>
        <p className="text-gray-600">Estimate your monthly payment</p>
      </div>

      {/* Loan Amount */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <label className="text-sm font-semibold text-gray-700">Loan Amount</label>
          <span className="text-2xl font-bold text-primary-green">{formatCurrency(loanAmount)}</span>
        </div>
        <input
          type="range"
          min="50000"
          max="1000000"
          step="10000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-green"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>$50K</span>
          <span>$1M</span>
        </div>
      </div>

      {/* Interest Rate */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <label className="text-sm font-semibold text-gray-700">Interest Rate</label>
          <span className="text-2xl font-bold text-primary-green">{interestRate.toFixed(2)}%</span>
        </div>
        <input
          type="range"
          min="3"
          max="10"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-green"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>3%</span>
          <span>10%</span>
        </div>
      </div>

      {/* Loan Term */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <label className="text-sm font-semibold text-gray-700">Loan Term</label>
          <span className="text-2xl font-bold text-primary-green">{loanTerm} years</span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setLoanTerm(15)}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
              loanTerm === 15
                ? 'bg-primary-green text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            15 Years
          </button>
          <button
            onClick={() => setLoanTerm(30)}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
              loanTerm === 30
                ? 'bg-primary-green text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            30 Years
          </button>
        </div>
      </div>

      {/* Result */}
      <div className="bg-gradient-to-br from-primary-green to-emerald-600 rounded-2xl p-8 text-center text-white">
        <p className="text-sm font-semibold mb-2 text-white/90">Estimated Monthly Payment</p>
        <p className="text-5xl font-bold mb-4">{formatCurrency(monthlyPayment)}</p>
        <p className="text-sm text-white/80">
          *This is an estimate. Actual payment may include taxes, insurance, and HOA fees.
        </p>
      </div>

      <div className="mt-6 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-primary-green hover:text-primary-green-dark font-semibold transition"
        >
          Get an accurate quote
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
