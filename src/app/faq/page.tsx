"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { PiPlus, PiMinus } from 'react-icons/pi';
import PageLayout from '@/components/ui/PageLayout';
import PageHero from '@/components/ui/PageHero';
import { faqs } from '@/data/faq';

const FAQItem: React.FC<{ q: string; a: string; index: number }> = ({ q, a, index }) => {
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-b"
      style={{ borderColor: `${colors.text}10` }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        className="w-full text-left py-5 flex items-start justify-between gap-4"
        onClick={() => setOpen(v => !v)}
      >
        <span className="font-montserrat font-bold text-base" style={{ color: colors.text }}>
          {q}
        </span>
        <span className="flex-shrink-0 mt-0.5" style={{ color: colors.text, opacity: 0.5 }}>
          {open ? <PiMinus size={18} /> : <PiPlus size={18} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 font-geist-mono text-sm leading-relaxed max-w-2xl"
              style={{ color: colors.text, opacity: 0.6 }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQPage() {
  const { colors } = useTheme();

  return (
    <PageLayout>
      <PageHero
        label="FAQ"
        title={<>FREQUENTLY<br />ASKED.</>}
        subtitle="Everything you need to know about Amatra — the app, the features, and the community."
        maxWidth="max-w-4xl"
      />

      {/* FAQ sections */}
      <section className="py-12 px-6 max-w-4xl mx-auto space-y-14">
        {faqs.map((group, gi) => (
          <div key={gi}>
            <motion.p
              className="font-montserrat font-black text-xs uppercase tracking-widest mb-6"
              style={{ color: colors.text, opacity: 0.3 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {group.category}
            </motion.p>
            <div>
              {group.questions.map((item, qi) => (
                <FAQItem key={qi} q={item.q} a={item.a} index={qi} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Still have questions */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <motion.div
          className="p-10 text-center"
          style={{ border: `1px solid ${colors.text}12`, backgroundColor: `${colors.text}04` }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-montserrat font-black text-2xl mb-3" style={{ color: colors.text }}>
            Still have questions?
          </p>
          <p className="font-geist-mono text-sm mb-6" style={{ color: colors.text, opacity: 0.55 }}>
            Reach out to us on Instagram or email — we're friendly.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://www.instagram.com/amatrafashion/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-geist-mono text-sm font-bold transition-opacity duration-150 hover:opacity-80"
              style={{ border: `1px solid ${colors.text}30`, color: colors.text }}
            >
              Instagram
            </a>
            <a
              href="mailto:admin@amatra.co"
              className="px-6 py-3 font-geist-mono text-sm font-bold transition-opacity duration-150 hover:opacity-80"
              style={{ border: `1px solid ${colors.text}30`, color: colors.text }}
            >
              Email
            </a>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
}
