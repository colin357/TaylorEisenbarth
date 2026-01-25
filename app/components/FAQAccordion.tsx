'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How much do I need for a down payment?",
    answer: "Down payment requirements vary by loan type. Conventional loans typically require 3-20%, FHA loans as low as 3.5%, and VA loans can be 0% down for eligible veterans. I'll help you find the best option for your situation."
  },
  {
    question: "What's the difference between pre-qualified and pre-approved?",
    answer: "Pre-qualification is an estimate based on self-reported information. Pre-approval is a more thorough process where I verify your income, assets, and credit. A pre-approval letter shows sellers you're a serious buyer with financing ready to go."
  },
  {
    question: "How long does the mortgage process take?",
    answer: "From application to closing typically takes 30-45 days. However, I can often move faster for well-prepared buyers. Getting pre-approved before house hunting speeds up the process significantly."
  },
  {
    question: "What credit score do I need to buy a home?",
    answer: "Minimum scores vary by loan type: FHA loans accept scores as low as 580, conventional loans typically require 620+, and VA loans usually need 620+. However, higher scores get better rates. Let's discuss your specific situation."
  },
  {
    question: "Can I buy a home if I'm self-employed?",
    answer: "Absolutely! Self-employed buyers can qualify with proper documentation. You'll typically need 2 years of tax returns, profit & loss statements, and bank statements. I specialize in helping self-employed borrowers navigate this process."
  },
  {
    question: "What are closing costs and how much are they?",
    answer: "Closing costs typically range from 2-5% of the loan amount and include appraisal fees, title insurance, origination fees, and prepaid items. I'll provide a detailed breakdown upfront so there are no surprises."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
            <svg
              className={`w-6 h-6 text-primary-green flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="px-6 pb-5 text-gray-600 leading-relaxed">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
