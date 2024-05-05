"use client";

import styles from "./ui-rating-full.module.scss";
import { StarIcon } from "@/shared/assets/icons";
import clsx from "clsx";

interface UiRatingFullProps {
  rating: number;
  className?: string;
}

const Star = () => (
  <span className={styles.star}>
    <StarIcon />
  </span>
);

export const UiRatingFull = ({ rating, className }: UiRatingFullProps) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <Star key={index} />
  ));

  return <div className={clsx(styles.rating, className)}>{stars}</div>;
};
