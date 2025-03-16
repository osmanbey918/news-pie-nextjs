import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://newsdata.io/api/1/sources?apikey=pub_7406001aa4474f3513c9007f270b615f01523');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching news sources:', error);
    res.status(500).json({ error: 'Failed to fetch news sources' });
  }
}
