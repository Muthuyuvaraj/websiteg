'use client';

import React from 'react';
import NavBar from '@/components/common/NavBar';
import Footer from '@/components/common/FooterSection';

const plans = {
  reportMonitoring: [
    {
      title: 'Tier A ',
      price: '$49/mo',
      features: ['reporting ' ,' monitoring of 5 Products'],

    },
    {
      title: 'Tier B: ',
      price: '$99/mo',
      features: ['reporting ', 'monitoring of 30 Products'],
      highlighted: true,
    },
  ],
  fullService: [
    {
      title: 'Tier AA: ',
      price: '$149/mo',
      features: ['reporting ', 'monitoring of 5 Products', 'full report of project'],
    },
    {
      title: 'Tier MM: ',
      price: '$249/mo',
      features:['reporting ', 'monitoring of 40 Products', 'full report ' ,'2 specialized reports ', 'groupings of up to 10 products '],
      highlighted: true,
    },
    {
      title: 'Tier ZZ',
      price: 'Contact Us',
      features: 
      ['reporting ',
        'monitoring of entire catalogue', 
        'full general report ', 
        'unlimited specific reports upon request '],
    },
  ],
};

export default function PricingPage() {
  return (
    <main
      className="min-h-screen bg-cover"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <NavBar />

      <div className="min-h-screen bg-purple-200/50 text-gray-800 px-6 py-16">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Section 1: Report & Monitoring */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              Report & Monitoring
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {plans.reportMonitoring.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-xl border p-8 shadow-sm transition-transform transform hover:scale-[1.02] ${
                    plan.highlighted
                      ? 'bg-white border-black shadow-lg'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                  <p className="text-3xl font-bold text-black mb-4">
                    {plan.price}
                  </p>
                  <ul className="space-y-2 text-sm mb-6">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2 px-4 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition">
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Full Service */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">Full Service</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.fullService.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-xl border p-8 shadow-sm transition-transform transform hover:scale-[1.02] ${
                    plan.highlighted
                      ? 'bg-black text-white shadow-xl border-black'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                  <p
                    className={`text-3xl font-bold mb-4 ${
                      plan.highlighted ? 'text-white' : 'text-black'
                    }`}
                  >
                    {plan.price}
                  </p>
                  <ul
                    className={`space-y-2 text-sm mb-6 ${
                      plan.highlighted ? 'text-gray-200' : 'text-gray-700'
                    }`}
                  >
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start">
                        <span
                          className={`mr-2 ${
                            plan.highlighted ? 'text-green-400' : 'text-green-600'
                          }`}
                        >
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-2 px-4 rounded-lg font-semibold transition ${
                      plan.highlighted
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    {plan.price === 'Contact Us' ? 'Get a Quote' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
