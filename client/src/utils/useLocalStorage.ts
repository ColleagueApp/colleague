import { useState } from "react";

const useLocalStorage = (): {
  value: string | null;
  setItem: (key: string, data: string) => void;
  getItem: (key: string) => string | null;
  removeItem: (key: string) => void;
} => {
  const [value, setValue] = useState<string | null>(null);

  const setItem = (key: string, data: string): void => {
    localStorage.setItem(key, data);
    setValue(data);
  };

  const getItem = (key: string): string | null => {
    const data = localStorage.getItem(key);
    setValue(data);
    return data;
  };

  const removeItem = (key: string): void => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return { value, setItem, getItem, removeItem };
};

export default useLocalStorage;
