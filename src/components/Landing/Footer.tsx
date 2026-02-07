"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { PiXLogo } from 'react-icons/pi';

const Footer: React.FC = () => {
  const { colors } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t" style={{ backgroundColor: colors.background, borderColor: colors.text }}>
      <div className="py-8 text-center" style={{ backgroundColor: colors.lightBackground }}>
        <h1 className="text-9xl md:text-9xl font-bold" style={{ color: colors.brand }}>AMATRA</h1>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-12">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="text-2xl font-bold" style={{ color: colors.brand }}>amatra</span>
            </div>
            <p className="mt-2" style={{ color: colors.text }}>Your social fashion companion</p>
          </div>
          
          <div className="flex flex-wrap gap-8 justify-center">
            <div>
              <h4 className="font-semibold mb-3" style={{ color: colors.text }}>Company</h4>
              <ul className="space-y-2" style={{ color: colors.text }}>
                <motion.li 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" style={{ color: colors.text }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.hoverText} onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.text}>About Us</a>
                </motion.li>
                {/* <li><a href="#" className="hover:text-gray-900">Careers</a></li> */}
                <motion.li 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" style={{ color: colors.text }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.hoverText} onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.text}>Contact</a>
                </motion.li>
              </ul>
            </div>
            {/* <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
              </ul>
            </div> */}
            <div>
              <h4 className="font-semibold mb-3" style={{ color: colors.text }}>Follow Us</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://x.com/_AMATRA_" 
                  style={{ color: colors.text }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.hoverText}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.text}
                >
                  <span className="sr-only">Twitter</span>
                  <PiXLogo className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t" style={{ borderColor: colors.text }}>
          <p className="text-center" style={{ color: colors.text }}>
            © {currentYear} Amatra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;