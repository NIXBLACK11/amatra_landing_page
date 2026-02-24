"use client"


import Features from "@/components/Landing/Features";
import Footer from "@/components/Landing/Footer";
import GlobeFeatures from "@/components/Landing/GlobeFeatures";
import Header from "@/components/Landing/Header";
import Hero from "@/components/Landing/Hero";
import Pricing from "@/components/Landing/Pricing";
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
          <Pricing />
        </main>
        <Footer />
      </div>
  )
}
