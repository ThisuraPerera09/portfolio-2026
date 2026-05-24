"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const socials = [
  { icon: GithubIcon,   label: "GitHub",   href: "https://github.com/ThisuraPerera09" },
  { icon: LinkedinIcon, label: "LinkedIn",  href: "https://www.linkedin.com/in/thisura-perera-3b81a71a0/" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-medium tracking-[0.2em] text-[#888888] uppercase mb-6"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        04 — Contact
      </motion.p>

      {/* Big headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.95] tracking-tight text-[#f0f0f0] mb-10"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        Let&apos;s Work<br />Together.
      </motion.h2>

      {/* Divider + tagline row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 mb-14"
      >
        <div className="h-px bg-[#2a2a2a] flex-1" />
        <p
          className="text-[#6b6b6b] text-sm max-w-sm leading-relaxed shrink-0"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Open to new opportunities, collaborations,<br className="hidden sm:block" /> or just a friendly chat.
        </p>
      </motion.div>

      {/* Email — big clickable */}
      <motion.a
        href="mailto:thisuraperera09@gmail.com"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="group inline-flex items-end gap-4 mb-20"
      >
        <span
          className="text-[clamp(1.25rem,3.5vw,2.5rem)] font-semibold text-[#f0f0f0] group-hover:text-[#888888] transition-colors duration-300 border-b-2 border-[#2a2a2a] group-hover:border-[#888888] pb-1"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          thisuraperera09@gmail.com
        </span>
        <motion.span
          className="text-2xl text-[#888888] mb-1"
          animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ↗
        </motion.span>
      </motion.a>

      {/* Bottom row — socials + phone */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap items-center justify-between gap-6 border-t border-[#2a2a2a] pt-8"
      >
        <div className="flex items-center gap-6">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#6b6b6b] hover:text-[#888888] transition-colors duration-200 group"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <Icon size={15} />
              <span className="group-hover:underline underline-offset-4">{label}</span>
            </a>
          ))}
        </div>

        <a
          href="tel:+94701097409"
          className="text-sm text-[#6b6b6b] hover:text-[#888888] transition-colors duration-200 hover:underline underline-offset-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          +94 701 097 409
        </a>
      </motion.div>
      </div>
    </section>
  );
}
