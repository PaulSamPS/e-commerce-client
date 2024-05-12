import { createInstance } from "@/shared/api/api-instance";

type RequestOptions = Parameters<typeof createInstance>[1];

export type IProfile = {
  firstname: string;
  lastname: string;
  middleName: string;
  region: string;
  city: string;
  address: string;
  phoneNumber: string;
};

export const profileUpdate = (
  profileDto: IProfile,
  options?: RequestOptions,
) => {
  return createInstance<IProfile>(
    {
      url: `/profile/update`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: profileDto,
    },
    options,
  );
};

export const profileGet = (options?: RequestOptions) => {
  return createInstance<IProfile>(
    {
      url: `/profile`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};
