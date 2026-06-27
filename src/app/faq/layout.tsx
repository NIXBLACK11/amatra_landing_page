import type { Metadata } from "next";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Amatra — wardrobe building, AI outfit generation, the social feed, Premium, and account management.",
  alternates: { canonical: "https://amatra.co/faq" },
  openGraph: {
    title: "FAQ | Amatra",
    description: "Everything you need to know about Amatra — the app, features, and community.",
    url: "https://amatra.co/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Amatra",
    description: "Answers to common questions about Amatra — wardrobe building, AI outfits, the social feed, and Premium.",
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
