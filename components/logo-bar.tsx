export function LogoBar() {
  const partners = ["Bupa Aged Care", "Regis Aged Care", "Japara Healthcare", "Estia Health", "Arcare"]

  return (
    <section className="bg-muted py-12 border-y border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider font-medium">
          Trusted by Australian Aged Care Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
          {partners.map((partner) => (
            <div key={partner} className="text-lg font-semibold text-foreground/80">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
