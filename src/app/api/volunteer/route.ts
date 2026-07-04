import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
try {

    console.log("========== API HIT ==========");

const body = await req.json();

const {
  name,
  email,
  phone,
  city,
  skills,
  availability,
  message,
} = body;

if (
  !name ||
  !email ||
  !phone ||
  !city ||
  !skills ||
  !availability ||
  !message
) {
  return NextResponse.json(
    { message: "All fields are required" },
    { status: 400 }
  );
}

// Save to Google Sheet via Apps Script
await fetch(process.env.GOOGLE_SCRIPT_URL!, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name,
    email,
    phone,
    city,
    skills,
    availability,
    message,
  }),
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// NGO Notification Email
await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: "hello@handngo.org",
  subject: "New Volunteer Application",
  html: `
    <h2>New Volunteer Application</h2>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>City:</strong> ${city}</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Availability:</strong> ${availability}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
});

// Applicant Confirmation Email
await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: email,
  subject: "Application Received - HAND NGO",
  html: `
    <h2>Thank You, ${name}</h2>

    <p>We have successfully received your volunteer application.</p>

    <p>
      Our team will review your application and
      get back to you shortly.
    </p>

    <br/>

    <p>Regards,</p>
    <p>HAND NGO Team</p>
  `,
});

return NextResponse.json({
  success: true,
  message: "Application submitted successfully",
});

} catch (error) {
console.error("Volunteer Form Error:", error);

return NextResponse.json(
  {
    success: false,
    message: "Internal server error",
  },
  {
    status: 500,
  }
);

}}