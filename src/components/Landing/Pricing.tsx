"use client"

import React from 'react';
import { PiCheck, PiX } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const Pricing: React.FC = () => {
  const { colors, theme } = useTheme();

  return (
    <section 
      id="pricing"
      className="relative w-full py-20 flex flex-col items-center justify-center"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <motion.h2 
          className="text-5xl md:text-7xl font-black mb-6 font-montserrat"
          style={{ color: colors.text }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          SIMPLE PRICING
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl max-w-2xl mx-auto font-dm-sans"
          style={{ color: colors.text }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Start for free, upgrade for the full experience.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-4">
        
        {/* Free Plan */}
        <motion.div
          className="rounded-3xl p-8 md:p-12 relative flex flex-col h-full border"
          style={{ 
            borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            backgroundColor: theme === 'dark' ? '#0a0a0a' : '#f5f5f5'
          }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold font-montserrat mb-2" style={{ color: colors.text }}>Explorer</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black font-montserrat" style={{ color: colors.text }}>$0</span>
              <span className="text-lg font-dm-sans opacity-60" style={{ color: colors.text }}>/month</span>
            </div>
          </div>
          
          <div className="flex-grow space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <PiCheck className="text-xl shrink-0" style={{ color: colors.text }} />
              <span className="font-dm-sans" style={{ color: colors.text }}>Browse global styles</span>
            </div>
            <div className="flex items-center gap-3">
              <PiCheck className="text-xl shrink-0" style={{ color: colors.text }} />
              <span className="font-dm-sans" style={{ color: colors.text }}>Like and save items</span>
            </div>
            <div className="flex items-center gap-3 opacity-50">
              <PiX className="text-xl shrink-0" style={{ color: colors.text }} />
              <span className="font-dm-sans" style={{ color: colors.text }}>Create custom outfits</span>
            </div>
            <div className="flex items-center gap-3 opacity-50">
              <PiX className="text-xl shrink-0" style={{ color: colors.text }} />
              <span className="font-dm-sans" style={{ color: colors.text }}>Copy/Clone styles</span>
            </div>
          </div>

          <button 
            className="w-full py-4 rounded-xl font-bold font-dm-sans transition-all duration-300 pointer-events-none opacity-50"
            style={{ 
              border: `1px solid ${colors.text}`,
              color: colors.text
            }}
          >
            Current Plan
          </button>
        </motion.div>

        {/* Premium Plan */}
        <motion.div
          className="rounded-3xl p-8 md:p-12 relative flex flex-col h-full overflow-hidden"
          style={{ backgroundColor: colors.text }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Gradient-like effect for brand feel */}
          <div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none"
            style={{ backgroundColor: colors.brand }}
          />

          <div className="relative z-10 mb-8">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold font-montserrat mb-2" style={{ color: colors.background }}>Pro Creator</h3>
              <span 
                className="px-3 py-1 rounded-full text-xs font-bold font-montserrat tracking-wide"
                style={{ backgroundColor: colors.brand, color: '#000000' }}
              >
                POPULAR
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black font-montserrat" style={{ color: colors.background }}>$12</span>
              <span className="text-lg font-dm-sans opacity-60" style={{ color: colors.background }}>/month</span>
            </div>
          </div>
          
          <div className="flex-grow space-y-4 mb-8 relative z-10">
            <div className="flex items-center gap-3">
              <PiCheck className="text-xl shrink-0" style={{ color: colors.brand }} />
              <span className="font-dm-sans font-medium" style={{ color: colors.background }}>All Explorer features</span>
            </div>
            <div className="flex items-center gap-3">
              <PiCheck className="text-xl shrink-0" style={{ color: colors.brand }} />
              <span className="font-dm-sans font-medium" style={{ color: colors.background }}>Create unlimited outfits</span>
            </div>
            <div className="flex items-center gap-3">
              <PiCheck className="text-xl shrink-0" style={{ color: colors.brand }} />
              <span className="font-dm-sans font-medium" style={{ color: colors.background }}>Clone & Remix any style</span>
            </div>
            <div className="flex items-center gap-3">
              <PiCheck className="text-xl shrink-0" style={{ color: colors.brand }} />
              <span className="font-dm-sans font-medium" style={{ color: colors.background }}>Advanced AI recommendations</span>
            </div>
          </div>

          <motion.button 
            className="relative z-10 w-full py-4 rounded-xl font-bold font-dm-sans transition-all duration-300"
            style={{ 
              backgroundColor: colors.brand,
              color: '#000000'
            }}
            whileHover={{ scale: 1.02, backgroundColor: colors.hoverBrand }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;