import { Meta, StoryFn } from "@storybook/react";
import { ButtonProps, UiButton } from "./ui-button";

export default {
  title: "shared/ui-button",
  component: UiButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <UiButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  appearance: "primary",
  size: "m",
  before: "Before",
  after: "After",
  isLoading: false,
  stretched: false,
  children: "Button",
};
