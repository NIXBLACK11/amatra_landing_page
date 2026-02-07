"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { colors } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="text-2xl font-bold" style={{ color: colors.tint }}>amatra</span>
            </div>
            <p className="text-gray-600 mt-2">Your social fashion companion</p>
          </div>
          
          <div className="flex flex-wrap gap-8 justify-center">
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="text-gray-600 space-y-2">
                <motion.li 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="hover:text-gray-900">About Us</a>
                </motion.li>
                {/* <li><a href="#" className="hover:text-gray-900">Careers</a></li> */}
                <motion.li 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="hover:text-gray-900">Contact</a>
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
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://x.com/_AMATRA_" 
                  className="text-gray-500 hover:text-gray-900"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {currentYear} Amatra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;