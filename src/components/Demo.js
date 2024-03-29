import React from "react";
import { useState } from "react";
import { findNthPrime } from "../utils/helper";
import { useMemo } from "react";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  console.log("Rendering..");
  const prime = useMemo(() => {
    return findNthPrime(text);
  }, [text]);

  return (
    <>
      <div
        className={
          "m-4 p-2 w-96 border border-black" + (isDarkTheme && " bg-gray-600")
        }
      >
        <div>
          <button
            className="m-10 p-2 bg-green-200"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            Dark
          </button>
        </div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div>
        <h1>nth Prime: {prime}</h1>
      </div>
    </>
  );
};

export default Demo;
