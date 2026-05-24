"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">

      {/* ── Full-screen background video ── */}
      <div className="absolute inset-0">
        <video
          src="/upscaled-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(140,70,20,0.75) 0%, rgba(160,90,40,0.35) 35%, rgba(100,55,20,0.15) 65%, rgba(60,30,10,0.25) 100%)" }} />
        {/* Page-colour fade at the very bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none" style={{ background: "linear-gradient(to top, #0d0b08 0%, transparent 100%)" }} />
        {/* Watermark cover — bottom-left corner */}
        <div className="absolute bottom-0 left-0 w-32 h-20 pointer-events-none" style={{ background: "linear-gradient(to top right, rgba(20,10,5,0.95) 0%, transparent 100%)" }} />
      </div>

      {/* ── Top-left label ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-28 left-6 md:left-10 z-20"
      >
        <p
          className="text-white/80 text-sm leading-snug font-medium"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Software Engineer
        </p>
        <div className="mt-2 w-6 h-px bg-[#c97d4e]" />
      </motion.div>


      {/* ── Giant name at bottom ── */}
      <motion.div
        style={{ y: nameY }}
        className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-2 leading-none pointer-events-none select-none overflow-hidden z-10"
      >
        <motion.span
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-extrabold text-[#e8b48a]"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(3.5rem, 8vw, 9rem)",
            lineHeight: 0.82,
          }}
        >
          Thisura
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-extrabold text-[#e8b48a] text-right"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(3.5rem, 8vw, 9rem)",
            lineHeight: 0.82,
          }}
        >
          Perera
        </motion.span>
      </motion.div>

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
