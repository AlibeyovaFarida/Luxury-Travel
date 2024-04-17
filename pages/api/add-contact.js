import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  try {
    if (request.method !== 'POST') {
      response.writeHead(302, {
        'Location': '/not-found'
      }).end();
      return;
    }
    
    const apiKey = request.headers.authorization;

    if (!apiKey || !validateApiKey(apiKey)) {
      return response.writeHead(302, {
        'Location': '/not-found'
      }).end();
    }

    const { phone, country, date } = request.body;
    if (!phone || !country || !date) {
      throw new Error('Phone, Country, and Date are required');
    }

    const formattedDate = new Date(date).toISOString();
    
    await createOrUpdateContactsTable();
    
    const now = new Date();
    await sql`INSERT INTO Contacts (Phone, Country, Date, Created_at) VALUES (${phone}, ${country}, ${formattedDate}, ${now});`;
    
    const contacts = await sql`SELECT * FROM Contacts;`;
    return response.status(200).json({ contacts });
  } catch (error) {
    return response.status(500).json({ error: error.message });
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


async function createOrUpdateContactsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS Contacts (
      Phone varchar(255),
      Country varchar(255),
      Date date,
      Created_at timestamp default current_timestamp
    );
  `;
}
