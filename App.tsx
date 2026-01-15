import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-pik-blue/20">
      <Navbar />
      
      <main>
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <Features />
        <Stats />
        <Pricing />
        <FAQ />
        
        {/* Final CTA Section */}
        <section className="py-32 relative overflow-hidden">
           {/* Ambient glow for Final CTA */}
           <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-pik-blue/5"></div>
           
           <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Ready to dominate your category?</h2>
               <div className="flex justify-center">
                 <Button className="px-10 py-4 text-lg shadow-xl shadow-pik-blue/30">Start Your Free Audit Now</Button>
               </div>
             </motion.div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;