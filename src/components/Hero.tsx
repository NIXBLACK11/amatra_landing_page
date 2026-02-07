"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const { colors } = useTheme();
  
  return (
    <section className="py-10 px-4 md:py-14">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Share Your <span style={{ color: colors.tint }}>AI</span>-Styled Outfits
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Amatra is a social app where you share outfits with links, mix & match with AI, and inspire others to copy your style.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4" 
              onClick={() => {
                
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="px-8 py-4 rounded-lg font-medium text-black text-lg"
                style={{ backgroundColor: colors.tint }}
                onClick={() => window.open('https://x.com/_AMATRA_', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Community
              </motion.button>
              {/* <button className="px-8 py-4 rounded-lg font-medium text-lg border border-gray-300">
                Learn More
              </button> */}
            </motion.div>
            <motion.div 
              className="mt-8 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p>🚀 Launching Soon for Android and IOS</p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="bg-gray-100 rounded-2xl p-6 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md justify-center flex">
              <img src="look.png" alt="Example" className="w-2/3 h-auto object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;