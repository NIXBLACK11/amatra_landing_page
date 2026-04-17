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

export const metadata: Metadata = {
  title: "Amatra",
  description: "Create Your Perfect Wardrobe with AI",
};

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
