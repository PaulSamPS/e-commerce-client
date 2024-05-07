import styles from "./carousel-control.module.scss";
import { UiArrowButton } from "@/shared/ui/ui-arrow";

type CarouselControlsProps = {
  left: () => void;
  right: () => void;
  currentSlideIndex: number;
  imgLength: number;
  arrowTop?: boolean;
};

export const CarouselControls = ({
  left,
  right,
  currentSlideIndex,
  imgLength,
  arrowTop,
}: CarouselControlsProps) => {
  return (
    <>
      {arrowTop && currentSlideIndex > 0 && (
        <UiArrowButton
          appearance="left"
          background={"none"}
          onClick={left}
          className={styles.leftTop}
        />
      )}
      {arrowTop && currentSlideIndex !== imgLength - 1 && (
        <UiArrowButton
          appearance="right"
          background={"none"}
          onClick={right}
          className={styles.rightTop}
        />
      )}
    </>
  );
};
