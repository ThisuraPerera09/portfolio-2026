"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

type Project = {
  number: string;
  title: string;
  description: string;
  stack: string[];
  github: string;
  githubServer?: string;
  live?: string | null;
  tag: string;
  type: "project" | "learning";
};

const projects: Project[] = [
  {
    number: "01",
    title: "AI Course Generator",
    description:
      "Full-stack web application combining AI and cognitive science to generate personalized online courses. Integrated Google Gemini AI, interactive quizzes, and a spaced repetition system (SM-2 algorithm) for better knowledge retention.",
    stack: ["Next.js", "Google Gemini API", "SQLite", "Drizzle ORM", "TypeScript"],
    github: "https://github.com/ThisuraPerera09/AI-course-generator",
    live: null,
    tag: "AI · Full-Stack",
    type: "project",
  },
  {
    number: "02",
    title: "Next Tier",
    description:
      "Mobile-responsive web application that streamlines institute management while providing a quality learning experience to students. Features role-based access, student dashboards, and learning tools.",
    stack: ["React.js", "Chakra UI", "Redux", "Node.js", "Express.js", "Prisma", "PostgreSQL"],
    github: "https://github.com/Harsha-Gunawardane/next_tier_client",
    githubServer: "https://github.com/Harsha-Gunawardane/Next-Tier-Server",
    live: null,
    tag: "Education · SaaS",
    type: "project",
  },
  {
    number: "03",
    title: "Kalindu Auto POS",
    description:
      "Tailored Point of Sales solution for a spare parts shop — inventory management, billing, and sales tracking with a modern responsive interface.",
    stack: ["Spring Boot", "React.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/Devx10-dev/kalindu-auto-front",
    githubServer: "https://github.com/Devx10-dev/kalinduAutoSource",
    live: null,
    tag: "POS · Desktop",
    type: "project",
  },
  {
    number: "04",
    title: "PETRO",
    description:
      "Comprehensive solution streamlining internal processes of a filling station while enabling customers to pre-order fuel and oil products online.",
    stack: ["HTML5", "CSS", "PHP", "MySQL"],
    github: "https://github.com/ThisuraPerera09/PETRO-2nd-year-group-project",
    live: null,
    tag: "Web · PHP",
    type: "project",
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
    type: "project",
  },
  {
    number: "01",
    title: "CI/CD with Jenkins",
    description:
      "Hands-on exploration of CI/CD pipelines using Jenkins — automated build, test, and deployment workflows with containerised environments.",
    stack: ["Jenkins", "Docker", "Shell"],
    github: "https://github.com/ThisuraPerera09/CI-CD-jenkins",
    live: null,
    tag: "DevOps · CI/CD",
    type: "learning",
  },
  {
    number: "02",
    title: "Next.js Optimization",
    description:
      "Deep dive into Next.js performance techniques — image optimization, code splitting, caching strategies, and bundle analysis to push Core Web Vitals scores.",
    stack: ["Next.js", "TypeScript", "Webpack"],
    github: "https://github.com/ThisuraPerera09/next-optimization",
    live: null,
    tag: "Next.js · Performance",
    type: "learning",
  },
  {
    number: "03",
    title: "Node Worker Threads",
    description:
      "Exploration of Node.js Worker Threads for offloading CPU-intensive tasks, improving throughput without blocking the event loop.",
    stack: ["Node.js", "TypeScript"],
    github: "https://github.com/ThisuraPerera09/node-worker-threads",
    live: null,
    tag: "Node.js · Concurrency",
    type: "learning",
  },
];

const cardClass =
  "group relative bg-[#d4cdc2] rounded-2xl p-8 overflow-hidden flex flex-col justify-between min-h-[360px] hover:bg-[#cbc4b8] transition-colors duration-300";

function ProjectCard({ project, i }: { project: Project; i: number }) {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={cardClass}
    >
      {/* Big background number */}
      <span
        className="absolute -bottom-4 -right-2 text-[10rem] font-bold leading-none text-[#1a1a1a]/[0.05] select-none pointer-events-none group-hover:text-[#2c2c2c]/10 transition-colors duration-300"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        {project.number}
      </span>

      {/* Top row */}
      <div className="flex items-start justify-between gap-4 relative z-10">
        <span
          className="text-xs text-[#6b6560] bg-[#1a1a1a]/8 border border-[#1a1a1a]/10 px-3 py-1 rounded-full"
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
              title={project.githubServer ? "Client repo" : "GitHub"}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[#1a1a1a]/15 text-[#6b6560] hover:text-[#2c2c2c] hover:border-[#2c2c2c]/40 transition-all duration-200"
            >
              <GithubIcon size={14} />
            </a>
          )}
          {project.githubServer && (
            <a
              href={project.githubServer}
              target="_blank"
              rel="noopener noreferrer"
              title="Server repo"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[#1a1a1a]/15 text-[#6b6560] hover:text-[#2c2c2c] hover:border-[#2c2c2c]/40 transition-all duration-200"
            >
              <GithubIcon size={14} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[#1a1a1a]/15 text-[#6b6560] hover:text-[#2c2c2c] hover:border-[#2c2c2c]/40 transition-all duration-200"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto pt-10">
        <h3
          className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-3 leading-tight min-h-[3rem] group-hover:text-[#2c2c2c] transition-colors duration-300"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm text-[#6b6560] leading-relaxed mb-5 line-clamp-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] text-[#2c2c2c] bg-[#2c2c2c]/8 border border-[#2c2c2c]/20 px-2.5 py-0.5 rounded-full"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"project" | "learning">("project");

  const visible = projects.filter((p) => p.type === activeTab);

  return (
    <section id="projects" className="bg-[#ddd7cc]">
      <div className="py-32 px-6 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <span
            className="text-xs font-medium tracking-[0.2em] text-[#2c2c2c] uppercase"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            03 — Projects
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mt-2"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Things I Build
          </h2>
        </motion.div>

        {/* Tab toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="flex gap-2 mb-12"
        >
          {(["project", "learning"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 border ${
                activeTab === tab
                  ? "bg-[#1a1a1a] text-[#ede8e0] border-[#1a1a1a]"
                  : "bg-transparent text-[#6b6560] border-[#1a1a1a]/20 hover:border-[#1a1a1a]/50 hover:text-[#2c2c2c]"
              }`}
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {tab === "project" ? "Projects" : "Learning"}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {visible.map((project, i) => (
              <ProjectCard key={project.title} project={project} i={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
