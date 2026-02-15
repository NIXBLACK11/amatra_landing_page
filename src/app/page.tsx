"use client"

import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import GlobeFeatures from "@/components/landing/globeFeatures";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
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
          <GlobeFeatures />
        </main>
        <Footer />
      </div>
  )
}
