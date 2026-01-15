import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick 
}) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-pik-blue to-pik-blue/80 text-white shadow-lg shadow-pik-blue/25 hover:shadow-pik-blue/40 hover:-translate-y-0.5",
    secondary: "bg-white text-slate-700 hover:text-pik-blue transition-colors",
    outline: "border border-slate-200 text-slate-700 hover:border-pik-blue hover:text-pik-blue bg-transparent"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};