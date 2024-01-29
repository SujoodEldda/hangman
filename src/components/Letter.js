import React from "react";

export default function Letter({ letter, style, letterIsSelected }) {
  return (
    <>
      <span
        onClick={() => letterIsSelected(letter.toUpperCase())}
        style={style}
      >
        {letter}{" "}
      </span>
    </>
  );
}
