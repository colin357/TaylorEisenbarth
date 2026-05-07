import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const message = (formData.get('message') as string) || 'No message provided';

  if (!name || !phone || !email) {
    return NextResponse.json(
      { error: 'Name, phone, and email are required' },
      { status: 400 }
    );
  }

  // Attempt SMS — log failures but never block the form submission
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
  const yourPhoneNumber = process.env.YOUR_PHONE_NUMBER;

  if (accountSid && authToken && twilioPhoneNumber && yourPhoneNumber) {
    try {
      const client = twilio(accountSid, authToken);
      const smsBody = `New Lead!\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
      await client.messages.create({ body: smsBody, from: twilioPhoneNumber, to: yourPhoneNumber });
    } catch (smsError) {
      console.error('Twilio SMS failed:', smsError);
    }
  } else {
    console.warn('Twilio env vars not configured — skipping SMS notification');
  }

  return NextResponse.json({ success: true });
}
