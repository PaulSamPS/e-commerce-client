"use client";

import { IProduct } from "@/shared/api/types/product";
import { useCallback, useEffect, useState } from "react";
import {
  clearLocalStorage,
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@/shared/lib/localstorage";
import {apiProduct} from '@/shared/api'

const MAX_ITEMS = 6;
export const useAddToRecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState<IProduct[]>([]);

  const updateRecentlyViewedProducts = useCallback(async () => {
    try {
      const data = loadFromLocalStorage("recentlyViewed");
      if (data) {
        const productsId: number[] = [];
        for (const item of data) {
          productsId.push(item.id);
        }
        const product = await apiProduct.recentlyViewedApi({productsId});
        setRecentlyViewed(product);
      }
      return
    } catch (error) {
      console.error('Ошибка при обновлении просмотренных товаров:', error);
    }
  }, []);

  useEffect(() => {
    updateRecentlyViewedProducts()
  }, [updateRecentlyViewedProducts]);

  const addToRecentlyViewed = async (item: IProduct) => {

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
