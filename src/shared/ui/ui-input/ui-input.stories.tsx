import { InputProps, UiInput } from "./ui-input";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "shared/ui-input",
  component: UiInput,
} as Meta;

const Template: StoryFn<InputProps> = (args) => <UiInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Имя",
  placeholder: "Введите username",
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: "Username обязательное поле",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
