import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates",
  description: "Stay up to date with the latest Amatra releases, new features, and improvements to the AI outfit builder and fashion social platform.",
  alternates: { canonical: "https://amatra.co/updates" },
  openGraph: {
    title: "Updates | Amatra",
    description: "Latest releases and feature updates from Amatra.",
    url: "https://amatra.co/updates",
  },
  twitter: {
    card: "summary_large_image",
    title: "Updates | Amatra",
    description: "Stay up to date with the latest Amatra releases, new features, and improvements.",
  },
};

export default function UpdatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
