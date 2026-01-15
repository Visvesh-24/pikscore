import React from 'react';
import { motion } from 'framer-motion';

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-8 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-12 text-slate-400 font-medium text-sm">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
            <span className="uppercase tracking-widest">Works with Amazon</span>
        </motion.div>
        <div className="w-1 h-1 rounded-full bg-slate-300"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2"
        >
            <span className="uppercase tracking-widest">Powered by Rainforest API</span>
        </motion.div>
      </div>
    </section>
  );
};