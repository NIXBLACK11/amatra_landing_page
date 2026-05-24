"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { PiInstagramLogo } from 'react-icons/pi';
import { MdOutlineEmail } from "react-icons/md";

const FooterLink: React.FC<{
  href: string;
  children: React.ReactNode;
  external?: boolean;
}> = ({ href, children, external }) => {
  const { colors } = useTheme();
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="block font-geist-mono text-sm transition-colors duration-150"
      style={{ color: colors.text, opacity: 0.65 }}
      whileHover={{ x: 4, opacity: 1 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.a>
  );
};

const Footer: React.FC = () => {
  const { colors } = useTheme();

  return (
    <footer className="w-full pt-14 flex flex-col items-center" style={{ backgroundColor: colors.background, color: colors.text }}>
      <div className="w-full max-w-6xl px-6 flex flex-col">
        {/* Top section */}
        <div className="w-full pb-12 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">

          {/* Brand */}
          <div className="flex flex-col items-start gap-5">
            <a href="/">
              <img src="/brand/main_logo.png" alt="amatra" className="h-9 w-auto" />
            </a>
            <p className="font-geist-mono text-sm max-w-[200px] leading-relaxed" style={{ color: colors.text, opacity: 0.5 }}>
              Fashion-forward social app for outfit creators.
            </p>
            <div className="flex gap-4">
              {[
                { href: 'https://www.instagram.com/amatrafashion/', icon: <PiInstagramLogo />, label: 'Instagram' },
                { href: 'mailto:admin@amatra.co', icon: <MdOutlineEmail />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="text-xl transition-opacity duration-150"
                  style={{ color: colors.text, opacity: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  transition={{ duration: 0.15 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-bold font-montserrat tracking-widest uppercase mb-1" style={{ color: colors.text, opacity: 0.35 }}>
              Pages
            </span>
            <FooterLink href="/#features">Features</FooterLink>
            <FooterLink href="/#pricing">Pricing</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
          </div>

          {/* More */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-bold font-montserrat tracking-widest uppercase mb-1" style={{ color: colors.text, opacity: 0.35 }}>
              More
            </span>
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-bold font-montserrat tracking-widest uppercase mb-1" style={{ color: colors.text, opacity: 0.35 }}>
              Connect
            </span>
            <FooterLink href="https://www.instagram.com/amatrafashion/" external>Instagram</FooterLink>
            <FooterLink href="mailto:admin@amatra.co">Email</FooterLink>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-6" style={{ backgroundColor: `${colors.text}12` }} />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pb-8">
          <p className="font-geist-mono text-xs" style={{ color: colors.text, opacity: 0.35 }}>
            © {new Date().getFullYear()} Amatra. All rights reserved.
          </p>
          <p className="font-geist-mono text-xs" style={{ color: colors.text, opacity: 0.35 }}>
            Made with passion for fashion.
          </p>
        </div>
      </div>

      {/* Big brand wordmark */}
      <div className="py-2 w-full overflow-hidden" style={{ backgroundColor: colors.brand }}>
        <h1 className="text-[4rem] text-black md:text-[20rem] font-bold text-center break-words font-montserrat leading-none tracking-tight">
          AMATRA
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
