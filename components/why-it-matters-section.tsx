import { Target, Users, Heart, Shield, Star } from "lucide-react"

export function WhyItMattersSection() {
  const benefits = [
    {
      icon: Target,
      text: "Clearer leaders reduce mistakes.",
    },
    {
      icon: Users,
      text: "Better teamwork reduces stress.",
    },
    {
      icon: Heart,
      text: "Supported staff stay longer.",
    },
    {
      icon: Shield,
      text: "Safer culture improves compliance.",
    },
    {
      icon: Star,
      text: "Stronger shifts lift resident experience.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Better Leaders → Better Teams → Better Care.</h2>
        </div>

        {/* Benefits List */}
        <div className="max-w-2xl mx-auto mb-12">
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg font-medium text-card-foreground">{benefit.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Closing Statement */}
        <div className="text-center mb-12">
          <p className="text-xl text-muted-foreground">
            Culture Crunch improves the <strong className="text-foreground">moments that matter</strong> in aged care.
          </p>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden">
          <img src="/warm-aged-care-environment-caregiver-supporting-el.jpg" alt="Compassionate aged care environment" className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
