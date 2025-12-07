import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-balance leading-tight">
          Aged Care deserves leaders and teams who feel supported, capable, and connected.
        </h2>
        <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
          Culture Crunch helps you build that — one week at a time.
        </p>

        <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-8 mb-12">
          <p className="text-2xl lg:text-3xl font-bold">Lift leadership. Strengthen teams. Improve care.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-8"
          >
            Book a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold px-8"
          >
            Request a Proposal
          </Button>
        </div>
      </div>
    </section>
  )
}
