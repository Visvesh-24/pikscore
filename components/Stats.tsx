import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Zap } from 'lucide-react';

const StatCard: React.FC<{
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
  colorClass: string;
}> = ({ icon, value, label, delay, colorClass }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -5 }}
    className="bg-white/60 backdrop-blur-md border border-white/50 shadow-xl shadow-slate-200/40 p-6 rounded-3xl flex flex-col items-center text-center relative overflow-hidden group"
  >
    <div className={`absolute top-0 left-0 w-full h-1 ${colorClass} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
    <div className={`mb-4 p-3 rounded-2xl ${colorClass.replace('bg-', 'bg-').replace('500', '50')} ${colorClass.replace('bg-', 'text-')}`}>
      {icon}
    </div>
    <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2 tracking-tight">{value}</h3>
    <p className="text-slate-500 font-medium">{label}</p>
  </motion.div>
);

export const Stats: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-slate-50/50 -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-sm font-bold text-pik-blue uppercase tracking-widest mb-2">Proven Results</h2>
            <h3 className="text-3xl font-bold text-slate-900">Data-driven Optimization</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          <StatCard 
            icon={<BarChart3 size={24} />}
            value="10,000+"
            label="Listings Analyzed"
            delay={0}
            colorClass="bg-indigo-500"
          />
          <StatCard 
            icon={<TrendingUp size={24} />}
            value="20%"
            label="Avg. Click-Through Uplift"
            delay={0.1}
            colorClass="bg-pik-blue"
          />
           <StatCard 
            icon={<Zap size={24} />}
            value="30s"
            label="Average Audit Time"
            delay={0.2}
            colorClass="bg-pik-green"
          />
        </div>
      </div>
    </section>
  );
};