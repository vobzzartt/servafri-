const { Resend } = require('resend');
const resend = new Resend('re_Uhq1cmqM_2AfhNLb7WQTwoFzQUQtybeSL');

(async () => {
  try {
    const data = await resend.emails.send({
      from: 'Test <hello@servafri.com>',
      to: ['hello@servafri.com'],
      subject: 'Test Email',
      html: '<p>Testing Resend Key</p>'
    });
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
})();
