import { AlertTriangle, TrendingDown, Users, Clock, Shield, FileText } from "lucide-react"

export function ProblemSection() {
  const painPoints = [
    { icon: TrendingDown, text: "Turnover is bleeding you dry" },
    { icon: Clock, text: "Burnout is burning through your best staff" },
    { icon: Users, text: "Managers are overwhelmed and under-equipped" },
    { icon: Shield, text: "Compliance failures expose you to risk" },
    { icon: AlertTriangle, text: "Safety incidents are increasing" },
    { icon: FileText, text: "Staff surveys produce reports, not results" },
  ]

  const traditionalFailures = [
    "Annual surveys arrive too late",
    "Training is forgotten by Friday",
    "Consultants cost a fortune and deliver nothing",
    'Managers have no time for "extra" work',
    "Data dashboards sit unused",
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
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
              <div className="flex-shrink-0">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-lg font-medium text-card-foreground">{point.text}</p>
            </div>
          ))}
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
            <p className="text-2xl lg:text-3xl font-bold text-primary italic">
              "Aged care doesn't need more data. <br />
              It needs weekly behaviour change."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
