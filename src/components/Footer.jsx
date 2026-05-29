export default function Footer({ content }) {
  return (
    <footer className="border-t border-cacao/10 px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-brown/70 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cacao">{content.brand}</p>
          <p className="mt-1 text-sm">{content.category}</p>
          <p className="mt-4 text-lg font-medium text-cacao">{content.line}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm font-semibold">
          {content.links.map((link) => (
            <a key={link} href={link === "Instagram" ? "#top" : "#waitlist"} className="hover:text-cacao">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
