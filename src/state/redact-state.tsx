'use client';
import React, {
  useContext,
  useState,
  createContext,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from 'react';

const RedactContext = createContext(false);

const SetRedactContext = createContext<
  Dispatch<SetStateAction<boolean>> | undefined
>(undefined);

export const RedactProvider = ({ children }: PropsWithChildren) => {
  const [redact, setRedact] = useState(false);

  return (
    <SetRedactContext.Provider value={setRedact}>
      <RedactContext.Provider value={redact}>{children}</RedactContext.Provider>
    </SetRedactContext.Provider>
  );
};

export const useRedact = () => useContext(RedactContext);
export const useSetRedact = () => {
  const context = useContext(SetRedactContext);
  if (context === undefined) {
    throw new Error('useSetRedact must be used within a RedactProvider');
  }
  return context;
};
