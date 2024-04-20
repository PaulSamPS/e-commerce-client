import "@/app/globals.css";
import { StoryFn } from "@storybook/react";

export const StyleDecorator = (story: () => StoryFn) => story();
