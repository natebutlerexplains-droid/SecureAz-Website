function ClipboardIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9v2m0 4v2m0 6l.708.293M3.463 3.463l1.414-1.414M20.121 3.121l1.414 1.414m0 16.97l1.414 1.414M3.121 20.121l1.414 1.414M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"
      />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 7.5A4.5 4.5 0 0112 3c2.49 0 4.575 1.92 4.97 4.415M19.5 12a4.5 4.5 0 01-4.5 4.5H9a4.5 4.5 0 110-9h6a4.5 4.5 0 014.5 4.5z"
      />
    </svg>
  );
}

const problems = [
  {
    icon: <ClipboardIcon />,
    title: "Manual compliance is slow",
    description:
      "Audits take months of manual evidence collection. SECURAZ automates the entire process.",
  },
  {
    icon: <AlertIcon />,
    title: "Findings get lost",
    description:
      "Security findings buried in spreadsheets miss deadlines. SECURAZ surfaces what matters, when it matters.",
  },
  {
    icon: <CloudIcon />,
    title: "Azure coverage gaps",
    description:
      "Generic tools miss Azure-specific controls. SECURAZ is built exclusively for Azure environments.",
  },
];

export function ProblemSolution() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="bg-black/35 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-black/45 hover:border-white/15 transition"
            >
              <div className="text-cyan-400 mb-4">{problem.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-slate-400 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
