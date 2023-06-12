'use client';
import { ReactNode, useState, useRef, useEffect } from 'react';

export default function Icon({ children }: { children: ReactNode }) {
  const [distance, setDistance] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function mouseDistanceFromElement(
      mouseEvent: MouseEvent,
      element: HTMLElement
    ): number {
      let mX: number = mouseEvent.pageX,
        mY: number = mouseEvent.pageY,
        from = { x: mX, y: mY },
        off = element.getBoundingClientRect(),
        ny1: number = off.top + document.body.scrollTop, //top
        ny2: number = ny1 + element.offsetHeight, //bottom
        nx1: number = off.left + document.body.scrollLeft, //left
        nx2: number = nx1 + element.offsetWidth, //right
        maxX1: number = Math.max(mX, nx1),
        minX2: number = Math.min(mX, nx2),
        maxY1: number = Math.max(mY, ny1),
        minY2: number = Math.min(mY, ny2),
        intersectX: boolean = minX2 >= maxX1,
        intersectY: boolean = minY2 >= maxY1,
        to = {
          x: intersectX ? mX : nx2 < mX ? nx2 : nx1,
          y: intersectY ? mY : ny2 < mY ? ny2 : ny1,
        },
        distX: number = to.x - from.x,
        distY: number = to.y - from.y,
        hypot: number = (distX ** 2 + distY ** 2) ** (1 / 2);
      return Math.floor(hypot);
    }

    function onMouseMove(e: MouseEvent) {
      const amt = 300;
      if (ref.current) {
        let dist = mouseDistanceFromElement(e, ref.current);
        if (dist > amt) {
          dist = amt;
        }
        setDistance((amt - dist) / amt);
      }
    }

    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      ref={ref}
      className='w-12 h-12 sm:w-20 sm:h-20 rounded-md  bg-white flex items-center justify-center text-2xl sm: text-slate-500 border  border-slate-300'
      style={{ transform: `scale(${1 + 0.2 * distance})` }}
    >
      <div style={{ transform: `scale(${1 + 0.75 * distance})` }}>
        {children}
      </div>
    </div>
  );
}
