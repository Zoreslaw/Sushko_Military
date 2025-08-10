import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {

  console.log('RESEND_API_KEY set:', !!process.env.RESEND_API_KEY);

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { name, email, organization, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' });

  await resend.emails.send({
    from: 'onboarding@resend.dev', // or your verified sender
    to: 'zoriksushko@gmail.com',
    subject: `Нове звернення: ${name}${organization ? ` (${organization})` : ''}`,
    replyTo: email,
    html: `<p>${message}</p>`,
  });

  res.status(200).json({ ok: true });
}