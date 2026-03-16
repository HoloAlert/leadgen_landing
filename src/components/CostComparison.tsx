import { Building2, Home, Plus } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function CostComparison() {
  return (
    <section className="py-[100px] max-sm:py-16">
      <div className="section-wrap">
        {/* Header - narrow, centered */}
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

        {/* Comparison cards - wider container with generous padding */}
        <div className="grid grid-cols-2 gap-8 mt-16 max-w-[960px] mx-auto max-sm:grid-cols-1">
          {/* Without Protection */}
          <ScrollReveal delay={1}>
            <div className="rounded-lg p-10 max-sm:p-8 border border-risk-border bg-risk-light/50 h-full">
              <div className="text-[11px] uppercase tracking-[1.5px] font-bold text-risk mb-6">
                Without Protection
              </div>
              <Building2 size={36} className="text-risk mb-5" strokeWidth={1.5} />
              <h3 className="font-medium text-black text-[20px] mb-3">
                Assisted Living Facility
              </h3>
              <p className="text-[14px] text-gray leading-[1.55] mb-6">
                After a serious fall with no safety system, families often decide it&apos;s no longer safe for you to live alone.
              </p>
              {/* Stat callout - heavy/oversized */}
              <div className="font-bold text-[42px] max-sm:text-[32px] text-risk leading-none tracking-[-0.02em]">
                $3,000-$6,000+
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
              <Home size={36} className="text-promo mb-5" strokeWidth={1.5} />
              <h3 className="font-medium text-black text-[20px] mb-3">
                Stay in Your Own Home
              </h3>
              <p className="text-[14px] text-gray leading-[1.55] mb-6">
                A medical alert device shows your family you&apos;re protected - and that help is always within reach.
              </p>
              {/* Stat callout - heavy/oversized */}
              <div className="font-bold text-[42px] max-sm:text-[32px] text-promo leading-none tracking-[-0.02em]">
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
          <div className="text-center mt-14">
            <span className="inline-flex items-center gap-2 bg-black text-white font-semibold text-[14px] px-7 py-3 rounded-full tracking-[0.2px]">
              <Plus size={14} strokeWidth={1.5} />
              60–100x cheaper than assisted living
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="section-narrow pt-8 text-[15px] text-gray text-center leading-[1.65]">
            A medical alert device isn&apos;t just about emergencies - it&apos;s{" "}
            <strong className="text-black font-semibold">proof you can live safely on your own.</strong> It shows
            your family, your doctor, and yourself that you&apos;ve taken the
            right steps. It&apos;s the most affordable way to
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
