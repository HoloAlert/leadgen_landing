import { ScrollReveal } from "./ScrollReveal";

export function CostComparison() {
  return (
    <section className="py-[120px] max-sm:py-20">
      <div className="section-wrap">
        {/* Header — narrow, centered */}
        <div className="section-narrow text-center">
          <ScrollReveal>
            <span className="font-semibold text-[11px] tracking-[1.8px] uppercase text-blue block mb-4">
              The Real Cost
            </span>
            <h2 className="font-semibold text-black leading-[1.12] tracking-[-0.015em] text-[clamp(28px,3.5vw,40px)]">
              What Happens Without Protection?
            </h2>
            <p className="text-[15px] text-gray mt-5 max-w-[500px] mx-auto leading-[1.55]">
              Many families face an impossible decision after a serious fall. If
              you&apos;re unable to demonstrate that you can live safely on your
              own, the alternative is one most seniors dread.
            </p>
          </ScrollReveal>
        </div>

        {/* Comparison cards — wider container with generous padding */}
        <div className="grid grid-cols-2 gap-8 mt-16 max-w-[960px] mx-auto max-sm:grid-cols-1">
          {/* Without Protection */}
          <ScrollReveal delay={1}>
            <div className="rounded-lg p-10 max-sm:p-8 border border-risk-border bg-risk-light/50 h-full">
              <div className="text-[11px] uppercase tracking-[1.5px] font-bold text-risk mb-6">
                Without Protection
              </div>
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none" className="mb-5">
                <rect x="4" y="10" width="24" height="18" rx="2" stroke="#F45B69" strokeWidth="1.5" fill="none" />
                <path d="M4 16h24" stroke="#F45B69" strokeWidth="1" opacity="0.4" />
                <rect x="7" y="6" width="5" height="4" rx="1" stroke="#F45B69" strokeWidth="1.5" fill="none" />
                <rect x="20" y="6" width="5" height="4" rx="1" stroke="#F45B69" strokeWidth="1.5" fill="none" />
              </svg>
              <h3 className="font-medium text-black text-[20px] mb-3">
                Assisted Living Facility
              </h3>
              <p className="text-[14px] text-gray leading-[1.55] mb-6">
                After a fall with no safety system, families often determine it&apos;s no longer safe for you to live alone.
              </p>
              {/* Stat callout — heavy/oversized */}
              <div className="font-bold text-[42px] text-risk leading-none tracking-[-0.02em]">
                $3,000–$6,000+
              </div>
              <div className="text-[14px] text-gray mt-2">/month</div>
              <div className="mt-6 pt-6 border-t border-risk-border">
                <p className="text-[14px] text-gray leading-[1.55]">
                  <strong className="text-black font-semibold">$36,000–$72,000+ per year.</strong>{" "}
                  Loss of independence, familiar surroundings, and daily routine.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* With Protection */}
          <ScrollReveal delay={2}>
            <div className="rounded-lg p-10 max-sm:p-8 border border-promo/25 bg-promo/[0.04] h-full">
              <div className="text-[11px] uppercase tracking-[1.5px] font-bold text-promo mb-6">
                With Safe Living Program
              </div>
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none" className="mb-5">
                <path d="M5 24L16 6l11 18H5z" stroke="#45B864" strokeWidth="1.5" fill="none" />
                <rect x="13" y="18" width="6" height="6" stroke="#45B864" strokeWidth="1" fill="none" />
                <path d="M16 18v6" stroke="#45B864" strokeWidth="0.5" opacity="0.5" />
                <path d="M2 30h28" stroke="#45B864" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <h3 className="font-medium text-black text-[20px] mb-3">
                Stay in Your Own Home
              </h3>
              <p className="text-[14px] text-gray leading-[1.55] mb-6">
                A medical alert device proves you have protection — giving your family confidence that help is always within reach.
              </p>
              {/* Stat callout — heavy/oversized */}
              <div className="font-bold text-[42px] text-promo leading-none tracking-[-0.02em]">
                $49.95
              </div>
              <div className="text-[14px] text-gray mt-2">/month · cancel anytime</div>
              <div className="mt-6 pt-6 border-t border-promo/20">
                <p className="text-[14px] text-gray leading-[1.55]">
                  <strong className="text-black font-semibold">Under $600 per year.</strong>{" "}
                  Keep your independence, your home, and your way of life.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="text-center mt-10">
            <span className="inline-flex items-center gap-2 bg-black text-white font-semibold text-[14px] px-7 py-3 rounded-full tracking-[0.2px]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              60–100x cheaper than assisted living
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="section-narrow mt-14 text-[15px] text-gray text-center leading-[1.65]">
            A medical alert device isn&apos;t just about emergencies — it&apos;s{" "}
            <strong className="text-black font-semibold">proof of independence.</strong> It shows
            your family, your doctor, and yourself that you&apos;ve taken the
            steps to live safely on your own. It&apos;s the most affordable way to
            keep doing what matters most:{" "}
            <strong className="text-black font-semibold">
              living life on your terms, in your own home.
            </strong>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
