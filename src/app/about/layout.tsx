import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Amatra is a fashion-forward social app where you build virtual outfits from your real wardrobe, generate AI-composed looks, and share them with a community that genuinely loves what they wear.",
  alternates: { canonical: "https://amatra.co/about" },
  openGraph: {
    title: "About | Amatra",
    description: "Learn how Amatra is building the social layer for fashion — outfit creation, AI styling, and a community built around what you wear.",
    url: "https://amatra.co/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
