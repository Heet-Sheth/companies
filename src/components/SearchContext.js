// src/context/SearchContext.js
import React, { createContext, useState, useEffect } from "react";

// Create context
const SearchContext = createContext();

// Provider
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(searchQuery), 300); // 300ms delay
    return () => clearTimeout(handler);
  }, [searchQuery]);

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, debouncedQuery }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
