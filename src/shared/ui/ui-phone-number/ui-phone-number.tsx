import React from "react";
import styles from "./ui-phone-number.module.scss";
import { PatternFormat } from "react-number-format";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type UiPhoneNumberProps<T extends FieldValues> = {
  control: Control<T, any> | undefined;
  profileNumber: string;
  name: string;
};

export const UiPhoneNumber = <T extends Record<string, any>>({
  control,
  profileNumber,
  name,
}: UiPhoneNumberProps<T>) => {
  return (
    <Controller
      name={name as Path<T>}
      control={control}
      rules={{
        required: {
          value: true,
          message: "Поле обязательно для заполнения",
        },
      }}
      render={({ field: { onChange, name, value } }) => (
        <div className={styles["input-number"]}>
          <span className={styles.label}>Номер телефона</span>
          <PatternFormat
            format="+7 (###) ###-##-##"
            placeholder="+7 (123) 456-78-90"
            mask="_"
            name={name}
            value={profileNumber || value}
            onChange={onChange}
            autoComplete="off"
          />
        </div>
      )}
    />
  );
};
