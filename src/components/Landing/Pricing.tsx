"use client"

import React from 'react';
import { PiCheck, PiX, PiStar } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const Pricing: React.FC = () => {
    const { colors } = useTheme();

    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "/forever",
            description: "Get a taste of Amatra. Browse, like, and explore the style community.",
            accent: null,
            textColor: colors.text,
            bgColor: 'transparent',
            badge: null,
            features: [
                { included: true, text: "1 AI try-on per month" },
                { included: true, text: "Browse global styles" },
                { included: true, text: "Like & save outfits" },
                { included: true, text: "Follow creators" },
                { included: false, text: "Copy & remix outfits" },
                { included: false, text: "Priority support" },
                { included: false, text: "Early access to new features" },
            ],
            cta: "Get Started Free",
            ctaStyle: "outline",
            delay: 0.3,
        },
        {
            name: "Stylist",
            price: "$4.99",
            period: "/month",
            description: "For everyday outfit lovers. Build, compose, and share looks that are truly yours.",
            accent: colors.brand,
            textColor: '#000000',
            bgColor: colors.brand,
            badge: { icon: true, label: "POPULAR" },
            features: [
                { included: true, text: "50 AI try-ons per month" },
                { included: true, text: "Browse global styles" },
                { included: true, text: "Like & save outfits" },
                { included: true, text: "Follow creators" },
                { included: true, text: "Copy & remix outfits" },
                { included: false, text: "Priority support" },
                { included: false, text: "Early access to new features" },
            ],
            cta: "Start Styling",
            ctaStyle: "filled",
            delay: 0.4,
        },
        {
            name: "Pro",
            price: "$11.99",
            period: "/month",
            description: "For serious style creators. The full experience with no compromises.",
            accent: null,
            textColor: colors.text,
            bgColor: 'transparent',
            badge: { icon: false, label: "BEST VALUE" },
            features: [
                { included: true, text: "120 AI try-ons per month" },
                { included: true, text: "Browse global styles" },
                { included: true, text: "Like & save outfits" },
                { included: true, text: "Follow creators" },
                { included: true, text: "Copy & remix outfits" },
                { included: true, text: "Priority support" },
                { included: true, text: "Early access to new features" },
            ],
            cta: "Go Pro",
            ctaStyle: "outline",
            delay: 0.5,
        },
    ];

    return (
        <section
            id="pricing"
            className="relative w-full min-h-screen py-20 flex flex-col items-center justify-center"
            style={{ backgroundColor: colors.background }}
        >
            {/* Noise overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Header */}
            <div className="text-center mb-16 px-4 relative z-10">
                <motion.h2
                    className="text-5xl md:text-7xl font-black mb-6 font-montserrat leading-none"
                    style={{ color: colors.text }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    CHOOSE YOUR
                    <br />
                    STYLE PATH
                </motion.h2>
                <motion.p
                    className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-geist-mono"
                    style={{ color: colors.hoverText }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Start exploring for free. Unlock the full creative experience when you're ready.
                </motion.p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl w-full px-4 md:px-8 relative z-10">
                {plans.map((plan, i) => (
                    <motion.div
                        key={plan.name}
                        className="relative overflow-hidden shadow-lg backdrop-blur-sm flex flex-col"
                        style={{
                            backgroundColor: plan.bgColor === 'transparent' ? undefined : plan.bgColor,
                            border: plan.bgColor === 'transparent' ? `1px solid ${colors.text}20` : 'none',
                        }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: plan.delay }}
                    >
                        {/* Card noise */}
                        <div
                            className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                            }}
                        />

                        {/* Badge */}
                        {plan.badge && (
                            <div
                                className="absolute top-5 right-5 z-20 flex items-center gap-1 px-3 py-1 rounded-full"
                                style={{
                                    backgroundColor: plan.bgColor !== 'transparent' ? '#000' : colors.text,
                                }}
                            >
                                {plan.badge.icon && (
                                    <PiStar
                                        className="text-xs"
                                        style={{ color: plan.bgColor !== 'transparent' ? colors.brand : colors.background }}
                                    />
                                )}
                                <span
                                    className="text-[10px] font-bold font-montserrat tracking-widest"
                                    style={{ color: plan.bgColor !== 'transparent' ? colors.brand : colors.background }}
                                >
                                    {plan.badge.label}
                                </span>
                            </div>
                        )}

                        <div className="relative z-10 p-8 md:p-9 flex flex-col flex-1">
                            {/* Plan header */}
                            <div className="mb-7">
                                <h3
                                    className="text-sm font-black font-montserrat tracking-widest mb-5 opacity-60"
                                    style={{ color: plan.textColor }}
                                >
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline gap-1 mb-3">
                                    <span
                                        className="text-5xl font-black font-montserrat"
                                        style={{ color: plan.textColor }}
                                    >
                                        {plan.price}
                                    </span>
                                    <span
                                        className="text-base font-geist-mono ml-1"
                                        style={{ color: plan.textColor, opacity: 0.6 }}
                                    >
                                        {plan.period}
                                    </span>
                                </div>
                                <p
                                    className="text-sm font-geist-mono leading-relaxed"
                                    style={{ color: plan.textColor, opacity: 0.7 }}
                                >
                                    {plan.description}
                                </p>
                            </div>

                            {/* Divider */}
                            <div
                                className="w-full h-px mb-7"
                                style={{ backgroundColor: plan.textColor, opacity: 0.12 }}
                            />

                            {/* Features */}
                            <div className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex items-center gap-3 ${!feature.included ? 'opacity-35' : ''}`}
                                    >
                                        {feature.included ? (
                                            <PiCheck
                                                className="text-base shrink-0"
                                                style={{ color: plan.textColor }}
                                            />
                                        ) : (
                                            <PiX
                                                className="text-base shrink-0"
                                                style={{ color: plan.textColor }}
                                            />
                                        )}
                                        <span
                                            className="text-sm font-geist-mono"
                                            style={{ color: plan.textColor }}
                                        >
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            {plan.ctaStyle === 'outline' ? (
                                <motion.button
                                    className="w-full py-4 text-sm font-bold font-geist-mono transition-all duration-300"
                                    style={{
                                        border: `1px solid ${plan.textColor}`,
                                        color: plan.textColor,
                                        backgroundColor: 'transparent',
                                    }}
                                    whileHover={{
                                        backgroundColor: plan.textColor,
                                        color: colors.background,
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {plan.cta}
                                </motion.button>
                            ) : (
                                <motion.button
                                    className="w-full py-4 text-sm font-bold font-geist-mono transition-all duration-300"
                                    style={{
                                        backgroundColor: '#000000',
                                        color: colors.brand,
                                        border: 'none',
                                    }}
                                    whileHover={{ scale: 1.02, opacity: 0.88 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {plan.cta}
                                </motion.button>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Try-on comparison callout */}
            <motion.div
                className="mt-10 max-w-6xl w-full px-4 md:px-8 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div
                    className="grid grid-cols-3 text-center py-4 px-6 gap-2"
                    style={{ border: `1px solid ${colors.text}12`, backgroundColor: `${colors.text}05` }}
                >
                    {[
                        { label: "1 try-on", sub: "Free" },
                        { label: "50 try-ons", sub: "Stylist" },
                        { label: "120 try-ons", sub: "Pro" },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                            <span
                                className="text-lg font-black font-montserrat"
                                style={{ color: colors.text }}
                            >
                                {item.label}
                            </span>
                            <span
                                className="text-xs font-geist-mono opacity-50"
                                style={{ color: colors.text }}
                            >
                                {item.sub}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Bottom note */}
            <motion.p
                className="mt-8 text-xs font-geist-mono text-center max-w-xl px-4 relative z-10"
                style={{ color: colors.hoverText, opacity: 0.6 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                Cancel anytime. No hidden fees. All prices in USD. Try-ons reset monthly.
            </motion.p>
        </section>
    );
};

export default Pricing;
