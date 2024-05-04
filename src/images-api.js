import axios from "axios";

const apiKey = "PMJPOlKPsblt1Y0brUJazAZp-QCtCtBjo46AmrgcbO8";

axios.defaults.baseURL = "https://api.unsplash.com";

axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Client-ID ${apiKey}`;
    return config;
});

export const fetchImages = async (searchQuery, page) => {
    const response = await axios.get("/search/photos", {
      params: {
        query: searchQuery,
        per_page: 12,
        page,
      },
    });
  return response.data.results;
};