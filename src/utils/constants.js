export const YOUTUBE_VIDEOS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://thingproxy.freeboard.io/fetch/https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
