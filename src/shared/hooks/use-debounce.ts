import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number): T;
function useDebounce(value: string, delay: number): string;

// Реализуем сам хук
function useDebounce(value: any, delay: number): any {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (typeof value === "string") {
      const trimmedValue = value.trim();
      const timeoutId = setTimeout(() => {
        setDebouncedValue(trimmedValue);
      }, delay);

      return () => clearTimeout(timeoutId);
    } else {
      console.warn(
        "useDebounce: значение не является строкой, задержка пропущена.",
      );
    }
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
