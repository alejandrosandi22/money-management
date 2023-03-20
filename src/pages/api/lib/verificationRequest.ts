/* eslint-disable @typescript-eslint/no-explicit-any */
import { Theme } from 'next-auth';
import { createTransport } from 'nodemailer';

export async function sendVerificationRequest(params: {
  identifier: any;
  url: any;
  provider: any;
  theme: any;
}) {
  const { identifier, url, provider, theme } = params;
  const { host } = new URL(url);
  // NOTE: You are not required to use `nodemailer`, use whatever you want.
  const transport = createTransport(provider.server);
  const result = await transport.sendMail({
    to: identifier,
    from: provider.from,
    subject: `Sign in to ${host}`,
    text: text({ url, host }),
    html: html({ url, host, theme }),
  });
  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`);
  }
}

/**
 * Email HTML body
 * Insert invisible space into domains from being turned into a hyperlink by email
 * clients like Outlook and Apple mail, as this is confusing because it seems
 * like they are supposed to click on it to sign in.
 *
 * @note We don't add the email address to avoid needing to escape it, if you do, remember to sanitize it!
 */
function html(params: { url: string; host: string; theme: Theme }) {
  const { url } = params;

  return `
  <body style="color: #000;">
    <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5;">
      <h1 style="font-size: 24px;">Verify your email address</h1>
      <p>Hi there,</p>
      <p>Thank you for signing up for our service. To verify your email address, please click on the following link:</p>
      <p style="margin: 20px 0; text-align: center;"><a href="${url}" style="display: inline-block; background-color: #000A14; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Verify my email address</a></p>
      <p>If you didn't request this verification, please ignore this message.</p>
      <p>Best regards</p>
    </div>
  </body>
`;
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`;
}
