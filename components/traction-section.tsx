export function TractionSection() {
  const results = [
    "90%+ leader adoption",
    "Improved morale within weeks",
    "Teams reporting \"small changes making a big difference\"",
    "Leaders reporting lower stress and more confidence",
    "Measurable behavioural uplift in the first month",
  ]

  return (
    <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      {/* Depth Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow - center top */}
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-accent/15 rounded-full blur-3xl" />
        {/* Radial glow - bottom corners */}
        <div className="absolute -bottom-1/4 -left-1/4 w-1/3 h-1/2 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/3 h-1/2 bg-accent/10 rounded-full blur-3xl" />
        {/* Floating shapes */}
        <div className="absolute top-24 left-16 w-20 h-20 border border-white/10 rounded-full" />
        <div className="absolute top-32 right-24 w-28 h-28 border border-accent/15 rounded-full" />
        <div className="absolute bottom-16 left-1/3 w-16 h-16 border border-white/10 rounded-full" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Early Aged Care Partners</h2>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-16 mb-16">
          <a
            href="https://kinyarahealth.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src="https://kinyarahealth.com.au/wp-content/uploads/2025/01/logo_kinyara.Colour-Full-nomargin.png"
              alt="Kinyara Health"
              className="w-36 h-auto object-contain"
            />
          </a>
          <a
            href="https://harbison.org.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src="https://harbison.org.au/wp-content/uploads/2025/04/Harbison-Logo-reversed-1.svg"
              alt="Harbison"
              className="w-36 h-auto object-contain"
            />
          </a>
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
