// app/api/subscribe/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, source } = await request.json();
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email notification using EmailJS
    const emailJSResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_9pqnmwt',
        template_id: '2ikqvuv', // Use your contact form template or create a new one for subscriptions
        user_id: '13pp0zowA6LvS8-bg',
        template_params: {
          from_name: 'Newsletter Subscriber',
          from_email: email,
          company: '',
          subject: 'Newsletter Subscription',
          message: `New newsletter subscription from ${source || 'website'}\n\nEmail: ${email}\nSource: ${source}\nTimestamp: ${new Date().toISOString()}`
        }
      })
    });

    if (!emailJSResponse.ok) {
      throw new Error('Failed to send notification email');
    }

    // Option: Also log to console for development
    console.log('New subscriber:', { 
      email, 
      source: source || 'website', 
      timestamp: new Date().toISOString() 
    });
    
    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}