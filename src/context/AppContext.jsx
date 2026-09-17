import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

const STORAGE_KEY = 'bday-website-selections';

const defaultSelections = {
  relationship: '',
  gift: null,
  date: '',
  time: '',
  note: '',
  accepted: false
};

function loadSelections() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...defaultSelections, ...JSON.parse(saved) } : defaultSelections;
  } catch (e) {
    return defaultSelections;
  }
}

export const AppProvider = ({ children }) => {
  const [selections, setSelections] = useState(loadSelections);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selections));
    } catch (e) {
      // storage might be unavailable (private browsing, etc.) — fail silently
    }
  }, [selections]);

  return (
    <AppContext.Provider value={{ selections, setSelections }}>
      {children}
    </AppContext.Provider>
  );
};