import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
  const [total, setTotal] = useState(0);
  const addTotalMethod = () => {
    setTotal((prev) => prev + 1)
  }
  return (
    <div className='container'>
      <div className='banner'>
        Total Count: {total} {total > 10 ? '🔥' : '❄️'}
      </div>
      <div className='counters'>
        <Counter hahaha={addTotalMethod} total={total} />
        <Counter hahaha={addTotalMethod} total={total} />
      </div>
    </div>
  );
}
