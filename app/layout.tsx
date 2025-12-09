import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ContactFormProvider } from "@/components/contact-form-modal"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Culture Crunch | Behaviour Change Engine for Aged Care",
  description:
    "Lift leadership & workforce performance in aged care. Weekly behaviour change that delivers better leaders, stronger teams, and improved care.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ContactFormProvider>
          {children}
        </ContactFormProvider>
        <Analytics />
      </body>
    </html>
  )
}
