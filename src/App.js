import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';

function App() {
  let [score, setScore] = useState(100)
  return (
    <>
    <Score score={score}/>
    <Solution />
    <br/>
    <Letters />
    </>
  );
}

export default App;
