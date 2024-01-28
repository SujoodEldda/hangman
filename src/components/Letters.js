import React from 'react'
import Letter from './Letter';

export default function Letters() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return (
    <>
    <div>Available letters</div>
    {letters.map((letter)=><Letter letter={letter}/>)}
    </>
  )
}
