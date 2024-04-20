import { ButtonProps, UiButton } from "@/shared/ui/ui-button";
import { FC } from "react";

export interface UiButtonGroupProps {
  buttons: ButtonProps[];
  className?: string;
}

export const UiButtonGroup: FC<UiButtonGroupProps> = ({
  buttons,
  className,
}) => {
  return (
    <div className={className}>
      {buttons.map((button, index) => (
        <UiButton key={index} {...button} />
      ))}
    </div>
  );
};
