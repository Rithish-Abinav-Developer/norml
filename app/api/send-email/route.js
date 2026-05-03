import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

function buildEmailHtml({ name, email, phone, message, submittedAt }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border:1px solid #e0e0e0;border-radius:6px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background-color:#0E0E0E;padding:24px 32px;">
              <p style="margin:0;color:#ffffff;font-size:20px;font-weight:600;letter-spacing:0.5px;">
                New Contact Form Submission
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eeeeee;width:140px;vertical-align:top;">
                    <span style="font-size:13px;color:#888888;text-transform:uppercase;letter-spacing:0.5px;">Name</span>
                  </td>
                  <td style="padding:12px 0;border-bottom:1px solid #eeeeee;vertical-align:top;">
                    <span style="font-size:15px;color:#1a1a1a;">${name}</span>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eeeeee;vertical-align:top;">
                    <span style="font-size:13px;color:#888888;text-transform:uppercase;letter-spacing:0.5px;">Email</span>
                  </td>
                  <td style="padding:12px 0;border-bottom:1px solid #eeeeee;vertical-align:top;">
                    <a href="mailto:${email}" style="font-size:15px;color:#0E0E0E;text-decoration:none;">${email}</a>
                  </td>
                </tr>

                ${phone ? `
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eeeeee;vertical-align:top;">
                    <span style="font-size:13px;color:#888888;text-transform:uppercase;letter-spacing:0.5px;">Phone</span>
                  </td>
                  <td style="padding:12px 0;border-bottom:1px solid #eeeeee;vertical-align:top;">
                    <a href="tel:${phone}" style="font-size:15px;color:#0E0E0E;text-decoration:none;">${phone}</a>
                  </td>
                </tr>` : ''}

                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eeeeee;vertical-align:top;">
                    <span style="font-size:13px;color:#888888;text-transform:uppercase;letter-spacing:0.5px;">Message</span>
                  </td>
                  <td style="padding:12px 0;border-bottom:1px solid #eeeeee;vertical-align:top;">
                    <span style="font-size:15px;color:#1a1a1a;white-space:pre-line;">${message || '—'}</span>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;vertical-align:top;">
                    <span style="font-size:13px;color:#888888;text-transform:uppercase;letter-spacing:0.5px;">Submitted At</span>
                  </td>
                  <td style="padding:12px 0;vertical-align:top;">
                    <span style="font-size:15px;color:#1a1a1a;">${submittedAt}</span>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f9f9f9;padding:16px 32px;border-top:1px solid #e0e0e0;">
              <p style="margin:0;font-size:12px;color:#aaaaaa;">
                This email was sent automatically from your website contact form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const submittedAt = new Date().toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    await transporter.sendMail({
      from: `"norml Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html: buildEmailHtml({ name, email, phone, message, submittedAt }),
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error('[send-email]', err);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
