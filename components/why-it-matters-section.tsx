import { Target, Users, Heart, TrendingUp, Shield } from "lucide-react"

export function WhyItMattersSection() {
  const benefits = [
    {
      icon: Target,
      title: "Clarity Reduces Mistakes",
      description: "When leaders know what to do, teams execute better and residents receive consistent care.",
    },
    {
      icon: Users,
      title: "Teamwork Reduces Stress",
      description: "Better communication and collaboration means less burnout and better staff retention.",
    },
    {
      icon: Heart,
      title: "Connection Improves Wellbeing",
      description: "Leaders who connect with their teams create environments where staff want to stay.",
    },
    {
      icon: TrendingUp,
      title: "Capability Drives Performance",
      description: "Leaders who grow their skills week by week deliver measurable improvements.",
    },
    {
      icon: Shield,
      title: "Proactive Prevents Crisis",
      description: "Catch and address issues before they become compliance failures or safety incidents.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Better Leaders → Better Teams → Better Care</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When leadership capability improves week by week, everything improves
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden">
          <img src="/warm-aged-care-environment-caregiver-supporting-el.jpg" alt="Compassionate aged care environment" className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
