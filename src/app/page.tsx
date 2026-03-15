import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { ValueStack } from "@/components/ValueStack";
import { CostComparison } from "@/components/CostComparison";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Features />
      <ValueStack />
      <CostComparison />
      <Testimonials />
      <FAQ />
      <FinalCta />
      <Footer />
    </main>
  );
}
