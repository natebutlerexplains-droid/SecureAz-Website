function ShieldCheckIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m7.784-4.817a.75.75 0 00-.925-.375l-.5.25a2.25 2.25 0 01-3.718-2.159v-.75a.75.75 0 00-.75-.75H9a.75.75 0 00-.75.75v.75c0-1.3-.97-2.378-2.218-2.378-.375 0-.732.098-1.044.286a.75.75 0 00-.34.835l.5 1.5A2.25 2.25 0 001.5 12v3a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021 15v-3c0-1.15-.88-2.11-2.016-2.192z"
      />
    </svg>
  );
}

function ListCheckIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-2.25C3.504 16.5 3 15.996 3 15.375v-2.25zM9.75 12c-.621 0-1.125.504-1.125 1.125v2.25c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125v-2.25c0-.621-.504-1.125-1.125-1.125h-2.25zM15.75 12c-.621 0-1.125.504-1.125 1.125v2.25c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125v-2.25c0-.621-.504-1.125-1.125-1.125h-2.25zM3 19.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-2.25c-.621 0-1.125-.504-1.125-1.125v-2.25z"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 7.5H21m-7.5 6.75H21m-7.5 6.75H21M3 7.5h.75m-.75 6.75h.75m-.75 6.75h.75"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09l-.813 2.846zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L13.5 5.25l.75-2.259a3.375 3.375 0 012.455-2.456l1.035-.26L18 0l.259 1.035a3.375 3.375 0 002.456 2.456l1.035.26L21 4.5l-.75 2.259a3.375 3.375 0 01-2.456 2.456z"
      />
    </svg>
  );
}

function CloudCheckIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 7.5H21m-7.5 6.75H21m-7.5 6.75H21M3 7.5h.75m-.75 6.75h.75m-.75 6.75h.75"
      />
    </svg>
  );
}

const features = [
  {
    icon: <ShieldCheckIcon />,
    title: "Continuous Scanning",
    description:
      "Automated scans across your entire Azure subscription. Catch misconfigurations before auditors do.",
  },
  {
    icon: <ListCheckIcon />,
    title: "SOC 2 Control Mapping",
    description:
      "Every finding automatically mapped to SOC 2 Trust Service Criteria. No manual cross-referencing.",
  },
  {
    icon: <GridIcon />,
    title: "Compliance Matrix",
    description:
      "Visual dashboard showing your SOC 2 posture across all 5 trust categories at a glance.",
  },
  {
    icon: <DocumentIcon />,
    title: "Audit-Ready Reports",
    description:
      "One-click PDF export of your compliance posture, formatted for auditors.",
  },
  {
    icon: <SparkleIcon />,
    title: "AI-Powered Findings",
    description:
      "AI triage surfaces critical risks and explains remediation steps in plain language.",
  },
  {
    icon: <CloudCheckIcon />,
    title: "Azure-Native",
    description:
      "Built specifically for Azure. Supports subscriptions, resource groups, and tenant-level scanning.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Everything you need for SOC 2 on Azure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-black/35 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-black/45 hover:border-white/15 transition"
            >
              <div className="text-cyan-400 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
