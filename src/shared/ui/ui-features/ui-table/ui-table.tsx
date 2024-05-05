import styles from "./ui-table.module.scss";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FeaturesItem } from "@/shared/types/features";

export interface TableProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  features: FeaturesItem[];
}

export const UiTable = ({ features }: TableProps) => (
  <>
    {features &&
      features.map((i) => (
        <div key={i.name} className={styles.list}>
          <span className={styles.name}>{i.name}</span>
          <span className={styles.value}>{i.value}</span>
        </div>
      ))}
  </>
);
