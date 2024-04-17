import { sql } from '@vercel/postgres';
import nodemailer from 'nodemailer';

export default async function handler(request, response) {
  const authHeader = request.headers.authorization;
  if (
    !authHeader ||
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    console.log(authHeader)
    console.log(process.env.CRON_SECRET)
    return response.writeHead(302, {
      'Location': '/not-found'
    }).end();
  }

  try {
    const yesterday = new Date(Date.now() -  24* 60 * 60 * 1000);
    const sqlQuery = sql`SELECT * FROM Contacts WHERE created_at >= ${yesterday}`;
    const contacts = await sqlQuery;
    const connections = contacts.rows;

    await sendMail(connections);

    return response.status(200).json({ success: true });
  } catch (error) {
    console.error('İşlem sırasında bir hata oluştu:', error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}


async function sendMail(connections) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      });
  
      let htmlContent = '<h2>Gün Ərzində edilmiş bütün sorğular</h2>';
      htmlContent += '<table border="1">';
      htmlContent += '<tr><th>Phone</th><th>Country</th><th>Date</th><th>Sended at</th></tr>';
      connections.forEach(contact => {
        htmlContent += `<tr><td>${contact.phone}</td><td>${contact.country}</td><td>${new Date(contact.date).toLocaleString()}</td><td>${new Date(contact.created_at).toLocaleString()}</td></tr>`;
      });
      htmlContent += '</table>';
  
      const mailOptions = {
        from: process.env.SMTP_USERNAME,
        to: process.env.SMTP_USERNAME_TO,
        subject: 'Scheduled Email',
        html: htmlContent,
      };
  
      const info = await transporter.sendMail(mailOptions);
      console.log('Mail uğurla göndərildi:', info.response);
    } catch (error) {
      console.error('Mail göndəriləndə xəta oldu:', error);
    }
  }
  