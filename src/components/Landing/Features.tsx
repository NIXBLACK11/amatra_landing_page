"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  height: string;
  delay: number;
  span?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image, height, delay, span }) => {
  const { colors } = useTheme();
  
  return (
    <motion.div
      className="relative overflow-hidden shadow-lg backdrop-blur-sm"
      style={{ 
        backgroundColor: colors.background === '#000000' ? '#0a0a0a' : '#ffffff',
        height: height
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="px-2 py-6 h-2/5 flex flex-col justify-center relative z-10">
        <h3 
          className="text-2xl font-black mb-3 font-montserrat"
          style={{ color: colors.text }}
        >
          {title}
        </h3>
        <p 
          className="text-lg leading-relaxed font-dm-sans"
          style={{ color: colors.hoverText }}
        >
          {description}
        </p>
      </div>
      <div className="h-3/5 overflow-hidden relative z-10">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const { colors } = useTheme();

  const features = [
    {
      title: "AI Style Assistant",
      description: "Get personalized outfit recommendations powered by advanced AI that learns your unique fashion preferences.",
      image: "https://picsum.photos/seed/aistyle/400/500",
      height: "500px",
      span: false
    },
    {
      title: "Social Fashion Feed",
      description: "Discover endless inspiration from fashion creators worldwide. Share your looks and build your style community.",
      image: "https://picsum.photos/seed/socialfeed/800/500",
      height: "500px",
      span: true
    }
  ];

  const remainingFeatures = [
    {
      title: "Smart Shopping Links",
      description: "Shop directly from outfit posts. Every look is shoppable with instant access to curated fashion items.",
      image: "https://picsum.photos/seed/shopping/400/700",
      height: "700px",
      span: false
    },
    {
      title: "Virtual Try-On",
      description: "See how outfits look on you before buying. Our AR technology brings online shopping to life.",
      image: "https://picsum.photos/seed/tryon/400/380",
      height: "420px",
      span: false
    },
    {
      title: "Style Analytics",
      description: "Track your fashion influence with detailed analytics. See what works and grow your personal brand.",
      image: "https://picsum.photos/seed/analytics/400/420",
      height: "420px",
      span: false
    },
    {
      title: "Trend Forecasting",
      description: "Stay ahead of the curve with AI-powered trend predictions tailored to your style preferences.",
      image: "https://picsum.photos/seed/trends/400/400",
      height: "400px",
      span: false
    },
    {
      title: "Community Challenges",
      description: "Participate in weekly fashion challenges. Win prizes and gain recognition in the fashion community.",
      image: "https://picsum.photos/seed/challenges/400/360",
      height: "650px",
      span: false
    },
    {
      title: "Personal Stylist",
      description: "Get 1-on-1 styling advice from professional fashion experts who understand your unique taste.",
      image: "https://picsum.photos/seed/stylist/400/480",
      height: "480px",
      span: false
    },
    {
      title: "Sustainable Fashion",
      description: "Discover eco-friendly brands and make sustainable choices without compromising on style.",
      image: "https://picsum.photos/seed/sustainable/400/440",
      height: "440px",
      span: false
    },
    {
      title: "Sustainable Fashion2",
      description: "Discover eco-friendly brands and make sustainable choices without compromising on style.",
      image: "https://picsum.photos/seed/sustainable/400/440",
      height: "440px",
      span: false
    },
    {
      title: "Sustainable Fashion3",
      description: "Discover eco-friendly brands and make sustainable choices without compromising on style.",
      image: "https://picsum.photos/seed/sustainable/400/440",
      height: "600px",
      span: false
    }
  ];

  return (
    <section 
      className="relative w-full min-h-screen py-20"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header Section */}
      <div className="text-center mb-20 px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-black mb-6 font-montserrat"
          style={{ color: colors.text }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          FEATURES THAT
          <br />
          DEFINE STYLE
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-dm-sans"
          style={{ color: colors.text }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience the future of fashion with cutting-edge technology designed to elevate your personal style journey.
        </motion.p>
      </div>

      {/* Featured Section - First Two Features */}
      <div className="px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <div key={index} className={`${feature.span ? 'md:col-span-2' : ''} mb-3`}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                image={feature.image}
                height={feature.height}
                delay={index * 0.1}
                span={feature.span}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Masonry Grid Layout - Remaining Features */}
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
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;