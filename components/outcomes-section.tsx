export function OutcomesSection() {
  const audiences = [
    {
      role: "CEOs",
      outcomes: [
        "Lower staff turnover = immediate cost savings",
        "Measurable culture improvement across sites",
        "Reduced compliance risk and incident rates",
        "Data-backed confidence in leadership capability",
      ],
    },
    {
      role: "CHROs",
      outcomes: [
        "Real-time workforce sentiment and risk signals",
        "Proactive interventions before crises develop",
        "Clear ROI on leadership development investment",
        "Reduced recruitment and onboarding costs",
      ],
    },
    {
      role: "Managers",
      outcomes: [
        "Know exactly what to do each week to improve",
        "Feel supported, not surveyed",
        "Build capability without extra workload",
        "See their impact on team performance",
      ],
    },
    {
      role: "Frontline Staff",
      outcomes: [
        "Work in teams that communicate better",
        "Experience less burnout and stress",
        "Feel heard and valued by leadership",
        "See real improvements week by week",
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Aged Care Providers Achieve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Different stakeholders, different outcomes — all measurable, all valuable
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-card-foreground">{audience.role}</h3>
              </div>
              <ul className="space-y-4">
                {audience.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 text-accent-foreground flex items-center justify-center text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
