"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { colors } = useTheme();
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold" style={{ color: colors.tint }}>amatra</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <motion.a 
            href="#features" 
            className="text-gray-700 hover:text-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Features
          </motion.a>
          <motion.a 
            href="#how-it-works" 
            className="text-gray-700 hover:text-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            How It Works
          </motion.a>
          {/* <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a> */}
        </nav>
        
        <div>
          <motion.button 
            className="px-4 py-2 rounded font-medium text-black"
            style={{ backgroundColor: colors.tint }}
            onClick={() => window.open('https://x.com/_AMATRA_', '_blank')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join us
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;