import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, organisation, role, interestType, message } = body

    // Validate required fields
    if (!name || !email || !organisation || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Send email notification
    const { data, error } = await resend.emails.send({
      from: "Culture Crunch <noreply@culturecrunch.io>",
      to: ["hello@culturecrunch.io"],
      replyTo: email,
      subject: `New ${interestType === "demo" ? "Demo Request" : "Proposal Request"} from ${name}`,
      html: `
        <h2>New ${interestType === "demo" ? "Demo Request" : "Proposal Request"}</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organisation:</strong> ${organisation}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Interest:</strong> ${interestType === "demo" ? "20-minute demo" : "Customised proposal"}</p>
        ${message ? `<p><strong>Additional Message:</strong></p><p>${message}</p>` : ""}

        <hr />
        <p style="color: #666; font-size: 12px;">This email was sent from the Culture Crunch website contact form.</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Culture Crunch <noreply@culturecrunch.io>",
      to: [email],
      subject: "We've received your request - Culture Crunch",
      html: `
        <h2>Thanks for reaching out, ${name}!</h2>

        <p>We've received your ${interestType === "demo" ? "demo request" : "proposal request"} and will be in touch within 24 hours.</p>

        <p>In the meantime, here's a summary of what you submitted:</p>

        <ul>
          <li><strong>Organisation:</strong> ${organisation}</li>
          <li><strong>Role:</strong> ${role}</li>
          <li><strong>Interest:</strong> ${interestType === "demo" ? "20-minute demo" : "Customised proposal"}</li>
        </ul>

        <p>Looking forward to speaking with you soon!</p>

        <p>Best regards,<br />The Culture Crunch Team</p>

        <hr />
        <p style="color: #666; font-size: 12px;">
          Culture Crunch - The Behaviour Change Engine for Aged Care<br />
          <a href="https://culturecrunch.io">culturecrunch.io</a>
        </p>
      `,
    })

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
