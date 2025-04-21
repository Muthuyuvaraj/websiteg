'use client';

import { useState } from 'react';
import NavBar from '@/components/common/NavBar';
import FooterSection from '@/components/common/FooterSection';
import { CheckCircle } from 'lucide-react';
import clsx from 'clsx';

const plans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    features: [
      '2 auto tracking',
      '7 Day transaction clearing',
      '24/7 Customer support',
      'All widget access',
    ],
  },
  {
    name: 'Advanced',
    popular: true,
    price: { monthly: 150, yearly: 1200 },
    features: [
      'AI Advisor',
      'Unlimited auto tracking',
      '1 Day transaction clearing',
      'Priority customer support',
      'All Widget Access',
    ],
  },
  {
    name: 'Team',
    price: { monthly: 180, yearly: 1440 },
    features: [
      'AI Advisor',
      'Unlimited auto tracking',
      '1 Day transaction clearing',
      'Priority customer support',
      'All Widget Access',
    ],
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <main className="bg-[#faf9f9] min-h-screen">
      <NavBar />
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold">Choose your plan</h2>
        <p className="text-gray-500 mt-2">7 Days free trial. No credit card required.</p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <span>Bill Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={(e) => setBilling(e.target.checked ? 'yearly' : 'monthly')}
            />
            <div className="w-11 h-6 bg-gray-300 peer-checked:bg-purple-600 rounded-full transition-colors duration-300" />
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5" />
          </label>
          <span>Bill Yearly</span>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={clsx(
                'rounded-2xl border p-6 text-left relative bg-white',
                plan.popular && 'border-purple-500 shadow-lg scale-[1.03]'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-purple-500">
                  ${plan.price[billing]}
                </span>
                <span className="ml-2 text-gray-500 text-lg">
                  / {billing === 'monthly' ? 'month' : 'year'}
                </span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-purple-400 text-white py-2 px-4 rounded-xl hover:bg-purple-500 transition">
                Purchase Plan
              </button>
            </div>
          ))}
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
