"use client"

import Features from "@/components/Landing/Features";
import Footer from "@/components/Landing/Footer";
import Header from "@/components/Landing/Header";
import Hero from "@/components/Landing/Hero";
import HowItWorks from "@/components/Landing/HowItWorks";
import Newsletter from "@/components/Landing/Newsletter";
import { ThemeProvider } from "@/context/ThemeContext";
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
          <HowItWorks />
          {/* <Testimonials /> */}
          <Newsletter />
        </main>
        <Footer />
      </div>
  )
}
