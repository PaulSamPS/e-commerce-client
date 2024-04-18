"use client";

import { useEffect, useState } from "react";

export const useScreenWidth = (): [number] => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    let timer: NodeJS.Timeout | null = null;

    // Функция debounce
    const debounce = (func: () => void, delay: number) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(func, delay);
    };

    // Обработчик изменения размера окна с debounce
    const handleResize = () => {
      debounce(updateScreenWidth, 150);
    };

    // Добавляем обработчик события только после монтирования компонента
    window.addEventListener("resize", handleResize);

    // Устанавливаем ширину экрана при загрузке
    updateScreenWidth();

    // Очищаем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, []);

  // Возвращаем текущую ширину экрана и функцию для ее обновления
  return [screenWidth];
};
