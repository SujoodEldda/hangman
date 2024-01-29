import React from "react";

export default function Score({ score, scoreStyle }) {
  return <div className={scoreStyle}>{score}</div>;
}
