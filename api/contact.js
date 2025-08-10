// ESM serverless function for Vercel
import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const raw = req.body ?? {};
    const body = typeof raw === 'string' ? JSON.parse(raw || '{}') : raw;
    const { name, email, organization, message } = body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY missing');
      return res.status(500).json({ error: 'Email service not configured', code: 'RESEND_MISSING_KEY' });
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'zoriksushko@gmail.com',
      subject: `Нове звернення: ${name}${organization ? ` (${organization})` : ''}`,
      replyTo: email,
      html: `<p>${message}</p>`,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(502).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ ok: true, id: data && data.id });
  } catch (e) {
    console.error('Unhandled error:', e);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

