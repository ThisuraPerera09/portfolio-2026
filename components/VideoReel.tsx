"use client";

import { motion } from "framer-motion";

export default function VideoReel() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative w-full overflow-hidden"
    >
      <video
        src="/upscaled-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full object-cover max-h-[85vh]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Giant name */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-2 leading-none select-none overflow-hidden pointer-events-none">
        <motion.span
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-extrabold text-[#e8b48a]"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(3rem, 8.5vw, 10rem)",
            lineHeight: 0.82,
          }}
        >
          Thisura
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.32, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-extrabold text-[#e8b48a] text-right"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(3rem, 8.5vw, 10rem)",
            lineHeight: 0.82,
          }}
        >
          Perera
        </motion.span>
      </div>
    </motion.div>
  );
}
