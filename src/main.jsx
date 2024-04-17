import React from 'react'
import ReactDOM from 'react-dom/client'

import Task1 from './Components/task1.jsx'
import Task2 from './Components/Task2.jsx'
import Tsk3 from './Components/Tsk3.jsx'
import Tsk4 from './Components/Tsk4.jsx'
import App from './Components/Task5.jsx'
import Login from './Components/Login.jsx'
import ConditionalRendering from './Components/Task4.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/* <Task1 name="tanya" hobby="i love painting"></Task1>
<Task1 name="palak " hobby="i love singing"></Task1>
<Task2 message="it is danger"/> */}
{/* <Tsk3></Tsk3> */}
{/* <<Tsk4></Tsk4> */}
<ConditionalRendering ></ConditionalRendering>
  </React.StrictMode>,
)
