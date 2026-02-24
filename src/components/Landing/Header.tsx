"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const Header: React.FC = () => {
  const { colors, theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'posts', href: '/#posts' },
    { name: 'imagine', href: '/#imagine' },
    { name: 'pricing', href: '/#pricing' }
  ];
  
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 shadow-sm transition-all duration-300"
      style={{ 
        backgroundColor: scrolled ? 'transparent' : colors.background,
        backdropFilter: scrolled ? 'blur(25px)' : 'none',
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px'
      }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <div className="flex items-center">
          <img 
            src="brand/main_logo.png" 
            alt="amatra" 
            className="h-12 w-auto"
          />
          <span 
            className="ml-3 text-2xl font-bold hidden lg:block"
            style={{ color: colors.brand }}
          >
            AMATRA
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="transition-colors"
              style={{ color: colors.text }}
              onMouseEnter={(e) => e.currentTarget.style.color = theme === 'light' ? '#3d3b3b' : '#c4c4c0'}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.text}
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        <div>
          <motion.button
            onClick={() => window.open('https://x.com/_AMATRA_', '_blank')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="download/appStore.png" 
              alt="Download on App Store" 
              className="h-10 w-auto cursor-pointer"
            />
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;