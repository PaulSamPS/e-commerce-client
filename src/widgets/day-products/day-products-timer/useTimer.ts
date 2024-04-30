import React, { useCallback, useEffect, useState } from "react";
import { apiDayProducts } from "@/shared/api";

const calculateRemainingTime = () => {
  const now = new Date();
  const hoursRemaining = 23 - now.getHours();
  const minutesRemaining = 59 - now.getMinutes();
  const secondsRemaining = 60 - now.getSeconds();
  return { hoursRemaining, minutesRemaining, secondsRemaining };
};

export const useTimer = () => {
  const [hours, setHours] = useState<number>(23);
  const [minutes, setMinutes] = useState<number>(59);
  const [seconds, setSeconds] = useState<number>(59);

  const updateProducts = useCallback(async () => {
    await apiDayProducts.yesterdayProductsSet();
    await apiDayProducts.dayProductsSet();
  }, []);

  useEffect(() => {
    const { hoursRemaining, minutesRemaining, secondsRemaining } =
      calculateRemainingTime();
    setHours(hoursRemaining);
    setMinutes(minutesRemaining);
    setSeconds(secondsRemaining);
  }, []);

  useEffect(() => {
    const timer = setInterval(async () => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else {
        await updateProducts();
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [hours, minutes, seconds, updateProducts]);

  return { hours, minutes, seconds, updateProducts };
};
