import React, { useState } from 'react';
import './App.css';
import newetc from './Components/newetc.json';

function App() {
  const [records, setRecords] = useState(newetc);

  return (
    <div className="App">
      <ul>
        {records.map((item) => (
          <li key={item.no}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
