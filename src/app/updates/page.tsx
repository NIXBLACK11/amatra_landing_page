"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface UpdateItem {
  date: string;
  title: string;
  description: string;
  status: 'launched' | 'coming-soon';
  version?: string;
}

const Updates: React.FC = () => {
  const { colors } = useTheme();

  const updates: UpdateItem[] = [
    {
      date: "2024-03-30",
      title: "Fashion Feed + Virtual Try On",
      description: "Discover endless inspiration from fashion creators worldwide. Share your looks and build your style community with AR-powered virtual try-on technology.",
      status: "coming-soon",
      version: "v1.1"
    },
    {
      date: "2024-04-15",
      title: "Better Feed",
      description: "Enhanced social fashion feed with improved algorithms, better content discovery, and seamless integration with your personal style preferences.",
      status: "coming-soon",
      version: "v1.2"
    },
    {
      date: "2024-04-30",
      title: "Messaging",
      description: "Connect with fashion creators and friends through our integrated messaging system. Share style tips, collaborate on looks, and build your fashion network.",
      status: "coming-soon",
      version: "v1.3"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

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
          UPDATES &
          <br />
          RELEASES
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-dm-sans"
          style={{ color: colors.text }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Stay updated with the latest features and improvements we're rolling out to enhance your fashion experience.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="px-4 md:px-8 max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: colors.text }}
          />
          
          {updates.map((update, index) => (
            <motion.div
              key={index}
              className="relative flex items-start mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Content Card */}
              <motion.div
                className="relative overflow-hidden shadow-lg backdrop-blur-sm rounded-lg min-w-full"
                style={{ 
                  backgroundColor: colors.background === '#000000' ? '#0a0a0a' : '#ffffff',
                  height: 'auto',
                  border: `1px solid ${colors.text}20`
                }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />
                <div className="px-6 py-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 
                      className="text-xl font-black font-montserrat"
                      style={{ color: colors.text }}
                    >
                      {update.title}
                    </h3>
                    <motion.span
                      className={`px-3 py-1 rounded-full text-xs font-semibold font-dm-sans ${
                        update.status === 'launched' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-yellow-500 text-white'
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      {update.status === 'launched' ? 'LAUNCHED' : 'COMING SOON'}
                    </motion.span>
                  </div>
                  
                  {/* Date and Version */}
                  <div className="flex items-center justify-between mb-3">
                    <motion.div
                      className="text-sm font-semibold font-dm-sans"
                      style={{ color: colors.text }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {formatDate(update.date)}
                    </motion.div>
                    {update.version && (
                      <motion.span
                        className="text-xs font-semibold font-dm-sans"
                        style={{ color: colors.text }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      >
                        {update.version}
                      </motion.span>
                    )}
                  </div>
                  
                  <p 
                    className="text-base leading-relaxed font-dm-sans"
                    style={{ color: colors.text }}
                  >
                    {update.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Updates;
