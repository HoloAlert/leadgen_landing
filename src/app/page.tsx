import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ForYou } from "@/components/ForYou";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { ValueStack } from "@/components/ValueStack";
import { CostComparison } from "@/components/CostComparison";
import { Concerns } from "@/components/Concerns";
import { Testimonials } from "@/components/Testimonials";
import { Guarantee } from "@/components/Guarantee";
import { FAQ } from "@/components/FAQ";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ForYou />
      <HowItWorks />
      <Features />
      <ValueStack />
      <CostComparison />
      <Concerns />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <FinalCta />
      <Footer />
    </main>
  );
}
