export function TractionSection() {
  const metrics = [
    { value: "90%+", label: "Leader adoption across pilot sites" },
    { value: "4 weeks", label: "To see measurable team improvements" },
    { value: "30 days", label: "To observe uplift in first month metrics" },
  ]

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Early Aged Care Partners</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            We're working with forward-thinking providers who refuse to accept the status quo
          </p>
        </div>

        {/* Partner Logos Placeholder */}
        <div className="flex flex-wrap justify-center items-center gap-12 mb-16 opacity-80">
          <div className="text-xl font-semibold">Pilot Partner 1</div>
          <div className="text-xl font-semibold">Pilot Partner 2</div>
          <div className="text-xl font-semibold">Pilot Partner 3</div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl font-bold mb-3 text-accent">{metric.value}</div>
              <div className="text-lg text-primary-foreground/80">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Optional Testimonial */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <blockquote className="text-xl lg:text-2xl italic mb-4">
            "In 30 days, we saw improvements in manager confidence and team communication. It's the first tool that
            actually fits into our workflow instead of adding to it."
          </blockquote>
          <cite className="text-primary-foreground/70 not-italic">— CEO, Regional Aged Care Provider</cite>
        </div>
      </div>
    </section>
  )
}
