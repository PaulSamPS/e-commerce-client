import React, { useState } from "react";
import { apiDayProducts } from "@/shared/api";

export const useTimer = () => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  React.useEffect(() => {
    setHours(24 - new Date().getHours() - 1);
    setMinutes(60 - new Date().getMinutes() - 1);
    setSeconds(60 - new Date().getSeconds());
  }, []);

  const updateProducts = async () => {
    await apiDayProducts.yesterdayProductsSet();
    await apiDayProducts.dayProductsSet();
  };

  React.useEffect(() => {
    const myInterval = setInterval(async () => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            await updateProducts();
            setHours(23);
            setMinutes(59);
            setSeconds(59);
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return { hours, minutes, seconds, updateProducts };
};
