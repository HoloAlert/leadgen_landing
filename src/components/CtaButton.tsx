"use client";

export function CtaButton({ location = "hero" }: { location?: string }) {
  return (
    <div>
      <a
        href="#claim"
        className="group inline-flex items-center gap-2 bg-promo text-white font-semibold text-[15px] px-8 py-[14px] rounded-md cursor-pointer shadow-[0_2px_12px_rgba(69,184,100,0.25)] tracking-[0.3px] hover:translate-y-[-1px] hover:shadow-[0_4px_20px_rgba(69,184,100,0.35)] active:translate-y-0 transition-[transform,box-shadow] duration-200 max-sm:w-full max-sm:justify-center"
        data-cta-text="Claim Your Protection Plan"
        data-cta-location={location}
      >
        Claim Your Protection Plan
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
      <span className="block mt-3 text-[13px] text-gray">
        Or call directly:{" "}
        <strong className="text-black font-semibold">1-888-411-4656</strong>
      </span>
    </div>
  );
}
