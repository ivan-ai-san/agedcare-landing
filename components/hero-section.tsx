"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useContactForm } from "@/components/contact-form-modal"

export function HeroSection() {
  const { openForm } = useContactForm()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/aged-care-team-meeting-with-diverse-healthcare-pro.jpg"
          alt="Aged care leadership team collaborating"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary/85" />
        {/* Depth Effects */}
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-10 w-32 h-32 border border-white/10 rounded-full" />
        <div className="absolute bottom-1/4 right-20 w-24 h-24 border border-accent/20 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
            Lift Leadership & Workforce Performance. Every Week.
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-primary-foreground/90 mb-4 leading-relaxed max-w-3xl mx-auto">
            Culture Crunch is the <strong>Behaviour Change Engine</strong> that improves leadership, lifts engagement, and reduces turnover - without workshops, consultants, or new headcount.
          </p>

          {/* Tagline */}
          <p className="text-lg lg:text-xl font-semibold text-accent mb-10">
            The fastest way to build stronger aged care teams and better care outcomes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-8"
              onClick={() => openForm("demo")}
            >
              Book a 20-Minute Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold px-8"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </Button>
          </div>

          {/* Trust Line */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <p className="text-sm text-primary-foreground font-medium">
              Trusted by aged care providers navigating Australia's most severe workforce challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Badge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hidden lg:flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
          <span className="text-lg font-bold text-accent-foreground">✓</span>
        </div>
        <span className="text-card-foreground font-medium">Behaviour change in 30 seconds per leader per week</span>
      </div>
    </section>
  )
}
