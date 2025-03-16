import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [{ role: 'user', content: 'Tell me a fun fact!' }],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Store API key in .env.local
          'Content-Type': 'application/json',
        },
      }
    );

    const funFact = response.data.choices[0].message.content;
    res.status(200).json({ funFact });
  } catch (error) {
    console.error('Error fetching fun fact:', error);
    res.status(500).json({ error: 'Failed to fetch fun fact' });
  }
}
