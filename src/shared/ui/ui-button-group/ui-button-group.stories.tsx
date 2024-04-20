import { Meta, StoryFn } from "@storybook/react";
import { UiButtonGroupProps, UiButtonGroup } from "./ui-button-group";
import { ButtonProps } from "@/shared/ui/ui-button";

export default {
  title: "shared/ui-button-group",
  component: UiButtonGroup,
} as Meta;

const buttons: ButtonProps[] = [
  { children: "Button 1", appearance: "primary" },
  { children: "Button 2", appearance: "secondary" },
  { children: "Button 3", appearance: "danger" },
];

const Template: StoryFn<UiButtonGroupProps> = (args) => (
  <UiButtonGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  buttons,
};
