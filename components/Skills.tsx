"use client";

import { motion, type Variants } from "framer-motion";

const rows = [
  {
    label: "Languages & Frameworks",
    items: ["JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "NestJS", "Tailwind CSS", "Chakra UI", "Express.js", "HTML5", "CSS3", "Java"],
    direction: "left" as const,
  },
  {
    label: "Databases & Cloud",
    items: ["PostgreSQL", "MySQL", "DynamoDB", "SQLite", "Redis", "AWS Lambda", "Amazon RDS", "AWS S3", "CloudWatch", "EC2", "OpenSearch", "Docker"],
    direction: "right" as const,
  },
  {
    label: "Tools & Practices",
    items: ["Git", "GitHub", "CI/CD", "Postman", "Jira", "Prisma", "Drizzle ORM", "Agile", "OOP", "SDLC", "Prompt Engineering", "AI Integration"],
    direction: "left" as const,
  },
];

const certs = [
  { title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services" },
  { title: "Java Application Development using JavaSE", issuer: "UCSC" },
  { title: "100 Days of Cloud (AWS)", issuer: "KodeKloud" },
  { title: "100 Days of Cloud (Azure)", issuer: "KodeKloud" },
];

function MarqueeRow({ label, items, direction }: Readonly<{ label: string; items: string[]; direction: "left" | "right" }>) {
  const doubled = [...items, ...items];
  return (
    <div>
      <p className="px-6 max-w-6xl mx-auto mb-2 text-[10px] font-medium tracking-[0.18em] text-[#c97d4e]/60 uppercase" style={{ fontFamily: "var(--font-dm-sans)" }}>
        {label}
      </p>
      <div className="relative overflow-hidden group py-1">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0d0b08, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0d0b08, transparent)" }} />
        <div
          className="flex gap-3 w-max group-hover:[animation-play-state:paused]"
          style={{ animation: `marquee-${direction} 28s linear infinite` }}
        >
          {doubled.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2a2018] bg-[#1a1510] text-sm text-[#ede4d8] whitespace-nowrap hover:border-[#c97d4e] hover:bg-[#c97d4e]/5 hover:text-[#c97d4e] transition-all duration-200 select-none"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c97d4e]/40 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#0d0b08] overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.div variants={fadeInUp} className="px-6 max-w-6xl mx-auto mb-14">
          <span className="text-xs font-medium tracking-[0.2em] text-[#c97d4e] uppercase" style={{ fontFamily: "var(--font-dm-sans)" }}>
            01 — Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#ede4d8] mt-2" style={{ fontFamily: "var(--font-syne)" }}>
            What I Work With
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-3">
          {rows.map((row) => (
            <MarqueeRow key={row.items[0]} label={row.label} items={row.items} direction={row.direction} />
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="px-6 max-w-6xl mx-auto mt-10">
          <p className="text-sm font-medium text-[#7a6a58] mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Certifications
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certs.map((cert) => (
              <div
                key={cert.title}
                className="flex items-center gap-3 bg-[#1a1510] border border-[#2a2018] rounded-xl px-5 py-3.5 hover:border-[#c97d4e]/30 transition-colors"
              >
                <span className="text-[#c97d4e] text-lg">✦</span>
                <div>
                  <p className="text-sm font-medium text-[#ede4d8]" style={{ fontFamily: "var(--font-dm-sans)" }}>{cert.title}</p>
                  <p className="text-xs text-[#7a6a58]" style={{ fontFamily: "var(--font-dm-sans)" }}>{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
