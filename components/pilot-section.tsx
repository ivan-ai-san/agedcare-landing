import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export function PilotSection() {
  const included = [
    "One aged care home or service",
    "Weekly behaviour engine for every leader",
    "ChrisAI leadership coaching",
    "Team pulse + leader pulse",
    "Baseline + end-of-month insights",
    "Executive-level behavioural report",
    "Support from our behavioural specialists",
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Try Culture Crunch in one home — see improvements in 30 days.
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

          {/* Right: Pricing Card */}
          <div className="bg-card border-2 border-primary rounded-xl p-8 lg:p-10 sticky top-8">
            <div className="mb-8">
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Pilot Cost</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-card-foreground">$25,000</span>
              </div>
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
          </div>
        </div>
      </div>
    </section>
  )
}
