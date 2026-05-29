import { useState } from "react";

function FallbackMoodboard({ content }) {
  return (
    <div className="moodboard-fallback" aria-label="Warm personal care color moodboard">
      <div className="mood-hero-panel">
        <div className="sun-logo" aria-hidden="true">
          <span className="sun-core" />
          <span className="sun-ray ray-one" />
          <span className="sun-ray ray-two" />
          <span className="sun-ray ray-three" />
          <span className="sun-wave wave-one" />
          <span className="sun-wave wave-two" />
        </div>
        <span>{content.visualLabel}</span>
        <strong>{content.visualHeadline}</strong>
      </div>
      <div className="mood-sun" />
      <div className="mood-shadow-leaf" />
      <div className="mood-tile mood-tile-wide" />
      <div className="mood-tile mood-tile-papaya" />
      <div className="mood-tile mood-tile-palm" />
      <div className="mood-arch" />
      <div className="mood-product-shelf" aria-hidden="true">
        <span className="shelf-bottle bottle-one" />
        <span className="shelf-bottle bottle-two" />
        <span className="shelf-bottle bottle-three" />
        <span className="shelf-box" />
      </div>
      <div className="mood-palette-row" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default function Hero({ content }) {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <section id="top" className="hero-section relative isolate overflow-hidden px-5 pb-20 pt-12 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="sun-glow left-[-8rem] top-[-10rem] bg-butter/60" />
      <div className="sun-glow bottom-[-12rem] right-[-8rem] bg-papaya/35" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-marigold/35 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-palm shadow-soft">
            {content.badge}
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.04em] text-cacao drop-shadow-[0_18px_40px_rgba(58,36,24,0.08)] sm:text-7xl lg:text-8xl">
            {content.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-brown/90 sm:text-xl">
            {content.subheadline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#products">
              {content.primaryCta}
            </a>
            <a className="btn-secondary" href="#waitlist">
              {content.secondaryCta}
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {content.valuePills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-marigold/25 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brown/80 shadow-sm"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-marigold/80 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/65 p-3 shadow-sun">
            <div className="relative overflow-hidden rounded-[1.45rem] bg-sandstone">
              {imageLoaded ? (
                <img
                  src="/images/brand-world-board.png"
                  alt={content.imageAlt}
                  className="aspect-[4/5] w-full object-cover"
                  onError={() => setImageLoaded(false)}
                />
              ) : (
                <FallbackMoodboard content={content} />
              )}
            </div>
          </div>
          <div className="absolute -bottom-5 right-6 rounded-full bg-marigold px-5 py-3 text-sm font-semibold text-cacao shadow-soft">
            {content.collectionTag}
          </div>
        </div>
      </div>
    </section>
  );
}
