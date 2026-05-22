"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { PiStar, PiStarFill } from 'react-icons/pi';
import PageLayout from '@/components/ui/PageLayout';
import PageHero from '@/components/ui/PageHero';
import DownloadButtons from '@/components/ui/DownloadButtons';
import { reviews } from '@/data/reviews';

const Stars: React.FC<{ rating: number }> = ({ rating }) => {
  const { colors } = useTheme();
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) =>
        i < rating
          ? <PiStarFill key={i} size={14} style={{ color: '#f59e0b' }} />
          : <PiStar key={i} size={14} style={{ color: colors.text, opacity: 0.3 }} />
      )}
    </div>
  );
};

export default function ReviewsPage() {
  const { colors } = useTheme();

  return (
    <PageLayout>
      <PageHero
        label="Reviews"
        title={<>WHAT PEOPLE<br />ARE SAYING.</>}
        subtitle="Real reviews from the Amatra community — fashion lovers, minimalists, and everyday dressers."
      />

      {/* Reviews grid */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid mb-4 p-6"
              style={{
                border: `1px solid ${colors.text}10`,
                backgroundColor: `${colors.text}04`,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-montserrat font-bold text-sm" style={{ color: colors.text }}>
                    {review.name}
                  </p>
                  <p className="font-geist-mono text-xs mt-0.5" style={{ color: colors.text, opacity: 0.4 }}>
                    {review.handle}
                  </p>
                </div>
                <Stars rating={review.rating} />
              </div>
              <p
                className="font-geist-mono text-sm leading-relaxed mb-4"
                style={{ color: colors.text, opacity: 0.75 }}
              >
                "{review.review}"
              </p>
              <div className="flex items-center justify-between">
                <p className="font-geist-mono text-xs" style={{ color: colors.text, opacity: 0.3 }}>
                  {review.date}
                </p>
                <p
                  className="font-geist-mono text-xs px-2 py-0.5"
                  style={{
                    color: colors.text,
                    opacity: 0.35,
                    border: `1px solid ${colors.text}20`,
                  }}
                >
                  {review.platform}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <motion.p
          className="font-montserrat font-black text-3xl md:text-4xl mb-8"
          style={{ color: colors.text }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Join thousands of fashion lovers.
        </motion.p>
        <DownloadButtons size="sm" animated />
      </section>
    </PageLayout>
  );
}
