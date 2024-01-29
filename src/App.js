import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import EndGame from "./components/EndGame";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function App() {
  const generateLetterStatuses = () => {
    const letterObject = {};
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      letterObject[letter] = false;
    }
    return letterObject;
  };
  let [score, setScore] = useState(100);
  const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());
  let [doneGame, setDoneGame] = useState(false);
  let [mess, setMess] = useState("Congratulation you pass the game");
  const [answer, setAnswer] = useState([]);
  const [solution, setSolution] = useState({
    word: "Calm",
    hint: "Your mood when coding!",
  });
  const isDone = () => {
    const solutionWordLetters = solution.word.toUpperCase();
    for (const letter of solutionWordLetters) {
      if (!answer.includes(letter)) {
        return false;
      }
    }
    return true;
  };
  const letterIsSelected = (letter) => {
    if (letterStatus[letter] == false) {
      answer.push(letter);
      const letterStatusCopy = { ...letterStatus };
      letterStatusCopy[letter] = true;
      setLetterStatus(letterStatusCopy);
      if (solution.word.includes(letter)) {
        setScore(score + 5);
      } else {
        setScore(score - 20);
      }
    }
    if (isDone()) {
      setDoneGame(true);
    }
  };
  const scoreStatus = () => {
    let scoreStyle = "high";
    if (score == 0) {
      setMess("sorry your out of tries");
      setDoneGame(true);
    }
    if (score <= 50) {
      scoreStyle = "low";
    }
    if (score > 50 && score < 80) {
      scoreStyle = "medium";
    }
    return scoreStyle;
  };

  return (
    <>
      {!doneGame ? (
        <>
          <Score score={score} scoreStyle={scoreStatus()} />
          <Solution
            solution={solution}
            letterStatus={letterStatus}
            letterIsSelected={letterIsSelected}
          />
          <br />
          <Letters
            letterStatus={letterStatus}
            letterIsSelected={letterIsSelected}
          />
        </>
      ) : (
        <EndGame mess={mess} />
      )}
    </>
  );
}

export default App;
