"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useContactForm } from "@/components/contact-form-modal"

export default function AboutPage() {
  const { openForm } = useContactForm()

  const founders = [
    {
      initials: "CM",
      name: "Campbell McGlynn",
      role: "Co-Founder & CEO",
      bio: [
        "Campbell brings over 20 years of senior HR leadership experience transforming culture at scale. As EGM People & Culture at IRT Group, he led programs that generated $3M ROI while improving lives for 3,000 employees. He's designed and delivered enterprise-wide leadership transformations at organisations like Laing O'Rourke, NBN Co, Woodside Energy, and King & Wood Mallesons - consistently achieving double-digit improvements in engagement and dramatic reductions in attrition.",
        "Starting his career as an Australian Army officer, Campbell learned early that leadership under pressure requires more than skillsets - it demands identity-level transformation. As an IECL Professional Certified Coach, he specialises in vertical development, emotional intelligence, and high-performance communication. He's seen firsthand why traditional leadership programs fail: they teach concepts without changing the operating systems leaders run on.",
        "Campbell's unique perspective? He's tired of watching organisations spend millions on training events that produce temporary enthusiasm but zero lasting behaviour change. At CultureCrunch, he's building what he wished existed in every boardroom conversation about culture: an operating system that makes leadership development inseparable from how work actually gets done.",
      ],
    },
    {
      initials: "IS",
      name: "Ivan Sanchez",
      role: "Co-Founder & CTO",
      bio: [
        "Ivan brings 16+ years at the intersection of enterprise technology and strategic growth. From scaling Salesforce implementations at Cloudwerx to driving AI-led digital innovation at Thoughtworks, he's watched countless organisations buy transformation tools that measure everything but change nothing. His career spans territory sales at Oracle, business development across Asia-Pacific, and founding Digicity for Kids - a startup teaching him the hard lessons about product-market fit.",
        "With an MBA from UNSW and graduation from both Founder Institute and WSU Launch Pad, Ivan combines enterprise sales discipline with startup velocity. He's that rare technologist who speaks both boardroom strategy and shipping code - someone who's consistently exceeded quotas while also bootstrapping ventures from zero. He knows the difference between software that gets bought and software that gets used.",
        "Ivan's unique perspective? He's seen billion-dollar companies drown in engagement surveys while their culture rots from lack of execution. He understands that culture transformation isn't a data problem - it's a behaviour change problem disguised as an analytics opportunity. At CultureCrunch, he's building the infrastructure that turns research into repeatable systems, making evidence-based leadership as accessible as checking email.",
      ],
    },
  ]

  const beliefs = [
    {
      number: 1,
      title: "Evidence Over Opinion",
      description: "Every feature we build connects to research. Every claim has evidence. We believe in measuring what matters.",
    },
    {
      number: 2,
      title: "Simplicity Wins",
      description: "Complex systems don't get used. We obsess over making powerful tools that feel effortless.",
    },
    {
      number: 3,
      title: "Leaders First",
      description: "We build for the leaders in the trenches, not just executives in boardrooms. If it doesn't help frontline managers, it doesn't ship.",
    },
    {
      number: 4,
      title: "Compound Learning",
      description: "Every interaction makes the system smarter. We believe the fastest learner wins.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header with back link */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Us</h1>
          </div>

          {/* Mission */}
          <div className="text-center mb-20">
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our mission is to transform how organisations build culture - making it embedded, measurable, and continuously improving.
            </p>
          </div>

          {/* Meet the Founders */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Meet the Founders</h2>
              <p className="text-xl text-muted-foreground">The team behind Culture Crunch</p>
            </div>

            <div className="space-y-16">
              {founders.map((founder, index) => (
                <div
                  key={founder.name}
                  className={`grid gap-8 items-start ${
                    index % 2 === 1 ? "lg:grid-cols-[1fr_200px]" : "lg:grid-cols-[200px_1fr]"
                  }`}
                >
                  {/* Avatar */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto lg:mx-0">
                      <span className="text-4xl lg:text-5xl font-bold">{founder.initials}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-lg text-accent font-semibold mb-6">{founder.role}</p>
                    <div className="space-y-4">
                      {founder.bio.map((paragraph, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What We Believe */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">What We Believe</h2>
              <p className="text-xl text-muted-foreground">The principles that guide everything we build</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {beliefs.map((belief) => (
                <div key={belief.number} className="bg-card p-8 rounded-xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                      {belief.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-card-foreground">{belief.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{belief.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Culture?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join the organisations building leadership capability that compounds week after week.
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold"
              onClick={() => openForm("demo")}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </footer>
    </main>
  )
}
