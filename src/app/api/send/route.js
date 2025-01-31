import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const testEmail = 'omar.bn.hassan89@gmail.com'; // Your test email address

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log("Received request with data:", { email, subject, message });
  console.log("From email:", fromEmail);

  try {
    console.log("Attempting to send email...");
    const data = await resend.emails.send({
      from: fromEmail,
      to: [testEmail], // Always send to your test email in test mode
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
          <p>From: {email}</p>
        </>
      ),
    });
    console.log("Email sent successfully. Response data:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message });
  }
}