import React, { ForwardedRef, forwardRef } from "react";
import styles from "./ui-radio.module.scss";
import { UiText } from "@/shared/ui/ui-text";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  currentValue: string;
  nameGroup: string;
}

export const UiRadio = forwardRef(
  (
    { children, id, currentValue, nameGroup, ...restProps }: RadioProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => (
    <div className={styles.radio}>
      <input
        ref={ref}
        type="radio"
        id={id}
        name={nameGroup}
        value={children?.toString()}
        checked={currentValue === children?.toString()}
        {...restProps}
      />
      <label htmlFor={id}>
        <UiText weight={"regular"}>{children}</UiText>
      </label>
    </div>
  ),
);
