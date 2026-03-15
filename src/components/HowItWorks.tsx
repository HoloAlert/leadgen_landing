import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="#4294D8" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" fill="#4294D8" />
      </svg>
    ),
    title: "Press the Button",
    desc: "In an emergency, press the button on your device — or let automatic fall detection do it for you.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="#4294D8" strokeWidth="1.5" fill="none" />
        <path d="M9 11a1.5 1.5 0 013 0v4M12 11a1.5 1.5 0 013 0v4" stroke="#4294D8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="7" r="1" fill="#4294D8" />
      </svg>
    ),
    title: "Instant Response",
    desc: "Our 24/7 Canadian response team answers immediately and speaks with you through the device.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l-1.5 3h3L12 2z" fill="#f46036" />
        <path d="M3 13h18M3 13l2.5-5h13l2.5 5M5 13v5a2 2 0 002 2h10a2 2 0 002-2v-5" stroke="#4294D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="7.5" cy="16" r="1" fill="#4294D8" />
        <circle cx="16.5" cy="16" r="1" fill="#4294D8" />
      </svg>
    ),
    title: "Help Arrives",
    desc: "We contact your family, neighbours, and if needed, send emergency services to your GPS location.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-[120px] max-sm:py-20 bg-surface/50">
      <div className="section-wrap">
        {/* Header — narrow, centered */}
        <div className="section-narrow text-center">
          <ScrollReveal>
            <span className="font-semibold text-[11px] tracking-[1.8px] uppercase text-blue block mb-4">
              Simple &amp; Reliable
            </span>
            <h2 className="font-semibold text-black leading-[1.12] tracking-[-0.015em] text-[clamp(28px,3.5vw,40px)]">
              How It Works
            </h2>
          </ScrollReveal>
        </div>

        {/* Steps — wider container */}
        <div className="relative mt-16 max-w-[960px] mx-auto">
          <div className="step-connector" />

          <div className="grid grid-cols-3 gap-16 max-sm:grid-cols-1 max-sm:gap-14">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i + 1}>
                <div className="text-center relative">
                  <div className="w-[80px] h-[80px] rounded-full bg-white border border-border flex items-center justify-center mx-auto relative">
                    {step.icon}
                    <span className="absolute -top-1.5 -right-1.5 w-[22px] h-[22px] rounded-full bg-blue text-white text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-medium text-black text-[17px] mt-6 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-gray leading-[1.55] max-w-[280px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
