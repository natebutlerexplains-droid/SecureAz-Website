export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="securaz-grad" x1="2" y1="2" x2="30" y2="30">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="0.55" stopColor="#38bdf8" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <path
        d="M16 3.5c4.5 3.1 8.6 3.1 11 3.3v9.8c0 7.4-5.2 11.1-11 12.9C10.2 27.7 5 24 5 16.6V6.8c2.4-.2 6.5-.2 11-3.3Z"
        stroke="url(#securaz-grad)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M11.2 16.2l3.1 3.2 6.8-7.2"
        stroke="white"
        strokeOpacity="0.92"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
