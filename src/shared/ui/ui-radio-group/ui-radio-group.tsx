import clsx from "clsx";
import styles from "./ui-radio-group.module.scss";
import { UiRadio } from "@/shared/ui/ui-radio/ui-radio";
import React from "react";

interface Items {
  value: string;
}

interface RadioGroupProps extends React.AllHTMLAttributes<HTMLDivElement> {
  items: Items[];
  nameGroup: string;
  onChangeRadio: (e: string) => void;
  value: string;
}

export const UiRadioGroup = ({
  items,
  nameGroup,
  onChangeRadio,
  value,
  className,
}: RadioGroupProps) => (
  <div className={clsx(styles["radio-group"], className)}>
    {items.map((i) => (
      <UiRadio
        key={i.value}
        id={i.value}
        currentValue={value}
        nameGroup={nameGroup}
        onChange={(e) => onChangeRadio(e.target.value)}
      >
        {i.value}
      </UiRadio>
    ))}
  </div>
);
