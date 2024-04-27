import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useContext,
  useRef,
} from "react";

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
  // const { setOptionIndex } = useContext(OptionIndexContext);
  const reviewRef = useRef<HTMLDivElement | null>(null);

  // const handleOpenReview = () => {
  //   if (setOptionIndex) {
  //     setOptionIndex(2);
  //     reviewRef.current?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //     reviewRef.current?.focus();
  //   }
  // };

  return (
    <div
      className={clsx(styles.review, className)}
      // onClick={handleOpenReview}
      ref={reviewRef}
      {...props}
    >
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
