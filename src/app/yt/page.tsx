"use client";

import { useState } from "react";
import { fetchVideos } from "../../pages/api/yt";

export default function VideoList() {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const results = await fetchVideos(query);
    setVideos(results);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">YouTube Summarizer</h1>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search a topic..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      <div className="mt-4">
        {videos.length === 0 ? (
          <p>No videos found</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {videos.map((video: any) => (
              <div key={video.id.videoId} className="border p-2">
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <p>{video.snippet.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
