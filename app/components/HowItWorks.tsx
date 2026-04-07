const steps = [
  {
    number: 1,
    title: "Connect your Azure environment",
    description:
      "Authorize SECURAZ with read-only access to your Azure subscription. No agents, no infrastructure changes.",
  },
  {
    number: 2,
    title: "Scan & map findings",
    description:
      "SECURAZ scans your environment and maps every finding to the relevant SOC 2 controls automatically.",
  },
  {
    number: 3,
    title: "Generate reports",
    description:
      "Export audit-ready compliance reports with one click. Share directly with your auditor.",
  },
];

export function HowItWorks() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">How it works</h2>
        </div>

        {/* Desktop: Horizontal flow */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Connector line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent -translate-y-1/2" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative flex-1 flex flex-col items-center px-4">
              {/* Step circle */}
              <div className="relative z-10 mb-6 w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-cyan-400">{step.number}</span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white text-center mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm text-center">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical flow */}
        <div className="md:hidden space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4">
              {/* Left: Number circle */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center">
                  <span className="text-lg font-bold text-cyan-400">{step.number}</span>
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
