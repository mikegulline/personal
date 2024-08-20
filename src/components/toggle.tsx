'use client';
import {
  useState,
  ReactNode,
  createContext,
  useContext,
  ElementType,
} from 'react';

// Context definition
const ToggleContext = createContext<
  { openState: boolean; setOpenState: (open: boolean) => void } | undefined
>(undefined);

interface WithChildren {
  children: ReactNode;
}
interface ToggleProps extends WithChildren {
  defaultState?: boolean;
  globalToggle?: () => void;
}

// Toggle Component
function Toggle({ children, defaultState = false, globalToggle }: ToggleProps) {
  const [openState, setOpenState] = useState<boolean>(defaultState);

  return (
    <ToggleContext.Provider value={{ openState, setOpenState }}>
      {children}
    </ToggleContext.Provider>
  );
}

// Header Subcomponent
const ToggleHeader = ({ children }: WithChildren) => {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error('Toggle.Header must be used within a Toggle component');
  }

  const { openState, setOpenState } = context;

  return (
    <header
      onClick={() => setOpenState(!openState)}
      style={{ cursor: 'pointer' }}
      className='flex justify-between'
    >
      {children}
    </header>
  );
};

// Body Subcomponent
const ToggleBody = ({ children }: WithChildren) => {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error('Toggle.Body must be used within a Toggle component');
  }

  const { openState } = context;

  return <article className={openState ? '' : 'hidden'}>{children}</article>;
};

interface ToggleNodesProps {
  parent: ElementType;
  className: string;
  children: ReactNode[];
}

const ToggleNodes = ({
  children,
  parent: Component,
  className,
}: ToggleNodesProps) => {
  const [openState, setOpenState] = useState<boolean>(false);

  if (!children || !Array.isArray(children) || children.length < 2) return null;

  return (
    <Component className={className} onClick={() => setOpenState(!openState)}>
      {children[0]}
      {openState && children[1]}
    </Component>
  );
};

export { Toggle, ToggleHeader, ToggleBody, ToggleNodes };
