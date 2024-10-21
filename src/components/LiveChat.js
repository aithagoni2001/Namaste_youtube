import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName, generateString } from "../utils/helper";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState("");
  const dispatch = useDispatch();
  const selectorChat = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const time = setInterval(() => {
      console.log("api polling");

      // Simulate adding a new message every 2 seconds
      dispatch(
        addMessage({
          name: generateName(),
          message: generateString(25),
        })
      );
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(time);
  }, [dispatch]); // Add dispatch to the dependency array to avoid issues

  return (
    <div>
      <h1 className="font-bold text-lg text-black border-b mr-1 mb-1">
        Live Chat 🔴
      </h1>
      <div className="my-auto p-2 w-3.5/12 h-[420px] border border-black rounded-lg overflow-y-scroll flex flex-col-reverse">
        {selectorChat.map((msg, index) => (
          <ChatMessage key={index} name={msg.name} message={msg.message} />
        ))}
      </div>
      <form className="w-full border border-black h-15 rounded-lg" onSubmit={(e)=>{
        e.preventDefault();
        console.log(liveMsg)
        dispatch(addMessage({
          name : "pavan",
          message: liveMsg
      }))
        setLiveMsg("")
      }}>
       
        <input
          className="m-2 w-72 h-6 p-1 border border-black"
          type="text" placeholder="chat..."
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        /> <button className="rounded-lg px-2 bg-green-300">send</button>
      </form>
    </div>
  );
};

export default LiveChat;
