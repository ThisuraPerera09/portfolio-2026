"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#ede8e0]">
      <div className="max-w-6xl mx-auto">

        {/* Label row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-5 mb-16"
        >
          <span
            className="text-xs font-medium tracking-[0.25em] text-[#2c2c2c] uppercase"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            00 — About
          </span>
          <div className="h-px bg-[#ccc5bb] flex-1" />
        </motion.div>

        {/* Big headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2rem,4.5vw,4rem)] font-bold text-[#1a1a1a] leading-[1.15] tracking-tight mb-12"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Quality-focused engineer who{" "}
          <span className="text-[#2c2c2c]">builds</span>,{" "}
          <span className="text-[#2c2c2c]">ships</span>, and{" "}
          <span className="text-[#2c2c2c]">scales</span> — with purpose.
        </motion.p>

        {/* Body copy — two columns on desktop */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[1.05rem] text-[#1a1a1a] leading-[1.8]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            I'm a self-motivated software engineer with a strong passion for technology and practical problem-solving. With 1–2 years of experience, I thrive in collaborative environments where innovation meets impact.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-[1.05rem] text-[#1a1a1a] leading-[1.8]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            I enjoy building scalable web applications and continuously learning new technologies. Particularly interested in cloud platforms like AWS and applying modern development best practices to deliver reliable, high-quality solutions.
          </motion.p>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-[#ccc5bb] flex flex-wrap items-center justify-between gap-4"
        >
          <p
            className="text-xs text-[#2c2c2c] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Colombo, Sri Lanka · Open to opportunities
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2c2c2c] hover:gap-3 transition-all duration-200"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Get in touch ↗
          </a>
        </motion.div>

      </div>
    </section>
  );
}
