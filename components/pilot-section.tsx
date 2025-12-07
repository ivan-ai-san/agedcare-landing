import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export function PilotSection() {
  const included = [
    "30-day pilot in one home or site",
    "Weekly behaviour change questions for all leaders",
    "Real-time dashboards for HR and site managers",
    "Dedicated onboarding and support",
    "Measurable outcomes within 30 days",
    "No lock-in contracts or long-term commitments",
    "Full access to platform features",
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Try Culture Crunch in One Home — See Improvements in 30 Days
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start small, prove value fast, scale when ready
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: What's Included */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">What's Included</h3>
            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent-foreground flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-lg text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Pricing Card */}
          <div className="bg-card border-2 border-primary rounded-xl p-8 lg:p-10 sticky top-8">
            <div className="mb-8">
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">30-Day Pilot Program</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-card-foreground">$25,000</span>
                <span className="text-muted-foreground">AUD</span>
              </div>
              <p className="text-muted-foreground">
                One site, 30 days, measurable results. Extend or scale after you see the impact.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <Button
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold"
              >
                Book Your Pilot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full text-base font-semibold bg-transparent">
                Talk to a Founder
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              No lock-in contracts • Cancel anytime • ROI guaranteed
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
