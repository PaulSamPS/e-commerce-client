import { Meta, StoryFn } from "@storybook/react";
import { SpinnerProps, UiSpinner } from "./ui-spinner";

export default {
  title: "shared/ui-spinner",
  component: UiSpinner,
} as Meta;

const Template: StoryFn<SpinnerProps> = (args) => <UiSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  position: "absolute",
  color: "white",
  bg: "black",
  ariaLabel: "Loading...",
};
