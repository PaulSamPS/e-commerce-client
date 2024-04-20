import { Meta, StoryFn } from "@storybook/react";
import { Header } from "./header";

export default {
  title: "widgets/header",
  component: Header,
} as Meta;

const Template: StoryFn = (args) => <Header {...args} />;

export const Default = Template.bind({});
