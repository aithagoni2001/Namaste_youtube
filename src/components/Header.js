import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col m-auto shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-20"
          src="https://rueeazy.github.io/youtube-clone/Assets/hamburger-icon.png"
          alt="hamburger-icon"
        />
        <img
          className="h-20 mx-9"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="youtube-icon"
        />
      </div>
      <div className="my-5 text-center col-span-10">
        <input
          className="border w-[500px] border-gray-200 px-3 py-1 rounded-l-full "
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 px-2 py-1 rounded-r-full  bg-gray-200">
          🔍
        </button>
        {/* <img className="mx-auto h-10" src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png" alt="mic-icon" /> */}
      </div>
      <div className="flex my-4 justify-evenly col-span-2 ">
        <img
          className="h-6 my-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxOCMMODh9L9iJ2NfEORL0bR5lEuxCjujlQ&s"
          alt="Notification"
        />
        <img
          className="h-10"
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
          alt="profile-icon"
        />
      </div>
    </div>
  );
};

export default Header;
