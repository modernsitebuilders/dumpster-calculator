// app/api/subscribe/route.js
import { NextResponse } from 'next/server';

// Simple in-memory rate limiting (consider Redis for production)
const rateLimitMap = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 5; // 5 requests per minute
  
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, [now]);
    return true;
  }
  
  const timestamps = rateLimitMap.get(ip).filter(t => now - t < windowMs);
  
  if (timestamps.length >= maxRequests) {
    return false;
  }
  
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
}

export async function POST(request) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    const body = await request.json();
    
    // Check for honeypot field (anti-bot measure)
    if (body.honeypot) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }
    
    // Check if this is a newsletter subscription or contact form
    if (body.email && !body.name) {
      // Newsletter subscription
      return handleNewsletterSubscription(body);
    } else {
      // Contact form submission
      return handleContactForm(body);
    }
    
  } catch (error) {
    // Remove console.error for production - use proper logging service
    // Consider using a service like Sentry or LogRocket
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

async function handleNewsletterSubscription({ email, source }) {
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Invalid email address' },
      { status: 400 }
    );
  }
  
  // Sanitize input to prevent XSS
  const sanitizedEmail = email.trim().toLowerCase();
  const sanitizedSource = (source || 'website').replace(/[<>]/g, '');

  // Check for Resend API key
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 500 }
    );
  }

  // Send newsletter subscription notification via Resend
  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'onboarding@resend.dev',
      to: 'dave@modernsitebuilders.com',
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <p><strong>Source:</strong> ${sanitizedSource}</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        </div>
      `,
    }),
  });

  if (!resendResponse.ok) {
    // Don't expose internal errors to client
    return NextResponse.json(
      { error: 'Failed to process subscription. Please try again.' },
      { status: 500 }
    );
  }
  
  return NextResponse.json(
    { message: 'Successfully subscribed!' },
    { 
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
      }
    }
  );
}

async function handleContactForm({ name, email, company, subject, message }) {
  // Validate required fields
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Invalid email address' },
      { status: 400 }
    );
  }
  
  // Sanitize inputs to prevent XSS
  const sanitizedData = {
    name: name.trim().replace(/[<>]/g, '').substring(0, 100),
    email: email.trim().toLowerCase(),
    company: (company || '').replace(/[<>]/g, '').substring(0, 100),
    subject: (subject || 'general').replace(/[<>]/g, '').substring(0, 200),
    message: message.replace(/[<>]/g, '').substring(0, 5000)
  };
  
  // Check for Resend API key
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 500 }
    );
  }

  // Send contact form email via Resend
  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'onboarding@resend.dev',
      to: 'dave@modernsitebuilders.com',
      subject: `New Contact: ${sanitizedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${sanitizedData.name}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Company:</strong> ${sanitizedData.company || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
              ${sanitizedData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="color: #6b7280; font-size: 12px;">
            Sent from dumpster-size-calculator.com contact form
          </p>
        </div>
      `,
      reply_to: sanitizedData.email,
    }),
  });

  if (!resendResponse.ok) {
    // Don't expose internal errors to client
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: 'Email sent successfully' },
    { 
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
      }
    }
  );
}