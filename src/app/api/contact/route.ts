import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Required fields (Name, Email, Message) are missing." },
        { status: 400 }
      );
    }

    const recipientEmail = "admin@indiverseenterprises.com";
    const emailSubject = `Contact Form: ${subject || "New Inquiry"} (from ${name})`;

    // HTML Email Body
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #5b4bff; border-bottom: 2px solid #5b4bff; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0;">${phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Company:</td>
            <td style="padding: 8px 0;">${company || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
            <td style="padding: 8px 0;">${subject || "General Inquiry"}</td>
          </tr>
        </table>
        <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #5b4bff; border-radius: 4px;">
          <h3 style="margin-top: 0; color: #0f172a; font-size: 1.1em;">Message:</h3>
          <p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
        </div>
      </div>
    `;

    // Text Email Body fallback
    const textContent = `
New Contact Form Submission
---------------------------
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}
Subject: ${subject || "General Inquiry"}

Message:
${message}
    `;

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Check if SMTP is configured
    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.warn("==================================================");
      console.warn("WARNING: SMTP credentials not fully configured.");
      console.warn("Contact form submission received:");
      console.warn(textContent);
      console.warn("==================================================");

      return NextResponse.json(
        {
          success: true,
          message: "Form submission logged (SMTP credentials missing).",
          devFallback: true,
        },
        { status: 200 }
      );
    }

    // SMTP Transport Configuration
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: parseInt(smtpPort, 10) === 465, // true for 465, false for other ports (e.g. 587)
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Send Mail
    await transporter.sendMail({
      from: `"${name} via Indiverse Form" <${smtpUser}>`, // Send via authenticated SMTP user
      to: recipientEmail,
      replyTo: email, // Direct replies to the submitter's email
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: "Internal server error. Failed to send message." },
      { status: 500 }
    );
  }
}
