import React, { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";
import clsx from "clsx";
import styles from "./ui-rating.module.scss";
import { StarIcon } from "@/shared/assets/icons";

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: number;
}

export const UiRating = ({
  rating = 0,
  className,
}: RatingProps): ReactElement => (
  <div className={clsx(styles["rating-block"], className)}>
    <StarIcon className={styles.star} />
    <span className={styles["rating-number"]}>{rating}</span>
  </div>
);
