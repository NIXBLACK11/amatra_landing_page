import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Get Help with Amatra",
  description:
    "Get help with Amatra — questions about AI outfit try-on, virtual wardrobe, billing, or account issues. Report a bug or reach us on Instagram.",
  alternates: { canonical: "https://amatra.co/support" },
  keywords: [
    "Amatra support",
    "Amatra help",
    "Amatra contact",
    "AI outfit try on help",
    "Amatra customer support",
  ],
  openGraph: {
    title: "Support — Get Help with Amatra",
    description:
      "Get help with Amatra — AI outfit try-on questions, billing, account issues, or bug reports. Reach our support team on Instagram or email.",
    url: "https://amatra.co/support",
  },
  twitter: {
    card: "summary_large_image",
    title: "Support — Get Help with Amatra",
    description:
      "Get help with Amatra — AI outfit try-on questions, billing, account issues, or bug reports.",
  },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
