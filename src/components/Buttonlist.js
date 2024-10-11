import React from "react";
import Button from "./Button";

const Buttonlist = () => {
  return (
    <div className="flex m-2">
      <img className="h-5 mt-4 cursor-pointer"
        src="https://icons.veryicon.com/png/o/miscellaneous/operational-symbol/less-than-1.png"
        alt=""
      />
      <Button name="All" />
      <Button name="Music" />
      <Button name="Live" />
      <Button name="News" />
      <Button name="Gaming" />
      <Button name="Movies" />
      <Button name="Fashion" />
      <Button name="Cartoon" />
      <Button name="Zeography" />
      <Button name="History" />
      <Button name="Watched" />
      <img className="h-5 mt-4 cursor-pointer"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJzbdwbN3gVZi6yTbKCbFe_jgw8t5Q8NHlQ&s"
        alt=""
      />
    </div>
  );
};

export default Buttonlist;
