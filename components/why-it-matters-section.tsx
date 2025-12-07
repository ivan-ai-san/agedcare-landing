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
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/warm-aged-care-environment-caregiver-supporting-el.jpg"
          alt="Compassionate aged care environment"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary/85" />
        {/* Depth Effects */}
        <div className="absolute -top-1/4 left-1/4 w-1/2 h-1/2 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-28 h-28 border border-white/10 rounded-full" />
        <div className="absolute bottom-32 left-16 w-20 h-20 border border-accent/15 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Better Leaders → Better Teams → Better Care.
          </h2>
        </div>

        {/* Benefits List */}
        <div className="max-w-2xl mx-auto mb-12">
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <p className="text-lg font-medium text-primary-foreground">{benefit.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <p className="text-lg text-primary-foreground font-medium">
              Culture Crunch improves the <strong className="text-accent">moments that matter</strong> in aged care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
