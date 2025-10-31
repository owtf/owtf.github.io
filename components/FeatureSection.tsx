const features = [
  {
    title: "Easy to use",
    description:
      "Use the built-in web UI to configure and monitor assessments, and access RESTful APIs for all core capabilities.",
    bullets: ["Responsive management interface", "REST APIs for automation"]
  },
  {
    title: "Unites popular tools",
    description:
      "OWTF scrubs plugin output to gather as many URLs as possible and lets you scan by aggression level across your toolkit.",
    bullets: ["Plugin-based orchestration", "Multiple aggression levels"]
  },
  {
    title: "Use OWTF anywhere",
    description:
      "Run the official Docker image on any platform Docker supports so teams can work from Windows, macOS, or Linux.",
    bullets: ["Docker support", "Cross-platform workflow"]
  }
];

const FeatureSection = () => {
  return (
    <section id="capabilities" className="section-container pb-24">
      <div className="flex flex-col gap-16">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Capabilities</p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Automation that respects human-driven testing.</h2>
          <p className="text-base text-slate-600">
            OWTF focuses on automating repetitive work while keeping analysts in control. The project is built around extensible plugins and tooling support maintained by the community.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
              <h3 className="text-2xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{feature.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {feature.bullets.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
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
