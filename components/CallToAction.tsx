const steps = [
  {
    command: "pip install git+https://github.com/owtf/owtf#egg=owtf",
    description: "Install the latest code straight from the official repository."
  },
  {
    command: "make docker-build && make docker-run",
    description: "Build and launch the Docker environment provided by the project."
  },
  {
    command: "owtf --ui",
    description: "Access the web interface on http://localhost:8009 for live control."
  }
];

const CallToAction = () => {
  return (
    <section id="get-started" className="section-container pb-32">
      <div className="rounded-[2.5rem] border border-slate-200 bg-white px-8 py-12 shadow-card">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Get started</p>
            <h2 className="text-3xl font-semibold text-slate-900">Run OWTF today.</h2>
            <p className="text-base text-slate-600">
              These commands mirror the official quick-start guidance so you can install OWTF from source, use the Docker tooling, and open the web UI without extra setup.
            </p>
          </div>
          <a
            href="https://owtf.readthedocs.io/en/develop/"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          >
            Browse documentation
            <span className="text-lg leading-none">→</span>
          </a>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.command} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm">
              <code className="block whitespace-pre-wrap break-words font-mono text-slate-900">{step.command}</code>
              <p className="mt-3 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
