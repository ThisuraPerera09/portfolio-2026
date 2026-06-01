"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#ccc5bb] bg-[#ede8e0]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#6b6560]" style={{ fontFamily: "var(--font-dm-sans)" }}>
          Designed & Built by{" "}
          <span className="text-[#2c2c2c] font-medium">Thisura Perera</span>
        </p>
        <p className="text-xs text-[#6b6560]" style={{ fontFamily: "var(--font-dm-sans)" }}>
          Built with Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}
