import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Newsletter from "@/components/Newsletter";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-black">
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
    </ThemeProvider>
  )
}
