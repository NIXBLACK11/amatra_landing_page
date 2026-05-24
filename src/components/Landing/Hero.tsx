"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import PostCard from '@/components/App/PostCard';
import { heroPosts } from '@/data/posts';

const Hero: React.FC = () => {
  const { colors } = useTheme();

  return (
    <section id="hero" className="relative flex flex-col-reverse lg:flex-row w-full min-h-screen">

      {/* LEFT — sticky brand panel */}
      <div className="w-full lg:w-[58%] order-2 lg:order-1">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden" style={{ backgroundColor: colors.background }}>

          {/* Dot grid background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, ${colors.text}0a 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />
          {/* Radial fade over grid — keeps center clean */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 80% 80% at 35% 50%, ${colors.background}f0 30%, transparent 80%)`,
            }}
          />

          <div className="relative z-10 px-8 lg:px-16 xl:px-20 w-full max-w-2xl">

            {/* Eyebrow */}
            <motion.div
              className="inline-flex items-center gap-2.5 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: colors.brand }}
              />
              <span
                className="font-geist-mono text-xs uppercase tracking-[0.18em]"
                style={{ color: colors.text }}
              >
                Fashion AI · iOS & Android
              </span>
            </motion.div>

            {/* Headline — Montserrat + Cormorant mix */}
            <div className="mb-8 leading-none">
              <motion.span
                className="block font-montserrat font-black text-[clamp(3.5rem,8vw,8.5rem)] tracking-tight"
                style={{ color: colors.text }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.15 }}
              >
                IMAGINE
              </motion.span>

              <motion.span
                className="block font-cormorant-garamond italic font-light text-[clamp(3.8rem,8.8vw,9.5rem)] tracking-normal"
                style={{ color: colors.text }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.28 }}
              >
                your
              </motion.span>

              <motion.span
                className="block font-montserrat font-black text-[clamp(3.5rem,8vw,8.5rem)] tracking-tight"
                style={{ color: colors.text }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.41 }}
              >
                STYLE
                <span style={{ color: colors.brand }}>.</span>
              </motion.span>
            </div>

            {/* Thin accent line */}
            <motion.div
              className="h-px mb-6 origin-left"
              style={{ backgroundColor: `${colors.text}18`, width: 48 }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            />

            {/* Subtitle */}
            <motion.p
              className="text-[15px] mb-8 font-geist-mono max-w-xs leading-[1.75]"
              style={{ color: colors.text, opacity: 0.52 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 0.52, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Build virtual outfits from your real wardrobe, compose AI looks, and share them with a community of fashion lovers.
            </motion.p>

            {/* Download buttons */}
            <motion.div
              className="flex gap-3 flex-wrap mb-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72 }}
            >
              <motion.button
                className="w-[148px] h-[50px]"
                onClick={() => window.open('https://apps.apple.com', '_blank')}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                <img src="/download/appStore.png" alt="App Store" className="w-full h-full object-contain" />
              </motion.button>
              <motion.button
                className="w-[148px] h-[50px]"
                onClick={() => window.open('https://play.google.com', '_blank')}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                <img src="/download/googlePlay.png" alt="Google Play" className="w-full h-full object-contain" />
              </motion.button>
            </motion.div>


          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-8 lg:left-16 xl:left-20 flex items-center gap-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <div className="relative w-px h-9 overflow-hidden rounded-full" style={{ backgroundColor: `${colors.text}15` }}>
              <motion.div
                className="absolute top-0 left-0 w-full rounded-full"
                style={{ height: '40%', backgroundColor: `${colors.text}40` }}
                animate={{ y: ['0%', '160%', '0%'] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <span
              className="font-geist-mono text-[10px] uppercase tracking-[0.2em]"
              style={{ color: colors.text, opacity: 0.22 }}
            >
              scroll
            </span>
          </motion.div>

        </div>
      </div>

      {/* RIGHT — scrollable posts feed */}
      <div
        className="relative w-full lg:w-[42%] order-1 lg:order-2"
        style={{ borderLeft: `1px solid ${colors.text}0a` }}
      >
        <div className="pt-20 pb-10 space-y-0">
          {heroPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 * index }}
            >
              <PostCard {...post} />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
