import { Star } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const trustItems = [
  { stat: "1,000+", label: "Canadians Protected" },
  { stat: "4.9", label: "Customer Satisfaction", hasStar: true },
  { stat: "100%", label: "Canada-Based Support" },
  { stat: "10-Day", label: "Risk-Free Trial" },
];

export function TrustBar() {
  return (
    <div className="bg-surface/60 border-y border-border-subtle py-8">
      <div className="section-wrap">
        <ScrollReveal>
          <div className="flex justify-center gap-12 flex-wrap max-sm:grid max-sm:grid-cols-2 max-sm:gap-x-4 max-sm:gap-y-5 max-sm:max-w-[320px] max-sm:mx-auto">
            {trustItems.map((item) => (
              <div key={item.stat} className="text-center">
                <span className="block text-[22px] font-bold text-black tracking-[-0.01em] leading-none">
                  {item.stat}
                  {item.hasStar && <Star size={16} className="text-[#F5A623] fill-[#F5A623] inline ml-0.5 -mt-0.5" />}
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
