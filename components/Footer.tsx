"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#ddd4c8] bg-[#e8ddd0]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#7a6a5a]" style={{ fontFamily: "var(--font-dm-sans)" }}>
          Designed & Built by{" "}
          <span className="text-[#c97d4e] font-medium">Thisura Perera</span>
        </p>
        <p className="text-xs text-[#7a6a5a]" style={{ fontFamily: "var(--font-dm-sans)" }}>
          Built with Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}
