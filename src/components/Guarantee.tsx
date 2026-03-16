import { ShieldCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Guarantee() {
  return (
    <section className="py-[100px] max-sm:py-16 bg-surface/50">
      <div className="section-wrap">
        <ScrollReveal>
          <div className="max-w-[560px] mx-auto">
            <div className="bg-white border-[1.5px] border-promo/35 rounded-2xl px-12 py-14 max-sm:px-7 max-sm:py-10 text-center">
              {/* Shield icon */}
              <div className="flex justify-center mb-7">
                <div className="relative w-[52px] h-[52px]">
                  <svg
                    viewBox="0 0 52 52"
                    fill="none"
                    className="w-full h-full"
                    aria-hidden="true"
                  >
                    {/* Shield body */}
                    <path
                      d="M26 4L6 14v14c0 12 8.5 17.5 20 20 11.5-2.5 20-8 20-20V14L26 4z"
                      fill="#dbeafe"
                      stroke="#4294d8"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    {/* Inner shield highlight */}
                    <path
                      d="M26 10L12 17.5v9.5c0 8.5 6 12.5 14 14.5 8-2 14-6 14-14.5v-9.5L26 10z"
                      fill="#4294d8"
                      opacity="0.85"
                    />
                    {/* Checkmark */}
                    <path
                      d="M19 26l5 5 9-10"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-semibold text-black leading-[1.15] tracking-[-0.015em] text-[clamp(22px,3vw,28px)] mb-5">
                The Peace of Mind Guarantee
              </h2>

              {/* Body */}
              <p className="text-[15px] text-black-7 leading-[1.65] mb-6">
                Try the Safe Living Protection Program for{" "}
                <strong className="text-black font-semibold">10 full days</strong>{" "}
                in your own home. Wear it to the store, in the garden, in the
                shower. If you don&apos;t feel safer and more confident, send it
                back.{" "}
                <strong className="text-black font-semibold">
                  No questions asked. No hassle. No cost.
                </strong>
              </p>

              {/* Closing line */}
              <p className="text-[13px] text-gray leading-[1.55]">
                We believe in this product so much that we take on all the risk
                - so you don&apos;t have to.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
