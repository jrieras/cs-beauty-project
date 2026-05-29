import SectionHeading from "./SectionHeading.jsx";

export default function FounderStory({ content }) {
  return (
    <section id="founder" className="section-shell">
      <div className="grid gap-8 rounded-[2rem] border border-cacao/10 bg-white/50 p-6 shadow-soft sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        <div>
          <p className="text-xl leading-9 text-brown/80">
            {content.copy}
          </p>
          <p className="mt-8 border-t border-cacao/10 pt-5 text-xs leading-5 text-brown/60">
            {content.legal}
          </p>
        </div>
      </div>
    </section>
  );
}
