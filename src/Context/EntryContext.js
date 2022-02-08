// import { useContext, createContext, useState, useEffect } from 'react';

// const EntryContext = createContext();

// function EntryProvider({ children }) {
//   const [entry, setEntry] = useState([]);
//   const contextValue = { entry, setEntry };

//   return <EntryContext.Provider value={contextValue}>{children}</EntryContext.Provider>;

//   const useEntries = () => {
//     const context = useContext(EntryContext);

//     if (context === undefined) {
//       throw new Error('useUser must be used within a UserProvider');
//     }
//     return context;
//   };

//   export { EntryProvider, useEntries };
// }
