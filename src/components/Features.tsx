"use client"

import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => {
  const { colors } = useTheme();
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div 
        className="w-12 h-12 flex items-center justify-center rounded-full mb-4"
        style={{ backgroundColor: `${colors.tint}20` }}
      >
        <span className="text-2xl" style={{ color: colors.tint }}>{icon}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Amatra</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make Amatra the perfect companion for your fashion journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon="👕" 
            title="AI-Powered Styling" 
            description="Our advanced AI analyzes your preferences to create personalized outfit recommendations from Amazon products."
          />
          <FeatureCard 
            icon="💰" 
            title="Budget-Friendly" 
            description="Set your budget and let Amatra find the perfect pieces that won't break the bank."
          />
          <FeatureCard 
            icon="🔄" 
            title="Mix & Match" 
            description="Create countless outfit combinations from your existing and new wardrobe items."
          />
          <FeatureCard 
            icon="📱" 
            title="Easy Shopping" 
            description="Purchase recommended items directly through Amazon with just a few taps."
          />
          <FeatureCard 
            icon="📊" 
            title="Wardrobe Analytics" 
            description="Get insights about your wardrobe usage and recommendations for new additions."
          />
          <FeatureCard 
            icon="🌟" 
            title="Seasonal Updates" 
            description="Stay on trend with seasonal recommendations tailored to your style and preferences."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;