import { useEffect, type RefObject } from 'react';

type Coordinates = {
  x: number;
  y: number;
};

type Dimensions = {
  width: number;
  height: number;
};

type Measurments = Coordinates & Dimensions;

export default function useSnappyFollow(
  threshold: number,
  outer: RefObject<HTMLElement>,
  inner: RefObject<HTMLElement>
) {
  useEffect(() => {
    const handleTransform = (
      el: RefObject<HTMLElement>,
      coords?: Coordinates,
      amount?: number
    ) => {
      if (!el.current) return;
      let x = 0;
      let y = 0;
      if (coords && amount) {
        x = coords.x / amount;
        y = coords.y / amount;
      }
      el.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const getPos = <T extends HTMLElement>(el: T): Measurments => ({
      width: el.offsetWidth,
      height: el.offsetHeight,
      x: el.offsetLeft + el.offsetWidth / 2,
      y: el.offsetTop + el.offsetHeight / 2,
    });

    const getDifPos = (el1: Coordinates, el2: Coordinates) => ({
      x: el1.x - el2.x,
      y: el1.y - el2.y,
    });

    const shouldUpdate = (difPos: Coordinates, buttonPos: Dimensions) => {
      return (
        Math.abs(difPos.x) < threshold + buttonPos.width / 2 &&
        Math.abs(difPos.y) < threshold + buttonPos.height / 2
      );
    };

    const handleMove = (e: MouseEvent) => {
      if (!outer.current) return;
      const mousePos = {
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
      };
      const buttonPos = getPos(outer.current);
      const difPos = getDifPos(mousePos, buttonPos);

      if (shouldUpdate(difPos, buttonPos)) {
        handleTransform(outer, difPos, 3);
        handleTransform(inner, difPos, 5);
      } else {
        handleTransform(outer);
        handleTransform(inner);
      }
    };

    document.addEventListener('mousemove', handleMove);

    return () => document.removeEventListener('mousemove', handleMove);
  }, [inner, outer, threshold]);
}
