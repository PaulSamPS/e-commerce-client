import { createInstance } from "@/shared/api/api-instance";

type Image = {
  url: string;
  name: string;
};

export interface Shares {
  id: number;
  images: Image;
  name: string;
  path: string;
}

// Интерфейсы для параметров запросов API
export interface SharesProps {
  image: File;
  name: string;
  path: string;
}

// Общий тип для параметра options
type RequestOptions = Parameters<typeof createInstance>[1];

export const addShares = (sharesDto: SharesProps, options?: RequestOptions) => {
  return createInstance<Shares>(
    {
      url: `/shares`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: sharesDto,
    },
    options,
  );
};

export const getShares = (options?: RequestOptions) => {
  return createInstance<Shares[]>(
    {
      url: `/shares`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};
