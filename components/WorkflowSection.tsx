const phases = [
  {
    title: "Support established testing standards",
    description:
      "OWTF provides out-of-the-box support for the OWASP Testing Guide as well as the NIST and PTES standards, helping teams align with recognised methodologies.",
    items: ["OWASP Testing Guide coverage", "NIST-aligned workflows", "PTES-ready profiles"]
  },
  {
    title: "Automate repeatable tasks",
    description:
      "Gather URLs by scrubbing plugin output, trigger scans by aggression level, and extend coverage by adding new tools through plugins.",
    items: ["URL harvesting from tools", "Aggression-level based scans", "Extensible plugin system"]
  },
  {
    title: "Report findings with context",
    description:
      "OWTF concludes each scan with a comprehensive interactive report so teams can explore evidence and prioritise remediation.",
    items: ["Interactive reporting", "Evidence tracking", "Team-ready summaries"]
  }
];

const WorkflowSection = () => {
  return (
    <section id="standards" className="section-container pb-24">
      <div className="flex flex-col gap-16">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Standards & workflow</p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Keep methodology, automation, and reporting in sync.</h2>
          <p className="text-base text-slate-600">
            From methodology alignment to evidence delivery, OWTF keeps the flow of a web security assessment organised without sacrificing the analyst’s judgement.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {phases.map((phase) => (
            <article key={phase.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
              <h3 className="text-xl font-semibold text-slate-900">{phase.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{phase.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-5 rounded-full bg-slate-300" />
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
