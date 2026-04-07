import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:items-start">
          {/* Left: Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-8" />
              <span className="text-white font-bold">SECURAZ</span>
            </div>
            <p className="text-slate-400 text-sm">Azure compliance, automated.</p>
          </div>

          {/* Center: Links */}
          <div className="flex justify-center gap-6">
            <Link href="/privacy" className="text-slate-400 hover:text-white transition text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-white transition text-sm">
              Terms of Service
            </Link>
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">© 2026 SECURAZ. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
