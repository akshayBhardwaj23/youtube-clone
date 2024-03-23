import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Live",
    "Songs",
    "Cricket",
    "Soccer",
    "Cooking",
    "Entertainment",
    "Mr. Beast",
  ];

  return (
    <div className="flex ">
      {list.map((l, idx) => (
        <Button key={idx} name={l} />
      ))}
    </div>
  );
};

export default ButtonList;
