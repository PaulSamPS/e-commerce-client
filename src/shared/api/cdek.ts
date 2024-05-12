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

type CdekDeliveryPricesProps = {
  type: number;
  currency: number;
  from_location: {
    code: number;
  };
  to_location: {
    code: number;
  };
  packages: [
    {
      height: number;
      length: number;
      weight: number;
      width: number;
    },
  ];
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
