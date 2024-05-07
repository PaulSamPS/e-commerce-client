import { UiRatingFull, UiRatingFullProps } from "./ui-rating-full";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "shared/ui-rating-full",
  component: UiRatingFull,
};

export default meta;

// Создание stories для компонента UiRatingFull
const Template: StoryFn<UiRatingFullProps> = (args) => (
  <UiRatingFull {...args} />
);

// Story с примером рейтинга 3
export const Rating3 = Template.bind({});
Rating3.args = {
  rating: 3,
};

export const Rating4 = Template.bind({});
Rating4.args = {
  rating: 4,
};

// Story с примером рейтинга 5 и дополнительным классом
export const Rating5WithCustomClass = Template.bind({});
Rating5WithCustomClass.args = {
  rating: 5,
  className: "custom-rating",
};
