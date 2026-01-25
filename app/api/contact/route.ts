import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string || 'No message provided';

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, phone, and email are required' },
        { status: 400 }
      );
    }

    // Initialize Twilio client
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
    const yourPhoneNumber = process.env.YOUR_PHONE_NUMBER;

    if (!accountSid || !authToken || !twilioPhoneNumber || !yourPhoneNumber) {
      console.error('Missing Twilio environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const client = twilio(accountSid, authToken);

    // Create SMS message
    const smsBody = `New Contact Form Submission!\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;

    // Send SMS via Twilio
    await client.messages.create({
      body: smsBody,
      from: twilioPhoneNumber,
      to: yourPhoneNumber,
    });

    // Redirect to thank you page or back to home with success message
    return NextResponse.redirect(new URL('/?success=true', request.url));
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
