import { CircleCheckBig } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const qualifiers = [
  "You live alone or spend significant time at home by yourself",
  "You\u2019ve fallen before - or worry about falling",
  "Your family worries about your safety when they\u2019re not around",
  "You want to keep living independently in your own home",
  "You\u2019ve thought about getting protection but weren\u2019t sure where to start",
];

export function ForYou() {
  return (
    <section className="py-[100px] max-sm:py-16">
      <div className="section-wrap">
        <div className="section-narrow text-center">
          <ScrollReveal>
            <span className="font-semibold text-[11px] tracking-[1.8px] uppercase text-blue block mb-4">
              Is This Right for You?
            </span>
            <h2 className="font-semibold text-black leading-[1.12] tracking-[-0.015em] text-[clamp(28px,3.5vw,40px)]">
              This Program Is for You If&hellip;
            </h2>
            <p className="text-[15px] text-gray mt-5 max-w-[500px] mx-auto leading-[1.55]">
              Whether you&apos;re looking into this for yourself or for someone
              you love - if any of these sound familiar, you&apos;re in
              the right place.
            </p>
          </ScrollReveal>
        </div>

        {/* Qualifier checklist */}
        <ScrollReveal>
          <div className="mt-14 max-w-[640px] mx-auto">
            {qualifiers.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 py-5 border-b border-border ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <CircleCheckBig
                  size={24}
                  className="text-promo shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <span className="text-[16px] text-black leading-[1.5]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
