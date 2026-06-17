"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { PiInstagramLogo, PiBug, PiCreditCard, PiUserCircle, PiChatCircle } from 'react-icons/pi';
import { MdOutlineEmail } from 'react-icons/md';
import PageLayout from '@/components/ui/PageLayout';
import PageHero from '@/components/ui/PageHero';

const categories = [
  {
    icon: <PiBug size={28} />,
    title: 'App Issues & Bugs',
    description: 'Something crashed, a feature is broken, or the app is behaving unexpectedly? Let us know and we will look into it.',
    cta: 'Email us',
    contact: 'admin@amatra.co',
    href: 'mailto:admin@amatra.co',
    external: false,
  },
  {
    icon: <PiCreditCard size={28} />,
    title: 'Billing & Subscriptions',
    description: 'Questions about charges, upgrading or downgrading your plan, or requesting a refund — we handle these over email.',
    cta: 'Email us',
    contact: 'admin@amatra.co',
    href: 'mailto:admin@amatra.co',
    external: false,
  },
  {
    icon: <PiUserCircle size={28} />,
    title: 'Account Help',
    description: 'Trouble logging in, need to delete your account, or have a privacy concern? Drop us a message and we will sort it out.',
    cta: 'Email us',
    contact: 'admin@amatra.co',
    href: 'mailto:admin@amatra.co',
    external: false,
  },
  {
    icon: <PiChatCircle size={28} />,
    title: 'Community & Feedback',
    description: 'Have a feature idea, want to share feedback, or just want to say hello? Find us on Instagram — we read every message.',
    cta: 'DM on Instagram',
    contact: '@amatrafashion',
    href: 'https://www.instagram.com/amatrafashion',
    external: true,
  },
];

export default function SupportPage() {
  const { colors } = useTheme();

  return (
    <PageLayout>
      <PageHero
        label="Support"
        title={<>WE'RE HERE<br />TO HELP.</>}
        subtitle="Reach out for anything — bugs, billing, account issues, or just to say hi. We respond to every message."
        maxWidth="max-w-4xl"
      />

      {/* Category cards */}
      <section className="py-16 px-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <motion.a
            key={i}
            href={cat.href}
            target={cat.external ? '_blank' : undefined}
            rel={cat.external ? 'noopener noreferrer' : undefined}
            className="group flex flex-col gap-5 p-8 transition-colors duration-150"
            style={{ border: `1px solid ${colors.text}12`, backgroundColor: `${colors.text}03` }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ backgroundColor: `${colors.text}07` } as never}
          >
            <span style={{ color: colors.text, opacity: 0.5 }}>{cat.icon}</span>
            <div>
              <h2
                className="font-montserrat font-black text-lg mb-2"
                style={{ color: colors.text }}
              >
                {cat.title}
              </h2>
              <p
                className="font-geist-mono text-sm leading-relaxed"
                style={{ color: colors.text, opacity: 0.6 }}
              >
                {cat.description}
              </p>
            </div>
            <div className="mt-auto flex items-center justify-between gap-4">
              <span
                className="font-geist-mono text-sm font-bold group-hover:opacity-100 transition-opacity duration-150"
                style={{ color: colors.text, opacity: 0.45 }}
              >
                {cat.cta} →
              </span>
              <span
                className="font-geist-mono text-xs"
                style={{ color: colors.text, opacity: 0.35 }}
              >
                {cat.contact}
              </span>
            </div>
          </motion.a>
        ))}
      </section>

      {/* Direct contact block */}
      <section className="py-8 pb-20 px-6 max-w-4xl mx-auto">
        <motion.div
          className="p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ border: `1px solid ${colors.text}12`, backgroundColor: `${colors.text}04` }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="font-montserrat font-black text-xl mb-2" style={{ color: colors.text }}>
              Not sure where to start?
            </p>
            <p className="font-geist-mono text-sm mb-1" style={{ color: colors.text, opacity: 0.55 }}>
              Just pick whichever channel is easiest — we check both.
            </p>
            <p className="font-geist-mono text-sm" style={{ color: colors.text, opacity: 0.35 }}>
              admin@amatra.co
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="mailto:admin@amatra.co"
              className="flex items-center gap-2 px-6 py-3 font-geist-mono text-sm font-bold transition-opacity duration-150 hover:opacity-80"
              style={{ border: `1px solid ${colors.text}30`, color: colors.text }}
            >
              <MdOutlineEmail size={16} />
              Email
            </a>
            <a
              href="https://www.instagram.com/amatrafashion"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 font-geist-mono text-sm font-bold transition-opacity duration-150 hover:opacity-80"
              style={{ border: `1px solid ${colors.text}30`, color: colors.text }}
            >
              <PiInstagramLogo size={16} />
              Instagram
            </a>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
}
