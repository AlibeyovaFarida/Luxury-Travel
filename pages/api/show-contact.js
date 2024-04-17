import { sql } from '@vercel/postgres';
import fetch from 'node-fetch';
import nodemailer from 'nodemailer';
require('dotenv').config(); 

export default async function handler(request, response) {
  const apiKey = request.headers.authorization;

  if (!apiKey || !validateApiKey(apiKey)) {
    return response.writeHead(302, {
      'Location': '/not-found'
    }).end();
  }

  try {
    const pets = await sql`SELECT * FROM Contacts;`;
    const connections = pets.rows;
    console.log("Connections----", connections)
    sendMailAtSpecificTime(22, 55, connections);
    sendMailAtSpecificTime(22, 56, connections);
    sendMailAtSpecificTime(22, 57, connections);
    return response.status(200).json({ pets });
  } catch (error) {
    console.error('İşlem sırasında bir hata oluştu:', error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}

async function validateApiKey(apiKey) {
  try {
    const create = await sql`CREATE TABLE IF NOT EXISTS ApiKeys(Value varchar(255));`;
    const result = await sql`SELECT * FROM ApiKeys WHERE api_key = ${apiKey}`;
    return result.rowCount > 0;
  } catch (error) {
    console.error('API anahtarını doğrularken bir hata oluştu:', error);
    return false;
  }
}


function sendMailAtSpecificTime(hour, minute, connections) {
  console.log("c", connections);
  const now = new Date();
  const targetTime = new Date();
  targetTime.setHours(hour);
  targetTime.setMinutes(minute);
  targetTime.setSeconds(0);
  targetTime.setMilliseconds(0);

  const timeUntilSend = targetTime.getTime() - now.getTime();

  if (timeUntilSend > 0) {
    setTimeout(() => sendMail(connections), timeUntilSend);
    console.log("a", connections);
  } else {
    targetTime.setDate(targetTime.getDate() + 1);
    const timeUntilSendNextDay = targetTime.getTime() - now.getTime();
    setTimeout(() => sendMail(connections), timeUntilSendNextDay);
    console.log("b", connections);
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
