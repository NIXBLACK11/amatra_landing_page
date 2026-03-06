"use client"

import React from 'react';
import { PiCheck, PiX, PiStar } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const Pricing: React.FC = () => {
  const { colors } = useTheme();

  const freePlanFeatures = [
    { included: true, text: "Browse global styles" },
    { included: true, text: "Like and save outfits" },
    { included: true, text: "Basic style recommendations" },
    { included: false, text: "Create custom outfits" },
    { included: false, text: "Copy & Clone styles" },
    { included: false, text: "AI style assistant" },
  ];

  const proPlanFeatures = [
    { included: true, text: "Everything in Explorer" },
    { included: true, text: "Create unlimited outfits" },
    { included: true, text: "Clone & Remix any style" },
    { included: true, text: "Advanced AI recommendations" },
    { included: true, text: "Priority support" },
    { included: true, text: "Early access to features" },
  ];

  return (
    <section 
      id="pricing"
      className="relative w-full min-h-screen py-20 flex flex-col items-center justify-center"
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
          CHOOSE YOUR
          <br />
          STYLE PATH
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-dm-sans"
          style={{ color: colors.text }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Start exploring for free. Unlock the full creative experience when you're ready.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl w-full px-4 md:px-8">
        
        {/* Free Plan */}
        <motion.div
          className="relative overflow-hidden shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Noise Background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          
          <div className="relative z-10 p-8 md:p-10">
            {/* Plan Header */}
            <div className="mb-8">
              <h3 
                className="text-xl font-black font-montserrat mb-4"
                style={{ color: colors.text }}
              >
                EXPLORER
              </h3>
              <div className="flex items-baseline gap-2">
                <span 
                  className="text-6xl font-black font-montserrat"
                  style={{ color: colors.text }}
                >
                  $0
                </span>
                <span 
                  className="text-lg font-dm-sans"
                  style={{ color: colors.hoverText }}
                >
                  /forever
                </span>
              </div>
              <p 
                className="mt-4 text-base font-dm-sans"
                style={{ color: colors.hoverText }}
              >
                Perfect for discovering new styles and getting inspired.
              </p>
            </div>
            
            {/* Features List */}
            <div className="space-y-4 mb-10">
              {freePlanFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 ${!feature.included ? 'opacity-40' : ''}`}
                >
                  {feature.included ? (
                    <PiCheck 
                      className="text-xl shrink-0" 
                      style={{ color: colors.text }} 
                    />
                  ) : (
                    <PiX 
                      className="text-xl shrink-0" 
                      style={{ color: colors.text }} 
                    />
                  )}
                  <span 
                    className="font-dm-sans"
                    style={{ color: colors.text }}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button 
              className="w-full py-4 font-bold font-dm-sans transition-all duration-300"
              style={{ 
                border: `1px solid ${colors.text}`,
                color: colors.text,
                backgroundColor: 'transparent'
              }}
              whileHover={{ 
                backgroundColor: colors.text,
                color: colors.background 
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Free
            </motion.button>
          </div>
        </motion.div>

        {/* Pro Plan */}
        <motion.div
          className="relative overflow-hidden shadow-lg backdrop-blur-sm"
          style={{ backgroundColor: colors.brand }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Popular Badge */}
          <div className="absolute top-6 right-6 z-20 flex items-center gap-1 px-3 py-1 bg-black rounded-full">
            <PiStar className="text-sm" style={{ color: colors.brand }} />
            <span 
              className="text-xs font-bold font-montserrat tracking-wide"
              style={{ color: colors.brand }}
            >
              POPULAR
            </span>
          </div>

          <div className="relative z-10 p-8 md:p-10">
            {/* Plan Header */}
            <div className="mb-8">
              <h3 
                className="text-xl font-black font-montserrat mb-4"
                style={{ color: '#000000' }}
              >
                PRO CREATOR
              </h3>
              <div className="flex items-baseline gap-2">
                <span 
                  className="text-6xl font-black font-montserrat"
                  style={{ color: '#000000' }}
                >
                  $5
                </span>
                <span 
                  className="text-lg font-dm-sans opacity-70"
                  style={{ color: '#000000' }}
                >
                  /month
                </span>
              </div>
              <p 
                className="mt-4 text-base font-dm-sans opacity-80"
                style={{ color: '#000000' }}
              >
                Unlock your full creative potential with AI-powered styling.
              </p>
            </div>
            
            {/* Features List */}
            <div className="space-y-4 mb-10">
              {proPlanFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3"
                >
                  <PiCheck 
                    className="text-xl shrink-0" 
                    style={{ color: '#000000' }} 
                  />
                  <span 
                    className="font-dm-sans font-medium"
                    style={{ color: '#000000' }}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button 
              className="w-full py-4 font-bold font-dm-sans transition-all duration-300"
              style={{ 
                backgroundColor: '#000000',
                color: colors.brand
              }}
              whileHover={{ 
                scale: 1.02,
                opacity: 0.9
              }}
              whileTap={{ scale: 0.98 }}
            >
              Upgrade to Pro
            </motion.button>
          </div>
        </motion.div>

      </div>

      {/* Bottom Note */}
      <motion.p 
        className="mt-12 text-sm font-dm-sans text-center max-w-xl px-4"
        style={{ color: colors.hoverText }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Cancel anytime. No hidden fees. All prices in USD.
      </motion.p>
    </section>
  );
};

export default Pricing;