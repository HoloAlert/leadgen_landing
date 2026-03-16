import { CircleDot, Headset, Ambulance } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    icon: <CircleDot size={24} className="text-blue" strokeWidth={1.5} />,
    title: "Press the Button",
    desc: "Press the button on your device. If you can't, automatic fall detection does it for you.",
  },
  {
    icon: <Headset size={24} className="text-blue" strokeWidth={1.5} />,
    title: "Instant Response",
    desc: "Our 24/7 Canadian response team answers right away and speaks with you through the device.",
  },
  {
    icon: <Ambulance size={24} className="text-blue" strokeWidth={1.5} />,
    title: "Help Arrives",
    desc: "We contact your family and neighbours - and if needed, dispatch emergency services to your exact location.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-[100px] max-sm:py-16 bg-surface/50">
      <div className="section-wrap">
        {/* Header - narrow, centered */}
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

        {/* Steps - wider container */}
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
                  <h3 className="font-medium text-black text-[18px] mt-6 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-gray leading-[1.55] max-w-[280px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Video */}
          <ScrollReveal delay={4}>
            <div className="mt-16 rounded-2xl overflow-hidden border border-border bg-white shadow-sm">
              <div className="relative w-full" style={{ padding: "56.25% 0 0 0" }}>
                <iframe
                  src="https://player.vimeo.com/video/1164848214?autoplay=1&loop=1&muted=1&background=1"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
