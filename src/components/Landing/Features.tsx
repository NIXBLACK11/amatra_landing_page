"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Updates from '@/components/features/Updates';
import { FeatureCard } from '@/components/features/FeatureCard';

const Features: React.FC = () => {
  const { colors } = useTheme();

  const topFeatures = [
    {
      title: "AI Outfit Composer",
      description: "Select pieces from your wardrobe and let AI compose a realistic full-body outfit image. See exactly how your clothes work together before you wear them.",
      image: "https://picsum.photos/seed/fashion-compose/400/500",
      height: "500px",
      span: false,
      component: undefined,
      backgroundColor: undefined,
      link: "/#features",
    },
    {
      title: "Social Fashion Feed",
      description: "Share your looks as posts, follow creators who inspire you, and explore an infinite feed from your fashion community. Every post links to the real products.",
      image: "https://picsum.photos/seed/fashion-social/800/500",
      height: "500px",
      span: true,
      component: undefined,
      backgroundColor: undefined,
      link: "/#features",
    },
  ];

  const remainingFeatures = [
    {
      title: "Virtual Wardrobe",
      description: "Upload photos of your clothing items and organise them into a personal digital wardrobe. Categories include tops, bottoms, outerwear, headwear, footwear, and model shots — everything in one place.",
      image: "https://picsum.photos/seed/wardrobe-gallery/400/560",
      height: "560px",
      span: false,
      component: undefined,
      backgroundColor: undefined,
      link: undefined,
    },
    {
      title: "Updates",
      description: "Stay tuned for the latest features and releases",
      component: <Updates />,
      height: "420px",
      span: false,
      image: undefined,
      backgroundColor: undefined,
      link: "/updates",
    },
    {
      title: "Copy Any Outfit",
      description: "See a look you love in someone else's post? Copy their entire outfit into your wardrobe with a single tap, then swap pieces and make it your own.",
      image: "https://picsum.photos/seed/copy-outfit/400/500",
      height: "500px",
      span: false,
      component: undefined,
      backgroundColor: undefined,
      link: undefined,
    },
    {
      title: "Shop the Look",
      description: "Every outfit post shows the exact products used. Tap any component — top, bottoms, shoes — to view product details and links. Discover exactly where to shop each piece.",
      image: "https://picsum.photos/seed/shop-fashion/400/460",
      height: "460px",
      span: false,
      component: undefined,
      backgroundColor: undefined,
      link: undefined,
    },
    {
      title: "Go Premium",
      description: "Unlock unlimited AI outfit generations and enjoy a completely ad-free experience. Create as many looks as you want, with priority generation and no limits.",
      image: undefined,
      height: "560px",
      span: false,
      component: undefined,
      backgroundColor: colors.text,
      link: "/#pricing",
    },
    {
      title: "Discover & Connect",
      description: "Search posts by keyword, discover trending looks, and build your fashion network. Follow creators, get notified on likes and comments, and grow your style community.",
      image: "https://picsum.photos/seed/discover-community/400/440",
      height: "440px",
      span: false,
      component: undefined,
      backgroundColor: undefined,
      link: undefined,
    },
  ];

  return (
    <section
      id="features"
      className="relative w-full min-h-screen py-20"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header */}
      <div className="text-center mb-20 px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-black mb-6 font-montserrat"
          style={{ color: colors.text }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          BUILD IT.
          <br />
          WEAR IT.
          <br />
          SHARE IT.
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-geist-mono"
          style={{ color: colors.text, opacity: 0.6 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Every tool you need to create, express, and discover fashion — all in one app.
        </motion.p>
      </div>

      {/* Top two features */}
      <div className="px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {topFeatures.map((feature, index) => (
            <div key={index} className={`${feature.span ? 'md:col-span-2' : ''} mb-3`}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                image={feature.image}
                height={feature.height}
                delay={index * 0.1}
                span={feature.span}
                component={feature.component}
                backgroundColor={feature.backgroundColor}
                link={feature.link}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Remaining features — masonry */}
      <div className="px-4 md:px-8">
        <div className="columns-1 md:columns-3 gap-3 space-y-3">
          {remainingFeatures.map((feature, index) => (
            <div key={index} className="break-inside-avoid mb-3">
              <FeatureCard
                title={feature.title}
                description={feature.description}
                image={feature.image}
                height={feature.height}
                delay={(index + 2) * 0.1}
                span={feature.span}
                component={feature.component}
                backgroundColor={feature.backgroundColor}
                link={feature.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
