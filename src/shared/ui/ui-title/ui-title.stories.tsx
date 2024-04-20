import { Meta, StoryFn } from "@storybook/react";
import { UiTitle, UiTitleProps } from "./ui-title";

export default {
  title: "shared/ui-title",
  component: UiTitle,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<UiTitleProps> = (args) => (
  <UiTitle {...args}>Title</UiTitle>
);

export const Default = Template.bind({});
Default.args = {
  size: "h2",
  weight: "medium",
  uppercase: false,
};
