import { IProduct } from "@/shared/api/types/product";

export const saveToLocalStorage = <T>(key: string, data: T | T[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const clearLocalStorage = (key: string) => {
  return localStorage.removeItem(key);
};
