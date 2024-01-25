import React from 'react'

export default function Tsk4() {
    const fruites = ["Apple", "Banana", "Orange", "Mango", "Strawberry", 
    "Watermelon", "Grape", "Pineapple", "Kiwi", "Peach",
    "Blueberry", "Raspberry", "Cherry", "Plum", "Pear",
    "Apricot", "Pomegranate", "Cantaloupe", "Fig", "Lemon",
    "Lime", "Coconut", "Avocado", "Grapefruit", "Papaya",
    "Blackberry", "Cranberry", "Nectarine", "Passionfruit"];
  return (
    <div>
      <ul>
      {fruites.map((fruites,index)=>(
            <li key={index}>{fruites}</li>
        ))}
      </ul>
    </div>
  )
}
