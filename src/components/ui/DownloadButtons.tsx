"use client"

import React from 'react';
import { motion } from 'framer-motion';

interface DownloadButtonsProps {
  size?: 'sm' | 'md';
  animated?: boolean;
}

const DownloadButtons: React.FC<DownloadButtonsProps> = ({ size = 'md', animated = false }) => {
  const btnClass = size === 'sm' ? 'w-36 h-12' : 'w-40 h-14';

  const buttons = (
    <>
      <button
        className={btnClass}
        onClick={() => window.open('https://apps.apple.com', '_blank')}
      >
        <img src="/download/appStore.png" alt="Download on App Store" className="w-full h-full object-contain" />
      </button>
      <button
        className={btnClass}
        onClick={() => window.open('https://play.google.com', '_blank')}
      >
        <img src="/download/googlePlay.png" alt="Get it on Google Play" className="w-full h-full object-contain" />
      </button>
    </>
  );

  if (animated) {
    return (
      <motion.div
        className="flex gap-4 justify-center flex-wrap"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {buttons}
      </motion.div>
    );
  }

  return <div className="flex gap-4 justify-center flex-wrap">{buttons}</div>;
};

export default DownloadButtons;
