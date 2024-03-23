import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2">
      {" "}
      <img
        className="w-8 h-8"
        src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
        alt="user img"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
