import { RatingProps, UiRating } from "./ui-rating";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "shared/ui-rating",
  component: UiRating,
};

export default meta;

// Создание stories для компонента UiRatingFull
const Template: StoryFn<RatingProps> = (args) => <UiRating {...args} />;

// Story с примером рейтинга 3
export const Rating = Template.bind({});
Rating.args = {
  rating: 5,
};
