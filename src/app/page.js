"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/newscard/Card";
import Link from "next/link";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/api/sources");
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
      <nav>
        <ul>
          <Link href="/factquiz" className="p-6 color-red">Quiz</Link>
          <Link href="/funfact">FunFact</Link>
          <Link href="/scrape">scrape</Link>
          <Link href="/service">service</Link>
        </ul>
      </nav>
      <h1>Latest News</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        articles.map((article, index) => (
          <div key={index}>
            <Card article={article} />
          </div>
        ))
      )}
    </div>
  );
}
