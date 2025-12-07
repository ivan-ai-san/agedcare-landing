import { Flame, TrendingDown, Users, UserX, Briefcase, ShieldAlert } from "lucide-react"

export function ProblemSection() {
  const painPoints = [
    { icon: Flame, text: "Staff burnout is rising." },
    { icon: TrendingDown, text: "Turnover is unsustainably high." },
    { icon: Users, text: "Leaders are overwhelmed." },
    { icon: UserX, text: "Teams feel unsupported." },
    { icon: Briefcase, text: "Recruitment can't keep up." },
    { icon: ShieldAlert, text: "Care quality and compliance are at risk." },
  ]

  const traditionalFailures = [
    "Surveys produce information, not improvement.",
    "Workshops don't stick.",
    "Coaching doesn't scale.",
    "Leaders don't have time for long programs.",
    "Teams need help right now, not in 12 months.",
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Aged Care Is in a Workforce Crisis. <br />
            Behaviour Is the Bottleneck.
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
              <div className="flex-shrink-0">
                <point.icon className="w-6 h-6 text-destructive" />
              </div>
              <p className="text-lg font-medium text-card-foreground">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Insight */}
        <div className="text-center mb-16">
          <p className="text-xl text-muted-foreground">
            Most organisations know <em>why</em> performance is slipping — <br />
            <strong className="text-foreground">but they can't turn insight into behaviour change.</strong>
          </p>
        </div>

        {/* Traditional Solutions Fail */}
        <div className="bg-muted p-8 lg:p-12 rounded-xl border border-border">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center">Traditional Solutions Fail</h3>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {traditionalFailures.map((failure, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-sm font-bold mt-0.5">
                  ✕
                </span>
                <span className="text-lg text-foreground/90">{failure}</span>
              </li>
            ))}
          </ul>

          {/* Pull Quote */}
          <div className="mt-12 text-center">
            <p className="text-xl text-muted-foreground mb-2">Aged care doesn't need more data.</p>
            <p className="text-2xl lg:text-3xl font-bold text-primary">
              It needs weekly behaviour change that lifts performance fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
