import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";

const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const Searchdata = async () => {
      try {
        const response = await fetch(`${YOUTUBE_SEARCH_API}${search}`);
        const json = await response.json();
        setSuggestions(json[1] || []);  // Always ensure json[1] exists
      } catch (error) {
        console.error("Error fetching search data:", error);
      }
    };
  
    if (search) {
      const timer = setTimeout(() => {
        Searchdata();
      }, 200);
  
      return () => clearTimeout(timer);  // Clear the previous timeout to debounce
    }
  }, [search]);
  

  // const Searchdata = async () => {
  //   try {
  //     const response = await fetch(`${YOUTUBE_SEARCH_API}${search}`);
  //     const json = await response.json();
  //     setSuggestions(json[1] || []);  // Always ensure json[1] exists
  //   } catch (error) {
  //     console.error("Error fetching search data:", error);
  //   }
  // };

  const toggleHandleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col m-auto shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleHandleClick}
          className="h-20 cursor-pointer"
          src="https://rueeazy.github.io/youtube-clone/Assets/hamburger-icon.png"
          alt="hamburger-icon"
        />
        <img
          className="h-20 mx-9"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="youtube-icon"
        />
      </div>
      <div className="my-5 text-center col-span-10 relative">
        <div>
          <input
            className="border w-[500px] border-gray-200 px-3 py-1 rounded-l-full"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} 
          />
          <button
            className="border border-gray-400 px-2 py-1 rounded-r-full bg-gray-200"
          >
            🔍
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute bg-white shadow-xl mx-44 rounded-2xl text-start w-[500px] mt-2">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-1 hover:bg-gray-100 cursor-pointer">
                  🧿 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex my-4 justify-evenly col-span-2 cursor-pointer">
        <img
          className="h-6 my-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxOCMMODh9L9iJ2NfEORL0bR5lEuxCjujlQ&s"
          alt="Notification"
        />
        <img
          className="h-10 cursor-pointer"
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
          alt="profile-icon"
        />
      </div>
    </div>
  );
};

export default Header;
