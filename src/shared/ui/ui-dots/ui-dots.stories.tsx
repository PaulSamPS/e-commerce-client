import { Meta, StoryFn } from "@storybook/react";
import { UiDotsProps, UiDots } from "./ui-dots";

export default {
  title: "shared/ui-dots",
  component: UiDots,
} as Meta;

const Template: StoryFn<UiDotsProps<any>> = (args) => <UiDots {...args} />;

export const Example = Template.bind({});
Example.args = {
  slideIndex: 2,
  activeDot: (index: number) => console.log(`Clicked on dot ${index}`),
  dotsCount: 5,
};
