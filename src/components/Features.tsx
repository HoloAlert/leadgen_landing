import { Crosshair, Droplets, BatteryMedium, Smartphone, MessageCircle, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const features = [
  {
    icon: <Crosshair size={20} className="text-blue" strokeWidth={1.5} />,
    title: "GPS Location Tracking",
    desc: "Responders find you fast - even if you don't know exactly where you are.",
  },
  {
    icon: <Droplets size={20} className="text-blue" strokeWidth={1.5} />,
    title: "Water-Resistant",
    desc: "Wear it in the shower, in the rain, or out on a walk.",
  },
  {
    icon: <BatteryMedium size={20} className="text-blue" strokeWidth={1.5} />,
    title: "2–3 Day Battery",
    desc: "Dependable protection without constant recharging.",
  },
  {
    icon: <Smartphone size={20} className="text-blue" strokeWidth={1.5} />,
    title: "Caregiver App",
    desc: "Family can locate your device, get alerts, and track your steps.",
  },
  {
    icon: <MessageCircle size={20} className="text-blue" strokeWidth={1.5} />,
    title: "Two-Way Voice",
    desc: "Speak directly with a trained operator through your device.",
  },
  {
    icon: <ShieldCheck size={20} className="text-blue" strokeWidth={1.5} />,
    title: "Automatic Fall Detection",
    desc: "Gets you help even when you can't press the button.",
  },
];

export function Features() {
  return (
    <section className="py-[100px] max-sm:py-16">
      <div className="section-wrap">
        {/* Header - narrow, centered */}
        <div className="section-narrow text-center">
          <ScrollReveal>
            <span className="font-semibold text-[11px] tracking-[1.8px] uppercase text-blue block mb-4">
              Built for Real Life
            </span>
            <h2 className="font-semibold text-black leading-[1.12] tracking-[-0.015em] text-[clamp(28px,3.5vw,40px)]">
              Protection That Goes Where You Go
            </h2>
            <p className="text-[15px] text-gray mt-5 max-w-[480px] mx-auto leading-[1.55]">
              Most alert systems tie you to your home. Holo Alert works{" "}
              <strong className="text-black font-semibold">anywhere in Canada</strong> - no base station, no landline, no Wi-Fi.
            </p>
          </ScrollReveal>
        </div>

        {/* Feature grid - wider */}
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
