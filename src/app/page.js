"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { LocaleRouteNormalizer } from "next/dist/server/normalizers/locale-route-normalizer";
import Card from "./components/newscard/Card";
import obj from "./components/data";
export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const response = await axios.get("https://newsdata.io/api/1/latest?apikey=pub_7406001aa4474f3513c9007f270b615f01523&q=pizza", {
  //         // params: {
  //         //   q: "Apple",
  //         //   from: "2025-03-11",
  //         //   sortBy: "popularity",
  //         //   apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY, // Corrected usage
  //         // },
  //       });

    
  //       console.log(response.data.results);

  //       setArticles(response.data.results);
  //     } catch (error) {
  //       console.error("Fetching news failed:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchNews();
  // }, []);

  return (
    <div>
      <h1>Latest News</h1>
      {obj.map((article, index) => (
        <div key={index} >
          <Card article={article}/>
        </div>
      ))}
      {/* <div className="container">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="password" />
        <button type="submit">submit</button>
      </div>
      <h1>why not</h1> */}
    </div>
  );
}
