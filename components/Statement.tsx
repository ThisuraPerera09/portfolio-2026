"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    style: {
      width: 220, height: 220,
      background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.9) 0%, rgba(200,200,200,0.6) 40%, rgba(80,80,80,0.4) 70%, rgba(20,20,20,0.6) 100%)",
      borderRadius: "50%",
      top: "10%", right: "4%",
      boxShadow: "inset -12px -12px 28px rgba(0,0,0,0.25), 6px 10px 30px rgba(0,0,0,0.1)",
      opacity: 0.35,
    },
    animate: { y: [0, 12, 0] },
    duration: 9,
  },
  {
    style: {
      width: 160, height: 160,
      background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.85) 0%, rgba(210,210,210,0.55) 40%, rgba(100,100,100,0.35) 70%, rgba(30,30,30,0.5) 100%)",
      borderRadius: "50%",
      bottom: "12%", left: "2%",
      boxShadow: "inset -10px -10px 22px rgba(0,0,0,0.2), 4px 8px 22px rgba(0,0,0,0.08)",
      opacity: 0.3,
    },
    animate: { y: [0, -10, 0] },
    duration: 11,
  },
  {
    style: {
      width: 100, height: 100,
      background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.8) 0%, rgba(190,190,190,0.5) 40%, rgba(80,80,80,0.35) 70%, rgba(20,20,20,0.5) 100%)",
      borderRadius: "50%",
      bottom: "20%", right: "14%",
      boxShadow: "inset -8px -8px 18px rgba(0,0,0,0.2), 3px 6px 16px rgba(0,0,0,0.08)",
      opacity: 0.3,
    },
    animate: { y: [0, 8, 0] },
    duration: 8,
  },
];

export default function Statement() {
  return (
    <section className="relative py-28 px-6 bg-[#f7f7f5] overflow-hidden">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={blob.style as React.CSSProperties}
          animate={blob.animate}
          transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          <p className="text-[clamp(2.4rem,6vw,5.5rem)] font-bold text-[#111111]">
            2 years turning ideas into
          </p>
          <p className="text-[clamp(2.4rem,6vw,5.5rem)] font-bold text-[#111111] flex flex-wrap items-center gap-x-4 gap-y-2">
            software that{" "}
            <span className="inline-flex items-center px-6 py-1 rounded-full bg-[#1a1a1a]/10 text-[#1a1a1a]">
              ships
            </span>{" "}
            and
          </p>
          <p className="text-[clamp(2.4rem,6vw,5.5rem)] font-bold text-[#111111] flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center px-6 py-1 rounded-full bg-[#1a1a1a]/10 text-[#1a1a1a]">
              scales.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
