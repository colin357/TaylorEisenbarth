import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const creditScore = (formData.get('creditScore') as string) || 'Not provided';
    const purchasePrice = (formData.get('purchasePrice') as string) || 'Not provided';
    const monthlyPayment = (formData.get('monthlyPayment') as string) || 'Not provided';
    const market = (formData.get('market') as string) || 'Not provided';

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

    if (!accountSid || !authToken || !twilioPhoneNumber || !yourPhoneNumber) {
      console.error('Missing Twilio environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const client = twilio(accountSid, authToken);

    const smsBody = [
      '🏠 New Lead from Contact Form!',
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      '',
      'Home Buying Goals:',
      `Credit Score: ~${creditScore}`,
      `Target Purchase Price: $${purchasePrice}`,
      `Target Monthly Payment: $${monthlyPayment}`,
      `Market: ${market}`,
    ].join('\n');

    await client.messages.create({
      body: smsBody,
      from: twilioPhoneNumber,
      to: yourPhoneNumber,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
