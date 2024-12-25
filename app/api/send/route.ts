import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.email || !data.message) {
      return NextResponse.json({ error: "Email and message are required" }, { status: 400 });
    }

    // Send email using Resend API
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "altundaomer01.99@gmail.com",
      subject: "Sending Message",
      html: `
        <p>From: ${data.email}</p>
        <p>${data.message}</p>
      `,
    });

    return NextResponse.json({ success: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
