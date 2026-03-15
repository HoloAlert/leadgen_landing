import { ScrollReveal } from "./ScrollReveal";

const trustItems = [
  { stat: "1,000+", label: "Canadians Protected" },
  { stat: "4.9", label: "Customer Satisfaction", suffix: "★" },
  { stat: "100%", label: "Canada-Based Support" },
  { stat: "10-Day", label: "Risk-Free Trial" },
];

export function TrustBar() {
  return (
    <div className="bg-surface/60 border-b border-border-subtle py-6">
      <div className="section-wrap">
        <ScrollReveal>
          <div className="flex justify-center gap-12 flex-wrap max-sm:gap-6 max-sm:justify-between">
            {trustItems.map((item) => (
              <div key={item.stat} className="text-center">
                <span className="block text-[22px] font-bold text-black tracking-[-0.01em] leading-none">
                  {item.stat}
                  {item.suffix && <span className="text-[#F5A623] ml-0.5">{item.suffix}</span>}
                </span>
                <span className="block text-[12px] text-gray mt-1 tracking-[0.3px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
