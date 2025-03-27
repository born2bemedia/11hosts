'use server';

import { google } from 'googleapis';

import {
  EMAIL_CLIENT_ID,
  EMAIL_CLIENT_SECRET,
  EMAIL_USER,
} from '@/shared/config/env';
import { makeBody } from '@/shared/lib/email';

export async function sendContactReq({
  email,
  message,
  name,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const OAuth2 = google.auth.OAuth2;
  const oauth2Client = new OAuth2(
    EMAIL_CLIENT_ID,
    EMAIL_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground',
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.EMAIL_REFRESH_TOKEN,
  });

  const accessToken = await oauth2Client.getAccessToken();

  if (!accessToken.token) {
    throw new Error('Failed to generate access token.');
  }

  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

  const adminEmailBody = makeBody({
    to: EMAIL_USER,
    from: EMAIL_USER,
    subject: 'New Message from Contact Form',
    message: `
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  });

  const res = await gmail.users.messages.send({
    userId: 'me',
    requestBody: { raw: adminEmailBody },
  });

  return { data: res.data, status: res.statusText };
}
