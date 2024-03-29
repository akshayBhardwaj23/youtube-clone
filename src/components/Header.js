import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_KEYWORD_API,
} from "../utils/constants";
import { cachedResults } from "../utils/searchSlice";
import { addSearchVideos } from "../utils/youtubeSearchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cachedResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_KEYWORD_API +
        searchQuery.split(" ").join("&") +
        "&key=" +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    const json = await data.json();
    console.log(json);
    dispatch(addSearchVideos(json));
  };

  const handleClick = (s) => {
    console.log(s);
    setSearchQuery(s);
    setShowSuggestions(false);
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
        />
        <img
          className="h-8 mx-2"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
          alt="youtube logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => {
              setShowSuggestions(false);
            }}
          />
          <button
            onClick={handleSearch}
            className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100"
          >
            Search
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 w-1/3 shadow-lg rounded-lg">
            <ul>
              {suggestions.map((s) => (
                <li
                  onMouseDown={() => {
                    handleClick(s);
                  }}
                  className="py-2 px-3 hover:bg-gray-200"
                  key={s}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Header;
