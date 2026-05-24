"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    number: "01",
    title: "AI Course Generator",
    description:
      "Full-stack web application combining AI and cognitive science to generate personalized online courses. Integrated Google Gemini AI, interactive quizzes, and a spaced repetition system (SM-2 algorithm) for better knowledge retention.",
    stack: ["Next.js", "Google Gemini API", "SQLite", "Drizzle ORM", "TypeScript"],
    github: "https://github.com/ThisuraPerera09",
    live: null,
    tag: "AI · Full-Stack",
  },
  {
    number: "02",
    title: "Next Tier",
    description:
      "Mobile-responsive web application that streamlines institute management while providing a quality learning experience to students. Features role-based access, student dashboards, and learning tools.",
    stack: ["React.js", "Chakra UI", "Redux", "Node.js", "Express.js", "Prisma", "PostgreSQL"],
    github: "https://github.com/ThisuraPerera09",
    live: null,
    tag: "Education · SaaS",
  },
  {
    number: "03",
    title: "Kalindu Auto POS",
    description:
      "Tailored Point of Sales solution for a spare parts shop — inventory management, billing, and sales tracking with a modern responsive interface.",
    stack: ["Spring Boot", "React.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/ThisuraPerera09",
    live: "https://github.com/ThisuraPerera09",
    tag: "POS · Desktop",
  },
  {
    number: "04",
    title: "PETRO",
    description:
      "Comprehensive solution streamlining internal processes of a filling station while enabling customers to pre-order fuel and oil products online.",
    stack: ["HTML5", "CSS", "PHP", "MySQL"],
    github: "https://github.com/ThisuraPerera09",
    live: null,
    tag: "Web · PHP",
  },
  {
    number: "05",
    title: "RAG Document Q&A",
    description:
      "Retrieval-Augmented Generation system that lets users upload PDF or text documents and ask natural language questions about their contents. Features HyDE-enhanced retrieval, cross-encoder reranking, and a seven-model LLM fallback chain via OpenRouter.",
    stack: ["Python", "FastAPI", "React", "Vite", "Qdrant", "sentence-transformers"],
    github: "https://github.com/ThisuraPerera09/RAG-PROJ",
    live: null,
    tag: "AI · RAG",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#ebebea]">
      <div className="py-32 px-6 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="text-xs font-medium tracking-[0.2em] text-[#1a1a1a] uppercase" style={{ fontFamily: "var(--font-dm-sans)" }}>
            03 — Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mt-2" style={{ fontFamily: "var(--font-syne)" }}>
            Things I Build
          </h2>
        </motion.div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-5">
          {projects.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#e2e2e0] rounded-2xl p-8 overflow-hidden flex flex-col justify-between min-h-[360px] hover:bg-[#d8d8d6] transition-colors duration-300"
            >
              {/* Big background number */}
              <span
                className="absolute -bottom-4 -right-2 text-[10rem] font-bold leading-none text-[#111111]/[0.05] select-none pointer-events-none group-hover:text-[#1a1a1a]/10 transition-colors duration-300"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {project.number}
              </span>

              {/* Top row */}
              <div className="flex items-start justify-between gap-4 relative z-10">
                <span
                  className="text-xs text-[#6b6b6b] bg-[#111111]/8 border border-[#111111]/10 px-3 py-1 rounded-full"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {project.tag}
                </span>

                {/* Links */}
                <div className="flex items-center gap-2 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-[#111111]/15 text-[#6b6b6b] hover:text-[#1a1a1a] hover:border-[#888888]/40 transition-all duration-200"
                    >
                      <GithubIcon size={14} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-[#111111]/15 text-[#6b6b6b] hover:text-[#1a1a1a] hover:border-[#888888]/40 transition-all duration-200"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-auto pt-10">
                <h3
                  className="text-xl md:text-2xl font-bold text-[#111111] mb-3 leading-tight min-h-[3rem] group-hover:text-[#1a1a1a] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm text-[#333333] leading-relaxed mb-5 line-clamp-4"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {project.description}
                </p>

                {/* Stack pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] text-[#1a1a1a] bg-[#1a1a1a]/8 border border-[#1a1a1a]/15 px-2.5 py-0.5 rounded-full"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2 — remaining cards, centered */}
        <div className="flex flex-wrap justify-center gap-8">
          {projects.slice(3).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#e2e2e0] rounded-2xl p-8 overflow-hidden flex flex-col justify-between min-h-[360px] w-full md:w-[calc((100%-64px)/3)] hover:bg-[#d8d8d6] transition-colors duration-300"
            >
              {/* Big background number */}
              <span
                className="absolute -bottom-4 -right-2 text-[10rem] font-bold leading-none text-[#111111]/[0.05] select-none pointer-events-none group-hover:text-[#1a1a1a]/10 transition-colors duration-300"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {project.number}
              </span>

              {/* Top row */}
              <div className="flex items-start justify-between gap-4 relative z-10">
                <span
                  className="text-xs text-[#6b6b6b] bg-[#111111]/8 border border-[#111111]/10 px-3 py-1 rounded-full"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {project.tag}
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-[#111111]/15 text-[#6b6b6b] hover:text-[#1a1a1a] hover:border-[#888888]/40 transition-all duration-200"
                    >
                      <GithubIcon size={14} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-[#111111]/15 text-[#6b6b6b] hover:text-[#1a1a1a] hover:border-[#888888]/40 transition-all duration-200"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-auto pt-10">
                <h3
                  className="text-xl md:text-2xl font-bold text-[#111111] mb-3 leading-tight min-h-[3rem] group-hover:text-[#1a1a1a] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm text-[#333333] leading-relaxed mb-5 line-clamp-4"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] text-[#1a1a1a] bg-[#1a1a1a]/8 border border-[#1a1a1a]/15 px-2.5 py-0.5 rounded-full"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
