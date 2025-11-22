import nodemailer from 'nodemailer';
import { DatabaseContact } from '@/types/contact';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

function generateAdminNotificationEmail(contact: DatabaseContact): EmailTemplate {
  const subject = `New Contact Form - ${contact.subject}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; }
        .container { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 30px 20px; }
        .field { margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 6px; border-left: 4px solid #667eea; }
        .label { font-weight: bold; color: #667eea; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
        .value { color: #333; font-size: 15px; }
        .footer { padding: 20px; background: #f8f9fa; text-align: center; color: #666; font-size: 13px; }
        .badge { display: inline-block; padding: 4px 12px; background: #667eea; color: white; border-radius: 12px; font-size: 12px; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 New Contact Form Submission</h1>
          <p style="margin: 10px 0 0; opacity: 0.9;">CreatorIT Contact Form</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">Contact Information</div>
            <div class="value">
              <strong>Name:</strong> ${contact.name}<br>
              <strong>Email:</strong> <a href="mailto:${contact.email}" style="color: #667eea;">${contact.email}</a><br>
              <strong>Phone:</strong> ${contact.countryCode} ${contact.phone}<br>
              ${contact.company ? `<strong>Company:</strong> ${contact.company}` : ''}
            </div>
          </div>

          <div class="field">
            <div class="label">Subject</div>
            <div class="value">${contact.subject}</div>
          </div>

          ${contact.serviceInterest ? `
          <div class="field">
            <div class="label">Service Interest</div>
            <div class="value">${contact.serviceInterest}</div>
          </div>
          ` : ''}

          ${contact.budgetRange ? `
          <div class="field">
            <div class="label">Budget Range</div>
            <div class="value">${contact.budgetRange}</div>
          </div>
          ` : ''}

          <div class="field">
            <div class="label">Message</div>
            <div class="value">${contact.message.replace(/\n/g, '<br>')}</div>
          </div>

          <div class="field">
            <div class="label">Submission Details</div>
            <div class="value">
              <strong>Date:</strong> ${new Date(contact.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}<br>
              <strong>Contact ID:</strong> #${contact.id}<br>
              <strong>Status:</strong> <span class="badge">${contact.status.toUpperCase()}</span><br>
            </div>
          </div>
        </div>

        <div class="footer">
          <p><strong>CreatorIT Admin Panel</strong></p>
          <p>View full details: <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/dashboard" style="color: #667eea;">Admin Dashboard</a></p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
New Contact Form Submission - CreatorIT

Contact Information:
- Name: ${contact.name}
- Email: ${contact.email}
- Phone: ${contact.countryCode} ${contact.phone}
${contact.company ? `- Company: ${contact.company}` : ''}

Subject: ${contact.subject}

${contact.serviceInterest ? `Service Interest: ${contact.serviceInterest}` : ''}
${contact.budgetRange ? `Budget Range: ${contact.budgetRange}` : ''}

Message:
${contact.message}

Submission Details:
- Date: ${new Date(contact.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
- Contact ID: #${contact.id}
- Status: ${contact.status.toUpperCase()}

View full details at: ${process.env.NEXT_PUBLIC_SITE_URL}/admin/dashboard
  `;

  return { subject, html, text };
}

function generateUserConfirmationEmail(contact: DatabaseContact): EmailTemplate {
  const subject = `Thank you for contacting CreatorIT - We'll be in touch soon!`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; }
        .container { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 30px 20px; }
        .highlight { background: #f8f9fa; border-radius: 6px; padding: 20px; margin: 20px 0; border-left: 4px solid #667eea; }
        .footer { padding: 20px; background: #f8f9fa; text-align: center; color: #666; font-size: 13px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Thank You for Reaching Out!</h1>
          <p style="margin: 10px 0 0; opacity: 0.9;">CreatorIT Team</p>
        </div>
        
        <div class="content">
          <p>Hi <strong>${contact.name}</strong>,</p>
          
          <p>Thank you for contacting CreatorIT! We've received your inquiry and our team will review it shortly.</p>
          
          <div class="highlight">
            <h3 style="margin-top: 0; color: #667eea;">📋 Your Submission Details</h3>
            <p><strong>Subject:</strong> ${contact.subject}</p>
            <p><strong>Submission ID:</strong> #${contact.id}</p>
            <p><strong>Date:</strong> ${new Date(contact.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>

          <p><strong>What happens next?</strong></p>
          <ul>
            <li>📧 We'll respond within 24 hours</li>
            <li>📞 A team member may call you to discuss your needs</li>
            <li>💡 We'll provide a customized solution proposal</li>
          </ul>

          <p>If you have any urgent questions, please don't hesitate to contact us directly.</p>
        </div>

        <div class="footer">
          <p><strong>CreatorIT - Digital Solutions</strong></p>
          <p>Email: info@creatorit.com | Phone: +91 9545415111</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
Thank you for contacting CreatorIT!

Hi ${contact.name},

We've received your inquiry and our team will review it shortly.

Your Submission Details:
- Subject: ${contact.subject}
- Submission ID: #${contact.id}
- Date: ${new Date(contact.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

What happens next?
- We'll respond within 24 hours
- A team member may call you to discuss your needs
- We'll provide a customized solution proposal

If you have any urgent questions, please contact us directly.

CreatorIT - Digital Solutions
Email: info@creatorit.com | Phone: +91 9545415111
  `;

  return { subject, html, text };
}

export async function sendContactNotification(contact: DatabaseContact): Promise<boolean> {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'info@creatorit.com';
    const emailTemplate = generateAdminNotificationEmail(contact);

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: adminEmail,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    });

    console.log(`Admin notification sent for contact #${contact.id}`);
    return true;
  } catch (error) {
    console.error('Failed to send admin notification:', error);
    return false;
  }
}

export async function sendUserConfirmation(contact: DatabaseContact): Promise<boolean> {
  try {
    const emailTemplate = generateUserConfirmationEmail(contact);

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: contact.email,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    });

    console.log(`User confirmation sent to ${contact.email}`);
    return true;
  } catch (error) {
    console.error('Failed to send user confirmation:', error);
    return false;
  }
}

export async function testEmailConfiguration(): Promise<boolean> {
  try {
    await transporter.verify();
    console.log('Email configuration is valid');
    return true;
  } catch (error) {
    console.error('Email configuration error:', error);
    return false;
  }
}
