export default function SectionHeading({ eyebrow, title, copy, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-palm">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-semibold leading-tight tracking-[-0.035em] text-cacao sm:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-lg leading-8 text-brown/75">{copy}</p> : null}
    </div>
  );
}
