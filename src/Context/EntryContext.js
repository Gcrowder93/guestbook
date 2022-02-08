import { useContext, createContext, useState } from 'react';

const EntryContext = createContext();

export function EntryProvider({ children }) {
  const [guestEntry, setguestEntry] = useState([]);
  const contextValue = { guestEntry, setguestEntry };
  return <EntryContext.Provider value={contextValue}>{children}</EntryContext.Provider>;
}

export function useEntry() {
  const context = useContext(EntryContext);
  if (context === undefined) {
    throw new Error('error undefined error');
  }
  return context;
}
