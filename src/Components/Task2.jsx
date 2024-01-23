import React from 'react'

export default function Task2({message}) {
    const show =()=>{
           alert(message);
    }
  return (
    <div>
      <h1>Alert generater</h1>
      <button onClick={show}>show alert</button>
    </div>
  )
}
