import {
  UiArrowButton,
  UiArrowButtonProps,
} from "@/shared/ui/ui-arrow/ui-arrow-button";
import { Meta, StoryFn } from "@storybook/react";
import { ArrowIcon } from "@/shared/assets/icons";

export default {
  title: "shared/ui-arrow-button",
  component: UiArrowButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<UiArrowButtonProps> = (args) => (
  <UiArrowButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  appearance: "left",
  background: "none",
};
