import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Expertise from "../components/Expertise";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

export default function HomePage() {
  const { setupRevealObserver } = useReveal();

  useEffect(() => {
    // Set up reveal animations for elements with the 'reveal' class
    setupRevealObserver();
  }, [setupRevealObserver]);

  return (
    <div className="min-h-screen font-[Inter,sans-serif]">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
