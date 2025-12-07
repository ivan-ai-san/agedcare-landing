import { HeroSection } from "@/components/hero-section"
import { LogoBar } from "@/components/logo-bar"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { WhyItMattersSection } from "@/components/why-it-matters-section"
import { DifferentiatorsSection } from "@/components/differentiators-section"
import { OutcomesSection } from "@/components/outcomes-section"
import { TractionSection } from "@/components/traction-section"
import { PilotSection } from "@/components/pilot-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <LogoBar />
      <ProblemSection />
      <SolutionSection />
      <WhyItMattersSection />
      <DifferentiatorsSection />
      <OutcomesSection />
      <TractionSection />
      <PilotSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
