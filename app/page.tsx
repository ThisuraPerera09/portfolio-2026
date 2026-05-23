import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ScrollStory from "@/components/ScrollStory";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import VideoReel from "@/components/VideoReel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ScrollStory />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
