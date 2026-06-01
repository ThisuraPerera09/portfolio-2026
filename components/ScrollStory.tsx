"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const slides = [
  {
    intro: "Companies work with me because of my",
    heading: "clean code +\nsharp thinking",
    body: "I bring a reliable and pragmatic approach that makes your product ship on time.",
  },
  {
    intro: "I specialise in building",
    heading: "scalable\nfull-stack apps",
    body: "From React frontends to NestJS backends — end-to-end, production-ready, built to last.",
  },
  {
    intro: "Above all, I care about",
    heading: "quality +\ncontinuous growth",
    body: "I stay current with industry trends and apply modern best practices to every line of code.",
  },
];

export default function ScrollStory() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    triggerRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { threshold: 0.5 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section ref={containerRef} className="relative">
      {/* ── Scroll triggers (invisible, set height) ── */}
      <div className="relative" style={{ height: `${slides.length * 100}vh` }}>
        {/* Sticky full-screen background */}
        <div className="sticky top-0 h-screen overflow-hidden relative">
          {/* Video */}
          <video
            src="/upscaled-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          />

          {/* Warm dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(24,24,24,0.88) 0%, rgba(40,40,40,0.5) 55%, rgba(24,24,24,0.12) 100%)",
            }}
          />

          {/* ── Text overlay ── */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Intro line */}
                <p
                  className="text-white/60 text-base md:text-lg mb-4 leading-snug"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {slides[active].intro}
                </p>

                {/* Big heading */}
                <h2
                  className="text-[clamp(3rem,7vw,6.5rem)] font-bold text-[#f0ece6] leading-[1.0] tracking-tight mb-8 whitespace-pre-line"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {slides[active].heading}
                </h2>

                {/* Divider */}
                <div className="w-full h-px bg-white/20 mb-6" />

                {/* Body */}
                <p
                  className="text-white/70 text-sm md:text-base leading-relaxed max-w-sm"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {slides[active].body}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slide counter */}
            <div className="flex items-center gap-3 mt-10">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`h-px transition-all duration-500 ${i === active ? "w-8 bg-[#2c2c2c]" : "w-4 bg-white/25"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Invisible trigger divs that drive the scroll */}
        <div className="absolute inset-0 pointer-events-none">
          {slides.map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              style={{
                height: "100vh",
                top: `${i * 100}vh`,
                position: "absolute",
                width: "100%",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
