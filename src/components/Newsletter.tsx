"use client"

import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Newsletter: React.FC = () => {
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setEmail('');
  };
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div 
          className="rounded-2xl py-12 px-6 md:px-12"
          style={{ backgroundColor: `${colors.tint}10` }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Join the Fashion Revolution</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be the first to experience the future of social fashion. Get early access and exclusive fashion insights.
            </p>
          </div>
          
          {isSubmitted ? (
            <div className="text-center p-4 bg-green-50 rounded-lg max-w-md mx-auto">
              <p className="text-green-600">Thanks for joining! We'll notify you when Amatra launches.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {/* <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                /> */}
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg font-medium text-black whitespace-nowrap"
                  style={{ backgroundColor: colors.tint }}
                  onClick={() => window.open('https://x.com/_AMATRA_', '_blank')}
                >
                  Join Community
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;