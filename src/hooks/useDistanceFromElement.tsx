import { useState, useEffect, RefObject } from 'react';

// given an element and proximity
// return the mouse distance from the element
// only if distance is within the proximity
// else return

export default function useDistanceFromElement(
  proximity: number,
  ref: RefObject<HTMLDivElement>
) {
  const [distance, setDistance] = useState<number>(proximity);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (!ref.current) return;
      let dist = mouseDistanceFromElement(e, ref.current);
      if (dist === proximity) return;
      if (dist > proximity) dist = proximity;
      setDistance((proximity - dist) / proximity);
    }

    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, [proximity, ref]);

  return distance;
}

////////////////////////
////////////////////////
////////////////////////

function mouseDistanceFromElement(
  mouseEvent: MouseEvent,
  element: HTMLDivElement
): number {
  let mX: number = mouseEvent.pageX,
    mY: number = mouseEvent.pageY,
    from = { x: mX, y: mY },
    off = element.getBoundingClientRect(),
    top: number = window.pageYOffset || document.documentElement.scrollTop,
    left: number = window.pageXOffset || document.documentElement.scrollLeft,
    ny1: number = off.top + top, //top
    ny2: number = ny1 + element.offsetHeight, //bottom
    nx1: number = off.left + left, //left
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
