"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { DeviceModal } from "./DeviceModal";

export function FinalCta() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      className="relative py-[100px] max-sm:py-16 bg-surface/50 overflow-hidden"
      id="claim"
    >
      {/* Dot grid texture */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-dotgrid opacity-30 pointer-events-none" />

      <div className="section-wrap relative z-10">
        <div className="section-narrow text-center">
          <ScrollReveal>
            <span className="font-semibold text-[11px] tracking-[1.8px] uppercase text-blue block mb-4">
              Get Started Today
            </span>
            <h2 className="font-semibold text-black leading-[1.12] tracking-[-0.015em] text-[clamp(28px,3.5vw,40px)]">
              Ready to Stay Safe in Your Own Home?
            </h2>
            <p className="text-[15px] text-gray mt-5 max-w-[440px] mx-auto leading-[1.55]">
              You&apos;ve qualified for the Safe Living Protection Plan. Claim
              your spot before this month&apos;s openings are filled.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-12">
              <button
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center gap-2 bg-promo text-white font-semibold text-[15px] px-8 py-[14px] rounded-md cursor-pointer shadow-[0_2px_12px_rgba(69,184,100,0.25)] tracking-[0.3px] hover:translate-y-[-1px] hover:shadow-[0_4px_20px_rgba(69,184,100,0.35)] active:translate-y-0 transition-[transform,box-shadow] duration-200 max-sm:w-full max-sm:justify-center"
                data-cta-text="Claim Your Protection Plan"
                data-cta-location="final-cta"
              >
                Claim Your Protection Plan
                <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
              <span className="block mt-3 text-[13px] text-gray">
                Prefer to talk? Call us:{" "}
                <strong className="text-black font-semibold">1-888-411-4656</strong>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <DeviceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
