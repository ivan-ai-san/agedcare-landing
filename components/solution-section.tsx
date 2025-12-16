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
      description: "CHRIS identifies the behaviour shifts that will create the biggest improvement right now.",
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
      image: "/dashboard2.png",
    },
  ]

  return (
    <section id="how-it-works" className="relative py-20 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      {/* Depth Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow - top right */}
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl" />
        {/* Radial glow - bottom left */}
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/15 rounded-full blur-3xl" />
        {/* Subtle center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-white/5 rounded-full blur-3xl" />
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent/20 rounded-full" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/10 rounded-full" />
        <div className="absolute bottom-20 right-1/3 w-40 h-40 border border-accent/10 rounded-full" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 transition-transform duration-300 ease-out hover:scale-[1.5] cursor-pointer z-10 hover:z-50">
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
          <p className="text-2xl lg:text-3xl font-bold">2 minutes from your team. 30 from your leaders. Change that lasts.</p>
        </div>
      </div>
    </section>
  )
}
