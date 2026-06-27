import type { Metadata } from "next";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Reviews — What Users Say About AI Outfit Try-On",
  description:
    "See what Amatra users are saying — real reviews from the fashion community on the AI outfit try-on, virtual wardrobe builder, and social styling platform.",
  alternates: { canonical: "https://amatra.co/reviews" },
  keywords: [
    "Amatra reviews",
    "Amatra app reviews",
    "AI outfit try on reviews",
    "virtual wardrobe app reviews",
    "Amatra user feedback",
  ],
  openGraph: {
    title: "Reviews — Amatra AI Outfit Try-On App",
    description:
      "Real reviews from the Amatra fashion community — what users think of the AI outfit try-on, virtual wardrobe, and social fashion feed.",
    url: "https://amatra.co/reviews",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reviews — Amatra AI Outfit Try-On App",
    description:
      "Real reviews from the Amatra fashion community on the AI outfit try-on and virtual wardrobe platform.",
  },
};

const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Amatra",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: avgRating,
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.review,
    datePublished: r.date,
  })),
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      {children}
    </>
  );
}
