export default function ProductMockup({ variant, accent, secondary }) {
  return (
    <div className={`product-stage product-${variant}`} style={{ "--accent": accent, "--secondary": secondary }}>
      {variant === "set" ? (
        <>
          <div className="set-box">
            <span>BRAND NAME</span>
            <strong>Care Set</strong>
          </div>
          <div className="mini-bottle mini-one" />
          <div className="mini-bottle mini-two" />
        </>
      ) : (
        <div className="mockup-bottle">
          <div className="mockup-cap" />
          <div className="mockup-label">
            <span>BRAND NAME</span>
            <strong>Daily Care</strong>
          </div>
        </div>
      )}
    </div>
  );
}
