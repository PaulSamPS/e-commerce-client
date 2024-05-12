import { createInstance, createInstanceCdek } from "@/shared/api/api-instance";
import { ICartAddAndRemove, ICartProps } from "@/shared/api/types";

type CdekLoginProps = {
  grant_type: string;
  client_id: string;
  client_secret: string;
};

type CdekLoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  jti: string;
};

type Packages = {
  height: number;
  length: number;
  weight: number;
  width: number;
};

type CdekDeliveryPricesProps = {
  type: number;
  currency: number;
  from_location: {
    code: number;
  };
  to_location: {
    code: number;
  };
  packages: Packages[];
};

type RequestOptions = Parameters<typeof createInstanceCdek>[1];

export const cdekLogin = (cdekLoginDto: FormData, options?: RequestOptions) => {
  return createInstanceCdek<CdekLoginResponse>(
    {
      url: `/oauth/token`,
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      data: cdekLoginDto,
    },
    options,
  );
};

export const cdekGetCity = (city: string, options?: RequestOptions) => {
  return createInstanceCdek<{ code: number }>(
    {
      url: `/location/cities/?city=${city}`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};

export const cdekDeliveryPrices = (
  cdekDeliveryPricesDto: CdekDeliveryPricesProps,
  options?: RequestOptions,
) => {
  return createInstanceCdek<CdekLoginResponse>(
    {
      url: `/calculator/tarifflist`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: cdekDeliveryPricesDto,
    },
    options,
  );
};
