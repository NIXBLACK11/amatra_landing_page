import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
  description: "See what Amatra users are saying — real reviews from the fashion community on the AI outfit builder and social styling platform.",
  alternates: { canonical: "https://amatra.co/reviews" },
  openGraph: {
    title: "Reviews | Amatra",
    description: "Real reviews from the Amatra fashion community.",
    url: "https://amatra.co/reviews",
  },
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
