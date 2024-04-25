import { UiArrowButton } from "@/shared/ui/ui-arrow";

type SliderControlsProps = {
  next: () => void;
  prev: () => void;
};

export const SliderControls = ({ next, prev }: SliderControlsProps) => (
  <>
    <UiArrowButton onClick={prev} appearance="left" background="white" />
    <UiArrowButton onClick={next} appearance="right" background="white" />
  </>
);
