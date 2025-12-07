"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useContactForm } from "@/components/contact-form-modal"

export function HeroSection() {
  const { openForm } = useContactForm()

  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[90vh]">
        {/* Left Panel - Dark */}
        <div className="bg-primary text-primary-foreground flex flex-col justify-center px-6 py-16 lg:px-16 lg:py-24">
          <div className="max-w-2xl">
            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Lift Leadership & Workforce Performance. Every Week.
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-4 leading-relaxed">
              Culture Crunch is the <strong>Behaviour Change Engine</strong> that improves leadership, lifts engagement, and reduces turnover - without workshops, consultants, or new headcount.
            </p>

            {/* Tagline */}
            <p className="text-lg lg:text-xl font-semibold text-accent mb-8">
              The fastest way to build stronger aged care teams and better care outcomes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold"
                onClick={() => openForm("demo")}
              >
                Book a 20-Minute Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>

            {/* Trust Line */}
            <p className="text-sm text-primary-foreground/70 italic">
              Trusted by aged care providers navigating Australia's most severe workforce challenges.
            </p>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div className="relative bg-secondary hidden lg:block">
          <div className="absolute inset-0">
            <img
              src="/aged-care-team-meeting-with-diverse-healthcare-pro.jpg"
              alt="Aged care leadership team collaborating"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Optional overlay badge */}
          <div className="absolute bottom-12 left-12 bg-card p-6 rounded-xl shadow-lg max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground">✓</span>
              </div>
              <div>
                <div className="font-semibold text-card-foreground">Behaviour Change</div>
                <div className="text-sm text-muted-foreground">In 30 seconds per week</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image */}
      <div className="lg:hidden relative h-[50vh] bg-secondary">
        <img
          src="/aged-care-team-meeting-with-diverse-healthcare-pro.jpg"
          alt="Aged care leadership team collaborating"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
