'use client';
import { useState } from 'react';

function useToggle(defaultState = false) {
  const [toggleState, setToggleState] = useState<boolean>(defaultState);
  const onClick = () => setToggleState(!toggleState);

  return { toggleState, onClick };
}

export default useToggle;
