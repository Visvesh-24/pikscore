import React from 'react';
import { Button } from './Button';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Zap, Layout, Image as ImageIcon } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pik-blue/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pik-green/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-pik-green animate-pulse"></span>
            New: Competitor Benchmarking
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Boost Your Amazon Conversion Rates with <span className="text-transparent bg-clip-text bg-gradient-to-r from-pik-blue to-pik-green">AI Audits</span>
          </h1>
          
          <p className="text-lg text-slate-500 leading-relaxed mb-8">
            Instantly evaluate your product images against Amazon’s top-selling standards. Get a data-driven score and actionable insights to fix conversion blockers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button className="group">
              Analyze My First Listing
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" className="group">
              See a Sample Report
            </Button>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Trusted by Amazon Sellers</p>
            <div className="flex gap-6 opacity-40 grayscale">
              {/* Simple generic logo shapes for "Trusted By" */}
              <div className="h-6 w-20 bg-slate-800 rounded"></div>
              <div className="h-6 w-20 bg-slate-800 rounded"></div>
              <div className="h-6 w-20 bg-slate-800 rounded"></div>
              <div className="h-6 w-20 bg-slate-800 rounded"></div>
            </div>
          </div>
        </motion.div>

        {/* Right Visuals (Floating Dashboard Mockup) */}
        <div className="relative h-[650px] w-full hidden lg:block perspective-1000">
          
          {/* Main Dashboard UI Card */}
          <motion.div 
            initial={{ opacity: 0, rotateX: 10, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
            className="absolute top-10 left-10 right-0 bottom-10 bg-white rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden z-10 flex flex-col"
          >
            {/* Header Mockup */}
            <div className="h-16 border-b border-slate-100 flex items-center px-6 justify-between bg-white">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-400">
                        <ImageIcon size={16} />
                    </div>
                    <div>
                        <div className="h-3 w-48 bg-slate-900 rounded-full mb-1"></div>
                        <div className="h-2 w-24 bg-slate-200 rounded-full"></div>
                    </div>
                </div>
                <div className="h-8 w-24 bg-pik-blue text-white rounded-lg text-xs font-bold flex items-center justify-center">Start New Audit</div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar (Images List) */}
                <div className="w-48 border-r border-slate-100 bg-slate-50/50 p-4 space-y-3">
                    {[
                        { label: 'Main Image', score: '9.2', color: 'text-green-500' },
                        { label: 'Lifestyle', score: '8.1', color: 'text-pik-blue' },
                        { label: 'Feature', score: '7.5', color: 'text-yellow-500' },
                        { label: 'Detail', score: '7.0', color: 'text-orange-500' },
                    ].map((item, i) => (
                        <div key={i} className={`p-3 rounded-xl border ${i === 0 ? 'bg-white border-pik-blue/30 shadow-sm' : 'bg-white/50 border-transparent hover:bg-white'} transition-colors flex items-center justify-between`}>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center">
                                    <ImageIcon size={14} className="text-slate-400" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-medium text-slate-500">{item.label}</div>
                                </div>
                            </div>
                            <span className={`text-sm font-bold ${item.color}`}>{item.score}</span>
                        </div>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-6 bg-slate-50/30">
                    {/* Score Cards Row */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <div className="text-3xl font-bold text-slate-900 mb-1">78</div>
                            <div className="text-[10px] text-slate-500 font-medium">Overall Audit Score</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <div className="text-3xl font-bold text-pik-blue mb-1">7.2</div>
                            <div className="text-[10px] text-slate-500 font-medium">Avg Image Score</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                             <div className="text-3xl font-bold text-red-500 mb-1">3</div>
                             <div className="text-[10px] text-slate-500 font-medium">Critical Issues</div>
                        </div>
                    </div>

                    {/* Image Detail Area */}
                    <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm h-full relative overflow-hidden">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-slate-900">Main Image Details</h3>
                            <span className="text-xl font-bold text-green-500">9.2 <span className="text-sm text-slate-300 font-normal">/10</span></span>
                        </div>
                        <div className="w-full aspect-video bg-slate-100 rounded-lg flex items-center justify-center mb-6 relative overflow-hidden group">
                             <ImageIcon size={48} className="text-slate-300" />
                             <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">COMPLIANT</div>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Floating Benchmark Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -right-4 top-32 w-72 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 z-20 animate-float"
          >
            <h4 className="font-bold text-slate-900 mb-4 text-sm">Category Benchmarks</h4>
            
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-slate-600">Your Score</span>
                        <span className="font-bold text-slate-900">78/100</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-pik-blue w-[78%] rounded-full"></div>
                    </div>
                </div>
                 <div>
                    <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-slate-600">Category Avg</span>
                        <span className="font-bold text-slate-900">72/100</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-400 w-[72%] rounded-full"></div>
                    </div>
                </div>
                 <div>
                    <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-slate-600">Top Performers</span>
                        <span className="font-bold text-green-500">94/100</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[94%] rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg flex gap-3 items-start">
                <div className="bg-white p-1 rounded-full shadow-sm mt-0.5">
                    <Trophy size={12} className="text-pik-blue" />
                </div>
                <p className="text-[10px] text-blue-700 leading-snug">
                    You're performing above average! Focus on lower-scoring images to reach top performer level.
                </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};