import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Amatra — report a bug, ask about billing, sort out your account, or reach us on Instagram.",
  alternates: { canonical: "https://amatra.co/support" },
  openGraph: {
    title: "Support | Amatra",
    description: "Get help with Amatra — report a bug, ask about billing, sort out your account, or reach us on Instagram.",
    url: "https://amatra.co/support",
  },
  twitter: {
    card: "summary_large_image",
    title: "Support | Amatra",
    description: "Get help with Amatra — report a bug, ask about billing, sort out your account, or reach us on Instagram.",
  },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
