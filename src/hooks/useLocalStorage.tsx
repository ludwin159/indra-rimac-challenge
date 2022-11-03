import { useState } from "react";

export function useLocalStorage (key: string, initialValue: any) {
  const [storedValue, setStoredValue] = useState<any>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item): initialValue
    } catch (error) {
      console.log(error)
    }
  })

  const setValue = (value: any) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error);
    }
  }
  return [storedValue, setValue]
}