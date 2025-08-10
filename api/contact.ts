import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  try {
    const { name, email, organization, message } = (req.body || {}) as any;
    if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'RESEND_API_KEY is not set' });

    const resend = new Resend(apiKey);

    console.log(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Twoja Marka <noreply@twojadomena.com>', // użyj zweryfikowanej domeny
      to: 'zoriksushko@gmail.com',
      subject: `Нове звернення: ${name}${organization ? ` (${organization})` : ''}`,
      replyTo: email,
      html: `<p>${message}</p>`,
    });

    if (error) {
      console.error(error);
      return res.status(502).json({ error: error.message ?? 'Failed to send email' });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (e: any) {
    console.error(e);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
