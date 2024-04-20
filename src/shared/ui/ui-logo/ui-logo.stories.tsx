import { Meta, StoryFn } from "@storybook/react";
import { UiLogo, UiLogoProps } from "./ui-logo";

export default {
  title: "shared/ui-logo",
  component: UiLogo,
} as Meta;

const Template: StoryFn<UiLogoProps> = (args) => <UiLogo {...args} />;

export const Default = Template.bind({});
Default.args = {
  companyName: "Название-компании",
  slogan: "Слоган",
};

export const WithLogo = Template.bind({});
WithLogo.args = {
  ...Default.args,
  logoSrc: "path/to/your/logo",
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  ...Default.args,
  className: "custom-class",
};
