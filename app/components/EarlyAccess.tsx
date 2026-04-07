"use client";

import { useState } from "react";

export function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="early-access" className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="relative bg-black/35 border border-white/10 backdrop-blur-xl rounded-2xl p-8 sm:p-12 overflow-hidden">
          {/* Gradient border glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition pointer-events-none rounded-2xl" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-4">
              Be among the first to automate your Azure SOC 2
            </h2>
            <p className="text-center text-slate-400 mb-8">
              SECURAZ is in early access. Join the waitlist and get notified when we open spots.
            </p>

            {submitted ? (
              <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-center">
                <p className="text-green-400 font-semibold">
                  ✓ Thanks for joining! Check your email for updates.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition"
                />
                <button
                  type="submit"
                  className="bg-cyan-500 text-black font-bold rounded-lg px-6 py-3 hover:bg-cyan-400 transition whitespace-nowrap"
                >
                  Join waitlist
                </button>
              </form>
            )}

            <p className="text-center text-xs text-slate-500 mt-6">
              No spam. No credit card. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
