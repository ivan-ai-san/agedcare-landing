import { Users, UserCheck, Brain, Target, BarChart3 } from "lucide-react"

export function SolutionSection() {
  const steps = [
    {
      number: 1,
      icon: Users,
      title: "Weekly Team Pulse",
      description: "Staff answer 3–4 micro-questions about teamwork, safety, support, clarity, and morale.",
    },
    {
      number: 2,
      icon: UserCheck,
      title: "Leader Pulse",
      description: "Leaders reflect on their own behaviours and habits for the week.",
    },
    {
      number: 3,
      icon: Brain,
      title: "AI Analysis",
      description: "ChrisAI identifies the behaviour shifts that will create the biggest improvement right now.",
    },
    {
      number: 4,
      icon: Target,
      title: "Weekly Micro-Actions",
      description: "Each leader receives 1–2 personalised actions they can use immediately.",
    },
    {
      number: 5,
      icon: BarChart3,
      title: "Tracking & Reporting",
      description: "You see measurable behavioural improvements — week by week.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">The Behaviour Change Engine for Aged Care</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Culture Crunch gives every leader and team personalised, science-backed micro-actions every week — based on real workforce data — to improve engagement, teamwork and performance.
          </p>
        </div>

        {/* How it works */}
        <h3 className="text-2xl font-bold mb-8 text-center text-primary-foreground/90">How it works:</h3>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-primary-foreground/5 p-8 rounded-xl border border-primary-foreground/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <step.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="bg-accent text-accent-foreground p-8 rounded-xl text-center">
          <p className="text-2xl lg:text-3xl font-bold">Behaviour change in 30 seconds per leader per week.</p>
        </div>

        {/* Supporting Image */}
        <div className="mt-16 rounded-xl overflow-hidden">
          <img src="/modern-dashboard-interface-showing-behavior-analyt.jpg" alt="Culture Crunch dashboard interface" className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
