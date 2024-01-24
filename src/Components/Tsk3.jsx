import React from 'react'

export default function Tsk3() {
    const students = [
        {id:1,name:"tanya"},
        {id:2,name:"manya"},
        {id:3,name:"alex"}
    ]
  return (
    <ul>
        {students.map((item)=>(
            <li key={item.id}>{item.name}</li>
        ))}
    </ul>
  )
}
