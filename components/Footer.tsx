const navigation = [
  { label: "GitHub", href: "https://github.com/owtf/owtf" },
  { label: "Documentation", href: "https://docs.owasp.org/projects/owtf/" },
  { label: "OWASP Project", href: "https://owasp.org/www-project-owtf/" }
];

const Footer = () => {
  return (
    <footer className="section-container pb-16 text-sm text-slate-600">
      <div className="rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-card">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-slate-900">OWTF</p>
            <p className="mt-1 text-sm text-slate-600">Offensive Web Testing Framework · An OWASP community project.</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-slate-600">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} OWASP OWTF. Built by the community for testers everywhere.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
