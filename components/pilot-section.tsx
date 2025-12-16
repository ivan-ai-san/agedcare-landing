"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { useContactForm } from "@/components/contact-form-modal"

export function PilotSection() {
  const { openForm } = useContactForm()
  const included = [
    "One aged care home or service",
    "Weekly behaviour engine for every leader",
    "CHRIS leadership coaching",
    "Team pulse + leader pulse",
    "Baseline + end-of-month insights",
    "Executive-level behavioural report",
    "Support from our behavioural specialists",
  ]

  return (
    <section id="pricing" className="relative py-20 lg:py-32 bg-background overflow-hidden">
      {/* Depth Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient mesh */}
        <div className="absolute -top-1/4 left-1/3 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 right-1/3 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
        {/* Floating shapes */}
        <div className="absolute top-24 left-12 w-20 h-20 border border-accent/10 rounded-full" />
        <div className="absolute bottom-32 right-20 w-24 h-24 border border-primary/10 rounded-full" />
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1d4d4f08_1px,transparent_1px)] bg-size-[24px_24px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Try Culture Crunch in one home - see improvements in 30 days.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: What's Included */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Your 30-Day Pilot Includes:</h3>
            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent-foreground flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-lg text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA Card */}
          <div className="bg-card border-2 border-primary rounded-xl p-8 lg:p-10 sticky top-8">
            <div className="mb-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-4">What Would You Save?</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Reduced turnover. Fewer incidents. Happier teams.
              </p>
              <p className="text-sm text-muted-foreground">
                Our pilots typically deliver measurable improvements within 30 days.
              </p>
            </div>

            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold"
                onClick={() => openForm("proposal")}
              >
                See What's Possible
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full text-base font-semibold bg-transparent"
                onClick={() => openForm("demo")}
              >
                Talk to a Founder
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
