import SectionHeading from "./SectionHeading.jsx";

export default function BrandWorld({ content }) {
  return (
    <section id="world" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          copy={content.copy}
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {content.cards.map((card, index) => (
            <article key={card.title} className="world-card" style={{ "--delay": `${index * 80}ms` }}>
              <span className="world-card-number">0{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
