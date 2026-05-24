"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f7f7f5]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className={`font-syne font-bold text-base tracking-tight hover:text-[#1a1a1a] transition-colors ${scrolled ? "text-[#111111]" : "text-white"}`}
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Thisura · Perera
        </a>

        {/* Center pill nav — desktop */}
        <nav className={`hidden md:flex items-center gap-1 backdrop-blur-sm rounded-full px-2 py-1.5 border transition-all duration-500 ${scrolled ? "bg-[#111111]/8 border-[#111111]/10" : "bg-white/10 border-white/20"}`}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:text-[#1a1a1a] ${scrolled ? "text-[#111111]/70 hover:bg-white/60" : "text-white/80 hover:bg-white/15"}`}
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right — socials + theme toggle */}
        <div className={`hidden md:flex items-center gap-5 text-sm transition-colors duration-500 ${scrolled ? "text-[#111111]/60" : "text-white/60"}`}>
<a href="https://www.linkedin.com/in/thisura-perera-3b81a71a0/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a] transition-colors">
            in
          </a>
          <a href="https://github.com/ThisuraPerera09" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a] transition-colors">
            gh
          </a>
        </div>

        {/* Mobile right — hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-[#111111] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#111111] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#111111] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#f7f7f5] border-t border-[#e0e0de]"
          >
            <nav className="flex flex-col px-6 py-5 gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-[#111111] font-medium py-1 hover:text-[#1a1a1a] transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-4 pt-2 border-t border-[#e0e0de]">
                <a href="mailto:thisuraperera09@gmail.com" className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">Email</a>
                <a href="https://www.linkedin.com/in/thisura-perera-3b81a71a0/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">LinkedIn</a>
                <a href="https://github.com/ThisuraPerera09" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">GitHub</a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
