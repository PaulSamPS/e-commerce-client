import React from "react";
import styles from "./personal-data.module.scss";
import { UiFormWithInputs } from "@/shared/ui/ui-form-with-inputs/ui-from-with-inputs";
import {
  firstnameOptions,
  cityOptions,
  addressOptions,
  regionOptions,
  lastnameOptions,
  middleNameOptions,
} from "./constants";
import { IProfile, ProfileFormProps } from "../types";

type PersonalDataProps = {
  profile: IProfile;
  onSubmit: (formData: ProfileFormProps) => void;
};
export const PersonalData = ({ profile, onSubmit }: PersonalDataProps) => {
  const inputFields = [
    {
      name: "firstname",
      type: "text",
      placeholder: profile?.firstname || "Введите имя",
      options: firstnameOptions,
    },
    {
      name: "lastname",
      type: "text",
      placeholder: profile?.lastname || "Введите фамилию",
      options: lastnameOptions,
    },
    {
      name: "middleName",
      type: "text",
      placeholder: profile?.middleName || "Введите отчество",
      options: middleNameOptions,
    },
    {
      name: "region",
      type: "text",
      placeholder: profile?.region || "Введите область",
      options: regionOptions,
    },
    {
      name: "city",
      type: "text",
      placeholder: profile?.city || "Введите город",
      options: cityOptions,
    },
    {
      name: "address",
      type: "text",
      placeholder: profile?.address || "Введите адрес",
      options: addressOptions,
    },
  ];

  return (
    <div className={styles["form-items"]}>
      <UiFormWithInputs
        isLoading={false}
        inputs={inputFields}
        onSubmit={onSubmit}
        actionText={"Расчитать"}
        phoneNumber={profile.phoneNumber}
      />
    </div>
  );
};
