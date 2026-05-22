"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import PageLayout from '@/components/ui/PageLayout';
import PageHero from '@/components/ui/PageHero';
import DownloadButtons from '@/components/ui/DownloadButtons';
import { whitepaperSections } from '@/data/whitepaper';

export default function WhitepaperPage() {
  const { colors } = useTheme();

  return (
    <PageLayout>
      <PageHero
        label="Amatra Whitepaper — v1.0"
        title={<>THE FUTURE<br />OF FASHION<br />IS SOCIAL.</>}
        subtitle="An overview of Amatra's vision, technology, and roadmap for building the world's most personal fashion platform."
      >
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 font-geist-mono text-sm font-bold"
            style={{
              border: `1px solid ${colors.text}30`,
              color: colors.text,
              opacity: 0.5,
            }}
          >
            PDF Download — Coming Soon
          </div>
        </motion.div>
      </PageHero>

      {/* Content sections */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-0">
        {whitepaperSections.map((section, i) => (
          <React.Fragment key={i}>
            <motion.div
              className="py-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <p
                className="font-geist-mono text-xs uppercase tracking-widest mb-4"
                style={{ color: colors.text, opacity: 0.35 }}
              >
                {section.tag}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <h2
                  className="font-montserrat font-black text-2xl md:text-3xl leading-tight"
                  style={{ color: colors.text }}
                >
                  {section.title}
                </h2>
                <p
                  className="font-geist-mono text-base leading-relaxed"
                  style={{ color: colors.text, opacity: 0.6 }}
                >
                  {section.body}
                </p>
              </div>
            </motion.div>
            {i < whitepaperSections.length - 1 && (
              <div className="w-full h-px" style={{ backgroundColor: `${colors.text}08` }} />
            )}
          </React.Fragment>
        ))}
      </section>

      {/* Sign-off */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div
          className="p-10 text-center"
          style={{ border: `1px solid ${colors.text}12`, backgroundColor: `${colors.text}04` }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="font-montserrat font-black text-2xl md:text-3xl mb-4"
            style={{ color: colors.text }}
          >
            The full whitepaper is coming soon.
          </p>
          <p
            className="font-geist-mono text-sm mb-8 max-w-md mx-auto leading-relaxed"
            style={{ color: colors.text, opacity: 0.55 }}
          >
            We're finishing the detailed version including technical architecture, market research, and token economics. Sign up to be notified when it's ready.
          </p>
          <DownloadButtons size="sm" animated />
        </motion.div>
      </section>
    </PageLayout>
  );
}
