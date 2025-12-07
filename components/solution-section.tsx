"use client"

import { Users, UserCheck, Brain, Target, BarChart3 } from "lucide-react"

export function SolutionSection() {
  const steps = [
    {
      number: 1,
      icon: Users,
      title: "Weekly Team Pulse",
      description: "Staff answer 3-4 micro-questions about teamwork, safety, support, clarity, and morale.",
      image: "/team_pulse.png",
    },
    {
      number: 2,
      icon: UserCheck,
      title: "Leader Pulse",
      description: "Leaders reflect on their own behaviours and habits for the week.",
      image: "/leader_pulse.png",
    },
    {
      number: 3,
      icon: Brain,
      title: "AI Analysis",
      description: "ChrisAI identifies the behaviour shifts that will create the biggest improvement right now.",
      image: "/ChrisAI_summary.png",
    },
    {
      number: 4,
      icon: Target,
      title: "Weekly Micro-Actions",
      description: "Each leader receives 1-2 personalised actions they can use immediately.",
      image: "/micro_actions.png",
    },
    {
      number: 5,
      icon: BarChart3,
      title: "Tracking & Reporting",
      description: "You see measurable behavioural improvements - week by week.",
      image: "/dashboard.png",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">The Behaviour Change Engine for Aged Care</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Culture Crunch gives every leader and team personalised, science-backed micro-actions every week - based on real workforce data - to improve engagement, teamwork and performance.
          </p>
        </div>

        {/* How it works */}
        <h3 className="text-2xl font-bold mb-12 text-center text-primary-foreground/90">How it works:</h3>

        {/* Process Steps with Images */}
        <div className="space-y-16 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-primary-foreground/80 leading-relaxed">{step.description}</p>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
                  <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={step.image}
                      alt={`${step.title} interface`}
                      className="w-full h-auto"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        target.parentElement!.innerHTML = `
                          <div class="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-8">
                            <div class="text-center">
                              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                                <span class="text-2xl font-bold text-primary">${step.number}</span>
                              </div>
                              <p class="text-sm text-muted-foreground">${step.title} Screenshot</p>
                            </div>
                          </div>
                        `
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="bg-accent text-accent-foreground p-8 rounded-xl text-center">
          <p className="text-2xl lg:text-3xl font-bold">Behaviour change in 30 seconds per leader per week.</p>
        </div>
      </div>
    </section>
  )
}
