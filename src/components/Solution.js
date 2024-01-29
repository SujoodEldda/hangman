import React from "react";
import Letter from "./Letter";

export default function Solution({ solution, letterStatus, letterIsSelected }) {
  const letterSelected = (letter) => {
    if (letterStatus[letter] == false) {
      return "__";
    } else {
      return letter;
    }
  };
  return (
    <>
      {[...solution.word].map((letter) => (
        <Letter
          letter={letterSelected(letter.toUpperCase())}
          letterIsSelected={letterIsSelected}
        />
      ))}
      <div>{solution.hint}</div>
    </>
  );
}
