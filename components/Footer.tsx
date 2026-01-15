import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-900 font-bold text-lg">Pikscore</div>
        
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-pik-blue transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-pik-blue transition-colors">Terms</a>
          <a href="#" className="hover:text-pik-blue transition-colors">Contact</a>
        </div>
        
        <div className="text-sm text-slate-400">
          © Pikscore 2025
        </div>
      </div>
    </footer>
  );
};