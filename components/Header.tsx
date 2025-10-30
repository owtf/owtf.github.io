import Link from "next/link";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Workflow", href: "#workflow" },
  { label: "Docs", href: "https://docs.owasp.org/projects/owtf/" },
  { label: "Community", href: "https://owasp.org/www-project-owtf/" }
];

const Header = () => {
  return (
    <header className="section-container pt-10">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.02] px-6 py-4 backdrop-blur">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-white">
            OW
          </span>
          <span className="hidden text-sm font-medium tracking-wide text-white/70 sm:inline">
            Offensive Web Testing Framework
          </span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/owtf/owtf"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/70 transition hover:border-white/40 hover:text-white lg:inline-flex"
          >
            View GitHub
          </a>
          <a
            href="https://github.com/owtf/owtf/releases"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-white via-white/90 to-white/70 px-4 py-2 text-xs font-semibold text-background shadow-[0_20px_60px_rgba(0,224,255,0.25)] transition hover:from-accent hover:via-accent hover:to-accent"
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
