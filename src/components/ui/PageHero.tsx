"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface PageHeroProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  maxWidth?: string;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({
  label,
  title,
  subtitle,
  maxWidth = 'max-w-5xl',
  children,
}) => {
  const { colors } = useTheme();

  return (
    <>
      <section className={`pt-32 pb-20 px-6 ${maxWidth} mx-auto`}>
        <motion.p
          className="font-geist-mono text-sm uppercase tracking-widest mb-6"
          style={{ color: colors.text, opacity: 0.4 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {label}
        </motion.p>
        <motion.h1
          className="text-5xl md:text-8xl font-black font-montserrat leading-none mb-8"
          style={{ color: colors.text }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="text-xl font-geist-mono max-w-2xl leading-relaxed"
            style={{ color: colors.text, opacity: 0.6 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </section>
      <div
        className={`w-full h-px ${maxWidth} mx-auto`}
        style={{ backgroundColor: `${colors.text}12` }}
      />
    </>
  );
};

export default PageHero;
