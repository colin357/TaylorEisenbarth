# Twilio Contact Form Setup Instructions

This website includes a contact form that sends SMS notifications to your phone when someone fills it out. Follow these steps to set it up.

## 1. Create a Twilio Account

1. Go to [https://www.twilio.com/try-twilio](https://www.twilio.com/try-twilio)
2. Sign up for a free account
3. Verify your email and phone number

## 2. Get Your Twilio Credentials

1. Log in to your [Twilio Console](https://console.twilio.com/)
2. On the dashboard, you'll see:
   - **Account SID** - Copy this
   - **Auth Token** - Click "Show" and copy this

## 3. Get a Twilio Phone Number

1. In the Twilio Console, go to **Phone Numbers** > **Manage** > **Buy a number**
2. Choose a phone number (free trial gives you one number)
3. Make sure it has **SMS** capabilities
4. Purchase/claim the number

## 4. Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual Twilio credentials:

```env
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=+19185551234
YOUR_PHONE_NUMBER=+19185551234
```

**Important Notes:**
- `TWILIO_PHONE_NUMBER` is the number you got from Twilio
- `YOUR_PHONE_NUMBER` is your personal phone where you want to receive notifications
- Both phone numbers must be in E.164 format (e.g., +1XXXXXXXXXX)
- During the free trial, you can only send SMS to verified phone numbers

## 5. Verify Your Personal Phone Number (Free Trial Only)

If you're using a free trial account:

1. Go to **Phone Numbers** > **Manage** > **Verified Caller IDs**
2. Click **Add a new number**
3. Enter your personal phone number
4. Verify it with the code Twilio sends you

## 6. Deploy to Vercel

When deploying to Vercel:

1. Go to your project settings in Vercel
2. Navigate to **Environment Variables**
3. Add all four environment variables:
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `TWILIO_PHONE_NUMBER`
   - `YOUR_PHONE_NUMBER`
4. Redeploy your site

## 7. Test the Form

1. Visit your website
2. Fill out the contact form
3. Submit it
4. You should receive an SMS notification with the form details!

## Troubleshooting

### Not receiving SMS messages?

- **Free Trial**: Make sure your phone number is verified in Twilio
- **Check Logs**: Look at the Vercel deployment logs for errors
- **Phone Format**: Ensure phone numbers are in E.164 format (+1XXXXXXXXXX)
- **Credits**: Make sure you have Twilio credits (free trial gives you some)

### Form submission fails?

- Check that all environment variables are set correctly
- Look at the browser console for errors
- Check Vercel function logs

## Upgrade from Free Trial

The free trial is great for testing, but for production:

1. Upgrade your Twilio account (add payment method)
2. This removes the verified caller ID restriction
3. You'll be charged per SMS (very affordable, ~$0.0075 per message)

## Security Note

**Never commit your `.env.local` file to git!** It's already in `.gitignore`, but double-check that your credentials stay private.

## Need Help?

- [Twilio Documentation](https://www.twilio.com/docs)
- [Twilio Support](https://support.twilio.com/)
