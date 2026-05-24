import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/public/"],
      },
    ],
    sitemap: "https://amatra.co/sitemap.xml",
    host: "https://amatra.co",
  };
}
