import { Star } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    text: "My Holo Alert watch gives me and my family security knowing that should I need immediate medical assistance, it's there.",
    author: "Jennifer S.",
    location: "Canada",
  },
  {
    text: "Living alone and being nearly 80, I worried about falling and being unable to reach the phone. Good instructions and easy to use.",
    author: "Janet S.",
    location: "Canada",
  },
  {
    text: "Very easy setup. Mom is 93 and she's so happy to have this for her safety. Couldn't have been easier.",
    author: "Bonnie D.",
    location: "Canada",
  },
  {
    text: "The fob is easy to operate and comfortable to wear. But most of all, I feel a lot safer. Very helpful and knowledgeable staff.",
    author: "Joe",
    location: "Canada",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="text-[#F5A623] fill-[#F5A623]" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-[100px] max-sm:py-16 bg-surface/50">
      <div className="section-wrap">
        {/* Header - narrow, centered */}
        <div className="section-narrow text-center">
          <ScrollReveal>
            <span className="font-semibold text-[11px] tracking-[1.8px] uppercase text-blue block mb-4">
              Real Canadians. Real Stories.
            </span>
            <h2 className="font-semibold text-black leading-[1.12] tracking-[-0.015em] text-[clamp(28px,3.5vw,40px)]">
              Trusted Across Canada
            </h2>
          </ScrollReveal>
        </div>

        {/* Testimonial grid - wider */}
        <div className="grid grid-cols-2 gap-8 mt-16 max-w-[960px] mx-auto max-sm:grid-cols-1">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i + 1}>
              <div className="bg-white border border-border rounded-lg p-10 max-sm:p-8 relative h-full">
                {/* Decorative quote mark */}
                <span className="absolute top-5 right-6 text-[52px] text-blue/10 leading-none font-bold select-none">
                  &rdquo;
                </span>
                <Stars />
                <p className="text-[15px] text-black-7 italic leading-[1.6] relative z-10 pr-8">
                  {t.text}
                </p>
                <div className="mt-5 pt-4 border-t border-border-subtle">
                  <span className="text-[14px] font-semibold text-black">
                    {t.author}
                  </span>
                  <span className="text-[13px] text-gray ml-2">
                    · {t.location}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
