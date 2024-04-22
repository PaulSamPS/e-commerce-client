import React, { memo, forwardRef, AllHTMLAttributes } from "react";
import styles from "./ui-input.module.scss";
import clsx from "clsx";

export interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const UiInput = memo(
  forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, label, ...props }, ref) => {
      return (
        <div className={getWrapperClassName(className, label)}>
          {label && <InputLabel htmlFor={label} text={label} />}
          <input
            ref={ref}
            name={label}
            className={getInputClassName(error)}
            {...props}
          />
          {error && <ErrorMessage text={error} />}
        </div>
      );
    },
  ),
);

const getWrapperClassName = (
  className: string | undefined,
  label: string | undefined,
) => clsx(className, styles.wrapper, label && styles["with-label"]);
const getInputClassName = (error: string | undefined) =>
  clsx(styles.input, { error });
const InputLabel: React.FC<{ htmlFor: string; text: string }> = ({
  htmlFor,
  text,
}) => (
  <label htmlFor={htmlFor} className={styles.label}>
    {text}
  </label>
);
const ErrorMessage: React.FC<{ text: string }> = ({ text }) => (
  <span className={styles["error-message"]}>{text}</span>
);
