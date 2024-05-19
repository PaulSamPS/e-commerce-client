"use client";

import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./enter-reset-code.module.scss";
import { UiButton } from "@/shared/ui/ui-button";
import { UiText } from "@/shared/ui/ui-text";
import { useAppDispatch } from "@/shared/hooks";
import { useSelector } from "react-redux";
import { enterResetPasswordCode, resetPasswordState } from "@/entities/user";

export const EnterResetCode = () => {
  const [codes, setCodes] = useState<string[]>(Array(4).fill(""));
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const state = useSelector(resetPasswordState);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputCode = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { id, value } = event.target;
      const index = Number(id);
      const sanitizedValue = value.replace(/\D/g, "");

      setCodes((prevCodes) => {
        const newCodes = [...prevCodes];
        newCodes[index] = sanitizedValue.slice(0, 1); // Ограничиваем ввод одним символом
        return newCodes;
      });

      if (sanitizedValue.length === 1 && inputsRef.current[index + 1]) {
        inputsRef.current[index + 1]?.focus();
      } else if (sanitizedValue.length === 0 && inputsRef.current[index - 1]) {
        inputsRef.current[index - 1]?.focus();
      }
    },
    [],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { id, value } = event.currentTarget;
      const index = Number(id);

      if (event.key === "Backspace" && !value && inputsRef.current[index - 1]) {
        setCodes((prevCodes) => {
          const newCodes = [...prevCodes];
          newCodes[index - 1] = "";
          return newCodes;
        });
        inputsRef.current[index - 1]?.focus();
      }
    },
    [],
  );

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const onSubmit = () => {
    dispatch(
      enterResetPasswordCode({ email: state?.email!, code: codes.join("") }),
    );
  };

  useEffect(() => {
    const valid = () => codes.every((code) => code.length === 1);

    if (valid()) {
      return setIsFormValid(true);
    }
    return setIsFormValid(false);
  }, [codes]);

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
            onChange={handleInputCode}
            onKeyDown={handleKeyDown}
            value={code}
            ref={(el) => {
              inputsRef.current[index] = el;
            }}
            placeholder="X"
            autoComplete="off"
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
