import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Providers from "@/components/Providers";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
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
    <html lang="en" className={`${syne.variable} ${inter.variable} antialiased`}>
      <body className="bg-[#f7f7f5] text-[#111111] overflow-x-hidden">
        <Providers>
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
