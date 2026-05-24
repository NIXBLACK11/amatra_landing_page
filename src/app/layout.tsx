import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/ui/LenisProvider";
import { ThemeProvider } from "@/context/ThemeContext";
import CursorGlow from "@/components/ui/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: "300",
  style: "italic",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: "400",
});

const BASE_URL = "https://amatra.co";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Amatra — AI Outfit Builder & Fashion Social App",
    template: "%s | Amatra",
  },
  description: "Build your virtual wardrobe, compose AI-generated outfit images from your real clothes, and share looks with a fashion-forward community. Available on iOS and Android.",
  keywords: ["AI outfit generator", "virtual wardrobe", "fashion social app", "outfit creator", "AI stylist", "style community", "Amatra"],
  authors: [{ name: "Amatra", url: BASE_URL }],
  creator: "Amatra",
  publisher: "Amatra",
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Amatra — AI Outfit Builder & Fashion Social App",
    description: "Build your virtual wardrobe, compose AI-generated outfit images, and share looks with a fashion-forward community.",
    url: BASE_URL,
    siteName: "Amatra",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amatra — AI Outfit Builder & Fashion Social App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amatra — AI Outfit Builder & Fashion Social App",
    description: "Build your virtual wardrobe, compose AI-generated outfit images, and share looks with a fashion-forward community.",
    site: "@_AMATRA_",
    creator: "@_AMATRA_",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon.ico", rel: "shortcut icon" },
    ],
    apple: "/icons/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/icons/site.webmanifest" },
      { rel: "icon", url: "/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Amatra",
    url: "https://amatra.co",
    logo: "https://amatra.co/brand/main_logo.png",
    description: "Fashion-forward social app for outfit creators. Build virtual wardrobes, compose AI outfits, and share looks with a style community.",
    email: "admin@amatra.co",
    sameAs: [
      "https://www.instagram.com/amatrafashion/",
      "https://x.com/_AMATRA_",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Amatra",
    url: "https://amatra.co",
    description: "AI outfit builder and fashion social app.",
  },
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Amatra",
    operatingSystem: "iOS, Android",
    applicationCategory: "LifestyleApplication",
    description: "Build your virtual wardrobe, compose AI-generated outfit images from your real clothes, and share looks with a fashion-forward community.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: "Amatra" },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${cormorantGaramond.variable} ${dmSans.variable} font-geist-mono antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
        <LenisProvider>
        <CursorGlow />
        {children}
        </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
