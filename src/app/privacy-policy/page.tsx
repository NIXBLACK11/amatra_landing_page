"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import PageLayout from '@/components/ui/PageLayout';

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    subsections: [
      {
        title: "1.1 Personal Information",
        content: "When you create an account and use Amatra, we may collect: email address, username, age, gender, and country; one-time passwords (OTP) sent to your email for secure login; profile picture; and referral code if you used or generated one during onboarding.",
      },
      {
        title: "1.2 User Content",
        content: "We collect the content you create, upload, or receive from others. This includes wardrobe photos (images of clothing items you upload to your personal gallery, along with optional product names and product URLs), AI-generated outfit images, and social interactions such as posts, comments, likes, bookmarks, and follows.",
      },
      {
        title: "1.3 Usage and Technical Data",
        content: "We may collect device information (model, OS version, unique identifiers), server log data (IP address, browser type, usage patterns), and on-device local storage data (authentication tokens, theme preferences, search history). Local storage data stays on your device and is not transmitted to our servers except for authentication.",
      },
      {
        title: "1.4 Payment Information",
        content: "Payments for our Premium subscription are processed through Apple In-App Purchase (IAP). We do not store your payment card or bank account details. All billing is handled by Apple and is governed by Apple's Privacy Policy and Apple's Licensed Application End User License Agreement (EULA).",
      },
      {
        title: "1.5 Website Data",
        content: "When you visit our website, we may collect standard server logs including your IP address, browser type, referring URL, and pages visited. We do not currently use third-party analytics or advertising trackers on our site.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: "We use collected information to: provide and maintain the Service (including account management and wardrobe features); generate AI outfit compositions; personalise your feed and experience; send OTPs and service notifications; detect and prevent fraud and abuse; track referral codes; and comply with applicable laws.",
  },
  {
    id: "sharing",
    title: "3. Sharing Your Information",
    content: "We do not sell your personal information. We may share data with service providers (Google Cloud hosting, AI processing, Apple In-App Purchase for payments) who are contractually bound to use it only for our services. Public content — posts, usernames, profile pictures, and product links — is visible to other users. Outfit posts may contain links to third-party product pages; when you follow these links you are subject to those sites' own privacy policies. We may also disclose data when required by law or to protect rights and safety.",
  },
  {
    id: "your-rights",
    title: "4. Your Privacy Rights",
    content: "Depending on your location, you may have the right to: access a copy of your personal data; request correction of inaccurate data; request deletion of your data (available directly via Settings → Delete Account in the App); request a portable copy of your data; object to certain processing; or request restriction of processing. To exercise any of these rights, contact us at admin@amatra.co. We respond within 30 days.",
  },
  {
    id: "retention",
    title: "5. Data Retention and Deletion",
    content: "We retain your information for as long as your account is active. Upon account deletion: your data is removed from our primary database within 30 days, and from secure backups within 60 days. Uploaded images stored on Google Cloud Storage are deleted as part of this process.",
  },
  {
    id: "security",
    title: "6. Security",
    content: "We implement industry-standard security measures including JWT-based authentication with automatic token refresh, HTTPS connections, and Google Cloud's infrastructure security controls. However, no transmission over the internet is 100% secure. We cannot guarantee absolute security.",
  },
  {
    id: "children",
    title: "7. Children's Privacy",
    content: "Amatra is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will delete it immediately.",
  },
  {
    id: "international",
    title: "8. International Data Transfers",
    content: "Amatra's backend infrastructure is hosted on Google Cloud Run in the asia-south1 region (Mumbai, India). If you are located outside of India, your information may be transferred to and processed in India. We take steps to ensure appropriate safeguards are in place consistent with applicable data protection laws.",
  },
  {
    id: "changes",
    title: "9. Changes to This Privacy Policy",
    content: "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page with an updated Effective Date and, where required, by sending a notification through the App. Continued use of the Services after changes constitutes your acceptance.",
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: "If you have any questions, concerns, or requests regarding this Privacy Policy, email us at admin@amatra.co. We aim to respond to all inquiries within 30 days.",
  },
];

const TableOfContents: React.FC<{ sections: typeof sections }> = ({ sections }) => {
  const { colors } = useTheme();
  return (
    <nav className="space-y-1.5">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="block font-geist-mono text-sm py-1 transition-opacity duration-150 hover:opacity-100"
          style={{ color: colors.text, opacity: 0.45 }}
        >
          {s.title}
        </a>
      ))}
    </nav>
  );
};

export default function PrivacyPolicyPage() {
  const { colors } = useTheme();

  return (
    <PageLayout>
      <div className="pt-28 pb-20">
        {/* Hero */}
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <motion.p
            className="font-geist-mono text-xs uppercase tracking-widest mb-4"
            style={{ color: colors.text, opacity: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Legal
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-black font-montserrat mb-4"
            style={{ color: colors.text }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className="font-geist-mono text-sm"
            style={{ color: colors.text, opacity: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Effective Date: May 22, 2026
          </motion.p>
          <motion.p
            className="font-geist-mono text-base max-w-2xl leading-relaxed mt-6"
            style={{ color: colors.text, opacity: 0.6 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Amatra is committed to protecting your privacy. This policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
          </motion.p>

          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="/terms-of-service"
              className="font-geist-mono text-sm underline"
              style={{ color: colors.text, opacity: 0.5 }}
            >
              Terms of Service →
            </a>
            <a
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-geist-mono text-sm underline"
              style={{ color: colors.text, opacity: 0.5 }}
            >
              Apple EULA →
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="w-full h-px" style={{ backgroundColor: `${colors.text}12` }} />
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* TOC — sticky sidebar */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-24">
                <p className="font-montserrat font-black text-xs uppercase tracking-widest mb-4" style={{ color: colors.text, opacity: 0.3 }}>
                  Contents
                </p>
                <TableOfContents sections={sections} />
              </div>
            </aside>

            {/* Sections */}
            <div className="flex-1 space-y-14 min-w-0">
              {sections.map((section, i) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.04 }}
                >
                  <h2 className="font-montserrat font-black text-xl mb-4" style={{ color: colors.text }}>
                    {section.title}
                  </h2>

                  {section.subsections ? (
                    <div className="space-y-5">
                      {section.subsections.map((sub, j) => (
                        <div key={j}>
                          <h3 className="font-montserrat font-bold text-base mb-2" style={{ color: colors.text }}>
                            {sub.title}
                          </h3>
                          <p className="font-geist-mono text-sm leading-relaxed" style={{ color: colors.text, opacity: 0.65 }}>
                            {sub.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="font-geist-mono text-sm leading-relaxed" style={{ color: colors.text, opacity: 0.65 }}>
                      {section.content}
                    </p>
                  )}

                  {i < sections.length - 1 && (
                    <div className="mt-14 w-full h-px" style={{ backgroundColor: `${colors.text}08` }} />
                  )}
                </motion.div>
              ))}

              {/* Contact box */}
              <div
                className="p-8 mt-8"
                style={{ border: `1px solid ${colors.text}12`, backgroundColor: `${colors.text}04` }}
              >
                <p className="font-montserrat font-black text-lg mb-2" style={{ color: colors.text }}>
                  Questions about this policy?
                </p>
                <p className="font-geist-mono text-sm" style={{ color: colors.text, opacity: 0.55 }}>
                  Email us at{' '}
                  <a href="mailto:admin@amatra.co" className="underline" style={{ color: colors.text }}>
                    admin@amatra.co
                  </a>
                  {' '}— we respond within 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
