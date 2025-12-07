"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useContactForm } from "@/components/contact-form-modal"

export function FinalCtaSection() {
  const { openForm } = useContactForm()

  return (
    <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      {/* Depth Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow - top left */}
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl" />
        {/* Radial glow - bottom right */}
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/15 rounded-full blur-3xl" />
        {/* Floating shapes */}
        <div className="absolute top-16 right-16 w-24 h-24 border border-white/10 rounded-full" />
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-accent/10 rounded-full" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-balance leading-tight">
          Aged Care deserves leaders and teams who feel supported, capable, and connected.
        </h2>
        <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
          Culture Crunch helps you build that - one week at a time.
        </p>

        <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-8 mb-12">
          <p className="text-2xl lg:text-3xl font-bold">Lift leadership. Strengthen teams. Improve care.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-8"
            onClick={() => openForm("demo")}
          >
            Book a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold px-8"
            onClick={() => openForm("proposal")}
          >
            Request a Proposal
          </Button>
        </div>
      </div>
    </section>
  )
}
