import { Meta, StoryFn } from "@storybook/react";
import { UiCartIcon, CartIconProps } from "./ui-cart-icon";

export default {
  title: "shared/ui-cart-icon",
  component: UiCartIcon,
} as Meta;

const Template: StoryFn<CartIconProps> = (args) => <UiCartIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  isInBasket: true,
};
