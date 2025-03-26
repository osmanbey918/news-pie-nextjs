import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://www.reuters.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
      }
    });

    const html = response.data;
    const $ = cheerio.load(html);

    // Example: Scrape news headlines
    const headlines = [];
    $('h3').each((index, element) => {
      headlines.push($(element).text().trim());
    });

    res.status(200).json({ headlines });
  } catch (error) {
    console.error('Error fetching news sources:', error);
    res.status(500).json({ error: 'Failed to fetch news sources' });
  }
}
