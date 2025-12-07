import { Activity, TrendingUp, Target, BarChart3, Zap } from "lucide-react"

export function SolutionSection() {
  const steps = [
    {
      number: 1,
      icon: Activity,
      title: "Weekly Pulse",
      description: "Leaders answer 1 question per week (30 seconds). Simple, frequent, focused.",
    },
    {
      number: 2,
      icon: BarChart3,
      title: "Real-Time Analysis",
      description: "Our engine identifies patterns and behaviours that impact your workforce.",
    },
    {
      number: 3,
      icon: Target,
      title: "Micro-Actions",
      description: "Each leader gets 1 specific action to improve team dynamics this week.",
    },
    {
      number: 4,
      icon: TrendingUp,
      title: "Track Progress",
      description: "See leadership capability and team performance improve week by week.",
    },
    {
      number: 5,
      icon: Zap,
      title: "Compound Results",
      description: "Small weekly changes create massive improvements over 30, 60, 90 days.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">The Behaviour Change Engine for Aged Care</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Culture Crunch turns leadership into a weekly habit. Leaders get one question, one action, every week. No
            surveys. No training modules. Just simple, science-backed behaviour change that compounds over time.
          </p>
        </div>

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
          <p className="text-2xl lg:text-3xl font-bold">Behaviour change in 30 seconds per leader per week</p>
        </div>

        {/* Supporting Image */}
        <div className="mt-16 rounded-xl overflow-hidden">
          <img src="/modern-dashboard-interface-showing-behavior-analyt.jpg" alt="Culture Crunch dashboard interface" className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
