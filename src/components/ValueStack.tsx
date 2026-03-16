import { Clock } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { ScrollReveal } from "./ScrollReveal";

const items = [
  {
    title: "Mobile Medical Alert Device",
    desc: "Waterproof pendant or smartwatch with GPS & automatic fall detection",
    oldPrice: "$300–$500",
    newPrice: "INCLUDED",
  },
  {
    title: "24/7 Emergency Monitoring",
    desc: "Immediate access to trained response agents anywhere in Canada",
    oldPrice: "$65–$80/mo",
    newPrice: "INCLUDED",
  },
  {
    title: "Automatic Fall Detection",
    desc: "Many companies charge extra - included free with your program",
    oldPrice: "$180/year",
    newPrice: "FREE",
  },
  {
    title: "Free Setup & Activation",
    desc: "Device arrives ready to use - no technician visit needed",
    oldPrice: "$50",
    newPrice: "FREE",
  },
  {
    title: "Free Priority Shipping",
    desc: "Delivered to your door in 3–6 business days",
    oldPrice: "$22.50",
    newPrice: "FREE",
  },
  {
    title: "Lifetime Device Protection Guarantee",
    desc: "If your device ever stops working, we replace it - free",
    oldPrice: "$300+",
    newPrice: "INCLUDED",
  },
  {
    title: "10-Day Risk-Free Home Trial",
    desc: "Try it with zero risk - if it's not right for you, send it back",
    oldPrice: null,
    newPrice: "INCLUDED",
  },
];

export function ValueStack() {
  return (
    <section className="py-[100px] max-sm:py-16 bg-surface/50" id="program">
      <div className="section-wrap">
        {/* Header - narrow, centered */}
        <div className="section-narrow text-center">
          <ScrollReveal>
            <span className="font-semibold text-[11px] tracking-[1.8px] uppercase text-blue block mb-4">
              What&apos;s Included
            </span>
            <h2 className="font-semibold text-black leading-[1.12] tracking-[-0.015em] text-[clamp(28px,3.5vw,40px)]">
              Everything You Need.
              <br />
              One Simple Plan.
            </h2>
            <p className="text-[15px] text-gray mt-5 max-w-[460px] mx-auto leading-[1.55]">
              No hidden fees. No contracts. No complicated setup. Here&apos;s everything that&apos;s included:
            </p>
          </ScrollReveal>
        </div>

        {/* Value Stack Items - wider container */}
        <ScrollReveal>
          <div className="mt-16 max-w-[960px] mx-auto">
            {items.map((item, i) => (
              <div
                key={item.title}
                className={`flex items-start justify-between py-5 border-b border-border last:border-b-0 max-sm:flex-col max-sm:gap-2 ${i === 0 ? "border-t" : ""}`}
              >
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue text-white font-bold text-[11px] shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-black text-[15px] leading-snug">
                      {item.title}
                    </div>
                    <div className="text-[14px] text-gray mt-1">{item.desc}</div>
                  </div>
                </div>
                <div className="shrink-0 ml-8 text-right max-sm:text-left max-sm:ml-11 max-sm:mt-1">
                  {item.oldPrice && (
                    <span className="text-[14px] text-gray line-through mr-3">
                      {item.oldPrice}
                    </span>
                  )}
                  <span className="text-[14px] font-semibold text-promo">
                    {item.newPrice}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Price Comparison - wider */}
        <ScrollReveal>
          <div className="mt-16 max-w-[960px] mx-auto">
            <div className="grid grid-cols-2 max-sm:grid-cols-1 overflow-hidden rounded-lg">
              <div className="p-10 max-sm:p-8 text-center bg-white border border-border max-sm:border-b-0 sm:border-r-0 sm:rounded-l-lg max-sm:rounded-t-lg">
                <div className="text-[11px] uppercase tracking-[1.2px] text-gray font-semibold">
                  Total Market Value
                </div>
                <div className="font-bold text-[48px] max-sm:text-[36px] text-risk mt-3 leading-none tracking-[-0.02em]">
                  <s>$900+</s>
                </div>
              </div>
              <div className="p-10 max-sm:p-8 text-center bg-blue text-white sm:rounded-r-lg max-sm:rounded-b-lg">
                <div className="text-[11px] uppercase tracking-[1.2px] font-semibold opacity-60">
                  Your Program Price
                </div>
                <div className="text-[13px] mt-2 opacity-70">Starting as low as</div>
                <div className="font-bold text-[48px] max-sm:text-[36px] text-white mt-1 leading-none tracking-[-0.02em]">
                  $49.95
                </div>
              </div>
            </div>
            <p className="text-center text-[12px] text-gray mt-4">
              Renews monthly. Cancel anytime - no contracts.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mt-14 max-w-[960px] mx-auto">
            <CtaButton location="value-stack" />
          </div>
        </ScrollReveal>

        {/* Urgency */}
        <ScrollReveal>
          <div className="mt-14 max-w-[960px] mx-auto">
            <div className="flex items-start gap-5 py-6 px-8 max-sm:px-5 max-sm:py-5 border border-orange/20 rounded-lg bg-orange/[0.03]">
              <Clock size={20} className="text-orange shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h4 className="font-semibold text-orange text-[15px] mb-2">
                  Limited Availability
                </h4>
                <p className="text-[14px] text-black-7 leading-[1.55]">
                  Because we subsidize the device cost,{" "}
                  <strong className="text-black font-semibold">
                    we can only accept a limited number of new members each month.
                  </strong>{" "}
                  Your assessment results have qualified you - but spots do fill up.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
