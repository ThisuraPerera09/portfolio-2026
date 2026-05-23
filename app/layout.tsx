import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Providers from "@/components/Providers";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Thisura Perera — Software Engineer",
  description:
    "Portfolio of Thisura Perera, a software engineer specializing in full-stack web development and cloud technologies.",
  keywords: ["Thisura Perera", "Software Engineer", "Next.js", "React", "AWS"],
  authors: [{ name: "Thisura Perera" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} antialiased`}>
      <body className="bg-[#e8ddd0] text-[#1a1410] overflow-x-hidden dark:bg-[#141210] dark:text-[#f0e8de]">
        <Providers>
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
