import React from 'react';
import { motion } from 'framer-motion';
import { Search, BrainCircuit, FileText } from 'lucide-react';

const steps = [
  {
    icon: <Search size={24} className="text-pik-blue" />,
    title: "1. Input ASIN",
    desc: "Paste any Amazon ASIN and select your marketplace. No login required for quick checks."
  },
  {
    icon: <BrainCircuit size={24} className="text-pik-green" />,
    title: "2. AI Analysis",
    desc: "Our fine-tuned LLM audits your Main, Lifestyle, and Feature images against category best practices."
  },
  {
    icon: <FileText size={24} className="text-purple-500" />,
    title: "3. Get Actionable Report",
    desc: "Receive a structured audit report with scores, gaps, and precise fixes to improve ranking."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Pikscore Works</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Get from ASIN to actionable insights in under 30 seconds.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};