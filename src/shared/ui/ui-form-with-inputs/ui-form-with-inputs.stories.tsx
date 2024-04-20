import {
  FormWithInputsProps,
  UiFormWithInputs,
} from "@/shared/ui/ui-form-with-inputs/ui-from-with-inputs";
import { Meta, StoryFn } from "@storybook/react";
import {
  emailOptions,
  passwordOptions,
  usernameOptions,
} from "@/features/auth/constants";

export default {
  title: "shared/ui-form-inputs",
  component: UiFormWithInputs,
} as Meta;

const Template: StoryFn<FormWithInputsProps<any, any>> = (args) => (
  <UiFormWithInputs {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  error: undefined,
  inputs: [
    {
      name: "email",
      type: "email",
      placeholder: "Введите emsil",
      options: emailOptions,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Введите пароль",
      options: passwordOptions,
    },
  ],
  onSubmit: async (formData) => {
    // Mock submit function
    console.log("Form submitted with data:", formData);
  },
  className: undefined,
  actionText: "Submit",
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: "Invalid credentials. Please try again.",
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};
