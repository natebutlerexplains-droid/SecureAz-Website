import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SECURAZ — Azure Compliance, Automated",
  description:
    "SECURAZ continuously scans your Azure environment, maps findings to SOC 2 controls, and generates audit-ready reports — so your team can ship without slowing down.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#050b18] text-white">
        {children}
      </body>
    </html>
  );
}
