import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      //API Polling

      dispatch(
        addMessages({
          name: generateRandomName(),
          message: makeRandomMessage(30),
        })
      );
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="w-full h-[450px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, idx) => (
          <ChatMessage key={idx} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "Akshay Bhardwaj",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className=" w-3/4 p-2"
          type="text"
          placeholder="Enter message!!"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-red-300">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
