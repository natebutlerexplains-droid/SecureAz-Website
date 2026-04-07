import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col items-center justify-center">
      {/* Animated background blobs */}
      <div
        className="absolute inset-0 blob"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)",
          width: "500px",
          height: "500px",
          top: "10%",
          left: "5%",
        }}
      />
      <div
        className="absolute inset-0 blob"
        style={{
          background: "radial-gradient(circle at 70% 70%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)",
          width: "600px",
          height: "600px",
          bottom: "10%",
          right: "5%",
          animationDelay: "-10s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-black/35 border border-white/10 backdrop-blur-xl rounded-full">
          <span className="text-xs font-bold uppercase tracking-wide text-cyan-400">
            SOC 2 · Azure · Compliance Automation
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
          Azure compliance, automated.
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          SECURAZ continuously scans your Azure environment, maps findings to SOC 2 controls, and
          generates audit-ready reports — so your team can ship without slowing down.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="#early-access"
            className="bg-cyan-500 text-black font-bold rounded-xl px-8 py-3 hover:bg-cyan-400 transition"
          >
            Get early access
          </Link>
          <a
            href="#features"
            className="bg-black/35 border border-white/10 text-white font-bold rounded-xl px-8 py-3 hover:bg-black/45 hover:border-white/15 transition"
          >
            See how it works
          </a>
        </div>

        {/* Social proof */}
        <p className="text-sm text-slate-400">Built for Azure-native security teams</p>
      </div>
    </section>
  );
}
