"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { PiInstagramLogo, PiXLogo, PiEnvelope, PiDiscordLogo, PiLinkedinLogo, PiTelegramLogo } from 'react-icons/pi';
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
  const { colors } = useTheme();
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId: string) => {
    if (pathname === '/') {
      // If on home page, scroll to section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on other page, navigate to home with anchor
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="w-full pt-10 flex flex-col items-center" style={{ backgroundColor: colors.background, color: colors.text }}>
      <div className="w-full max-w-6xl flex flex-col">
        {/* Logo & Icons */}
        <div className="w-full py-10 max-w-6xl flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
          <div className="flex flex-col items-start gap-4">
            <a href="/" className="cursor-pointer">
              <h2 className="text-2xl font-bold" style={{ color: colors.brand }}>amatra</h2>
            </a>
            <div className="flex gap-4 mt-2">
              <a href="https://x.com/_AMATRA_" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-2xl transition cursor-pointer" style={{ color: colors.text }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.hoverText} onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.text}>
                <PiXLogo />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-2xl transition cursor-pointer" style={{ color: colors.text }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.hoverText} onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.text}>
                <PiTelegramLogo />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-2xl transition cursor-pointer" style={{ color: colors.text }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.hoverText} onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.text}>
                <PiLinkedinLogo />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-2xl transition cursor-pointer" style={{ color: colors.text }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.hoverText} onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.text}>
                <PiDiscordLogo />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col items-start gap-2">
            <span className="text-lg font-semibold mb-2">Menu</span>
            <motion.button
              onClick={() => handleNavClick('features')}
              className="text-left transition cursor-pointer"
              style={{ color: colors.text }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.hoverText}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.text}
            >
              Features
            </motion.button>
            <motion.button
              onClick={() => handleNavClick('reviews')}
              className="text-left transition cursor-pointer"
              style={{ color: colors.text }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.hoverText}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.text}
            >
              Reviews
            </motion.button>
            <motion.button
              onClick={() => handleNavClick('faq')}
              className="text-left transition cursor-pointer"
              style={{ color: colors.text }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.hoverText}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.text}
            >
              FAQ
            </motion.button>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start gap-2">
            <span className="text-lg font-semibold mb-2">Legal</span>
            <motion.a
              href="/legal/privacy-policy"
              className="transition cursor-pointer"
              style={{ color: colors.text }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.hoverText}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.text}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="/legal/terms-of-service"
              className="transition cursor-pointer"
              style={{ color: colors.text }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.hoverText}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.text}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="https://whitepaper.amatra.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition cursor-pointer"
              style={{ color: colors.text }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.hoverText}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.text}
            >
              Whitepaper
            </motion.a>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-start gap-2">
            <span className="text-lg font-semibold mb-2">Socials</span>
            <motion.a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition cursor-pointer"
              style={{ color: colors.text }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.hoverText}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.text}
            >
              Discord
            </motion.a>
            <motion.a
              href="https://x.com/_AMATRA_"
              target="_blank"
              rel="noopener noreferrer"
              className="transition cursor-pointer"
              style={{ color: colors.text }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.hoverText}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.text}
            >
              Twitter
            </motion.a>
            <motion.a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition cursor-pointer"
              style={{ color: colors.text }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.hoverText}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = colors.text}
            >
              Medium
            </motion.a>
          </div>
        </div>

      </div>
      {/* Bottom Big Logo Section - Keeping as is */}
      <div className="py-2 w-full overflow-hidden" style={{ borderColor: colors.text, backgroundColor: colors.brand }}>
        <h1 className="text-[4rem] text-black md:text-[20rem] font-bold text-center [text-shadow:_1px_0_0_currentColor,_-1px_0_0_currentColor,_0_1px_0_currentColor,_0_-1px_0_currentColor] break-words font-montserrat">
          AMATRA
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
