"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://newsdata.io/api/1/latest?apikey=pub_7406001aa4474f3513c9007f270b615f01523&q=pizza", {
          // params: {
          //   q: "Apple",
          //   from: "2025-03-11",
          //   sortBy: "popularity",
          //   apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY, // Corrected usage
          // },
        });
        console.log(response.data.results);

        setArticles(response.data.results);
      } catch (error) {
        console.error("Fetching news failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      {console.log(articles)};
      {articles.map((article, index) => (

        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a
            href={article.url} target="_blank" rel="noopener noreferrer"
          />
        </div>
      ))}
      <h1>why not</h1>
    </div>
  );
}
