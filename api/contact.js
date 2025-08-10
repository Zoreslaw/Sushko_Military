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

    const recipient = 'zoreslav80@gmail.com';
    const subject = `Нове звернення: ${name}${organization ? ` (${organization})` : ''}`;
    const html = `
      <div style="font-family: Inter, -apple-system, Segoe UI, Roboto, Arial, sans-serif; background:#f5f7f6; padding:24px;">
        <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e6e9e6;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#FFD700,#FF8C42);padding:18px 24px;color:#1A2E1A;">
            <h1 style="margin:0;font-size:20px;line-height:1.3;">Нове звернення із форми зв'язку</h1>
          </div>
          <div style="padding:24px;">
            <table style="width:100%;border-collapse:collapse;margin:0 0 16px;">
              <tr>
                <td style="padding:8px 0;color:#6b7280;width:160px;">Ім'я</td>
                <td style="padding:8px 0;color:#111827;font-weight:600;">${escape(name)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#6b7280;">E‑mail</td>
                <td style="padding:8px 0;color:#111827;font-weight:600;">${escape(email)}</td>
              </tr>
              ${organization ? `
              <tr>
                <td style=\"padding:8px 0;color:#6b7280;\">Організація</td>
                <td style=\"padding:8px 0;color:#111827;font-weight:600;\">${escape(organization)}</td>
              </tr>` : ''}
            </table>
            <div style="color:#6b7280;margin:6px 0 8px;">Повідомлення</div>
            <div style="white-space:pre-wrap;border:1px solid #e5e7eb;border-radius:10px;padding:14px;background:#fafafa;color:#111827;">${escape(message)}</div>
          </div>
          <div style="padding:12px 24px;color:#6b7280;font-size:12px;border-top:1px solid #e6e9e6;">
            Це автоматичний лист із сайту. Ви можете відповісти прямо на нього — лист піде відправнику (${escape(email)}).
          </div>
        </div>
      </div>`;

    const text = `Нове звернення із сайту\n\nІм'я: ${name}\nE‑mail: ${email}\n${organization ? `Організація: ${organization}\n` : ''}\nПовідомлення:\n${message}`;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@svm-ml.com',
      to: recipient,
      subject,
      replyTo: email,
      html,
      text,
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

function escape(input) {
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

