"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const Updates: React.FC = () => {
  const { colors } = useTheme();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      {/* Updates Icon */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: colors.text }}
        >
          <path
            d="M40 10L50 20L40 30L30 20L40 10Z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M40 50L50 60L40 70L30 60L40 50Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M20 30L30 40L20 50L10 40L20 30Z"
            fill="currentColor"
            opacity="0.7"
          />
          <path
            d="M60 30L70 40L60 50L50 40L60 30Z"
            fill="currentColor"
            opacity="0.7"
          />
          <circle cx="40" cy="40" r="3" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Updates Text */}
      <motion.h3
        className="text-3xl font-black font-montserrat mb-4"
        style={{ color: colors.text }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        UPDATES
      </motion.h3>

      {/* Subtitle */}
      <motion.p
        className="text-center text-base font-dm-sans"
        style={{ color: colors.text }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Stay tuned for the latest features and releases
      </motion.p>

      {/* Animated Dots */}
      <div className="flex gap-2 mt-6">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: colors.text }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.4, 
              delay: 0.4 + index * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Updates;
