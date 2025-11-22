import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema, sanitizeFormData } from '@/lib/validations';
import { ContactRepository } from '@/lib/database';
import { sendContactNotification, sendUserConfirmation } from '@/lib/email';
import { ZodError } from 'zod';

const rateLimit = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;

// Get client IP
function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0] || realIp || 'unknown';
  return `contact_form:${ip}`;
}

// Rate limiter
function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const userLimit = rateLimit.get(key);

  if (!userLimit) {
    rateLimit.set(key, { count: 1, lastReset: now });
    return true;
  }

  if (now - userLimit.lastReset > RATE_LIMIT_WINDOW) {
    rateLimit.set(key, { count: 1, lastReset: now });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  userLimit.count++;
  return true;
}

// CAPTCHA verification
async function verifyCaptcha(token: string): Promise<{ success: boolean; score?: number }> {
  try {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      console.warn('RECAPTCHA_SECRET_KEY not configured');
      return { success: true };
    }

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secret}&response=${token}`,
    });

    const data = await response.json();

    if (data.success && data.score !== undefined) {
      return { success: data.score >= 0.5, score: data.score };
    }

    return { success: data.success };
  } catch (error) {
    console.error('CAPTCHA verification error:', error);
    return { success: true };
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate Limit Check
    const rateLimitKey = getRateLimitKey(request);
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please wait a minute.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    const captchaToken = body.captchaToken;
    let captchaResult: { success: boolean; score?: number } = { success: true };

    if (
      captchaToken &&
      captchaToken !== 'no-captcha-available' &&
      captchaToken !== 'captcha-failed' &&
      captchaToken !== 'captcha-error'
    ) {
      captchaResult = await verifyCaptcha(captchaToken);

      if (!captchaResult.success) {
        return NextResponse.json(
          { success: false, message: 'CAPTCHA verification failed.' },
          { status: 400 }
        );
      }
    } else if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.log('reCAPTCHA not configured, skipping');
    }

    // Validate + sanitize input
    const validatedData = contactFormSchema.parse(body);
    const sanitizedData = sanitizeFormData(validatedData);

    // FIX: add missing captchaToken so type matches ContactFormData
    const sanitizedDataWithToken = {
      ...sanitizedData,
      captchaToken: captchaToken || '',
    };

    const ipAddress =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown';

    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Save to DB
    const contact = await ContactRepository.create(
      sanitizedDataWithToken,
      captchaResult.score,
      ipAddress,
      userAgent
    );

    // Emails
    sendContactNotification(contact).catch((e) =>
      console.error('Admin email error:', e)
    );

    sendUserConfirmation(contact).catch((e) =>
      console.error('User email error:', e)
    );

    console.log(
      `New contact: ${contact.id} - ${contact.email} (Score: ${
        captchaResult.score ?? 'N/A'
      })`
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We will get back to you soon.',
        contactId: contact.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof ZodError) {
      const fieldErrors: Record<string, string> = {};
      error.errors.forEach((err) => {
        const fieldPath = err.path[0];
        if (fieldPath) fieldErrors[fieldPath] = err.message;
      });

      return NextResponse.json(
        {
          success: false,
          message: 'Please correct the highlighted fields.',
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Unexpected error. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
