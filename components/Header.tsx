import Link from "next/link";

const links = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Standards", href: "#standards" },
  { label: "Docs", href: "https://docs.owasp.org/projects/owtf/" }
];

const Header = () => {
  return (
    <header className="section-container pt-10">
      <nav className="flex items-center justify-between rounded-full border border-slate-200 bg-white/80 px-6 py-4 shadow-card backdrop-blur">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-900">
            OW
          </span>
          <span className="hidden text-sm font-medium tracking-wide text-slate-600 sm:inline">
            Offensive Web Testing Framework
          </span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-slate-900">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/owtf/owtf"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900 lg:inline-flex"
          >
            View GitHub
          </a>
          <a
            href="https://github.com/owtf/owtf/releases"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
          >
            Get OWTF
            <span className="text-base leading-none">→</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
