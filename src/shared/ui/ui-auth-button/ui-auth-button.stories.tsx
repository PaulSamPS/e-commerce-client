import { Meta, StoryFn } from "@storybook/react";
import { UiAuthButton, UiAuthButtonProps } from "./ui-auth-button";

export default {
  title: "shared/ui-auth-button",
  component: UiAuthButton,
} as Meta;

const Template: StoryFn<UiAuthButtonProps> = (args) => (
  <UiAuthButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
