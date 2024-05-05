import { createInstance } from "@/shared/api/api-instance";
import { IFeatures } from "@/shared/types/features";

type RequestOptions = Parameters<typeof createInstance>[1];

export const getFeatures = (productId: number, options?: RequestOptions) => {
  return createInstance<IFeatures>(
    {
      url: `/features/${productId}`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};
