import { Meta, StoryFn } from "@storybook/react";
import { UiAppLink, UiAppLinkProps } from "./ui-app-link";

export default {
  title: "shared/ui-app-link",
  component: UiAppLink,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<UiAppLinkProps> = (args) => <UiAppLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: "",
  children: "Link",
};

export const WithClickEvent = Template.bind({});
WithClickEvent.args = {
  to: "",
  children: "Link",
  onClick: () => alert("Link clicked!"),
};
