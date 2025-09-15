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

    // For now, we'll store in a Google Sheet (free and easy)
    // You'll need to set up a Google Sheet with Zapier or direct API
    
    // Option 1: Send to Google Sheets via Web App Script (free)
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || 'YOUR_GOOGLE_SCRIPT_URL';
    
    if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== 'YOUR_GOOGLE_SCRIPT_URL') {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: source || 'website',
          timestamp: new Date().toISOString(),
          url: request.headers.get('referer') || 'unknown'
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to save email');
      }
    }
    
    // Option 2: Send to your email via Formspree (backup)
    const FORMSPREE_ID = process.env.FORMSPREE_ID || 'mrbavbyl';
    
    if (FORMSPREE_ID && FORMSPREE_ID !== 'YOUR_FORMSPREE_ID') {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: source || 'website',
          message: `New email subscriber: ${email}`
        })
      });
    }
    
    // Option 3: Log to console for development
    console.log('New subscriber:', { email, source, timestamp: new Date().toISOString() });
    
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