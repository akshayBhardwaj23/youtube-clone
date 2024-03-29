import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCards, { AdVideoCard } from "./VideoCards";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const youtubeSearch = useSelector((store) => store.youtubeSearch.items);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtubeSearch ? setVideos(youtubeSearch) : getVideos();
  }, [youtubeSearch]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    setVideos(json.items);
  };

  return (
    videos && (
      <div className="flex flex-wrap justify-between">
        {videos.map((video) => (
          <Link
            to={"/watch?v=" + (youtubeSearch ? video.id.videoId : video.id)}
            key={youtubeSearch ? video.id.videoId : video.id}
          >
            {" "}
            <VideoCards info={video} />
          </Link>
        ))}
      </div>
    )
  );
};

export default VideoContainer;
