import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get('/api/scrape');
        setHeadlines(response.data.headlines);
      } catch (error) {
        console.error('Error fetching headlines:', error);
      }
    };

    fetchHeadlines();
  }, []);

  return (
    <div>
      <Head>
        <title>News Headlines</title>
        <meta name="description" content="Latest news headlines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Latest News Headlines</h1>
        <ul>
          {headlines.map((headline, index) => (
            <li key={index}>{headline}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
