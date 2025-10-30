const features = [
  {
    eyebrow: "Automation",
    title: "Composable workflows",
    description:
      "Chain reconnaissance, exploitation, and reporting into repeatable playbooks. Drag, drop, and tune plugins so junior testers ship like veterans.",
    bullets: ["Reusable plugin sequences", "Live progress telemetry", "Evidence capture & tagging"],
    gradient: "from-cyan-400/20 via-transparent to-transparent"
  },
  {
    eyebrow: "Observability",
    title: "Context you can act on",
    description:
      "Surface coverage and risk insights as they happen. OWTF highlights gaps, correlates findings, and keeps stakeholders aligned in one surface.",
    bullets: ["Coverage heatmaps", "Risk scoring", "Stakeholder-ready summaries"],
    gradient: "from-purple-400/20 via-transparent to-transparent"
  },
  {
    eyebrow: "Delivery",
    title: "Ship polished reports",
    description:
      "Export branded deliverables, push to ticketing tools, and sync with wikis without copy-paste purgatory.",
    bullets: ["One-click exports", "Bidirectional integrations", "Remediation tracking"],
    gradient: "from-emerald-400/20 via-transparent to-transparent"
  }
];

const FeatureSection = () => {
  return (
    <section id="platform" className="section-container pb-24">
      <div className="flex flex-col gap-16">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/40">Platform</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">A control center for deep, methodical web testing.</h2>
          <p className="text-base text-white/70">
            Modern teams need automation that respects craftsmanship. OWTF pairs curated tooling with human-in-the-loop controls so you deliver impact without sacrificing quality.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
              <div className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${feature.gradient}`} />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">{feature.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm text-white/70">{feature.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-white/60">
                {feature.bullets.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent group-hover:scale-110 transition" />
                    {point}
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

export default FeatureSection;
