import React from 'react';
import { Button } from './Button';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
           <p className="text-slate-500">Start optimizing your listings today.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg relative"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
            <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-slate-900">$0</span>
                <span className="text-slate-500">/month</span>
            </div>
            
            <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-600">
                    <Check size={18} className="text-slate-400" /> 1 Free Audit
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                    <Check size={18} className="text-slate-400" /> Basic Compliance Check
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                    <Check size={18} className="text-slate-400" /> 7-Day History
                </li>
            </ul>

            <Button variant="outline" className="w-full justify-center">Start Free</Button>
          </motion.div>

          {/* Pro Tier */}
          <motion.div 
             whileHover={{ y: -10 }}
             className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl shadow-slate-900/20 relative text-white"
          >
             <div className="absolute top-0 right-0 bg-pik-blue text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                 POPULAR
             </div>
             
            <h3 className="text-xl font-bold mb-2">Professional</h3>
            <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold">$39</span>
                <span className="text-slate-400">/month</span>
            </div>
            <p className="text-xs text-slate-400 mb-6">Billed annually at $468 / year</p>
            
            <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                    <div className="bg-pik-blue rounded-full p-0.5"><Check size={12} className="text-white" /></div> 10 Audits / month
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                    <div className="bg-pik-blue rounded-full p-0.5"><Check size={12} className="text-white" /></div> Competitor Benchmarking
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                    <div className="bg-pik-blue rounded-full p-0.5"><Check size={12} className="text-white" /></div> 30-Day History
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                    <div className="bg-pik-blue rounded-full p-0.5"><Check size={12} className="text-white" /></div> Priority Support
                </li>
            </ul>

            <Button className="w-full justify-center bg-white text-slate-900 hover:bg-slate-100 hover:shadow-none shadow-none">Upgrade to Pro</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};