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
    default: "Amatra — AI Outfit Try-On App | Virtual Wardrobe & Fashion Community",
    template: "%s | Amatra",
  },
  description:
    "Amatra is the AI-powered outfit try-on app. Upload your real clothes, build a virtual wardrobe, compose AI outfit images, and share your looks with a fashion community. Free virtual try-on on iOS & Android.",
  keywords: [
    "Amatra",
    "Amatra app",
    "Amatra AI",
    "Amatra fashion",
    "Amatra outfit",
    "Amatra try on",
    "Amatra virtual wardrobe",
    "Amatra download",
    "AI outfit try on",
    "AI virtual try on",
    "virtual outfit try on",
    "try on clothes virtually",
    "AI clothing try on",
    "virtual fashion try on",
    "AI try on outfit",
    "AI outfit generator",
    "AI outfit builder",
    "virtual wardrobe",
    "virtual wardrobe app",
    "digital wardrobe",
    "virtual closet app",
    "AI fashion stylist",
    "AI stylist app",
    "outfit creator app",
    "outfit builder app",
    "fashion social app",
    "fashion AI app",
    "style AI",
    "outfit maker",
    "fashion community app",
    "style community",
  ],
  authors: [{ name: "Amatra", url: BASE_URL }],
  creator: "Amatra",
  publisher: "Amatra",
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Amatra — AI Outfit Try-On App | Virtual Wardrobe & Fashion Community",
    description:
      "Amatra is the AI-powered outfit try-on app. Upload your real clothes, build a virtual wardrobe, compose AI outfit images, and share your looks with a fashion community. Free on iOS & Android.",
    url: BASE_URL,
    siteName: "Amatra",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amatra — AI Outfit Try-On App | Virtual Wardrobe & Fashion Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amatra — AI Outfit Try-On App | Virtual Wardrobe & Fashion Community",
    description:
      "Amatra is the AI-powered outfit try-on app. Upload your real clothes, build a virtual wardrobe, compose AI outfit images, and share your looks with a fashion community. Free on iOS & Android.",
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
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Amatra",
    url: "https://amatra.co",
    logo: {
      "@type": "ImageObject",
      url: "https://amatra.co/brand/main_logo.png",
      width: 512,
      height: 512,
    },
    description:
      "Amatra is the AI-powered outfit try-on app. Build a virtual wardrobe from your real clothes, compose AI outfit images, and share looks with a fashion community.",
    email: "admin@amatra.co",
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      email: "admin@amatra.co",
      contactType: "customer support",
    },
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
    description:
      "Amatra — AI outfit try-on app. Build a virtual wardrobe, compose AI-generated outfit images from your real clothes, and share looks with a fashion community.",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: "https://amatra.co/?q={search_term_string}" },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Amatra — AI Outfit Try-On",
    alternateName: ["Amatra", "Amatra AI", "Amatra fashion app"],
    operatingSystem: "iOS, Android",
    applicationCategory: "LifestyleApplication",
    applicationSubCategory: "FashionApplication",
    description:
      "Amatra is the AI-powered outfit try-on app. Upload photos of your real clothes, build a virtual wardrobe, select pieces, and let AI compose a realistic full-body outfit image. Virtually try on outfits before you wear them. Share looks with a fashion-forward social community.",
    featureList: [
      "AI outfit try-on",
      "Virtual wardrobe builder",
      "AI outfit generator",
      "Social fashion feed",
      "Copy and remix outfits",
      "Shop the look links",
      "Outfit search by occasion and season",
      "Referral rewards",
    ],
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free — 1 AI try-on per month",
        description: "Free forever with 1 AI outfit try-on per month.",
      },
      {
        "@type": "Offer",
        price: "4.99",
        priceCurrency: "USD",
        name: "Stylist — 50 AI try-ons/month",
        description: "50 AI outfit try-ons per month, ad-free experience.",
        billingIncrement: "P1M",
      },
      {
        "@type": "Offer",
        price: "11.99",
        priceCurrency: "USD",
        name: "Pro — 120 AI try-ons/month",
        description: "120 AI outfit try-ons per month, priority support, early access to new features.",
        billingIncrement: "P1M",
      },
    ],
    author: {
      "@type": "Organization",
      name: "Amatra",
      url: "https://amatra.co",
    },
    downloadUrl: [
      "https://apps.apple.com/app/amatra",
      "https://play.google.com/store/apps/details?id=com.nixblack.amatra",
    ],
    installUrl: [
      "https://apps.apple.com/app/amatra",
      "https://play.google.com/store/apps/details?id=com.nixblack.amatra",
    ],
    screenshot: [
      "https://amatra.co/screenshots/494shots_so.png",
      "https://amatra.co/screenshots/76_1x_shots_so.png",
      "https://amatra.co/screenshots/894shots_so.png",
    ],
    inLanguage: "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Virtually Try On Outfits with Amatra AI",
    description:
      "Use Amatra's AI to virtually try on outfit combinations from your real wardrobe. Select pieces, generate a realistic AI outfit image, and share your look.",
    totalTime: "PT3M",
    supply: [
      {
        "@type": "HowToSupply",
        name: "Amatra app (free on iOS and Android)",
      },
      {
        "@type": "HowToSupply",
        name: "Photos of your clothing items",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Amatra AI outfit generator",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Build your virtual wardrobe",
        text: "Download the Amatra app and upload photos of your real clothing items. Organise them into categories: tops, bottoms, outerwear, headwear, and footwear to build your virtual wardrobe.",
        image: "https://amatra.co/screenshots/894shots_so.png",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Select pieces for your outfit try-on",
        text: "In the Create tab, go through each clothing category and pick which piece you want to include. Choose a top, bottoms, shoes, and optional outerwear for your virtual try-on.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Generate your AI outfit image",
        text: "Tap Create and Amatra's AI composes a realistic full-body outfit image showing exactly how your selected clothes look together. Try on as many outfit combinations as you like.",
        image: "https://amatra.co/screenshots/494shots_so.png",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Share your look with the community",
        text: "Post your AI-generated outfit to the Amatra fashion community. Tag it by occasion and season. Other users can like, comment, copy, and remix your outfit.",
        image: "https://amatra.co/screenshots/76_1x_shots_so.png",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Amatra App Features",
    description: "Key features of the Amatra AI outfit try-on and fashion social app.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "AI Outfit Try-On",
        description: "Select pieces from your virtual wardrobe and let AI compose a realistic full-body outfit image.",
        url: "https://amatra.co/#features",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Virtual Wardrobe Builder",
        description: "Upload photos of your real clothes and organise them into a personal digital wardrobe.",
        url: "https://amatra.co/#features",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Social Fashion Feed",
        description: "Share outfit posts, follow fashion creators, and explore an infinite feed of styles.",
        url: "https://amatra.co/#features",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Copy & Remix Outfits",
        description: "Copy any outfit from another user's post and remix it with your own wardrobe pieces.",
        url: "https://amatra.co/#features",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Shop the Look",
        description: "Every outfit post shows exact product links so you can shop any piece directly.",
        url: "https://amatra.co/#features",
      },
    ],
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
