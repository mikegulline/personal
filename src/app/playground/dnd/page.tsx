'use client';
import React, { useState, useRef } from 'react';

export default function DndPage() {
  const containerRef = useRef(null);
  const draggableWidth = 50;
  const [x, setX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [percent, setPercent] = useState(0);

  const onStart = (e) => {
    const clientX = e.type.startsWith('touch')
      ? e.touches[0].clientX
      : e.clientX;
    setDragging(true);
    setOffsetX(clientX - x);
  };

  const onMove = (e) => {
    if (!dragging) return;

    const clientX = e.type.startsWith('touch')
      ? e.touches[0].clientX
      : e.clientX;

    let newX = clientX - offsetX;

    const pad = 100;

    const containerWidth = containerRef.current.clientWidth;
    const minX = pad;
    const maxX = containerWidth - draggableWidth - pad;

    const cur = Math.max(minX, Math.min(maxX, newX));

    setPercent((((cur - pad) / (maxX - pad)) * 100).toFixed(1));

    setX(cur);
  };

  const onEnd = () => setDragging(false);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%  ',
        height: '100px',
        background: 'lightgray',
      }}
      onMouseMove={onMove}
      onTouchMove={onMove}
      onMouseUp={onEnd}
      onTouchEnd={onEnd}
    >
      <div
        onMouseDown={onStart}
        onTouchStart={onStart}
        style={{
          position: 'absolute',
          width: draggableWidth + 'px',
          height: '50px',
          background: 'steelblue',
          top: '25px',
          left: x + 'px',
          touchAction: 'none',
          userSelect: 'none',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'grab',
        }}
      >
        <div className=' absolute -top-5'>
          {percent}
          {'%'}
        </div>
      </div>
    </div>
  );
}
