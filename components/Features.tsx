import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, BarChart3, ScanEye, ShieldCheck, AlertCircle } from 'lucide-react';

const FeatureBlock: React.FC<{
  title: string;
  subtitle: string;
  description: string;
  align: 'left' | 'right';
  children: React.ReactNode;
  icon: React.ReactNode;
  gradientColor: string;
}> = ({ title, subtitle, description, align, children, icon, gradientColor }) => {
  return (
    <div className={`flex flex-col ${align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 mb-32`}>
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: align === 'left' ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 text-slate-700">
            {icon}
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className={`text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r ${gradientColor} mb-6`}>{subtitle}</p>
        <p className="text-slate-500 text-lg leading-relaxed">{description}</p>
      </motion.div>

      {/* Visual Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1 relative w-full"
      >
         <div className={`absolute inset-0 bg-gradient-to-r ${gradientColor} opacity-10 blur-3xl rounded-full transform scale-75`}></div>
        {children}
      </motion.div>
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Feature A: Compliance */}
        <FeatureBlock
          align="left"
          title="Stay Compliant, Avoid Suppression"
          subtitle="Real-time Policy Check"
          description="Pikscore automatically flags background inconsistencies, dimension errors, and Amazon prohibited content risks before you upload."
          icon={<CheckCircle size={24} />}
          gradientColor="from-green-400 to-emerald-600"
        >
          <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-6 max-w-md mx-auto">
             <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                     <ShieldCheck className="text-green-600" size={24} />
                 </div>
                 <div>
                     <h4 className="font-bold text-slate-900 text-lg">Amazon Compliance Status</h4>
                     <p className="text-xs text-slate-400">Main Image Analysis</p>
                 </div>
                 <div className="ml-auto text-2xl font-bold text-slate-900">8.0<span className="text-sm text-slate-300">/10</span></div>
             </div>
             
             <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                 Meets all Amazon image requirements including background, dimensions, and content guidelines.
             </p>

             <div className="space-y-3">
                 <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle size={16} className="text-green-500" />
                    <span className="text-sm font-medium text-slate-700">Pure White Background</span>
                 </div>
                 <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle size={16} className="text-green-500" />
                    <span className="text-sm font-medium text-slate-700">Dimensions &gt; 1000px</span>
                 </div>
             </div>
          </div>
        </FeatureBlock>

        {/* Feature B: Benchmarking */}
        <FeatureBlock
          align="right"
          title="Beat Your Category Average"
          subtitle="Competitor Benchmarking"
          description="Don't guess. See exactly how your visual content stacks up against the top 10 best-sellers in your specific niche."
          icon={<BarChart3 size={24} />}
          gradientColor="from-blue-400 to-indigo-600"
        >
          <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-8 max-w-md mx-auto">
              <h4 className="font-bold text-slate-900 mb-6">Category Benchmarks</h4>
              
              <div className="space-y-6">
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-slate-600">Your Score</span>
                        <span className="font-bold text-slate-900">78/100</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "78%" }}
                            transition={{ duration: 1 }}
                            className="h-full bg-pik-blue rounded-full"
                        />
                    </div>
                </div>
                 <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-slate-600">Category Average</span>
                        <span className="font-bold text-slate-900">72/100</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                         <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "72%" }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-slate-500 rounded-full"
                        />
                    </div>
                </div>
                 <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-slate-600">Top Performers</span>
                        <span className="font-bold text-green-500">94/100</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "94%" }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="h-full bg-green-500 rounded-full"
                        />
                    </div>
                </div>
            </div>
          </div>
        </FeatureBlock>

        {/* Feature C: Detailed Scoring */}
        <FeatureBlock
          align="left"
          title="Granular Image Insights"
          subtitle="Deep Learning Analysis"
          description="We break down your image quality into key conversion drivers: Visual Clarity, Value Proposition, and Emotional Impact."
          icon={<ScanEye size={24} />}
          gradientColor="from-purple-400 to-pink-600"
        >
          <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-6 max-w-md mx-auto">
             <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                     <ScanEye className="text-yellow-600" size={24} />
                 </div>
                 <div>
                     <h4 className="font-bold text-slate-900 text-lg">Visual Clarity Score</h4>
                     <p className="text-xs text-slate-400">Detail & Contrast</p>
                 </div>
                 <div className="ml-auto text-2xl font-bold text-slate-900">6.0<span className="text-sm text-slate-300">/10</span></div>
             </div>
             
             <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                 Image lacks sufficient contrast and detail visibility. Product edges blend with background reducing thumbnail clarity.
             </p>

             <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                 <div className="flex items-center gap-2 mb-2">
                     <AlertCircle size={16} className="text-red-500" />
                     <span className="font-bold text-red-700 text-sm">Conversion Blocker</span>
                 </div>
                 <p className="text-xs text-red-600">Low contrast reduces mobile visibility by 40%</p>
             </div>
          </div>
        </FeatureBlock>

      </div>
    </section>
  );
};