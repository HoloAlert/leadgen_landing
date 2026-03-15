import { ScrollReveal } from "./ScrollReveal";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3.5" stroke="#4294D8" strokeWidth="1.5" />
        <path d="M10 1v2.5M10 16.5V19M1 10h2.5M16.5 10H19" stroke="#4294D8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "GPS Location Tracking",
    desc: "Responders find you fast, even if you're unsure of your location.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C6.5 5.5 4 8 4 11.5a6 6 0 0012 0C16 8 13.5 5.5 10 2z" stroke="#4294D8" strokeWidth="1.5" fill="none" />
        <path d="M8 13a2 2 0 014 0" stroke="#4294D8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Water-Resistant",
    desc: "Wear it in the shower, in the rain, or during daily activities.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="5.5" y="3" width="9" height="16" rx="2" stroke="#4294D8" strokeWidth="1.5" fill="none" />
        <rect x="8" y="8" width="4" height="5" rx="0.5" fill="#4294D8" opacity="0.2" />
        <rect x="8" y="10.5" width="4" height="2.5" rx="0.5" fill="#45B864" />
      </svg>
    ),
    title: "2–3 Day Battery",
    desc: "Dependable protection without constant recharging.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="4" y="2" width="12" height="16" rx="2.5" stroke="#4294D8" strokeWidth="1.5" fill="none" />
        <rect x="6.5" y="4.5" width="7" height="7" rx="1" stroke="#4294D8" strokeWidth="0.75" fill="none" />
        <circle cx="10" cy="15.5" r="0.75" fill="#4294D8" />
      </svg>
    ),
    title: "Caregiver App",
    desc: "Family can locate your device, get alerts, and track your steps.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3.5" stroke="#4294D8" strokeWidth="1.5" fill="none" />
        <path d="M3.5 16c0-2.5 3-4 6.5-4s6.5 1.5 6.5 4" stroke="#4294D8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 8.5l2.5 2.5M6 8.5L3.5 11" stroke="#4294D8" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: "Two-Way Voice",
    desc: "Talk directly to trained operators through your device.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L3 6v5c0 3.9 3 7.5 7 8.7 4-1.2 7-4.8 7-8.7V6l-7-4z" stroke="#4294D8" strokeWidth="1.5" fill="none" />
        <path d="M7.5 10l1.75 1.75L13 8.5" stroke="#45B864" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Automatic Fall Detection",
    desc: "Calls for help even if you can't press the button.",
  },
];

export function Features() {
  return (
    <section className="py-[120px] max-sm:py-20">
      <div className="section-wrap">
        {/* Header — narrow, centered */}
        <div className="section-narrow text-center">
          <ScrollReveal>
            <span className="font-semibold text-[11px] tracking-[1.8px] uppercase text-blue block mb-4">
              Built for Your Life
            </span>
            <h2 className="font-semibold text-black leading-[1.12] tracking-[-0.015em] text-[clamp(28px,3.5vw,40px)]">
              Protection That Goes Where You Go
            </h2>
            <p className="text-[15px] text-gray mt-5 max-w-[480px] mx-auto leading-[1.55]">
              Traditional alert systems only work at home. The Holo Pro works{" "}
              <strong className="text-black font-semibold">anywhere in Canada</strong> — no base station, no landline required.
            </p>
          </ScrollReveal>
        </div>

        {/* Feature grid — wider */}
        <div className="grid grid-cols-3 gap-x-12 gap-y-12 mt-16 max-w-[960px] mx-auto max-sm:grid-cols-1 max-sm:gap-10">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i + 1}>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg bg-surface border border-border flex items-center justify-center mb-5">
                  {f.icon}
                </div>
                <h4 className="font-medium text-black text-[16px] mb-2">
                  {f.title}
                </h4>
                <p className="text-[14px] text-gray leading-[1.55]">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
