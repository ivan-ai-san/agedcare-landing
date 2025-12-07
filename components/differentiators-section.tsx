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
    <section className="relative py-20 lg:py-32 bg-muted overflow-hidden">
      {/* Depth Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient mesh */}
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-1/2 bg-white/50 rounded-full blur-3xl" />
        {/* Floating shapes */}
        <div className="absolute top-16 right-12 w-28 h-28 border border-primary/10 rounded-full" />
        <div className="absolute bottom-20 left-24 w-20 h-20 border border-accent/10 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-primary/5 rounded-full" />
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1d4d4f08_1px,transparent_1px)] bg-size-[24px_24px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
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
