"use client"

import { useTheme } from '@/context/ThemeContext';
import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, position }) => {
  const { colors } = useTheme();
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div 
        className="text-4xl mb-4" 
        style={{ color: colors.tint }}
      >
        "
      </div>
      <p className="text-gray-700 mb-6">{quote}</p>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-gray-500 text-sm">{position}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Beta Users Are Saying</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Early access users are already loving their Amatra experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Amatra has completely transformed how I shop for clothes. The AI recommendations are spot-on, and I've saved so much time and money!"
            name="Sarah J."
            position="Beta User"
          />
          <TestimonialCard 
            quote="As someone who hates shopping, this app is a game-changer. I can build a great wardrobe without endless browsing and decision fatigue."
            name="Michael T."
            position="Early Adopter"
          />
          <TestimonialCard 
            quote="The outfit combinations Amatra suggests from my existing wardrobe are incredible. I'm wearing clothes I forgot I owned!"
            name="Jessica L."
            position="Fashion Enthusiast"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;