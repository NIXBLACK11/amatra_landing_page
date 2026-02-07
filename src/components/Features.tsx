"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => {
  const { colors } = useTheme();
  
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
    >
      <motion.div 
        className="w-12 h-12 flex items-center justify-center rounded-full mb-4"
        style={{ backgroundColor: `${colors.tint}20` }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-2xl" style={{ color: colors.tint }}>{icon}</span>
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Fashion Lovers Choose Amatra</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make Amatra the ultimate social platform for fashion enthusiasts.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FeatureCard 
            icon="👗" 
            title="Share Outfit Looks" 
            description="Post your favorite outfits with product links. Share your style and earn from referrals when others copy your look."
          />
          <FeatureCard 
            icon="🤖" 
            title="AI Mix & Match" 
            description="Add clothes you love and let our AI help you create endless outfit combinations you never thought possible."
          />
          <FeatureCard 
            icon="💕" 
            title="Social Fashion Community" 
            description="Connect with fashion lovers, get inspired by others' outfits, and build your following as a style influencer."
          />
          <FeatureCard 
            icon="🛍️" 
            title="Shop Linked Items" 
            description="Discover and buy items directly from outfit posts. Support your favorite creators while building your wardrobe."
          />
          <FeatureCard 
            icon="📈" 
            title="Style Analytics" 
            description="Track which outfits get the most love, see what's trending, and understand your fashion influence."
          />
          <FeatureCard 
            icon="🌟" 
            title="Seasonal Updates" 
            description="Stay on trend with seasonal recommendations tailored to your style and preferences."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Features;