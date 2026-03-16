import { ScrollReveal } from "./ScrollReveal";

const concerns = [
  {
    emoji: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        {/* Worried/overwhelmed face */}
        <circle cx="20" cy="20" r="18" fill="#FBBE5E" />
        <circle cx="20" cy="20" r="18" fill="url(#faceShade1)" />
        {/* Eyebrows - raised, worried */}
        <path d="M11 13c1.5-2 4-2.5 6-1" stroke="#8B5E34" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M29 13c-1.5-2-4-2.5-6-1" stroke="#8B5E34" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        {/* Eyes - wide */}
        <ellipse cx="14.5" cy="18.5" rx="3" ry="3.5" fill="white" />
        <ellipse cx="25.5" cy="18.5" rx="3" ry="3.5" fill="white" />
        <circle cx="14.5" cy="19" r="1.8" fill="#3D2314" />
        <circle cx="25.5" cy="19" r="1.8" fill="#3D2314" />
        <circle cx="15.2" cy="18.2" r="0.6" fill="white" />
        <circle cx="26.2" cy="18.2" r="0.6" fill="white" />
        {/* Mouth - wavy/worried */}
        <path d="M14 28c1.5-1.5 3-1.5 4 0s2.5 1.5 4 0 2.5-1.5 4 0" stroke="#8B5E34" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <defs>
          <radialGradient id="faceShade1" cx="0.3" cy="0.3" r="0.7">
            <stop offset="0%" stopColor="white" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#E8963A" stopOpacity="0.2" />
          </radialGradient>
        </defs>
      </svg>
    ),
    quote: "\u201cI\u2019m not that old - I don\u2019t need it yet.\u201d",
    answer:
      "Falls don\u2019t check your age. Over 30% of adults 65+ fall each year. The best time to get protected is <strong>before</strong> something happens - not after.",
  },
  {
    emoji: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        {/* Money bag */}
        <path d="M20 8c-2 0-3.5-1.5-3.5-1.5S15 8 15 9.5c0 1 1.5 2 5 2s5-1 5-2c0-1.5-1.5-3-1.5-3S22 8 20 8z" fill="#5D8C3E" />
        <ellipse cx="20" cy="24" rx="12" ry="12" fill="#6BAF47" />
        <ellipse cx="20" cy="24" rx="12" ry="12" fill="url(#bagShade)" />
        {/* Dollar sign */}
        <path d="M20 16v16M16 20.5c0-1.8 1.8-3 4-3s4 1.2 4 3-1.8 2.5-4 3-4 1.2-4 3 1.8 3 4 3 4-1.2 4-3" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
        <defs>
          <radialGradient id="bagShade" cx="0.35" cy="0.3" r="0.7">
            <stop offset="0%" stopColor="white" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#3D6B23" stopOpacity="0.25" />
          </radialGradient>
        </defs>
      </svg>
    ),
    quote:
      "\u201cI\u2019m on a fixed income - can I afford this?\u201d",
    answer:
      "At $49.95, it\u2019s less than $1.70 a day. Compare that to a single ambulance ride ($300\u2013$800) or assisted living ($3,000\u2013$6,000/month). This is the most affordable protection available.",
  },
  {
    emoji: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        {/* Raised hands / high-five */}
        <path d="M12 22c-1-5 0-10 2-14 .8-1.5 2.5-1 2.2.5L14.5 16" stroke="#E8963A" strokeWidth="2.5" strokeLinecap="round" fill="#FBBE5E" />
        <path d="M17 20c-.5-5 .5-11 2-14 .7-1.2 2.2-.8 2 .8L19.5 16" stroke="#E8963A" strokeWidth="2.5" strokeLinecap="round" fill="#FBBE5E" />
        <path d="M9 27c-2-3-2.5-7-1-11 .5-1.5 2-1.2 2 .3L10 22" stroke="#E8963A" strokeWidth="2.5" strokeLinecap="round" fill="#FBBE5E" />
        <ellipse cx="13" cy="30" rx="6" ry="5" fill="#FBBE5E" />
        {/* Right hand */}
        <path d="M28 22c1-5 0-10-2-14-.8-1.5-2.5-1-2.2.5L25.5 16" stroke="#E8963A" strokeWidth="2.5" strokeLinecap="round" fill="#FBBE5E" />
        <path d="M23 20c.5-5-.5-11-2-14-.7-1.2-2.2-.8-2 .8L20.5 16" stroke="#E8963A" strokeWidth="2.5" strokeLinecap="round" fill="#FBBE5E" />
        <path d="M31 27c2-3 2.5-7 1-11-.5-1.5-2-1.2-2 .3L30 22" stroke="#E8963A" strokeWidth="2.5" strokeLinecap="round" fill="#FBBE5E" />
        <ellipse cx="27" cy="30" rx="6" ry="5" fill="#FBBE5E" />
        {/* Sparkles */}
        <circle cx="7" cy="12" r="1.2" fill="#7B68D9" />
        <circle cx="33" cy="12" r="1.2" fill="#7B68D9" />
        <circle cx="20" cy="4" r="0.8" fill="#4294d8" />
      </svg>
    ),
    quote:
      "\u201cI don\u2019t want to look like I need help.\u201d",
    answer:
      "The Holo Active looks like a regular smartwatch. The Holo Pro pendant is small and discreet. Most people never notice it - but it\u2019s always there when you need it.",
  },
];

export function Concerns() {
  return (
    <section className="py-[100px] max-sm:py-16 bg-surface/50">
      <div className="section-wrap">
        {/* Header - narrow, centered */}
        <div className="section-narrow text-center">
          <ScrollReveal>
            <span className="font-semibold text-[11px] tracking-[1.8px] uppercase text-blue block mb-4">
              We Hear You
            </span>
            <h2 className="font-semibold text-black leading-[1.12] tracking-[-0.015em] text-[clamp(28px,3.5vw,40px)]">
              Common Concerns - Addressed
            </h2>
          </ScrollReveal>
        </div>

        {/* Concern cards */}
        <div className="grid grid-cols-3 gap-6 mt-16 max-w-[960px] mx-auto max-sm:grid-cols-1 max-sm:gap-0">
          {concerns.map((c, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <div
                className={`bg-white border border-border rounded-lg p-8 max-sm:p-7 text-center h-full transition-colors duration-200 hover:border-blue/25 max-sm:rounded-none max-sm:border-b-0 max-sm:last:border-b ${
                  i === 0 ? "max-sm:rounded-t-lg" : ""
                } ${i === concerns.length - 1 ? "max-sm:rounded-b-lg max-sm:border-b" : ""}`}
              >
                {/* Emoji-style SVG icon */}
                <div className="flex justify-center mb-5">
                  {c.emoji}
                </div>

                {/* Objection quote */}
                <p className="text-[15px] italic font-medium text-[#c25a4a] leading-[1.4] mb-4">
                  {c.quote}
                </p>

                {/* Reframe answer */}
                <p
                  className="text-[14px] text-gray leading-[1.6]"
                  dangerouslySetInnerHTML={{ __html: c.answer }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
