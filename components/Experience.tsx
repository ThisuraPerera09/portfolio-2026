"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    number: "01",
    role: "Associate Software Engineer",
    company: "Avonet Technologies",
    url: "https://www.theavo.net",
    period: "2025 – Present",
    points: [
      "Worked on the development and maintenance of the AgSafe CRM platform and AGT greenhouse management application.",
      "Implemented integrations and enhanced system functionality through new features and improvements.",
      "Collaborated in an agile team using NestJS, Next.js, TypeScript, and AWS services.",
    ],
    stack: [
      "NestJS",
      "Next.js",
      "React JS",
      "TypeScript",
      "DynamoDB",
      "PostgreSQL",
      "MySQL",
      "AWS",
      "Azure",
    ],
  },
  {
    number: "02",
    role: "Software Engineer Intern",
    company: "Avonet Technologies",
    url: "https://www.theavo.net",
    period: "2024 – 2025",
    points: [
      "Developed and integrated Distribusion's APIs into the backend to create a fully functional ticket booking system.",
      "Built the frontend UI to ensure seamless operations and an enhanced user experience.",
      "Worked with cloud-native tools including AWS Lambda, OpenSearch, and CloudWatch.",
    ],
    stack: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "DynamoDB",
      "AWS Lambda",
      "CloudWatch",
      "OpenSearch",
    ],
  },
  {
    number: "03",
    role: "Software Engineer Intern",
    company: "Ebeyonds",
    url: "#",
    period: "2023 – 2024",
    points: [
      "Developed and maintained a scalable e-commerce platform designed to facilitate seamless online shopping experiences.",
      "Applied Agile development methodologies to deliver features in iterative sprints.",
      "Worked across the stack using React, Laravel, MySQL, and Redis.",
    ],
    stack: ["React.js", "Ext.js", "Laravel", "MySQL", "Redis"],
  },
];

const blobs = [
  {
    style: {
      width: 220,
      height: 220,
      background:
        "radial-gradient(circle at 35% 30%, #d4cdc2 0%, #a8a098 40%, #6b6560 70%, #2c2c2c 100%)",
      borderRadius: "50%",
      top: "4%",
      right: "3%",
      boxShadow:
        "inset -10px -10px 24px rgba(0,0,0,0.15), 4px 8px 24px rgba(0,0,0,0.15)",
      opacity: 0.5,
    },
    animate: { y: [0, 12, 0] },
    duration: 9,
  },
  {
    style: {
      width: 150,
      height: 150,
      background:
        "radial-gradient(circle at 35% 30%, #e0d8ce 0%, #bcb4aa 35%, #888078 65%, #3a3a3a 100%)",
      borderRadius: "50%",
      bottom: "10%",
      left: "2%",
      boxShadow:
        "inset -8px -8px 20px rgba(0,0,0,0.15), 3px 6px 20px rgba(0,0,0,0.15)",
      opacity: 0.4,
    },
    animate: { y: [0, -10, 0] },
    duration: 11,
  },
];

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="relative bg-[#ede8e0] overflow-hidden">
      {/* Blobs */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={blob.style as React.CSSProperties}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── Statement ── */}
      <div className="relative z-10 px-6 max-w-6xl mx-auto pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          <p className="text-[clamp(2.4rem,6vw,5.5rem)] font-bold text-[#1a1a1a]">
            2 years turning ideas into
          </p>
          <p className="text-[clamp(2.4rem,6vw,5.5rem)] font-bold text-[#1a1a1a] flex flex-wrap items-center gap-x-4 gap-y-2">
            software that{" "}
            <span className="inline-flex items-center px-6 py-1 rounded-full bg-[#2c2c2c]/10 text-[#2c2c2c]">
              ships
            </span>{" "}
            and
          </p>
          <p className="text-[clamp(2.4rem,6vw,5.5rem)] font-bold text-[#1a1a1a] flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center px-6 py-1 rounded-full bg-[#2c2c2c]/10 text-[#2c2c2c]">
              scales.
            </span>
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="px-6 max-w-6xl mx-auto">
        <div className="h-px bg-[#ccc5bb]" />
      </div>

      {/* ── Where I've Worked ── */}
      <div className="relative z-10 px-6 max-w-6xl mx-auto pt-16 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <span
            className="text-xs font-medium tracking-[0.2em] text-[#2c2c2c] uppercase"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            02 — Experience
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mt-2"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        <div className="border-t border-[#ccc5bb]">
          {experiences.map((exp, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="border-b border-[#ccc5bb]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-7 group text-left"
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span
                      className="text-xs text-[#6b6560] tabular-nums shrink-0"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {exp.number}
                    </span>
                    <span
                      className={`text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-200 ${isOpen ? "text-[#2c2c2c]" : "text-[#1a1a1a] group-hover:text-[#2c2c2c]"}`}
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 shrink-0 ml-4">
                    <span
                      className="hidden sm:block text-sm text-[#6b6560]"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {exp.period}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`text-xl font-light leading-none transition-colors duration-200 ${isOpen ? "text-[#2c2c2c]" : "text-[#6b6560] group-hover:text-[#2c2c2c]"}`}
                    >
                      ↗
                    </motion.span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-12 md:pl-20 pr-4 md:pr-12">
                        <p
                          className="text-sm font-medium text-[#2c2c2c] mb-4"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {exp.role}
                          <span className="text-[#6b6560] font-normal ml-2 sm:hidden">
                            · {exp.period}
                          </span>
                        </p>
                        <ul className="space-y-3 mb-6">
                          {exp.points.map((point, j) => (
                            <li
                              key={j}
                              className="flex gap-3 text-sm text-[#1a1a1a] leading-relaxed"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              <span className="text-[#2c2c2c] mt-0.5 shrink-0">
                                ▹
                              </span>
                              {point}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.stack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] text-[#2c2c2c] bg-[#2c2c2c]/8 border border-[#2c2c2c]/20 px-3 py-1 rounded-full"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
