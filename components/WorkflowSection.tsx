const phases = [
  {
    step: "01",
    title: "Profile & scope",
    description:
      "Choose from OWASP, NIST, PTES, or your own templates. Define targets, authentication, and notifications in a few clicks.",
    items: ["Customisable assessment profiles", "Secrets-safe credential storage", "Stakeholder-ready briefs"]
  },
  {
    step: "02",
    title: "Run & adapt",
    description:
      "Execute curated plugins, drop into manual testing, and record evidence without leaving the flow. Automation stays transparent.",
    items: ["Plugin orchestration", "Inline manual notes", "Live coverage insights"]
  },
  {
    step: "03",
    title: "Report & share",
    description:
      "Publish executive summaries, sync with trackers, and deliver remediation guidance that keeps shipping on schedule.",
    items: ["Beautiful PDF & HTML reports", "Jira / GitHub Issues sync", "Remediation workflow"]
  }
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="section-container pb-24">
      <div className="flex flex-col gap-16">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/40">Workflow</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">From reconnaissance to reporting without losing momentum.</h2>
          <p className="text-base text-white/70">
            OWTF keeps testers in control at every turn. Automate the boring parts, capture the nuanced findings, and package everything for the people who rely on you.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {phases.map((phase) => (
            <article key={phase.title} className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/40">{phase.step}</span>
              <h3 className="mt-4 text-2xl font-semibold text-white">{phase.title}</h3>
              <p className="mt-3 text-sm text-white/70">{phase.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-white/60">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-5 rounded-full bg-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
