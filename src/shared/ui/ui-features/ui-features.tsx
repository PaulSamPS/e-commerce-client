import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./ui-features.module.scss";
import { UiTable } from "@/shared/ui/ui-features/ui-table/ui-table";
import { FeaturesItem } from "@/shared/types/features";
import { UiText } from "@/shared/ui/ui-text";

export interface FeaturesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  features: FeaturesItem[];
}
export const UiFeatures = ({ features }: FeaturesProps) => {
  return (
    <div className={styles.features}>
      <div className={styles.title}>Характеристики</div>
      <UiTable features={features} />
      <UiText weight={"regular"} className={styles.footnote}>
        * Указаны средние сроки производства. Они могут варьироваться в
        зависимости от наличия выбранного материала.
      </UiText>
    </div>
  );
};
