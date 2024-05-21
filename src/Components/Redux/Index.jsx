// Components/Redux/Index.jsx
import { createStore } from 'redux';

// Reducer function
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Action creators
export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });

// Create store
export const store = createStore(counterReducer);
