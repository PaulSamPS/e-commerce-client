import styles from "../ui-slider.module.scss";
import { ReactNode } from "react";
import { UiDots } from "@/shared/ui/ui-dots";
type WrapperSliderProps = {
  height: number;
  screenWidth: number;
  setAuto: (value: boolean) => void;
  children: ReactNode;
};

const UiWrapperSlider = ({
  children,
  height,
  screenWidth,
  setAuto,
}: WrapperSliderProps) => (
  <div
    className={styles.wrapper}
    style={{
      width: "inherit",
      height: `${screenWidth > 1000 ? height : screenWidth / 2}px`,
    }}
    onMouseEnter={() => setAuto(false)}
    onMouseLeave={() => setAuto(true)}
  >
    {children}
  </div>
);

export default UiWrapperSlider;