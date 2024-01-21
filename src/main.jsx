import React from 'react'
import ReactDOM from 'react-dom/client'

import Task1 from './Components/task1.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Task1 name="tanya" hobby="i love painting"></Task1>
<Task1 name="palak " hobby="i love singing"></Task1>
  </React.StrictMode>,
)
