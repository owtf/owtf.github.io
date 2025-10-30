const heroHighlights = [
  {
    title: "Responsive web interface",
    description: "Configure and monitor OWTF through the browser-based UI included with the project."
  },
  {
    title: "Plugin-driven automation",
    description: "Extend OWTF by adding plugins that orchestrate your favourite assessment tools and workflows."
  },
  {
    title: "Works across platforms",
    description: "Run OWTF anywhere Docker is available, including Windows and macOS environments."
  }
];

const codeSample = `pip install git+https://github.com/owtf/owtf#egg=owtf
owtf --ui

# Docker
make docker-build && make docker-run`;

const Hero = () => {
  return (
    <section id="overview" className="relative overflow-hidden pb-32 pt-24">
      <div className="section-container">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Offensive Web Testing Framework
              </h1>
              <p className="text-lg leading-relaxed text-slate-600">
                OWASP OWTF makes security assessments as efficient as possible by automating the manual, uncreative part of penetration testing while still supporting OWASP, NIST, and PTES methodologies out of the box.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://github.com/owtf/owtf/releases"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Download OWTF
                <span className="text-lg leading-none">↗</span>
              </a>
              <a
                href="https://docs.owasp.org/projects/owtf/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              >
                Read the documentation
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-inset">
                <div className="text-2xl font-semibold text-slate-900">OWASP</div>
                <p className="mt-1 text-sm text-slate-600">Community project</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-inset">
                <div className="text-2xl font-semibold text-slate-900">100+</div>
                <p className="mt-1 text-sm text-slate-600">Plugins and integrations</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-inset">
                <div className="text-2xl font-semibold text-slate-900">Interactive</div>
                <p className="mt-1 text-sm text-slate-600">Reporting after every scan</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.35em] text-slate-500">
                <span>Quick start</span>
                <span>Terminal</span>
              </div>
              <pre className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-900">
                <code className="block whitespace-pre-wrap break-words font-mono">{codeSample}</code>
              </pre>
            </div>
            <div className="grid gap-4">
              {heroHighlights.map((highlight) => (
                <div key={highlight.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-inset">
                  <h3 className="text-sm font-semibold text-slate-900">{highlight.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
