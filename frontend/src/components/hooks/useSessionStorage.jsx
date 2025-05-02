import { useState, useEffect } from "react";

const isBrowser = typeof window !== "undefined";

const useSessionStorage = (key, initialValue) => {
  const getStoredValue = () => {
    if (!isBrowser) return initialValue;

    try {
      const item = sessionStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading sessionStorage key "${key}":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getStoredValue);

  useEffect(() => {
    if (!isBrowser) return;
    try {
      sessionStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`Error setting sessionStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
    } catch (error) {
      console.warn(`Error updating sessionStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

export default useSessionStorage;
