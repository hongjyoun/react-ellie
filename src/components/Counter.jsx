import React, { useState } from 'react';

export default function Counter({ hahaha, total }) {
  const [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <span className='number'>{count} / {total}</span>
      <button
        className='button'
        onClick={() => {
          setCount((prev) => prev + 1);
          hahaha()
        }}
      >
        Add +
      </button>
    </div>
  );
}
