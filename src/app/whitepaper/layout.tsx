import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whitepaper — AI Outfit Try-On Technology & Vision",
  description:
    "Read the Amatra whitepaper — the vision, AI technology, and roadmap behind the AI-powered outfit try-on and fashion social platform.",
  alternates: { canonical: "https://amatra.co/whitepaper" },
  keywords: [
    "Amatra whitepaper",
    "AI outfit try on technology",
    "fashion AI technology",
    "virtual wardrobe technology",
    "Amatra AI vision",
  ],
  openGraph: {
    title: "Whitepaper — Amatra AI Outfit Try-On Technology",
    description:
      "The vision, AI technology, and roadmap behind Amatra — the AI-powered outfit try-on and fashion social platform.",
    url: "https://amatra.co/whitepaper",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whitepaper — Amatra AI Outfit Try-On Technology",
    description:
      "Read the Amatra whitepaper — the vision, AI technology, and roadmap behind the AI-powered outfit try-on platform.",
  },
};

export default function WhitepaperLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
