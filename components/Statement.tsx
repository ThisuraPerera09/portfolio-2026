"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    style: {
      width: 220, height: 220,
      background: "radial-gradient(circle at 35% 30%, #fde8d8 0%, #e8a87c 30%, #c47848 58%, #8a4820 85%)",
      borderRadius: "50%",
      top: "10%", right: "4%",
      boxShadow: "inset -10px -10px 24px rgba(0,0,0,0.15), 4px 8px 24px rgba(180,100,60,0.18)",
      opacity: 0.55,
    },
    animate: { y: [0, 12, 0] },
    duration: 9,
  },
  {
    style: {
      width: 160, height: 160,
      background: "radial-gradient(circle at 35% 30%, #f8f4f0 0%, #d0c8c0 32%, #a09088 60%, #786860 85%)",
      borderRadius: "50%",
      bottom: "12%", left: "2%",
      boxShadow: "inset -8px -8px 20px rgba(0,0,0,0.18), 3px 6px 20px rgba(100,90,80,0.15)",
      opacity: 0.5,
    },
    animate: { y: [0, -10, 0] },
    duration: 11,
  },
  {
    style: {
      width: 100, height: 100,
      background: "radial-gradient(circle at 35% 30%, #fde0cc 0%, #dda070 35%, #b06030 65%, #7a3810 100%)",
      borderRadius: "50%",
      bottom: "20%", right: "14%",
      boxShadow: "inset -6px -6px 16px rgba(0,0,0,0.15), 2px 4px 14px rgba(180,100,60,0.15)",
      opacity: 0.45,
    },
    animate: { y: [0, 8, 0] },
    duration: 8,
  },
];

export default function Statement() {
  return (
    <section className="relative py-28 px-6 bg-[#e8ddd0] overflow-hidden">
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
          <p className="text-[clamp(2.4rem,6vw,5.5rem)] font-bold text-[#1a1410]">
            2 years turning ideas into
          </p>
          <p className="text-[clamp(2.4rem,6vw,5.5rem)] font-bold text-[#1a1410] flex flex-wrap items-center gap-x-4 gap-y-2">
            software that{" "}
            <span className="inline-flex items-center px-6 py-1 rounded-full bg-[#c97d4e]/15 text-[#c97d4e]">
              ships
            </span>{" "}
            and
          </p>
          <p className="text-[clamp(2.4rem,6vw,5.5rem)] font-bold text-[#1a1410] flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center px-6 py-1 rounded-full bg-[#c97d4e]/15 text-[#c97d4e]">
              scales.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
