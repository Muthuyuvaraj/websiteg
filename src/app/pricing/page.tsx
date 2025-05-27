'use client'

import Footer from '@/components/common/FooterSection'
import NavBar from '@/components/common/NavBar'
import { Check } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Standard',
    tagline: 'For startups and small teams',
    features: [
      '1 AI Agent (choose one)',
      'Supply Chain Insights',
      'Data & Compliance Tools',
      'Basic Platform Access',
    ],
    cta: 'Contact Us',
    border: 'border-purple-300',
  },
  {
    name: 'Premium',
    tagline: 'Growing teams with advanced needs',
    features: [
      'Multiple AI Agents',
      'Full Compliance Suite',
      'Advanced Data Reporting',
      'Enterprise Platform +',
    ],
    cta: 'Contact Us',
    border: 'border-purple-500',
  },
  {
    name: 'Enterprise',
    tagline: 'Custom solutions for large orgs',
    features: [
      'Custom AI Agents',
      'KPI Customization',
      'Document Intelligence',
      'Platform ++ & Recommendations',
    ],
    cta: 'Contact Us',
    border: 'border-purple-700',
  },
]

export default function PricingSection() {
  return (
    <section>
      <NavBar />

      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-purple-500 mb-4">Choose Your Plan</h2>
          <p className="text-lg text-gray-600">
            Flexible AI-powered packaging solutions for every stage of your business.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border ${plan.border} bg-white shadow-xl hover:shadow-2xl transition duration-300 flex flex-col justify-between`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-purple-500 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{plan.tagline}</p>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-gray-700">
                      <Check className="text-purple-500 w-5 h-5 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0">
                <Link
                  href="/company/contact"
                  className="block w-full bg-purple-500 text-white text-center font-medium py-2.5 rounded-xl hover:bg-purple-600 transition"
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </section>
  )
}
