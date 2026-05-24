import { MetadataRoute } from "next";

const BASE_URL = "https://amatra.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE_URL,                              lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/about`,                   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/faq`,                     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/updates`,                 lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/whitepaper`,              lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`,          lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE_URL}/terms-of-service`,        lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];
}
