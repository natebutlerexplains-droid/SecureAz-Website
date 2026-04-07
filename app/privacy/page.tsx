import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050b18]">
      {/* Header with back link */}
      <div className="bg-black/40 border-b border-white/10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7 7l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-8">Privacy Policy</h1>

          <div className="space-y-6 text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p>
                SECURAZ (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the securaz.web.app website and related
                services (the &ldquo;Service&rdquo;). This Privacy Policy explains our practices regarding the collection,
                use, disclosure, and protection of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p>
                We collect information you provide directly, such as when you submit the early access form,
                contact us, or register for notifications. This may include your email address and name.
              </p>
              <p className="mt-3">
                We also automatically collect certain information about your device and how you interact with
                our Service, including IP address, browser type, pages visited, and timestamps.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates about SECURAZ and early access opportunities</li>
                <li>Monitor and analyze usage trends and improve our Service</li>
                <li>Comply with legal obligations and enforce our agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information from
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the Internet is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p>
                Our Service may link to or integrate with third-party services. We are not responsible for
                their privacy practices. We encourage you to review their privacy policies before providing
                personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may have rights regarding your personal information,
                including the right to access, correct, or delete your data. Contact us at legal@securaz.io
                to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at legal@securaz.io or
                through our website.
              </p>
            </section>

            <section className="text-xs text-slate-500 mt-12 pt-8 border-t border-white/10">
              <p>Last updated: April 2026</p>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
