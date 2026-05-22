"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import PageLayout from '@/components/ui/PageLayout';
import PageHero from '@/components/ui/PageHero';
import DownloadButtons from '@/components/ui/DownloadButtons';
import { steps, values } from '@/data/about';

export default function AboutPage() {
  const { colors } = useTheme();

  return (
    <PageLayout>
      <PageHero
        label="About Amatra"
        title={<>WHERE YOUR<br />WARDROBE<br />COMES ALIVE.</>}
        subtitle="Amatra is a fashion-focused social app where you build virtual outfits from your real wardrobe, generate AI-composed looks, and share them with a community of people who genuinely love what they wear."
      />

      {/* Mission */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <motion.p
          className="font-geist-mono text-sm uppercase tracking-widest mb-6"
          style={{ color: colors.text, opacity: 0.4 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Mission
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl font-black font-montserrat mb-8"
          style={{ color: colors.text }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Think of it as Instagram,<br />
          but built entirely for<br />
          outfit creation and styling.
        </motion.h2>
        <motion.p
          className="text-lg font-geist-mono max-w-xl leading-relaxed"
          style={{ color: colors.text, opacity: 0.6 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We built Amatra because getting dressed is one of the most personal things people do — and no app was built specifically to help you do it better, together.
        </motion.p>
      </section>

      <div className="w-full h-px max-w-5xl mx-auto" style={{ backgroundColor: `${colors.text}12` }} />

      {/* How it works */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <motion.p
          className="font-geist-mono text-sm uppercase tracking-widest mb-14"
          style={{ color: colors.text, opacity: 0.4 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          How it works
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <p
                className="font-montserrat font-black text-5xl mb-5 leading-none"
                style={{ color: colors.text, opacity: 0.12 }}
              >
                {step.number}
              </p>
              <h3 className="font-montserrat font-black text-xl mb-3" style={{ color: colors.text }}>
                {step.title}
              </h3>
              <p className="font-geist-mono text-sm leading-relaxed" style={{ color: colors.text, opacity: 0.6 }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="w-full h-px max-w-5xl mx-auto" style={{ backgroundColor: `${colors.text}12` }} />

      {/* Values */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <motion.p
          className="font-geist-mono text-sm uppercase tracking-widest mb-14"
          style={{ color: colors.text, opacity: 0.4 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          What we believe
        </motion.p>

        <div className="space-y-10">
          {values.map((value, i) => (
            <motion.div
              key={i}
              className="flex flex-col md:flex-row gap-4 md:gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3
                className="font-montserrat font-black text-xl md:w-64 flex-shrink-0"
                style={{ color: colors.text }}
              >
                {value.title}
              </h3>
              <p
                className="font-geist-mono text-sm leading-relaxed max-w-xl"
                style={{ color: colors.text, opacity: 0.6 }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-black font-montserrat mb-8"
          style={{ color: colors.text }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Ready to start styling?
        </motion.h2>
        <DownloadButtons animated />
      </section>
    </PageLayout>
  );
}
