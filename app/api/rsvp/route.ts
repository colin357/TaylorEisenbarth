import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const event = (formData.get('event') as string) || 'Event';
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const brokerage = (formData.get('brokerage') as string) || 'Not provided';
    const guests = (formData.get('guests') as string) || '0';

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, phone, and email are required' },
        { status: 400 }
      );
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
    const yourPhoneNumber = process.env.YOUR_PHONE_NUMBER;

    if (accountSid && authToken && twilioPhoneNumber && yourPhoneNumber) {
      const client = twilio(accountSid, authToken);

      const smsBody = [
        `🎉 New RSVP: ${event}`,
        '',
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Brokerage: ${brokerage}`,
        `Guests: ${guests}`,
      ].join('\n');

      await client.messages.create({
        body: smsBody,
        from: twilioPhoneNumber,
        to: yourPhoneNumber,
      });
    } else {
      console.error('Missing Twilio environment variables — SMS not sent');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing RSVP:', error);
    return NextResponse.json(
      { error: 'Failed to submit RSVP' },
      { status: 500 }
    );
  }
}
