export default function Navbar({ content, language, onLanguageChange }) {
  return (
    <header className="sticky top-0 z-50 border-b border-cacao/10 bg-ivory/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label={`${content.brand} home`}>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-cacao text-sm font-semibold uppercase tracking-[0.18em] text-ivory shadow-soft transition-transform group-hover:-rotate-6">
            BN
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-cacao">
              {content.brand}
            </span>
            <span className="block text-xs uppercase tracking-[0.22em] text-brown/70">
              {content.category}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {content.links.map(([label, target]) => (
            <a
              key={target}
              href={`#${target}`}
              className="text-sm font-medium text-brown/75 transition hover:text-cacao"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div
            className="flex rounded-full border border-cacao/15 bg-white/45 p-1 shadow-sm"
            aria-label="Language selector"
          >
            {["en", "es"].map((option) => {
              const isActive = language === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => onLanguageChange(option)}
                  aria-pressed={isActive}
                  className={`rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] transition ${
                    isActive
                      ? "bg-cacao text-ivory shadow-sm"
                      : "text-cacao hover:bg-ivory"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
          <a
            href="#waitlist"
            className="hidden rounded-full bg-cacao px-5 py-3 text-sm font-semibold text-ivory shadow-soft transition hover:-translate-y-0.5 hover:bg-brown sm:inline-flex"
          >
            {content.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
