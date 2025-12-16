"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
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

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last Updated: December 8, 2025</p>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Welcome to Culture Crunch</h2>
              <p className="text-muted-foreground mb-4">
                Culture Crunch Pty Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting the privacy of individuals who use our leadership development platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Culture Crunch Pty Ltd</strong><br />
                ACN: 693 217 971<br />
                ABN: 67 693 217 971<br />
                Registered Address: 91C Shepherd Street, Bowral, NSW 2576, Australia
              </p>
              <p className="text-muted-foreground">
                We comply with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) and any applicable state privacy legislation.
              </p>
            </section>

            {/* Privacy Philosophy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Privacy Philosophy: Privacy by Minimalism</h2>
              <p className="text-muted-foreground mb-4">
                We believe in collecting only what we need to deliver value. Our approach is &quot;privacy by minimalism&quot; - we deliberately design our platform to work with team-level insights rather than individual performance tracking.
              </p>
              <div className="bg-card border border-border rounded-xl p-6 mb-4">
                <h3 className="text-lg font-bold mb-3 text-foreground">What We DON&apos;T Collect</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>- Individual performance scores or rankings</li>
                  <li>- Keystroke logging or screen monitoring</li>
                  <li>- Location tracking or GPS data</li>
                  <li>- Personal health information</li>
                  <li>- Biometric data</li>
                  <li>- Individual response attribution to managers</li>
                </ul>
              </div>
            </section>

            {/* Aged Care Specific */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Aged Care Industry Considerations</h2>
              <p className="text-muted-foreground mb-4">
                Culture Crunch is designed specifically for the aged care sector in Australia. We understand the unique privacy requirements of this industry:
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-4">
                <h3 className="text-lg font-bold mb-3 text-foreground">Aged Care Specific Protections</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong className="text-foreground">No Resident Data:</strong> Culture Crunch focuses exclusively on workforce development. We do not collect, store, or process any information about aged care residents or their families.</li>
                  <li><strong className="text-foreground">Aged Care Quality Standards Alignment:</strong> Our platform supports compliance with Aged Care Quality Standard 7 (Human Resources) without compromising staff privacy.</li>
                  <li><strong className="text-foreground">Workforce Wellbeing Focus:</strong> Data collected is used solely to improve leadership capability and team culture - not for performance management or surveillance.</li>
                  <li><strong className="text-foreground">Separation from Care Records:</strong> Our systems are completely separate from clinical and care management systems. There is no integration with resident information systems.</li>
                </ul>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Information We Collect</h2>

              <h3 className="text-xl font-semibold mb-3 text-foreground">Account Information</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>- Name and email address</li>
                <li>- Organisation name and role</li>
                <li>- Contact preferences</li>
                <li>- Payment information (processed securely by third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">Platform Usage Data</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>- Team-level pulse survey responses (aggregated, not individual)</li>
                <li>- Leader self-reflection inputs</li>
                <li>- Program progress and completion data</li>
                <li>- AI Coach interaction logs (for service improvement)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">Technical Information</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>- Device type and browser information</li>
                <li>- IP address (anonymised after 30 days)</li>
                <li>- Cookies and similar technologies</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">How We Use Your Information</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Service Delivery:</strong> To provide team-level insights and personalised leadership recommendations</li>
                <li><strong className="text-foreground">AI Coach Companion:</strong> To generate evidence-based micro-actions for leaders</li>
                <li><strong className="text-foreground">Platform Improvement:</strong> To enhance our algorithms and user experience</li>
                <li><strong className="text-foreground">Communication:</strong> To send program updates, insights, and relevant information</li>
                <li><strong className="text-foreground">Research:</strong> To contribute to peer-reviewed organisational science (de-identified only)</li>
              </ul>
            </section>

            {/* AI-Powered Insights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">AI-Powered Insights</h2>
              <p className="text-muted-foreground mb-4">
                Our AI Coach Companion (CHRIS) analyses team-level data to provide leadership recommendations. These insights are:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>- Advisory only (not automated decisions affecting employment)</li>
                <li>- Based on aggregated team signals, not individual metrics</li>
                <li>- Designed to support leadership development, not replace human judgment</li>
                <li>- Always subject to leadership context and discretion</li>
              </ul>
              <p className="text-muted-foreground">
                You have the right to understand how AI recommendations are generated and to request human review of any AI-generated insight.
              </p>
            </section>

            {/* Workplace Privacy Notice */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Workplace Privacy Notice</h2>
              <p className="text-muted-foreground mb-4">
                Culture Crunch is designed for workplace use. If you are an employee whose organisation uses Culture Crunch:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Team-Level Only:</strong> Your team leader may access team-level insights that include aggregated signals from participation</li>
                <li><strong className="text-foreground">Individual Privacy:</strong> We do NOT share individual responses, scores, or behavioural data with your employer</li>
                <li><strong className="text-foreground">Not Surveillance:</strong> Culture Crunch is not a surveillance system and does not constitute workplace surveillance under NSW law</li>
                <li><strong className="text-foreground">Complaints:</strong> You may raise concerns with us at privacy@culturecrunch.io or your organisation&apos;s privacy officer</li>
              </ul>
            </section>

            {/* Small Teams */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Privacy Protection for Small Teams</h2>
              <p className="text-muted-foreground mb-4">
                For teams with fewer than 5 members, aggregated data may be reasonably identifiable to individuals. In these cases:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>- We apply additional privacy safeguards</li>
                <li>- Leaders receive summary insights only (no granular breakdowns)</li>
                <li>- Sensitive signals are suppressed if identifiability risk is high</li>
                <li>- We will notify you if your team size creates privacy considerations</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Who We Share Data With</h2>
              <p className="text-muted-foreground mb-4">
                We only share data with trusted service providers who process data on our behalf:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li><strong className="text-foreground">Cloud Hosting:</strong> Secure Australian-based infrastructure</li>
                <li><strong className="text-foreground">Payment Processing:</strong> PCI-compliant payment providers</li>
                <li><strong className="text-foreground">Email Delivery:</strong> Transactional email services</li>
                <li><strong className="text-foreground">Analytics:</strong> Privacy-focused analytics tools</li>
              </ul>
              <p className="text-muted-foreground">
                All processors are contractually bound to protect your data and comply with Australian privacy standards.
              </p>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement industry-standard security measures including:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>- Encryption in transit and at rest</li>
                <li>- Regular security assessments</li>
                <li>- Access controls and authentication</li>
                <li>- Employee security training</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                While we take security seriously, no system is 100% secure. We encourage you to use strong passwords and protect your login credentials.
              </p>
            </section>

            {/* Data Breach Notification */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Data Breach Notification</h2>
              <p className="text-muted-foreground mb-4">
                If we experience a data breach likely to result in serious harm, we will:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>- Notify affected individuals as soon as practicable</li>
                <li>- Notify the Office of the Australian Information Commissioner (OAIC)</li>
                <li>- Provide details of the breach, likely consequences, and steps being taken</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We maintain an incident response plan in accordance with the Privacy Act 1988.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain your data for as long as your account is active, plus 90 days for transition support. Upon account deletion:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Active Data:</strong> Removed within 90 days to allow transition/export</li>
                <li><strong className="text-foreground">Backup Systems:</strong> Removed within 180 days (due to backup rotation)</li>
                <li><strong className="text-foreground">Legal Holds:</strong> Retained longer only if required by law or legitimate dispute</li>
                <li><strong className="text-foreground">Aggregated Analytics:</strong> De-identified data may be retained indefinitely for research (cannot be re-linked to you)</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Under Australian Privacy Principles, you have the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>- Access personal information we hold about you</li>
                <li>- Request correction of inaccurate information</li>
                <li>- Request deletion of your data (subject to legal requirements)</li>
                <li>- Opt-out of marketing communications</li>
                <li>- Complain to the OAIC if you believe we&apos;ve breached the APPs</li>
              </ul>
              <p className="text-muted-foreground">
                We will respond to access and correction requests within 30 days.
              </p>
            </section>

            {/* International Transfers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">International Data Transfers</h2>
              <p className="text-muted-foreground">
                Some of our service providers may be located overseas. When we transfer data internationally, we ensure appropriate safeguards are in place to protect your information in accordance with APP 8.
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Cookies and Similar Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>- Keep you logged in</li>
                <li>- Remember your preferences</li>
                <li>- Understand how you use our platform</li>
                <li>- Improve our services</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                You can control cookies through your browser settings. Some features may not work properly if cookies are disabled.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For privacy-related questions or to exercise your rights:
              </p>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Email:</strong> privacy@culturecrunch.io</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Response Time:</strong> Within 5 business days</p>
                <p className="text-muted-foreground"><strong className="text-foreground">OAIC:</strong> If you&apos;re not satisfied with our response, you may contact the Office of the Australian Information Commissioner at <a href="https://www.oaic.gov.au" className="text-primary hover:underline">www.oaic.gov.au</a></p>
              </div>
            </section>

            {/* Changes */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Material changes will be communicated via email or platform notification. Continued use of our services after changes indicates acceptance.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Footer */}
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
