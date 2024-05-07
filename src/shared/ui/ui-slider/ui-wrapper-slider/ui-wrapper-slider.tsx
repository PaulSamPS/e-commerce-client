import styles from "../ui-slider.module.scss";
import { ReactNode } from "react";
type WrapperSliderProps = {
  height: number;
  setAuto: (value: boolean) => void;
  children: ReactNode;
};

const UiWrapperSlider = ({ children, height, setAuto }: WrapperSliderProps) => (
  <div
    className={styles.wrapper}
    style={{
      width: "inherit",
      height: `${height}px`,
    }}
    onMouseEnter={() => setAuto(false)}
    onMouseLeave={() => setAuto(true)}
  >
    {children}
  </div>
);

export default UiWrapperSlider;
