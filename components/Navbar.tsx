import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pik-blue to-pik-green flex items-center justify-center text-white font-bold text-lg">
            P
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Pikscore</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-pik-blue transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-pik-blue transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-pik-blue transition-colors">Pricing</a>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Login
          </button>
          <Button className="py-2.5 px-5 text-sm">Start Free Audit</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#features" className="text-slate-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#how-it-works" className="text-slate-600 font-medium" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#pricing" className="text-slate-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <hr className="border-slate-100" />
              <button className="text-left text-slate-600 font-medium">Login</button>
              <Button className="w-full justify-center">Start Free Audit</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};