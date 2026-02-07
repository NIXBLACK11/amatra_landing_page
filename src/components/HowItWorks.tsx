"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  const { colors } = useTheme();
  
  return (
    <motion.div 
      className="flex items-start"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 font-bold"
        style={{ backgroundColor: colors.tint, color: 'black' }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {number}
      </motion.div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">How Amatra Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building your social fashion presence has never been easier. Here's how Amatra helps you share your style with the world.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Step 
              number={1} 
              title="Add Clothes You Love" 
              description="Upload items from your wardrobe or add pieces you're eyeing. Build your personal fashion collection with product links."
            />
            <Step 
              number={2} 
              title="Mix & Match with AI" 
              description="Our AI helps you create amazing outfit combinations from your collection. Discover new ways to wear what you already own."
            />
            <Step 
              number={3} 
              title="Share Your Outfits" 
              description="Post your favorite looks with product links. Let others copy your style and earn from your referral links."
            />
            <Step 
              number={4} 
              title="Get Social & Inspired" 
              description="Follow other fashion lovers, like their outfits, and get inspired. Build your community of style enthusiasts."
            />
            <Step 
              number={5} 
              title="Become a Style Influencer" 
              description="Grow your following as people love and copy your outfits. Track your fashion influence and earnings from referrals."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;