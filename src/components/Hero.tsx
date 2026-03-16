import { CircleCheckBig } from "lucide-react";
import { CtaButton } from "./CtaButton";

function HeroShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

      {/* ── CIRCLES ── */}

      {/* 1. Large circle - top right, clipped. The anchor. */}
      <div
        className="absolute -top-[180px] -right-[180px] w-[500px] h-[500px] rounded-full border-[1.5px] border-blue max-sm:-top-[120px] max-sm:-right-[120px] max-sm:w-[300px] max-sm:h-[300px]"
        style={{ opacity: 0.30, background: "radial-gradient(circle at 40% 60%, rgba(66,148,216,0.05), transparent 70%)" }}
      />

      {/* 2. Medium circle - bottom left, partially clipped. Counterbalance. */}
      <div
        className="absolute -bottom-[100px] -left-[100px] w-[280px] h-[280px] rounded-full border border-blue max-sm:w-[180px] max-sm:h-[180px] max-sm:-bottom-[60px] max-sm:-left-[60px]"
        style={{ opacity: 0.18 }}
      />

      {/* 3. Mid-size ring - right side, floating in the middle third */}
      <div
        className="absolute top-[35%] right-[8%] w-[140px] h-[140px] rounded-full border border-blue max-sm:w-[80px] max-sm:h-[80px] max-sm:right-[4%]"
        style={{ opacity: 0.14 }}
      />

      {/* 4. Small filled circle - right of center, near the heading */}
      <div
        className="absolute top-[22%] right-[28%] w-[18px] h-[18px] rounded-full bg-blue max-sm:hidden"
        style={{ opacity: 0.12 }}
      />

      {/* 5. Tiny dot - bottom right quadrant */}
      <div
        className="absolute bottom-[28%] right-[18%] w-[8px] h-[8px] rounded-full bg-blue max-sm:hidden"
        style={{ opacity: 0.2 }}
      />

      {/* 6. Large faint ring - behind content, creates depth */}
      <div
        className="absolute top-[10%] right-[2%] w-[360px] h-[360px] rounded-full border-[0.75px] border-blue max-sm:w-[200px] max-sm:h-[200px] max-sm:-right-[20px]"
        style={{ opacity: 0.07 }}
      />

      {/* 7. Small ring - lower right area */}
      <div
        className="absolute bottom-[15%] right-[32%] w-[44px] h-[44px] rounded-full border border-blue max-sm:hidden"
        style={{ opacity: 0.16 }}
      />

      {/* ── CROSSES ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 700"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Right cluster - denser, varied sizes */}
        <g stroke="#4294d8" strokeWidth="1.5" opacity="0.22" strokeLinecap="round">
          <line x1="920" y1="90" x2="920" y2="110" />
          <line x1="910" y1="100" x2="930" y2="100" />
        </g>
        <g stroke="#4294d8" strokeWidth="1.25" opacity="0.16" strokeLinecap="round">
          <line x1="1050" y1="200" x2="1050" y2="216" />
          <line x1="1042" y1="208" x2="1058" y2="208" />
        </g>
        <g stroke="#4294d8" strokeWidth="1" opacity="0.13" strokeLinecap="round">
          <line x1="980" y1="340" x2="980" y2="352" />
          <line x1="974" y1="346" x2="986" y2="346" />
        </g>
        <g stroke="#4294d8" strokeWidth="1.5" opacity="0.18" strokeLinecap="round">
          <line x1="1100" y1="400" x2="1100" y2="418" />
          <line x1="1091" y1="409" x2="1109" y2="409" />
        </g>
        <g stroke="#4294d8" strokeWidth="1" opacity="0.1" strokeLinecap="round">
          <line x1="850" y1="480" x2="850" y2="490" />
          <line x1="845" y1="485" x2="855" y2="485" />
        </g>

        {/* Mid-field - sparser, smaller */}
        <g stroke="#4294d8" strokeWidth="1" opacity="0.12" strokeLinecap="round">
          <line x1="700" y1="130" x2="700" y2="142" />
          <line x1="694" y1="136" x2="706" y2="136" />
        </g>
        <g stroke="#4294d8" strokeWidth="1.25" opacity="0.14" strokeLinecap="round">
          <line x1="760" y1="520" x2="760" y2="534" />
          <line x1="753" y1="527" x2="767" y2="527" />
        </g>

        {/* Left side - very sparse, just a couple for balance */}
        <g stroke="#4294d8" strokeWidth="1" opacity="0.08" strokeLinecap="round">
          <line x1="200" y1="160" x2="200" y2="170" />
          <line x1="195" y1="165" x2="205" y2="165" />
        </g>
        <g stroke="#4294d8" strokeWidth="1" opacity="0.1" strokeLinecap="round">
          <line x1="350" y1="560" x2="350" y2="570" />
          <line x1="345" y1="565" x2="355" y2="565" />
        </g>

        {/* One rotated 45° cross for variety - right side */}
        <g stroke="#4294d8" strokeWidth="1" opacity="0.11" strokeLinecap="round" transform="rotate(45 1020 290)">
          <line x1="1020" y1="283" x2="1020" y2="297" />
          <line x1="1013" y1="290" x2="1027" y2="290" />
        </g>
      </svg>

      {/* Soft gradient wash - bottom right warmth */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[350px] max-sm:w-[250px] max-sm:h-[180px]"
        style={{
          background: "radial-gradient(ellipse at 75% 85%, rgba(66,148,216,0.07) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative bg-white pt-12 pb-[100px] max-sm:pt-8 max-sm:pb-16 overflow-hidden">
      <HeroShapes />

      <div className="section-wrap relative z-10">
        <div className="section-narrow">
          {/* Wordmark */}
          <div className="hero-enter font-bold text-[13px] text-blue tracking-[2.5px] uppercase mb-12 max-sm:mb-8">
            Holo Alert
          </div>

          {/* Qualified badge */}
          <div className="hero-enter hero-enter-1 inline-flex items-center gap-2.5 border border-promo/30 text-promo font-semibold text-[11px] tracking-[1px] uppercase px-4 py-[7px] rounded-full mb-6">
            <CircleCheckBig size={14} className="text-promo" strokeWidth={2} />
            You&apos;ve Qualified
          </div>

          {/* H1 - Bold/heavy, large display */}
          <h1 className="hero-enter hero-enter-2 font-bold text-black leading-[1.08] tracking-[-0.025em] text-[clamp(36px,5.5vw,60px)] max-w-[600px]">
            Your Safe Living
            <br />
            Protection Program
          </h1>

          {/* Subtext */}
          <p className="hero-enter hero-enter-3 text-[17px] text-gray max-w-[500px] mt-6 leading-[1.5]">
            You&apos;ve completed your assessment and qualified for our
            subsidized protection program. Everything you need to stay safe
            at home and on the go - at a fraction of the usual cost.
          </p>

          {/* CTA */}
          <div className="hero-enter hero-enter-4 mt-10">
            <CtaButton location="hero" />
          </div>
        </div>
      </div>

      {/* Bottom border - thin blue accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue/20" />
    </section>
  );
}
