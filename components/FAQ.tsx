import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const questions = [
  {
    q: "Which marketplaces do you support?",
    a: "Currently, Pikscore supports Amazon US, UK, DE, and CA. We are expanding to other marketplaces soon."
  },
  {
    q: "Do you generate images?",
    a: "No, Pikscore is an audit and analytics tool. We tell you exactly what's wrong with your existing images and how to fix them, but we do not generate new assets."
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. We do not store your original assets permanently and we only use read-access to analyze public ASIN data."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-slate-900">{item.q}</span>
                <motion.div 
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus size={20} className="text-slate-400" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-500 leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};