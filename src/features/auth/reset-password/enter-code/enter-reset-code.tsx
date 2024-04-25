"use client";

import { ChangeEvent, useCallback, useMemo, useState } from "react";
import clsx from "clsx";
import styles from "./enter-reset-code.module.scss";
import { UiButton } from "@/shared/ui/ui-button";
import { UiText } from "@/shared/ui/ui-text";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch";
import { enterResetPasswordCode } from "@/entities/User/reset-password-api";
import { useSelector } from "react-redux";
import { resetPasswordState } from "@/entities/User";

export const EnterResetCode = () => {
  const [codes, setCodes] = useState<string[]>(Array(4).fill(""));
  const dispatch = useAppDispatch();
  const state = useSelector(resetPasswordState);

  const handleInputCode = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { id, value } = event.target;
      const index = Number(id);
      const sanitizedValue = value.replace(/\D/g, "");

      setCodes((prevCodes) => {
        const newCodes = [...prevCodes];
        newCodes[index] = sanitizedValue;
        return newCodes;
      });

      const sibling =
        value.length === 1
          ? event.target.nextSibling
          : event.target.previousSibling;
      sibling && (sibling as HTMLInputElement).focus();
    },
    [],
  );

  const onSubmit = () => {
    dispatch(
      enterResetPasswordCode({ email: state?.email!, code: codes.join("") }),
    );
  };

  const isFormValid = () => codes.every((code) => code.length === 1);

  return (
    <div className={styles["enter-code"]}>
      {state?.error && (
        <UiText weight={"regular"} className={styles["error-message"]}>
          {state?.error}
        </UiText>
      )}
      <div className={clsx(styles.code, state?.error && styles["error-code"])}>
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
        disabled={!isFormValid || state?.loading}
        type={"submit"}
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
