import { createInstance } from "@/shared/api/api-instance";
import { IShares, SharesProps } from "@/shared/types/shares";

// Общий тип для параметра options
type RequestOptions = Parameters<typeof createInstance>[1];

export const addShares = (sharesDto: SharesProps, options?: RequestOptions) => {
  return createInstance<IShares>(
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
  return createInstance<IShares[]>(
    {
      url: `/shares`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};
