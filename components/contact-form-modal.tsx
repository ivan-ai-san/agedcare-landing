"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, CheckCircle } from "lucide-react"

type InterestType = "demo" | "proposal"

interface ContactFormContextType {
  openForm: (type?: InterestType) => void
  closeForm: () => void
}

const ContactFormContext = React.createContext<ContactFormContextType | null>(null)

export function useContactForm() {
  const context = React.useContext(ContactFormContext)
  if (!context) {
    throw new Error("useContactForm must be used within a ContactFormProvider")
  }
  return context
}

export function ContactFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [interestType, setInterestType] = React.useState<InterestType>("demo")
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const openForm = (type: InterestType = "demo") => {
    setInterestType(type)
    setIsSubmitted(false)
    setIsOpen(true)
  }

  const closeForm = () => {
    setIsOpen(false)
    setTimeout(() => setIsSubmitted(false), 300)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <ContactFormContext.Provider value={{ openForm, closeForm }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          {!isSubmitted ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {interestType === "demo" ? "Book a Demo" : "Request a Proposal"}
                </DialogTitle>
                <DialogDescription>
                  {interestType === "demo"
                    ? "See how Culture Crunch can transform your aged care workforce in just 20 minutes."
                    : "Get a customised proposal for your organisation's needs."}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@organisation.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organisation">Organisation</Label>
                  <Input id="organisation" name="organisation" placeholder="Your aged care organisation" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Your Role</Label>
                  <Input id="role" name="role" placeholder="e.g., CEO, CHRO, Operations Manager" required />
                </div>

                <div className="space-y-3">
                  <Label>I'm interested in:</Label>
                  <RadioGroup
                    value={interestType}
                    onValueChange={(value) => setInterestType(value as InterestType)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="demo" id="interest-demo" />
                      <Label htmlFor="interest-demo" className="font-normal cursor-pointer">
                        A 20-minute demo
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="proposal" id="interest-proposal" />
                      <Label htmlFor="interest-proposal" className="font-normal cursor-pointer">
                        A customised proposal
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Anything else we should know? (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your current challenges or questions..."
                    className="min-h-[80px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      {interestType === "demo" ? "Book My Demo" : "Request Proposal"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </>
          ) : (
            <div className="py-8 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <DialogTitle className="text-2xl mb-2">Thank You!</DialogTitle>
              <DialogDescription className="text-base">
                We've received your request and will be in touch within 24 hours.
              </DialogDescription>
              <Button onClick={closeForm} className="mt-6" variant="outline">
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </ContactFormContext.Provider>
  )
}
