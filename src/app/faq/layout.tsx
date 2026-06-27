import type { Metadata } from "next";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ — AI Outfit Try-On & Virtual Wardrobe Questions",
  description:
    "Answers to common questions about Amatra — how the AI outfit try-on works, virtual wardrobe building, the social fashion feed, Premium plans, and account management.",
  alternates: { canonical: "https://amatra.co/faq" },
  keywords: [
    "Amatra FAQ",
    "Amatra AI try on questions",
    "AI outfit try on how it works",
    "virtual wardrobe FAQ",
    "Amatra help",
  ],
  openGraph: {
    title: "FAQ — AI Outfit Try-On & Virtual Wardrobe | Amatra",
    description:
      "Everything you need to know about Amatra — how the AI outfit try-on works, virtual wardrobe, social feed, and Premium.",
    url: "https://amatra.co/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — AI Outfit Try-On & Virtual Wardrobe | Amatra",
    description:
      "Answers to common questions about Amatra — AI outfit try-on, virtual wardrobe, the social feed, and Premium plans.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((group) =>
    group.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
