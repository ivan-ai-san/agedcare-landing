export function OutcomesSection() {
  const audiences = [
    {
      role: "For CEOs",
      outcomes: [
        "Stronger leadership across every home",
        "Higher workforce performance",
        "Reduced turnover and agency reliance",
        "Better resident experience",
        "Improved compliance and operational stability",
      ],
    },
    {
      role: "For CHROs",
      outcomes: [
        "Scalable behaviour change",
        "Meaningful engagement shifts within weeks",
        "Development for every leader, every week",
        "Fewer grievances and escalations",
        "Clear reporting on behavioural improvement",
      ],
    },
    {
      role: "For Managers & Team Leaders",
      outcomes: [
        "Simple, actionable guidance each week",
        "Better communication and conflict handling",
        "Calmer, more connected shifts",
        "Higher confidence and capability",
      ],
    },
    {
      role: "For Frontline Staff",
      outcomes: [
        "More support",
        "More clarity",
        "More recognition",
        "A culture worth\u00A0staying\u00A0in",
      ],
    },
  ]

  return (
    <section className="relative py-20 lg:py-32 bg-background overflow-hidden">
      {/* Depth Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient mesh */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        {/* Floating shapes */}
        <div className="absolute top-20 right-24 w-20 h-20 border border-primary/10 rounded-full" />
        <div className="absolute bottom-24 left-16 w-28 h-28 border border-accent/10 rounded-full" />
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1d4d4f08_1px,transparent_1px)] bg-size-[24px_24px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Aged Care Providers Achieve</h2>
        </div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-card-foreground">{audience.role}</h3>
              </div>
              <ul className="space-y-3">
                {audience.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-accent/20 text-accent-foreground flex items-center justify-center text-xs font-bold mt-0.5">
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
