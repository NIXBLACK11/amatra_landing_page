import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Amatra Terms of Service — the rules and conditions for using the Amatra app and platform.",
  alternates: { canonical: "https://amatra.co/terms-of-service" },
  robots: { index: false, follow: false },
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
