// Components/Re.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Redux/Index'; // Adjust the path if needed

function Re() {
  const count = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement())}> - </button>
      <button onClick={() => dispatch(increment())}> + </button>
    </div>
  );
}

export default Re;
