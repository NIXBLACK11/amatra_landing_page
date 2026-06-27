import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates — Latest AI Outfit Try-On Features",
  description:
    "Stay up to date with the latest Amatra releases — new AI outfit try-on features, virtual wardrobe improvements, and social fashion platform updates.",
  alternates: { canonical: "https://amatra.co/updates" },
  keywords: [
    "Amatra updates",
    "Amatra new features",
    "AI outfit try on updates",
    "Amatra app changelog",
    "virtual wardrobe app updates",
  ],
  openGraph: {
    title: "Updates — Amatra AI Outfit Try-On App",
    description:
      "Latest releases and feature updates from Amatra — AI outfit try-on improvements, virtual wardrobe features, and more.",
    url: "https://amatra.co/updates",
  },
  twitter: {
    card: "summary_large_image",
    title: "Updates — Amatra AI Outfit Try-On App",
    description:
      "Stay up to date with the latest Amatra releases, AI outfit try-on features, and platform improvements.",
  },
};

export default function UpdatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
