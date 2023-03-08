import React, { useState } from 'react'
import './AppXY.css';

export default function AppXY() {
  const [position, setPostion] = useState({x: 0, y: 0});
  const onMoveCursor = (e) => {
    // setPostion({x: e.clientX, y: e.clientY})
    setPostion(prev => ({...prev, x: e.clientX}))
  }
  window.addEventListener("mousemove", onMoveCursor, false);
  return (
    <div className='container' onPointerMove={onMoveCursor}>
      <div className='pointer' style={{transform: `translate(${position.x}px, ${position.y}px)`}}/>
    </div>
  );
}
