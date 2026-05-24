"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#e0e0de] bg-[#f7f7f5]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#6b6b6b]" style={{ fontFamily: "var(--font-dm-sans)" }}>
          Designed & Built by{" "}
          <span className="text-[#1a1a1a] font-medium">Thisura Perera</span>
        </p>
        <p className="text-xs text-[#6b6b6b]" style={{ fontFamily: "var(--font-dm-sans)" }}>
          Built with Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}
