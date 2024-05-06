"use client";

import { IProduct } from "@/shared/api/types/product";
import { useEffect, useState } from "react";
import {
  clearLocalStorage,
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@/shared/lib/localstorage";

const MAX_ITEMS = 6;
export const useAddToRecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState<IProduct[]>([]);

  useEffect(() => {
    const data = loadFromLocalStorage("recentlyViewed");
    if (data) {
      setRecentlyViewed(data);
    }
  }, []);

  const addToRecentlyViewed = (item: IProduct) => {
    setRecentlyViewed((prevRecentlyViewed) => {
      const isDuplicate = prevRecentlyViewed.some(
        (prevItem) => prevItem.id === item.id,
      );
      if (isDuplicate) {
        return prevRecentlyViewed;
      }

      let updatedData = [
        item,
        ...prevRecentlyViewed.filter((prevItem) => prevItem.id !== item.id),
      ];

      if (updatedData.length > MAX_ITEMS) {
        updatedData = updatedData.slice(0, MAX_ITEMS);
      }

      saveToLocalStorage("recentlyViewed", updatedData);

      return updatedData;
    });
  };

  const clearRecentlyViewed = () => {
    clearLocalStorage("recentlyViewed");
    setRecentlyViewed([]);
  };

  return { recentlyViewed, addToRecentlyViewed, clearRecentlyViewed };
};
