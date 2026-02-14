"use client"

import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import { Globe3DDemo } from "@/components/landing/Globe";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { colors } = useTheme();
  return (
      <div 
        className="min-h-screen"
        style={{ backgroundColor: colors.background }}
      >
        <Header />
        <main>
          <Hero />
          <Features />
          <Globe3DDemo />
        </main>
        <Footer />
      </div>
  )
}
