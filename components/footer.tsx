"use client"

import Link from "next/link"
import { useContactForm } from "@/components/contact-form-modal"

export function Footer() {
  const { openForm } = useContactForm()

  return (
    <footer className="relative bg-card border-t border-border py-12 overflow-hidden">
      {/* Depth Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-full bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Culture Crunch</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The behaviour change engine for Australian aged care providers.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <button
                  onClick={() => openForm("demo")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Culture Crunch. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="https://www.linkedin.com/company/culturecrunch" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
