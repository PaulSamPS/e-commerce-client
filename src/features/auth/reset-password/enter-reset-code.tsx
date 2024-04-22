"use client";

import { ChangeEvent, useState } from "react";
import clsx from "clsx";
import styles from "./enter-reset-code.module.scss";
import { UiButton } from "@/shared/ui/ui-button";
import { UiText } from "@/shared/ui/ui-text";
import { UiTitle } from "@/shared/ui/ui-title";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch";
import { enterResetPasswordCode } from "@/features/auth/reset-password/reset-password-api";
import { useSelector } from "react-redux";
import { resetPasswordState } from "@/entities/Password";

export const EnterResetCode = () => {
  const [codes, setCodes] = useState<string[]>(["", "", "", ""]);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const state = useSelector(resetPasswordState);

  const handleInputCode = async (event: ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute("id"));
    const { value } = event.target;
    setError(null);
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });

    if (value.trim() !== "") {
      if (event.target.nextSibling) {
        (event.target.nextSibling as HTMLInputElement).focus();
      }
    } else {
      if (event.target.previousSibling) {
        (event.target.previousSibling as HTMLInputElement).focus();
      }
    }
  };

  const onSubmit = async () => {
    dispatch(
      enterResetPasswordCode({ email: state?.email!, code: codes.join("") }),
    );
  };

  return (
    <div className={styles["enter-code"]}>
      {error && (
        <UiText weight={"regular"} className={styles["error-message"]}>
          {error}
        </UiText>
      )}
      <div className={clsx(styles.code, error && styles["error-code"])}>
        {codes.map((code, index) => (
          <input
            className={styles["input-code"]}
            key={index}
            maxLength={1}
            id={String(index)}
            value={code}
            placeholder="X"
            autoComplete="off"
            onChange={handleInputCode}
          />
        ))}
      </div>
      <UiButton
        appearance="primary"
        onClick={onSubmit}
        isLoading={state?.loading}
        disabled={codes.join("").length < 4 || state?.loading}
      >
        Отправить
      </UiButton>
      <div className={styles["resend-code"]}>
        <UiText className={styles.text} weight={"regular"}>
          Получить новый код
        </UiText>
      </div>
    </div>
  );
};
