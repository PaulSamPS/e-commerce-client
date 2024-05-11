import { Meta, StoryFn } from "@storybook/react";
import { UiBadge, UiBadgeProps } from "./ui-badge"; // Импортируем компонент и его свойства

// Определяем метаданные компонента для Storybook
export default {
  title: "shared/ui-badge",
  component: UiBadge,
  argTypes: {
    color: { control: { type: "radio", options: ["orange", "red", "blue"] } },
    side: { control: { type: "radio", options: ["left", "right"] } },
  },
} as Meta;

const Template: StoryFn<UiBadgeProps> = (args) => <UiBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Text",
  side: "left",
  secondBadge: false,
  color: "red",
};
