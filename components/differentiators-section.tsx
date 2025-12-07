import { Building2, RefreshCw, Clock, Sparkles, LineChart, DollarSign } from "lucide-react"

export function DifferentiatorsSection() {
  const differentiators = [
    {
      number: 1,
      icon: Building2,
      title: "Built specifically for Aged Care",
      description:
        "Designed for fast-moving, under-resourced environments where leadership impact is felt instantly.",
    },
    {
      number: 2,
      icon: RefreshCw,
      title: "Weekly behaviour change (not annual reviews)",
      description:
        "Leaders improve every 7 days. No other solution delivers this frequency.",
    },
    {
      number: 3,
      icon: Clock,
      title: "Zero extra workload",
      description:
        "30 seconds. No workshops. No consultants. No LMS. No extra admin.",
    },
    {
      number: 4,
      icon: Sparkles,
      title: "Grounded in leadership science + behavioural research",
      description:
        "60,000 datapoints, 32 leadership models, trust, teamwork, engagement & retention science.",
    },
    {
      number: 5,
      icon: LineChart,
      title: "High-frequency insight",
      description: "Catch risk early - burnout, conflict, disengagement, turnover signals.",
    },
    {
      number: 6,
      icon: DollarSign,
      title: "Immediate ROI",
      description:
        "A 2% improvement in retention pays for the entire platform.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Not a survey. Not training. Not AI hype.</h2>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff) => (
            <div key={diff.number} className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {diff.number}
                </div>
                <diff.icon className="w-6 h-6 text-primary" />
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
