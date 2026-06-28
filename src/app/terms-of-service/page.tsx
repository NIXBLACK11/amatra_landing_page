"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import PageLayout from '@/components/ui/PageLayout';

const sections = [
  {
    id: "eligibility",
    title: "1. Eligibility",
    content: "You must be at least 13 years old to use Amatra. By using the Service, you represent that you meet this age requirement, have the legal capacity to enter into these Terms, and will comply with them at all times.",
  },
  {
    id: "account",
    title: "2. Account Registration and Security",
    content: "You must provide an accurate and valid email address to register. You are responsible for maintaining the confidentiality of your account and the security of your login credentials. You are responsible for all activities that occur under your account and must notify us immediately if you suspect unauthorized access. We reserve the right to suspend or terminate accounts that provide false information or violate these Terms.",
  },
  {
    id: "user-content",
    title: "3. User Content",
    subsections: [
      {
        title: "3.1 Ownership",
        content: "You retain all ownership rights to the photos and content you upload to Amatra.",
      },
      {
        title: "3.2 License to Amatra",
        content: "By uploading or publishing User Content, you grant Amatra a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, display, and perform the User Content solely in connection with operating and improving the Service. This includes processing wardrobe images through AI models to generate outfit compositions, displaying your posts and profile to other users, and enabling the Copy Outfit feature which allows other users to reference your published outfit components for their own creations. This license terminates when you delete your content or account, subject to backup retention periods in our Privacy Policy.",
      },
      {
        title: "3.3 AI-Generated Content",
        content: "You own the outfit images generated through your use of the AI features, subject to the license in Section 3.2. AI-generated outfit images are visual approximations and may not accurately reflect the actual appearance, fit, colour, or style of the clothing items submitted — Amatra makes no guarantees regarding quality or accuracy. AI systems can occasionally produce unexpected or unintended outputs; Amatra is not responsible for any AI-generated images that are inaccurate, unsatisfactory, or inappropriate in appearance. You are solely responsible for the wardrobe items you submit as inputs to the AI — Amatra is not liable for outputs resulting from images you upload that are misleading, inappropriate, or in violation of these Terms. AI generation is subject to usage limits based on your plan.",
      },
      {
        title: "3.4 Content Standards",
        content: "Your User Content must: be owned by you or used with all necessary rights and permissions; not include photos of other people without their explicit consent; and not violate any applicable law or third-party intellectual property rights.",
      },
    ],
  },
  {
    id: "prohibited",
    title: "4. Prohibited Conduct",
    content: "You agree not to: upload illegal, harmful, harassing, defamatory, or obscene content; impersonate any person or entity; engage in spam or unauthorized advertising; interfere with the Service or its servers; attempt to gain unauthorized access to any part of the Service; reverse engineer or decompile any part of the App; scrape or extract data using automated means without our written consent; or use the Service for any fraudulent or illegal purpose.",
  },
  {
    id: "reporting",
    title: "5. Content Reporting and Moderation",
    content: "If you encounter content that violates these Terms, use the Report option available on any post (tap the three-dot menu → Report). We will review reported content and may remove it or take action against violating accounts. We reserve the right to remove any content and suspend or terminate any account at our sole discretion, with or without notice, for conduct we determine is harmful to the Service or its community.",
  },
  {
    id: "third-party",
    title: "6. Third-Party Links",
    content: "Posts and wardrobe items on Amatra may contain links to third-party product pages. These links are provided as a convenience. We do not endorse, control, or take responsibility for the content, privacy practices, or terms of any third-party website. Accessing third-party links is at your own risk.",
  },
  {
    id: "referral",
    title: "7. Referral Program",
    content: "Amatra may offer a referral program allowing users to invite others in exchange for in-app rewards. Referral codes are personal and non-transferable. Amatra reserves the right to modify, suspend, or terminate the referral program at any time without prior notice. Abuse of the referral program (e.g., creating fake accounts, fraudulent referrals) will result in account suspension and forfeiture of all rewards. Referral rewards have no cash value and cannot be redeemed for currency.",
  },
  {
    id: "premium",
    title: "8. Premium Subscription and Payments",
    subsections: [
      {
        title: "8.1 Premium Features",
        content: "Amatra offers a Premium subscription that provides unlimited AI outfit generations and an ad-free experience.",
      },
      {
        title: "8.2 Pricing and Payment",
        content: "Amatra offers two paid tiers: Stylist at USD $4.99 per month (50 AI try-ons/month) and Pro at USD $11.99 per month (120 AI try-ons/month). Payments are processed via Apple In-App Purchase. By subscribing, you agree to Apple's Media Services Terms and Conditions. Pricing may be subject to change with prior notice.",
      },
      {
        title: "8.3 Refunds and Cancellations",
        content: "Subscription fees are generally non-refundable. For refund requests, please contact Apple Support directly. You may cancel at any time through your Apple ID subscription settings (Settings → Apple ID → Subscriptions). Cancellation takes effect at the end of the current billing cycle; you retain Premium access until that date.",
      },
    ],
  },
  {
    id: "ip",
    title: "9. Intellectual Property",
    content: "The Amatra name, logo, App code, designs, and all original features and content are the exclusive property of Amatra and its licensors. You may not use our branding, trademarks, or intellectual property without our express prior written consent.",
  },
  {
    id: "termination",
    title: "10. Termination",
    content: "We may terminate or suspend your access to the Service at any time, with or without notice, for any reason including violation of these Terms. Upon termination, your right to use the Service ceases immediately. You may request deletion of your account at any time via Settings → Delete Account in the App. Sections 3, 6, 9, 11, 12, 13, and 14 survive termination.",
  },
  {
    id: "indemnification",
    title: "11. Indemnification",
    content: "You agree to defend, indemnify, and hold harmless Amatra and its officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of your access to or use of the Service, your User Content, your violation of these Terms, or your violation of any third-party rights.",
  },
  {
    id: "liability",
    title: "12. Limitation of Liability",
    content: "To the maximum extent permitted by applicable law, Amatra and its affiliates shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including loss of profits, revenue, data, or goodwill. Our total cumulative liability to you for any claim shall not exceed the greater of (a) the amount you paid us in the 12 months prior to the event giving rise to the claim, or (b) USD $10.00.",
  },
  {
    id: "warranties",
    title: "13. Disclaimer of Warranties",
    content: "The Service is provided on an \"AS IS\" and \"AS AVAILABLE\" basis without warranties of any kind. Amatra expressly disclaims all warranties, including implied warranties of merchantability, fitness for a particular purpose, non-infringement, and accuracy of AI-generated content. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components.",
  },
  {
    id: "disputes",
    title: "14. Dispute Resolution",
    subsections: [
      {
        title: "14.1 Informal Resolution",
        content: "Before filing a formal claim, you agree to first contact us at admin@amatra.co and attempt to resolve the dispute informally. We will try to resolve the dispute within 30 days of receiving your notice.",
      },
      {
        title: "14.2 Governing Law",
        content: "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes not resolved informally shall be subject to the exclusive jurisdiction of the courts located in India.",
      },
    ],
  },
  {
    id: "general",
    title: "15. General Provisions",
    subsections: [
      {
        title: "15.1 Severability",
        content: "If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions continue in full force and effect.",
      },
      {
        title: "15.2 Entire Agreement",
        content: "These Terms, together with our Privacy Policy, constitute the entire agreement between you and Amatra regarding the Service and supersede all prior agreements and understandings.",
      },
      {
        title: "15.3 Waiver",
        content: "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. Any waiver must be in writing and signed by an authorised Amatra representative.",
      },
      {
        title: "15.4 Assignment",
        content: "You may not assign or transfer any rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations without restriction.",
      },
      {
        title: "15.5 Force Majeure",
        content: "Amatra shall not be liable for any failure or delay in performing its obligations due to causes beyond its reasonable control, including acts of God, government actions, natural disasters, internet outages, or third-party service failures.",
      },
    ],
  },
  {
    id: "export",
    title: "16. Export Compliance",
    content: "You may not use or export the App except as authorised by the laws of the United States and the jurisdiction in which you obtained it. In particular, the App may not be exported or re-exported (a) into any country subject to a U.S. government embargo, or (b) to anyone on the U.S. Treasury Department's Specially Designated Nationals List or the U.S. Department of Commerce Denied Persons List or Entity List. By using the App, you represent and warrant that you are not located in any such country and are not on any such list. You also agree not to use the App for any purpose prohibited by United States law, including the development, design, manufacture, or production of nuclear, missile, or chemical or biological weapons.",
  },
  {
    id: "apple-beneficiary",
    title: "17. Apple as Third-Party Beneficiary",
    content: "You acknowledge and agree that Apple Inc. and its subsidiaries are third-party beneficiaries of these Terms and have the right to enforce them against you. Apple is not a party to these Terms and is not responsible for the App or its content. Apple has no obligation to provide maintenance or support for the App. In the event of any failure of the App to conform to any applicable warranty, you may notify Apple and Apple will refund the purchase price (if any) to you; to the maximum extent permitted by law, Apple has no other warranty obligation with respect to the App. Apple is not responsible for addressing any claims by you or any third party relating to the App or your use of it, including product liability claims, consumer protection claims, intellectual property infringement claims, or any claim that the App fails to conform to any applicable legal or regulatory requirement.",
  },
  {
    id: "changes",
    title: "18. Changes to Terms",
    content: "We reserve the right to modify these Terms at any time. For material changes, we will provide at least 14 days' notice through the App or by email before the new Terms take effect. Continued use of the Service after the effective date of revised Terms constitutes your acceptance of the changes.",
  },
  {
    id: "contact",
    title: "19. Contact Us",
    content: "If you have any questions about these Terms, please contact us at admin@amatra.co. We aim to respond to all inquiries within 30 days.",
  },
];

export default function TermsOfServicePage() {
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
            Terms of Service
          </motion.h1>
          <motion.p
            className="font-geist-mono text-sm"
            style={{ color: colors.text, opacity: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Last Updated: May 22, 2026
          </motion.p>
          <motion.p
            className="font-geist-mono text-base max-w-2xl leading-relaxed mt-6"
            style={{ color: colors.text, opacity: 0.6 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            These Terms govern your access to and use of Amatra's mobile application, website, and related services. By using Amatra, you agree to these Terms.
          </motion.p>

          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="/privacy-policy"
              className="font-geist-mono text-sm underline"
              style={{ color: colors.text, opacity: 0.5 }}
            >
              Privacy Policy →
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
            {/* TOC sidebar */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-24">
                <p className="font-montserrat font-black text-xs uppercase tracking-widest mb-4" style={{ color: colors.text, opacity: 0.3 }}>
                  Contents
                </p>
                <nav className="space-y-1.5">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block font-geist-mono text-sm py-0.5 transition-opacity duration-150 hover:opacity-100"
                      style={{ color: colors.text, opacity: 0.4 }}
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
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
                  Questions about these Terms?
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
