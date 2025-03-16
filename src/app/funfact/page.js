'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function FunFactPage() {
  const [funFact, setFunFact] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/funfact')
      .then((response) => {
        setFunFact(response.data.funFact);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load fun fact');
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5">
      <h1 className="text-3xl font-bold mb-4">🎉 Random Fun Fact 🎉</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {funFact && <p className="text-lg">{funFact}</p>}
    </div>
  );
}
// In this example, we have a FunFactPage component that fetches a random fun fact from the OpenAI API. We use the axios library to make a GET request to the /api/funfact endpoint, which is handled by the serverless function in pages/api/funfact.js.