import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whitepaper",
  description: "Read the Amatra whitepaper — the vision, technology, and roadmap behind the AI-powered fashion social platform.",
  alternates: { canonical: "https://amatra.co/whitepaper" },
  openGraph: {
    title: "Whitepaper | Amatra",
    description: "The vision, technology, and roadmap behind Amatra.",
    url: "https://amatra.co/whitepaper",
  },
};

export default function WhitepaperLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
