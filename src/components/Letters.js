import React from "react";
import Letter from "./Letter";

export default function Letters({ letterStatus, letterIsSelected }) {
  const crossedOutStyle = {
    textDecoration: "line-through",
  };
  const letterSelected = (letter) => {
    if (letterStatus[letter] == false) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      <div>Available letters</div>
      {Object.keys(letterStatus).map((letter) => (
        <Letter
          letter={letter}
          style={
            letterSelected(letter.toLocaleUpperCase()) ? crossedOutStyle : {}
          }
          letterIsSelected={letterIsSelected}
        />
      ))}
    </>
  );
}
