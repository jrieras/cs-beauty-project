import SectionHeading from "./SectionHeading.jsx";
import ProductMockup from "./ProductMockup.jsx";

export default function ProductCollection({ content }) {
  return (
    <section id="products" className="section-shell bg-white/40">
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        <p className="max-w-md text-sm leading-6 text-brown/70">
          {content.intro}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {content.items.map((product) => (
          <article key={product.name} className="product-card group">
            <ProductMockup
              variant={product.mockup}
              accent={product.accent}
              secondary={product.secondary}
            />
            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="rounded-full bg-sandstone/60 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brown">
                  {product.type}
                </span>
                <span className="rounded-full border border-cacao/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-palm">
                  {content.soon}
                </span>
              </div>
              <h3 className="text-xl font-semibold leading-tight tracking-[-0.02em] text-cacao">
                {product.name}
              </h3>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
                {product.notes}
              </p>
              <p className="mt-4 text-sm leading-6 text-brown/70">{product.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
