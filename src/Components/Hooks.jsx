import React from 'react'
import { useState } from 'react'

export default function Hooks() {
    //  const[count , setCount] = useState('');
    //  function inc(){
    //     setCount(precount=>precount+1)
    //  }
    //  function dec(){
    //     setCount(precount=>precount-1)
    //  }
const [click, setClick] = useState([]);

  const addNum = () => {
    setClick(prevClick => [
      ...prevClick,
      {
        id: prevClick.length,
        value: Math.random()
      }
    ]);
  };

  return (
  

    <div>
        <ul>
            {click.map (
                item=>(
  <li key={item.id}>{item.value}</li>
                )
            )}
        </ul>
        <button onClick={addNum}>click me</button>
    </div>
  )
}
