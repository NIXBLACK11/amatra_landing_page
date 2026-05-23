"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const AppScreenshots: React.FC = () => {
  const { colors } = useTheme();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.75, delay },
  });

  return (
    <section
      className="relative w-full py-24 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Section header */}
      <div className="text-center mb-16 px-4">
        <motion.p
          className="font-geist-mono text-xs uppercase tracking-[0.2em] mb-4"
          style={{ color: colors.brand }}
          {...fadeUp(0)}
        >
          App Preview
        </motion.p>
        <motion.h2
          className="text-5xl md:text-7xl font-black font-montserrat leading-none"
          style={{ color: colors.text }}
          {...fadeUp(0.1)}
        >
          EXPLORE
          <br />
          <span style={{ color: colors.brand }}>THE APP.</span>
        </motion.h2>
        <motion.p
          className="mt-6 text-base md:text-lg max-w-xl mx-auto font-geist-mono leading-relaxed"
          style={{ color: colors.text, opacity: 0.55 }}
          {...fadeUp(0.2)}
        >
          From wardrobe to outfit to community — everything in one place.
        </motion.p>
      </div>

      {/* Bento grid */}
      <div className="px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-3">

        {/* Row 1: large dark social feed (2 cols) + outfit builder (1 col) */}
        <motion.div
          className="md:col-span-2 rounded-2xl overflow-hidden"
          style={{ backgroundColor: '#0e0e0e', height: '460px' }}
          {...fadeUp(0)}
        >
          <img
            src="/screenshots/717shots_so.png"
            alt="Social fashion feed"
            className="w-full h-full object-cover"
            style={{ transform: 'scale(1.18)', transformOrigin: 'center center' }}
          />
        </motion.div>

        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: `${colors.text}07`, height: '460px' }}
          {...fadeUp(0.1)}
        >
          <img
            src="/screenshots/494shots_so.png"
            alt="Outfit creation flow"
            className="w-full h-full object-cover"
            style={{ transform: 'scale(1.22)', transformOrigin: 'center center' }}
          />
        </motion.div>

        {/* Row 2: onboarding (1 col) + wardrobe (2 cols) */}
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: `${colors.text}07`, height: '400px' }}
          {...fadeUp(0.15)}
        >
          <img
            src="/screenshots/851shots_so.png"
            alt="App onboarding screens"
            className="w-full h-full object-cover"
            style={{ transform: 'scale(1.22)', transformOrigin: 'center center' }}
          />
        </motion.div>

        <motion.div
          className="md:col-span-2 rounded-2xl overflow-hidden"
          style={{ backgroundColor: `${colors.text}07`, height: '400px' }}
          {...fadeUp(0.2)}
        >
          <img
            src="/screenshots/744shots_so.png"
            alt="Virtual wardrobe and product details"
            className="w-full h-full object-cover"
            style={{ transform: 'scale(1.18)', transformOrigin: 'center center' }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AppScreenshots;
