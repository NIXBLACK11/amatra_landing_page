import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Amatra Privacy Policy to understand how we collect, use, and protect your personal data.",
  alternates: { canonical: "https://amatra.co/privacy-policy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
