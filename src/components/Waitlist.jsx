import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

export default function Waitlist({ content }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="section-shell pb-24">
      <div className="grid gap-10 rounded-[2rem] bg-sandstone/50 p-6 shadow-soft sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          copy={content.copy}
        />

        <form onSubmit={handleSubmit} className="grid gap-4">
          <label className="form-field">
            <span>{content.name}</span>
            <input type="text" name="name" required />
          </label>
          <label className="form-field">
            <span>{content.email}</span>
            <input type="email" name="email" required />
          </label>
          <label className="form-field">
            <span>{content.country}</span>
            <input type="text" name="country" required />
          </label>
          <label className="form-field">
            <span>{content.scent}</span>
            <select name="scent" defaultValue={content.options[0]}>
              {content.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <button type="submit" className="btn-primary mt-2 w-full">
            {content.submit}
          </button>
          {submitted ? (
            <p className="rounded-2xl bg-palm px-4 py-3 text-center text-sm font-semibold text-ivory">
              {content.thanks}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
