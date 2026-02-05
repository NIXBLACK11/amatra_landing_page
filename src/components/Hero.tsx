"use client"

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const { colors } = useTheme();
  
  return (
    <section className="py-10 px-4 md:py-14">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Share Your <span style={{ color: colors.tint }}>AI</span>-Styled Outfits
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Amatra is a social app where you share outfits with links, mix & match with AI, and inspire others to copy your style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" onClick={() => {
                
            }}>
              <button 
                className="px-8 py-4 rounded-lg font-medium text-black text-lg"
                style={{ backgroundColor: colors.tint }}
                onClick={() => window.open('https://x.com/_AMATRA_', '_blank')}
              >
                Join Community
              </button>
              {/* <button className="px-8 py-4 rounded-lg font-medium text-lg border border-gray-300">
                Learn More
              </button> */}
            </div>
            <div className="mt-8 text-gray-600">
              <p>🚀 Launching Soon for Android and IOS</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-100 rounded-2xl p-6 shadow-lg">
              <div className="bg-white rounded-xl overflow-hidden shadow-md justify-center flex">
              <img src="look.png" alt="Example" className="w-2/3 h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;