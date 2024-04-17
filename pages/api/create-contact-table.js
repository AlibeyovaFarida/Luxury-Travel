import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  try {
    const apiKey = request.headers.authorization;
    
    if (!apiKey || !validateApiKey(apiKey)) {
      return response.writeHead(302, {
        'Location': '/not-found'
      }).end();
    }
    await createContactsTable();

    return response.status(200).json({ message: 'Table created successfully.' });
  } catch (error) {
    return response.status(500).json({ error: 'An error occurred while creating the table.' });
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



async function createContactsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS Contacts (
      Phone varchar(255),
      Country varchar(255),
      Date date,
      Created_at timestamp default current_timestamp
    );
  `;
}


