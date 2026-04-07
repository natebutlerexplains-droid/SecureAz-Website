import Link from "next/link";

export default function TermsPage() {
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
          <h1 className="text-4xl font-black text-white mb-8">Terms of Service</h1>

          <div className="space-y-6 text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using the SECURAZ website and services, you accept and agree to be bound by
                the terms and provision of this agreement. If you do not agree to abide by the above, please
                do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or
                software) on the SECURAZ website for personal, non-commercial transitory viewing only. This is
                the grant of a license, not a transfer of title, and under this license you may&nbsp;not:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the site</li>
                <li>Transfer the materials to another person or &ldquo;mirror&rdquo; the materials on any other server</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <p>
                The materials on the SECURAZ website are provided on an &apos;as is&apos; basis. SECURAZ makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties
                including, without limitation, implied warranties or conditions of merchantability, fitness
                for a particular purpose, or non-infringement of intellectual property or other violation of
                rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitations</h2>
              <p>
                In no event shall SECURAZ or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out
                of the use or inability to use the materials on the SECURAZ website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Accuracy of Materials</h2>
              <p>
                The materials appearing on the SECURAZ website could include technical, typographical, or
                photographic errors. SECURAZ does not warrant that any of the materials on the website are
                accurate, complete, or current. SECURAZ may make changes to the materials contained on the
                website at any time without&nbsp;notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Links</h2>
              <p>
                SECURAZ has not reviewed all of the sites linked to its website and is not responsible for
                the contents of any such linked site. The inclusion of any link does not imply endorsement by
                SECURAZ of the site. Use of any such linked website is at the user&apos;s own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Modifications</h2>
              <p>
                SECURAZ may revise these terms of service for the website at any time without notice. By using
                this website, you are agreeing to be bound by the then current version of these terms of
                service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the
                jurisdiction in which SECURAZ is located, and you irrevocably submit to the exclusive
                jurisdiction of the courts in that location.
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
