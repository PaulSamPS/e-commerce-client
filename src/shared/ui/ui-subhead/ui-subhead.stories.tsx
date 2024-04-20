import { Meta, StoryFn } from "@storybook/react";
import { UiSubhead, UiSubheadProps } from "./ui-subhead";

export default {
  title: "shared/ui-subhead",
  component: UiSubhead,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<UiSubheadProps> = (args) => (
  <UiSubhead {...args}>Subhead</UiSubhead>
);

export const Default = Template.bind({});
Default.args = {
  weight: "medium",
};
