import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

const fromEmail = process.env.GMAIL_USER; // بريدك الإلكتروني في Gmail

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log("Received request with data:", { email, subject, message });

  try {
    console.log("Attempting to send email...");

    // إعداد الـ transporter باستخدام Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // بريدك الإلكتروني في Gmail
        pass: process.env.GMAIL_PASS, // كلمة المرور الخاصة بك
      },
    });

    // إعداد بيانات الإيميل
    const mailOptions = {
      from: fromEmail,
      to: email,  // إرسال الإيميل للمستخدم
      subject: subject,
      text: message,  // محتوى الرسالة
    };

    // إرسال الإيميل
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message });
  }
}
