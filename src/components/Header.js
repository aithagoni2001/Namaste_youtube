import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { Cachedata } from "../utils/SearchSlice";

const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null); // Store clicked suggestion

  const dispatch = useDispatch();
  const searchselector = useSelector((store) => store.search);

  useEffect(() => {
    // Wait for 200ms before making search API calls (debounce)
    const timeout = setTimeout(() => {
      if (searchselector[search]) {
        setSuggestions(searchselector[search]);
      } else if (search) {
        Searchdata();
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  // Fetch search suggestions from the API
  const Searchdata = async () => {
    const response = await fetch(`${YOUTUBE_SEARCH_API}${search}`);
    const json = await response.json();
    setSuggestions(json[1]);  // Make sure json[1] contains the search suggestions

    // Cache search results in Redux store
    dispatch(
      Cachedata({
        [search]: json[1],
      })
    );
  };

  const toggleHandleClick = () => {
    dispatch(toggleMenu());
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion);  // Set the clicked suggestion as the search value
    setSelectedSuggestion(suggestion);  // Store the selected suggestion to display on UI
    setShowSuggestions(false);  // Hide suggestions
    Searchdata();  // Trigger search based on the selected suggestion
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
            onClick={Searchdata}
          >
            🔍
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute bg-white shadow-xl mx-44 rounded-2xl text-start w-[500px] mt-2 z-10">
            <ul>
              {suggestions.map((s) => (
                <li
                  onClick={() => handleSuggestionClick(s)}
                  key={s}
                  className="py-2 px-1 hover:bg-gray-100 cursor-pointer"
                >
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

      {/* Display the selected suggestion or related data */}
      {selectedSuggestion && (
        <div className="m-4 p-4 border rounded-lg bg-gray-100">
          <h2 className="text-lg font-bold">You selected:</h2>
          <p>{selectedSuggestion}</p>
          {/* Add more logic to display related results if necessary */}
        </div>
      )}
    </div>
  );
};

export default Header;
