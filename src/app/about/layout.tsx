import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — The AI Outfit Try-On App",
  description:
    "Amatra is an AI-powered outfit try-on app and fashion social platform. Build a virtual wardrobe from your real clothes, generate AI outfit images, and share looks with a style community. Learn our story.",
  alternates: { canonical: "https://amatra.co/about" },
  keywords: [
    "about Amatra",
    "Amatra AI outfit try on",
    "Amatra story",
    "fashion AI app",
    "virtual wardrobe app about",
  ],
  openGraph: {
    title: "About Amatra — The AI Outfit Try-On App",
    description:
      "Learn how Amatra is building the AI-powered social layer for fashion — virtual try-on, outfit creation, AI styling, and a community built around what you wear.",
    url: "https://amatra.co/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Amatra — The AI Outfit Try-On App",
    description:
      "Learn how Amatra is building the AI-powered social layer for fashion — virtual try-on, outfit creation, and a community built around what you wear.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
