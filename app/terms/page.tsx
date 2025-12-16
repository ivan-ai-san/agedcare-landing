"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfUsePage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms of Use</h1>
          <p className="text-muted-foreground mb-12">Last Updated: December 8, 2025</p>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Welcome to Culture Crunch</h2>
              <p className="text-muted-foreground mb-4">
                These Terms of Use (&quot;Terms&quot;) govern your access to and use of the Culture Crunch leadership development platform, including our website and all related services (collectively, the &quot;Platform&quot;).
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Culture Crunch Pty Ltd</strong><br />
                ACN: 693 217 971<br />
                ABN: 67 693 217 971<br />
                Registered Address: 91C Shepherd Street, Bowral, NSW 2576, Australia
              </p>
              <p className="text-muted-foreground">
                Please read these Terms carefully. By accessing or using Culture Crunch, you agree to be bound by these Terms and our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>. If you do not agree with any part of these Terms, you may not access or use the Platform.
              </p>
            </section>

            {/* Description of Service */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Description of Service</h2>

              <h3 className="text-xl font-semibold mb-3 text-foreground">1.1 What Culture Crunch Provides</h3>
              <p className="text-muted-foreground mb-4">
                Culture Crunch is the behaviour change engine for Australian aged care providers. Our Platform provides:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>- Weekly Team Pulse surveys and Leader Pulse reflections</li>
                <li>- AI Coach Companion (CHRIS) providing personalised leadership insights</li>
                <li>- Research-backed micro-actions for behaviour change</li>
                <li>- Team-level analytics on engagement, teamwork, and culture</li>
                <li>- Executive reporting and insights dashboards</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">1.2 What Culture Crunch Is NOT</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Not Performance Management:</strong> We do not track individual employee performance or provide surveillance capabilities</li>
                <li><strong className="text-foreground">Not Professional Advice:</strong> While informed by research, our Platform does not replace professional HR, legal, or psychological services</li>
                <li><strong className="text-foreground">Not a Clinical System:</strong> Culture Crunch has no integration with or access to resident care systems, clinical records, or healthcare information</li>
                <li><strong className="text-foreground">Not a Guarantee:</strong> Leadership development outcomes vary based on organisational context, readiness, and implementation</li>
              </ul>
            </section>

            {/* Aged Care Industry Specific */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Aged Care Industry Specific Terms</h2>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold mb-3 text-foreground">Understanding the Aged Care Context</h3>
                <p className="text-muted-foreground mb-4">
                  Culture Crunch is designed specifically for Australian aged care providers and understands the unique regulatory and operational environment of this sector.
                </p>

                <h4 className="font-semibold text-foreground mb-2">Aged Care Quality Standards</h4>
                <p className="text-muted-foreground mb-4">
                  Our platform supports compliance with the Aged Care Quality Standards, particularly Standard 7 (Human Resources), by helping organisations develop capable and supported workforces. However, Culture Crunch is a leadership development tool - not a compliance management system.
                </p>

                <h4 className="font-semibold text-foreground mb-2">Workforce Focus Only</h4>
                <p className="text-muted-foreground mb-4">
                  Culture Crunch focuses exclusively on aged care workforce development. We do not collect, store, process, or access any information about:
                </p>
                <ul className="space-y-1 text-muted-foreground mb-4">
                  <li>- Aged care residents or their families</li>
                  <li>- Clinical care records or health information</li>
                  <li>- Care plans, assessments, or incident reports</li>
                  <li>- Resident funding or AN-ACC classifications</li>
                </ul>

                <h4 className="font-semibold text-foreground mb-2">Regulatory Compliance</h4>
                <p className="text-muted-foreground">
                  Your organisation remains responsible for all regulatory compliance obligations under the Aged Care Act 1997, Aged Care Quality and Safety Commission Act 2018, and related legislation. Culture Crunch insights should inform but not replace your quality and compliance processes.
                </p>
              </div>
            </section>

            {/* Eligibility */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Eligibility and Account Requirements</h2>

              <h3 className="text-xl font-semibold mb-3 text-foreground">3.1 Who Can Use Culture Crunch</h3>
              <p className="text-muted-foreground mb-4">You may use Culture Crunch if you:</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>- Are at least 18 years of age</li>
                <li>- Have the authority to bind your organisation to these Terms (for organisational accounts)</li>
                <li>- Are not prohibited from using our services under applicable laws</li>
                <li>- Comply with all local laws regarding online conduct</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">3.2 Account Registration</h3>
              <p className="text-muted-foreground mb-4">To access certain features, you must create an account. You agree to:</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>- Provide accurate, current, and complete information</li>
                <li>- Maintain and update your information as needed</li>
                <li>- Keep your password secure and confidential</li>
                <li>- Notify us immediately of any unauthorised access</li>
                <li>- Accept responsibility for all activities under your account</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">3.3 Organisational Accounts</h3>
              <p className="text-muted-foreground mb-4">If you create an account on behalf of an aged care organisation:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>- You represent that you have authority to bind that organisation</li>
                <li>- Both you and the organisation are bound by these Terms</li>
                <li>- The organisation is responsible for all users under its account</li>
                <li>- The organisation must notify employees about Culture Crunch use in accordance with workplace privacy laws</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Intellectual Property Rights</h2>

              <h3 className="text-xl font-semibold mb-3 text-foreground">4.1 Our Intellectual Property</h3>
              <p className="text-muted-foreground mb-4">
                All content, features, and functionality on the Platform, including text, graphics, logos, software code, algorithms, AI models, methodologies, and user interface design, are owned by Culture Crunch Pty Ltd and are protected by Australian and international intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">4.2 Limited License to You</h3>
              <p className="text-muted-foreground mb-4">Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:</p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>- Access and use the Platform for your internal business purposes</li>
                <li>- Download and print materials for internal use only</li>
                <li>- Share content with team members within your organisation</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">4.3 Restrictions</h3>
              <p className="text-muted-foreground mb-4">You may NOT:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>- Modify, copy, or create derivative works</li>
                <li>- Reverse engineer, decompile, or disassemble any software</li>
                <li>- Remove copyright, trademark, or proprietary notices</li>
                <li>- Use our content for commercial purposes outside your organisation</li>
                <li>- Use automated tools (bots, scrapers) to access the Platform</li>
              </ul>
            </section>

            {/* Acceptable Use */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Acceptable Use Policy</h2>

              <h3 className="text-xl font-semibold mb-3 text-foreground">5.1 Permitted Uses</h3>
              <p className="text-muted-foreground mb-4">You may use Culture Crunch to:</p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>- Develop leadership capabilities within your organisation</li>
                <li>- Access team-level insights and recommendations</li>
                <li>- Participate in programs and training sessions</li>
                <li>- Track progress toward leadership development goals</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">5.2 Prohibited Conduct</h3>
              <p className="text-muted-foreground mb-4">You may NOT:</p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>- Attempt to gain unauthorised access to any part of the Platform</li>
                <li>- Interfere with or disrupt servers, networks, or security features</li>
                <li>- Introduce viruses, malware, or harmful code</li>
                <li>- Use the Platform for purposes competitive to Culture Crunch</li>
                <li>- Manipulate or game our AI systems</li>
                <li>- Submit false, misleading, or fraudulent information</li>
                <li>- Use team-level data for individual performance management or disciplinary actions</li>
                <li>- Use insights to identify or target individual employees</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">5.3 Consequences of Violation</h3>
              <p className="text-muted-foreground">
                Violation of this Acceptable Use Policy may result in warning, suspension, termination of your account, and/or legal action.
              </p>
            </section>

            {/* Payment Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Payment Terms</h2>

              <h3 className="text-xl font-semibold mb-3 text-foreground">6.1 Pricing</h3>
              <p className="text-muted-foreground mb-4">
                Pricing is as quoted for your specific program. All fees are exclusive of GST, which will be added as required by law.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">6.2 Refunds and Cancellations</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li><strong className="text-foreground">Cooling-Off Period:</strong> You may cancel within 7 days of signing with full refund if no services have been provided</li>
                <li><strong className="text-foreground">Post-Program Commencement:</strong> Refunds are calculated based on services already delivered. Cancellation requires 30 days&apos; written notice</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">6.3 Late Payment</h3>
              <p className="text-muted-foreground">
                Late payments may result in suspension of access, interest charges at 10% per annum, and termination of service.
              </p>
            </section>

            {/* Disclaimers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Disclaimers and Limitations of Liability</h2>

              <h3 className="text-xl font-semibold mb-3 text-foreground">7.1 Service Provided &quot;AS IS&quot;</h3>
              <p className="text-muted-foreground mb-4">
                THE PLATFORM IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">7.2 No Professional Advice</h3>
              <p className="text-muted-foreground mb-4">
                Culture Crunch provides leadership development services informed by research, but we do not provide legal, HR, psychological, or medical advice. Always consult qualified professionals for specialised advice.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">7.3 AI-Generated Content</h3>
              <p className="text-muted-foreground mb-4">
                Our AI Coach Companion generates recommendations based on team-level data and research-backed frameworks. However:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>- AI recommendations are advisory only, not directives</li>
                <li>- Human judgment and organisational context must guide decisions</li>
                <li>- We do not guarantee specific outcomes from following AI recommendations</li>
                <li>- Leadership decisions remain the responsibility of organisational leaders</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">7.4 Aged Care Specific Disclaimers</h3>
              <div className="bg-muted/50 border border-border rounded-xl p-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong className="text-foreground">Not a Compliance Tool:</strong> Culture Crunch is not designed to ensure compliance with Aged Care Quality Standards or any regulatory requirements</li>
                  <li><strong className="text-foreground">Not Clinical:</strong> Our insights do not relate to clinical care, resident outcomes, or care quality</li>
                  <li><strong className="text-foreground">Workforce Only:</strong> All data and insights relate exclusively to workforce culture and leadership development</li>
                  <li><strong className="text-foreground">No Staffing Recommendations:</strong> We do not provide recommendations about staffing levels, rostering, or workforce planning as it relates to care delivery</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">7.5 Limitation of Liability</h3>
              <p className="text-muted-foreground mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY AUSTRALIAN LAW:
              </p>
              <p className="text-muted-foreground mb-4">
                Our total liability for all claims arising from your use of Culture Crunch shall not exceed the amounts paid by you to Culture Crunch in the 12 months preceding the claim.
              </p>
              <p className="text-muted-foreground">
                We are not liable for indirect, incidental, special, consequential, or punitive damages, loss of profits, revenue, data, or business opportunities.
              </p>
            </section>

            {/* Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Privacy and Data Protection</h2>
              <p className="text-muted-foreground mb-4">
                Your use of Culture Crunch is also governed by our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
              <p className="text-muted-foreground mb-4">
                If you are an employer using Culture Crunch in aged care:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>- You must notify employees about Culture Crunch use in accordance with APP 5 and Fair Work Act requirements</li>
                <li>- You must not use team-level data to make automated decisions about individual employees</li>
                <li>- You agree to use insights for leadership development purposes only</li>
              </ul>
            </section>

            {/* Termination */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Termination</h2>

              <h3 className="text-xl font-semibold mb-3 text-foreground">9.1 Termination by You</h3>
              <p className="text-muted-foreground mb-4">
                You may terminate your account at any time by providing 30 days&apos; written notice to support@culturecrunch.io.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">9.2 Termination by Culture Crunch</h3>
              <p className="text-muted-foreground mb-4">
                We may suspend or terminate your access if you violate these Terms, fail to pay amounts due, your account is inactive for 12+ months, or we cease providing the service.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">9.3 Effect of Termination</h3>
              <p className="text-muted-foreground">
                Upon termination, your license to use the Platform ends immediately. You may export your team-level data within 90 days.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">10. Dispute Resolution and Governing Law</h2>

              <h3 className="text-xl font-semibold mb-3 text-foreground">10.1 Governing Law</h3>
              <p className="text-muted-foreground mb-4">
                These Terms are governed by the laws of New South Wales, Australia. You agree to submit to the exclusive jurisdiction of the courts of New South Wales for any disputes.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">10.2 Informal Resolution First</h3>
              <p className="text-muted-foreground">
                Before initiating formal proceedings, you agree to contact us at legal@culturecrunch.io and engage in good-faith negotiations for 30 days.
              </p>
            </section>

            {/* Australian Consumer Law */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">11. Australian Consumer Law</h2>
              <p className="text-muted-foreground mb-4">
                Nothing in these Terms excludes, restricts, or modifies statutory guarantees under the Australian Consumer Law or other consumer protections that cannot be lawfully excluded.
              </p>
              <p className="text-muted-foreground">
                Our goods and services come with guarantees that cannot be excluded under the ACL. For major failures with the service, you are entitled to cancel your service contract and receive a refund for the unused portion.
              </p>
            </section>

            {/* General Provisions */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">12. General Provisions</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and Culture Crunch.</li>
                <li><strong className="text-foreground">Modifications:</strong> We may update these Terms periodically. Material changes will be communicated with 30 days&apos; notice.</li>
                <li><strong className="text-foreground">Severability:</strong> If any provision is found invalid, the remaining provisions remain in effect.</li>
                <li><strong className="text-foreground">Force Majeure:</strong> We are not liable for delays resulting from circumstances beyond our reasonable control.</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">13. Contact Information</h2>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">General Inquiries:</strong> support@culturecrunch.io</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Legal Matters:</strong> legal@culturecrunch.io</p>
                <p className="text-muted-foreground"><strong className="text-foreground">Privacy Concerns:</strong> privacy@culturecrunch.io</p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="mb-12">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-foreground">Acknowledgment</h2>
                <p className="text-muted-foreground mb-4">
                  BY ACCESSING OR USING CULTURE CRUNCH, YOU ACKNOWLEDGE THAT:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>- You have read and understood these Terms</li>
                  <li>- You agree to be bound by these Terms and our Privacy Policy</li>
                  <li>- You have the authority to agree to these Terms on behalf of your organisation (if applicable)</li>
                  <li>- You are at least 18 years of age</li>
                  <li>- Your use of the Platform complies with all applicable laws</li>
                </ul>
              </div>
            </section>

            <p className="text-sm text-muted-foreground text-center">
              &copy; 2025 Culture Crunch Pty Ltd. All rights reserved.
            </p>
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
