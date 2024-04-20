import { Meta, StoryFn } from "@storybook/react";
import { Social } from "./social";

export default {
  title: "widgets/social",
  component: Social,
} as Meta;

const Template: StoryFn = (args) => <Social />;

export const Default = Template.bind({});
Default.args = {};
