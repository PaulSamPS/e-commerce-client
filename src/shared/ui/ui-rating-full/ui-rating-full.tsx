"use client";

import styles from "./ui-rating-full.module.scss";
import { StarIcon } from "@/shared/assets/icons";

interface UiRatingFullProps {
  rating: number;
}

const Star = () => (
  <span className={styles.star}>
    <StarIcon />
  </span>
);

export const UiRatingFull = ({ rating }: UiRatingFullProps) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <Star key={index} />
  ));

  return <div className={styles.rating}>{stars}</div>;
};
