"use client"

import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  const { colors } = useTheme();
  
  return (
    <div className="flex items-start">
      <div 
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 font-bold"
        style={{ backgroundColor: colors.tint, color: 'black' }}
      >
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How Amatra Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building your dream wardrobe has never been easier. Here's how Amatra helps you look your best.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <Step 
              number={1} 
              title="Create Your Profile" 
              description="Tell us about your style preferences, sizes, and budget. The more we know, the better we can help you create your ideal wardrobe."
            />
            <Step 
              number={2} 
              title="AI Analyzes Your Style" 
              description="Our advanced AI processes your preferences and identifies the perfect pieces from Amazon's vast catalog."
            />
            <Step 
              number={3} 
              title="Browse Curated Outfits" 
              description="Explore AI-generated outfit recommendations tailored to your style and budget."
            />
            <Step 
              number={4} 
              title="Build Your Wardrobe" 
              description="Purchase items directly through Amazon and add them to your virtual wardrobe in Amatra."
            />
            <Step 
              number={5} 
              title="Get Ongoing Recommendations" 
              description="Receive new outfit ideas and wardrobe additions based on your existing pieces and evolving style."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;