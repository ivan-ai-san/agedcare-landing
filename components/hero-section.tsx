import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[90vh]">
        {/* Left Panel - Dark */}
        <div className="bg-primary text-primary-foreground flex flex-col justify-center px-6 py-16 lg:px-16 lg:py-24">
          <div className="max-w-2xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-8">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="text-sm font-medium">Trusted by 50+ Aged Care Providers</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Lift Leadership & Workforce Performance. Every Week.
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              The behaviour change engine that transforms aged care teams through weekly micro-actions. Better leaders →
              better teams → better care.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold">
                Book a 20-Minute Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold"
              >
                See How It Works
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-1">90%+</div>
                <div className="text-sm text-primary-foreground/70">Leader Adoption</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-1">30sec</div>
                <div className="text-sm text-primary-foreground/70">Weekly Commitment</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-1">30d</div>
                <div className="text-sm text-primary-foreground/70">To See Results</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div className="relative bg-secondary hidden lg:block">
          <div className="absolute inset-0">
            <img
              src="/aged-care-team-meeting-with-diverse-healthcare-pro.jpg"
              alt="Aged care leadership team collaborating"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Optional overlay badge */}
          <div className="absolute bottom-12 left-12 bg-card p-6 rounded-xl shadow-lg max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground">✓</span>
              </div>
              <div>
                <div className="font-semibold text-card-foreground">Behaviour Change</div>
                <div className="text-sm text-muted-foreground">In 30 seconds per week</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image */}
      <div className="lg:hidden relative h-[50vh] bg-secondary">
        <img
          src="/aged-care-team-meeting-with-diverse-healthcare-pro.jpg"
          alt="Aged care leadership team collaborating"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
