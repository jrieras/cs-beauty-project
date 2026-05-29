import SectionHeading from "./SectionHeading.jsx";
import { palette } from "../data/siteContent.js";

export default function ColorPalette({ content }) {
  return (
    <section id="palette" className="section-shell">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        copy={content.copy}
      />
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {palette.map(([name, color]) => (
          <article key={name} className="palette-card">
            <div className="h-28 rounded-2xl border border-cacao/10" style={{ backgroundColor: color }} />
            <div className="mt-3">
              <h3 className="text-sm font-semibold text-cacao">{name}</h3>
              <p className="text-xs uppercase tracking-[0.16em] text-brown/60">{color}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
