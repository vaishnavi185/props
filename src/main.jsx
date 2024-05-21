import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './Components/Redux/Index.jsx';
import Re from './Components/Re.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Re />
    </Provider>
  </React.StrictMode>
);
