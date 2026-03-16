"use client";

import { useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const faqs = [
  {
    q: "Is there a contract or commitment?",
    a: 'No long-term contracts. You can cancel anytime. Plus, you get a <strong>10-day risk-free trial</strong> - if it\'s not right for you, just send it back.',
  },
  {
    q: "How much does it cost?",
    a: 'The Safe Living Protection Program starts at just <strong>$49.95</strong>, including the device, monitoring, fall detection, shipping, and setup. The device itself (a $300–$500 value) is included at no extra cost for qualified members. Your plan renews monthly and you can cancel anytime - no contracts or cancellation fees.',
  },
  {
    q: "Do I need a landline or smartphone?",
    a: "No. The device works on its own using nationwide cellular networks. No landline, no smartphone, and no Wi-Fi required. It works anywhere in Canada.",
  },
  {
    q: "Is it hard to set up?",
    a: "Not at all. The device arrives ready to use - just charge it and put it on. Our team will call you to walk through everything step by step. Most people are up and running in under 10 minutes.",
  },
  {
    q: "What happens if I fall?",
    a: "The device automatically detects the fall and connects you to our 24/7 Canadian monitoring centre. A trained operator speaks with you through the device, assesses the situation, and dispatches help - your emergency contacts, neighbours, or local 911 - to your GPS location.",
  },
  {
    q: "Does it work in my area?",
    a: "Yes. Holo Alert works anywhere in Canada through nationwide cellular networks, including most rural communities. If you'd like to confirm coverage in your exact location, call us and we'll check right away.",
  },
  {
    q: "I have a pacemaker. Is it safe to use?",
    a: "Yes. The device uses low-power cellular and GPS technology that does not interfere with pacemakers or other implanted medical devices. Consult your doctor if you have specific concerns.",
  },
];

export function FAQ() {
  const handleToggle = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const item = e.currentTarget.parentElement;
    if (item) {
      item.classList.toggle("open");
    }
  }, []);

  return (
    <section className="py-[100px] max-sm:py-16" id="faq">
      <div className="section-wrap">
        {/* Header - narrow, centered */}
        <div className="section-narrow text-center">
          <ScrollReveal>
            <span className="font-semibold text-[11px] tracking-[1.8px] uppercase text-blue block mb-4">
              Common Questions
            </span>
            <h2 className="font-semibold text-black leading-[1.12] tracking-[-0.015em] text-[clamp(28px,3.5vw,40px)]">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
        </div>

        {/* FAQ list - wider */}
        <ScrollReveal>
          <div className="mt-16 max-w-[960px] mx-auto">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item border-b border-border ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <button
                  className="w-full bg-transparent border-none py-6 text-[16px] font-medium text-black cursor-pointer text-left flex justify-between items-center gap-8 max-sm:gap-4 hover:text-blue transition-colors duration-200"
                  onClick={handleToggle}
                  data-faq-question={faq.q}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className="faq-chevron w-4 h-4 shrink-0 transition-transform duration-300 text-blue" strokeWidth={1.5} />
                </button>
                <div className="faq-answer">
                  <div>
                    <p
                      className="text-[15px] text-gray leading-[1.6] pb-6"
                      dangerouslySetInnerHTML={{ __html: faq.a }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
