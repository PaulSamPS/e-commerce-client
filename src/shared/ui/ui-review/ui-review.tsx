"use client";

import React, { DetailedHTMLProps, HTMLAttributes, useRef } from "react";

import styles from "./ui-review.module.scss";
import { ReviewIcon } from "@/shared/assets/icons";
import clsx from "clsx";
import { endOf } from "@/shared/lib/enfOf";

export interface ReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  reviews: number;
}

export const UiReview = ({
  reviews,
  children,
  className,
  ...props
}: ReviewProps) => {
  const reviewRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={clsx(styles.review, className)} ref={reviewRef} {...props}>
      <ReviewIcon className={styles["review-icon"]} />
      {reviews <= 0 ? (
        <span>Нет отзывов</span>
      ) : (
        <span>
          {reviews}
          &nbsp;
          {endOf(reviews, "отзыв", "отзыва", "отзывов")}
        </span>
      )}
    </div>
  );
};
