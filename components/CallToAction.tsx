const steps = [
  {
    command: "pip install git+https://github.com/owtf/owtf#egg=owtf",
    description: "Install the bleeding-edge build in seconds."
  },
  {
    command: "make docker-build && make docker-run",
    description: "Spin up a full environment with Docker when you need parity."
  },
  {
    command: "owtf --ui",
    description: "Launch the modern control surface on http://localhost:8009."
  }
];

const CallToAction = () => {
  return (
    <section id="get-started" className="section-container pb-32">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-12 shadow-[0_40px_120px_rgba(2,6,23,0.55)]">
        <div className="pointer-events-none absolute -left-10 top-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute right-[-6rem] top-[8rem] h-80 w-80 rounded-full bg-purple-400/30 blur-3xl" />
        <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/40">Get started</p>
            <h2 className="text-3xl font-semibold text-white">Run OWTF today.</h2>
            <p className="text-base text-white/70">
              Whether you prefer Python, Docker, or orchestrating OWTF in CI/CD, these commands light up the full experience. The docs dig deeper into deployment, plugin authoring, and integrations.
            </p>
          </div>
          <a
            href="https://docs.owasp.org/projects/owtf/"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/40 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
          >
            Browse documentation
            <span className="text-lg leading-none">→</span>
          </a>
        </div>
        <div className="relative z-10 mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.command} className="rounded-2xl border border-white/10 bg-black/60 p-6 text-sm shadow-inner">
              <code className="block font-mono text-accent-soft">{step.command}</code>
              <p className="mt-3 text-white/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
