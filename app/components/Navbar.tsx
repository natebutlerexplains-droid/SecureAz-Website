"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and wordmark */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <Logo className="w-8 h-8" />
            <span className="text-white font-bold text-lg hidden sm:inline">SECURAZ</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://az-soc2-dev.web.app/login"
              className="text-slate-300 hover:text-white transition font-medium"
            >
              Sign in
            </a>
            <Link
              href="#early-access"
              className="bg-cyan-500 text-black font-bold rounded-xl px-4 py-2 hover:bg-cyan-400 transition"
            >
              Get early access
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a
              href="https://az-soc2-dev.web.app/login"
              className="block text-slate-300 hover:text-white transition font-medium py-2"
            >
              Sign in
            </a>
            <Link
              href="#early-access"
              className="block bg-cyan-500 text-black font-bold rounded-xl px-4 py-2 hover:bg-cyan-400 transition text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get early access
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
