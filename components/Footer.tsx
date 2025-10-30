const navigation = [
  { label: "GitHub", href: "https://github.com/owtf/owtf" },
  { label: "Documentation", href: "https://docs.owasp.org/projects/owtf/" },
  { label: "Community", href: "https://owasp.org/www-project-owtf/" }
];

const Footer = () => {
  return (
    <footer className="section-container pb-16 text-sm text-white/50">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-white">OWTF</p>
            <p className="mt-1 text-sm text-white/60">Offensive Web Testing Framework · An OWASP flagship project.</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-white/60">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} OWASP OWTF. Built by the community for testers everywhere.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
