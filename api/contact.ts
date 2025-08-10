import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, organization, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const to = 'Zyp0754@gmail.com';
    const subject = `Нове звернення з форми: ${name}${organization ? ` (${organization})` : ''}`;

    const html = `
      <div style="font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height: 1.6;">
        <h2 style="margin:0 0 12px;">Нове звернення з сайту</h2>
        <p style="margin:0 0 8px;"><strong>Ім'я:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px;"><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        ${organization ? `<p style=\"margin:0 0 8px;\"><strong>Організація:</strong> ${escapeHtml(organization)}</p>` : ''}
        <p style="margin:16px 0 8px;"><strong>Повідомлення:</strong></p>
        <div style="white-space: pre-wrap; background:#f7f7f7; padding:12px; border-radius:8px;">${escapeHtml(message)}</div>
      </div>
    `;

    const text = `Нове звернення з сайту\n\nІм'я: ${name}\nE-mail: ${email}\n${organization ? `Організація: ${organization}\n` : ''}\nПовідомлення:\n${message}`;

    await resend.emails.send({
        from: 'Sushko Military <onboarding@resend.dev>',
        to,
        subject,
        replyTo: email,
        html,
        text,
      });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('Contact error', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}

function escapeHtml(input: string): string {
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}



