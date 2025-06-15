// context/CountContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface CountContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CountContext = createContext<CountContextType | undefined>(undefined);

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = (): CountContextType => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};
