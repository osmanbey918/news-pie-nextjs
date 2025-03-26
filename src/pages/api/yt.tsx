import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

export const fetchVideos = async (query: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        part: "snippet",
        q: query,
        maxResults: 10,
        key: API_KEY,
        type: "video",
      },
    });

    return response.data.items;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};
