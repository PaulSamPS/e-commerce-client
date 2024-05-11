import { UiButton } from "@/shared/ui/ui-button";

type NextStepProps = {
  text: string;
  nextStep: () => void;
};

export const NextStep = ({ text, nextStep }: NextStepProps) => {
  return (
    <UiButton appearance="primary" size="l" onClick={nextStep}>
      {text}
    </UiButton>
  );
};
