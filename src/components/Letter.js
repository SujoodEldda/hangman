import React from 'react'

export default function Letter({letter}) {
  return (
    <span onClick={()=>console.log(letter)}>{letter}</span>
  )
}
