import SectionHeading from "./SectionHeading.jsx";

export default function Rituals({ content }) {
  return (
    <section id="rituals" className="section-shell bg-cacao text-ivory">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cacao via-brown to-terracotta p-6 shadow-sun sm:p-10 lg:p-14">
        <div className="palm-shadow left-6 top-8" />
        <div className="palm-shadow bottom-0 right-8 rotate-12" />
        <div className="relative">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            centered
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {content.items.map((ritual) => (
              <article key={ritual.title} className="ritual-card">
                <div className="mb-5 h-2 w-14 rounded-full bg-marigold" />
                <h3>{ritual.title}</h3>
                <p>{ritual.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
