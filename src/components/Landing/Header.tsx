"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { PiSun, PiMoon, PiArrowUpRight } from 'react-icons/pi';

const Header: React.FC = () => {
    const { colors, theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const lastScrollY = React.useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrolled(currentY > 20);
            if (currentY > lastScrollY.current && currentY > window.innerHeight * 0.3) {
                setHidden(true);
            } else if (currentY < lastScrollY.current) {
                setHidden(false);
            }
            lastScrollY.current = currentY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Features', href: '/#features' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'About', href: '/about' },
    ];

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50"
            animate={{ y: hidden ? -90 : 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
            style={{
                backgroundColor: scrolled
                    ? theme === 'light' ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)'
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
                borderBottom: `1px solid ${scrolled ? `${colors.text}0e` : 'transparent'}`,
                transition: 'background-color 0.4s, border-color 0.4s, backdrop-filter 0.4s',
            }}
        >
            <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between gap-4">

                {/* Logo */}
                <motion.a
                    href="/"
                    className="flex items-center flex-shrink-0"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src="/brand/main_logo.png" alt="amatra" className="h-8 w-auto" />
                </motion.a>

                {/* Desktop nav — centered floating pill */}
                <motion.nav
                    className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div
                        className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-full"
                        style={{
                            backgroundColor: `${colors.text}06`,
                            border: `1px solid ${colors.text}14`,
                            boxShadow: `0 1px 3px ${colors.text}08`,
                        }}
                    >
                        {navItems.map((item) => {
                            const isActive = activeItem === item.name;
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-4 py-1.5 rounded-full font-montserrat text-[13px] font-medium transition-all duration-200"
                                    style={{
                                        color: isActive ? colors.background : colors.text,
                                        backgroundColor: isActive ? colors.text : 'transparent',
                                        opacity: activeItem && !isActive ? 0.38 : 1,
                                        letterSpacing: '0.01em',
                                    }}
                                    onMouseEnter={() => setActiveItem(item.name)}
                                    onMouseLeave={() => setActiveItem(null)}
                                >
                                    {item.name}
                                </a>
                            );
                        })}
                    </div>
                </motion.nav>

                {/* Right actions */}
                <motion.div
                    className="flex items-center gap-2 flex-shrink-0"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    {/* Theme toggle */}
                    <motion.button
                        onClick={toggleTheme}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                        style={{
                            backgroundColor: `${colors.text}08`,
                            border: `1px solid ${colors.text}12`,
                            color: colors.text,
                        }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        aria-label="Toggle theme"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={theme}
                                initial={{ opacity: 0, rotate: -60, scale: 0.7 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: 60, scale: 0.7 }}
                                transition={{ duration: 0.2 }}
                            >
                                {theme === 'light' ? <PiMoon size={15} /> : <PiSun size={15} />}
                            </motion.span>
                        </AnimatePresence>
                    </motion.button>

                    {/* Download CTA */}
                    <motion.button
                        onClick={() => window.open('https://apps.apple.com', '_blank')}
                        className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full font-montserrat text-[13px] font-semibold transition-opacity hover:opacity-80"
                        style={{
                            backgroundColor: colors.text,
                            color: colors.background,
                            letterSpacing: '0.02em',
                        }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Get the app
                        <PiArrowUpRight size={13} />
                    </motion.button>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
                        onClick={() => setMobileOpen(v => !v)}
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            className="block h-px rounded-full"
                            style={{ backgroundColor: colors.text, width: mobileOpen ? 20 : 18 }}
                            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.22 }}
                        />
                        <motion.span
                            className="block w-5 h-px rounded-full"
                            style={{ backgroundColor: colors.text }}
                            animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.15 }}
                        />
                        <motion.span
                            className="block h-px rounded-full"
                            style={{ backgroundColor: colors.text, width: mobileOpen ? 20 : 14 }}
                            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.22 }}
                        />
                    </button>
                </motion.div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        style={{
                            borderTop: `1px solid ${colors.text}0e`,
                            backgroundColor: theme === 'light' ? 'rgba(255,255,255,0.97)' : 'rgba(0,0,0,0.97)',
                            backdropFilter: 'blur(24px)',
                        }}
                        className="overflow-hidden md:hidden"
                    >
                        <nav className="px-6 pt-4 pb-2 flex flex-col">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    className="py-3.5 font-montserrat font-medium text-sm border-b"
                                    style={{
                                        color: colors.text,
                                        borderColor: `${colors.text}08`,
                                        letterSpacing: '0.01em',
                                    }}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </nav>
                        <div className="px-6 py-5">
                            <button
                                className="w-full py-3 rounded-full font-montserrat text-sm font-semibold flex items-center justify-center gap-2"
                                style={{ backgroundColor: colors.text, color: colors.background }}
                                onClick={() => window.open('https://apps.apple.com', '_blank')}
                            >
                                Get the app
                                <PiArrowUpRight size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
