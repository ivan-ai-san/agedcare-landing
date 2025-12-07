export function TractionSection() {
  const results = [
    "90%+ leader adoption",
    "Improved morale within weeks",
    "Teams reporting \"small changes making a big difference\"",
    "Leaders reporting lower stress and more confidence",
    "Measurable behavioural uplift in the first month",
  ]

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Early Aged Care Partners</h2>
        </div>

        {/* Partner Logos Placeholder */}
        <div className="flex flex-wrap justify-center items-center gap-12 mb-16 opacity-60">
          <div className="text-lg font-medium bg-primary-foreground/10 px-6 py-3 rounded-lg">Partner Logo</div>
          <div className="text-lg font-medium bg-primary-foreground/10 px-6 py-3 rounded-lg">Partner Logo</div>
          <div className="text-lg font-medium bg-primary-foreground/10 px-6 py-3 rounded-lg">Partner Logo</div>
        </div>

        {/* What they're seeing */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">What they're seeing:</h3>
          <ul className="space-y-4">
            {results.map((result, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold mt-0.5">
                  ✓
                </span>
                <span className="text-lg text-primary-foreground/90">{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tagline */}
        <div className="mt-16 text-center">
          <p className="text-2xl lg:text-3xl font-bold text-accent">
            Better leaders → Better teams → Better care.
          </p>
        </div>
      </div>
    </section>
  )
}
