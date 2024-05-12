export type IProfile = {
  firstname: string;
  lastname: string;
  middleName: string;
  region: string;
  city: string;
  address: string;
  phoneNumber: string;
};

export interface ProfileFormProps {
  firstname: string;
  lastname: string;
  middleName: string;
  city: string;
  region: string;
  address: string;
  phoneNumber: string;
}

export interface IProfileEditProps
  extends Pick<
    IProfile,
    "firstname" | "lastname" | "middleName" | "region" | "city" | "address"
  > {}
