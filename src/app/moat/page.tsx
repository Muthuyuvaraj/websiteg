'use client';

import Footer from '@/components/common/FooterSection';
import NavBar from '@/components/common/NavBar';
import { motion } from 'framer-motion';
import {
  Workflow,
  Bot,
  ServerCog,
  Database,
  Scale,
  LayoutDashboard,
} from 'lucide-react';

const moatData = [
  {
    icon: Workflow,
    title: 'Product MOAT',
    description: 'Real work flows. Not just dashboards – Actual logic, recommendations, automation',
  },
  {
    icon: Bot,
    title: 'AI Differentiation',
    description: 'Rules + Suggestions + accuracy scoring',
  },
  {
    icon: ServerCog,
    title: 'Tech Infra MOAT',
    description: 'Multitenancy, subdomain per org, extensible inventory structure',
  },
  {
    icon: Database,
    title: 'Data MOAT',
    description: 'Building unique Lifecycle & Material Intelligence',
  },
  {
    icon: Scale,
    title: 'Regulatory MOAT',
    description: 'Integrating rules per region (PCR, EPR) – First of its kind in Market',
  },
  {
    icon: LayoutDashboard,
    title: 'UX / Product Simplicity',
    description: 'UI Views (Card, Table, Compact, Scenario Planning) — Enterprise grade quality',
  },
];

export default function MoatSection() {
  return (
    <main>
      <NavBar />
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
          
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {moatData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 border border-purple-300 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex justify-center mb-4">
                <item.icon className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-secondary text-sm text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
