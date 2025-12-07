import { Building2, RefreshCw, Clock, Sparkles, LineChart, DollarSign } from "lucide-react"

export function DifferentiatorsSection() {
  const differentiators = [
    {
      icon: Building2,
      title: "Built for Aged Care",
      description:
        "Not generic. Designed specifically for Australian aged care workforce challenges, compliance realities, and care outcomes.",
    },
    {
      icon: RefreshCw,
      title: "Weekly Behaviour Change",
      description:
        "Not surveys. Not training. Weekly micro-actions that compound into major leadership and team improvements.",
    },
    {
      icon: Clock,
      title: "Zero Extra Workload",
      description:
        '30 seconds per leader per week. No login fatigue. No data entry. No "extra" tasks for overwhelmed managers.',
    },
    {
      icon: Sparkles,
      title: "Grounded in Science",
      description:
        "Built on 60,000+ datapoints and behavioral science research. Proven patterns that drive real change.",
    },
    {
      icon: LineChart,
      title: "High-Frequency Insight",
      description: "Weekly signals catch problems before they explode. Real-time awareness replaces once-a-year panic.",
    },
    {
      icon: DollarSign,
      title: "Immediate ROI",
      description:
        "Reduce turnover by 5% and you save 10x the investment. Most partners see improvements within weeks.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Not a survey. Not training. Not AI hype.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Culture Crunch is a behaviour change engine purpose-built for Australian aged care
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <diff.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-card-foreground">{diff.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
