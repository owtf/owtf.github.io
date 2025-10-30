const heroHighlights = [
  {
    title: "Orchestrate every tool",
    description: "Launch plugins, scripts, and custom checks in curated sequences that mirror your methodology."
  },
  {
    title: "Collaborate in real time",
    description: "Share coverage, evidence, and remediation notes instantly with the people who need them."
  },
  {
    title: "Report with confidence",
    description: "Export executive-ready deliverables with traceable evidence and remediation insights."
  }
];

const stats = [
  { value: "100+", label: "Plugins maintained" },
  { value: "15 min", label: "to first findings" },
  { value: "10k+", label: "community hours invested" }
];

const codeSample = `# bootstrap OWTF locally
pip install git+https://github.com/owtf/owtf
owtf --ui

# or run the full stack via docker
make docker-run`; 

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(0,224,255,0.32),_transparent_65%)]" />
      <div className="pointer-events-none absolute inset-x-[10%] top-[14rem] -z-10 h-[28rem] rounded-full bg-gradient-to-r from-accent/40 via-transparent to-purple-400/30 blur-3xl" />
      <div className="section-container">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="space-y-10">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/60">
              OWASP Flagship
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Automate the busywork. Amplify the human insight.
              </h1>
              <p className="text-lg text-white/70">
                OWTF wraps your entire web testing workflow in one modern surface—curated automation, human-in-the-loop control, and reporting designed for security teams shipping at startup speed.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://github.com/owtf/owtf/releases"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white via-white/90 to-white/70 px-6 py-3 text-sm font-semibold text-background shadow-[0_25px_65px_rgba(0,224,255,0.25)] transition hover:from-accent hover:via-accent hover:to-accent"
              >
                Launch OWTF
                <span className="text-lg leading-none">↗</span>
              </a>
              <a
                href="https://docs.owasp.org/projects/owtf/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
              >
                Explore the docs
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
                  <div className="text-2xl font-semibold text-white sm:text-3xl">{stat.value}</div>
                  <p className="mt-1 text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -left-10 top-6 h-32 w-32 rounded-full bg-accent/30 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_70px_rgba(2,6,23,0.6)]">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span className="uppercase tracking-[0.3em]">Preview</span>
                <span>Live shell</span>
              </div>
              <pre className="mt-4 rounded-2xl border border-white/10 bg-black/70 p-5 text-sm leading-relaxed text-accent-soft">{codeSample}</pre>
              <div className="mt-8 space-y-5">
                {heroHighlights.map((highlight) => (
                  <div key={highlight.title} className="group rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-accent/60">
                    <h3 className="text-sm font-semibold text-white group-hover:text-accent-soft">{highlight.title}</h3>
                    <p className="mt-2 text-xs text-white/60">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
