"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import PageLayout from '@/components/ui/PageLayout';
import PageHero from '@/components/ui/PageHero';
import { updates } from '@/data/updates';

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

export default function UpdatesPage() {
  const { colors } = useTheme();

  return (
    <PageLayout>
      <PageHero
        label="Changelog"
        title={<>UPDATES &<br />RELEASES</>}
        subtitle="Stay updated with the latest features and improvements we're rolling out to enhance your fashion experience."
      />

      {/* Timeline */}
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-6">
        {updates.map((update, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden p-6"
            style={{
              border: `1px solid ${colors.text}20`,
              backgroundColor: `${colors.text}03`,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="flex items-start justify-between mb-3 gap-4">
              <h3
                className="text-xl font-black font-montserrat"
                style={{ color: colors.text }}
              >
                {update.title}
              </h3>
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold font-geist-mono flex-shrink-0"
                style={{
                  backgroundColor: update.status === 'launched' ? '#22c55e' : '#eab308',
                  color: '#fff',
                }}
              >
                {update.status === 'launched' ? 'LAUNCHED' : 'COMING SOON'}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-3">
              <span className="font-geist-mono text-sm" style={{ color: colors.text, opacity: 0.5 }}>
                {formatDate(update.date)}
              </span>
              {update.version && (
                <span className="font-geist-mono text-xs" style={{ color: colors.text, opacity: 0.35 }}>
                  {update.version}
                </span>
              )}
            </div>

            <p className="font-geist-mono text-sm leading-relaxed" style={{ color: colors.text, opacity: 0.65 }}>
              {update.description}
            </p>
          </motion.div>
        ))}
      </section>
    </PageLayout>
  );
}
