import {
  ModalWithHeaderProps,
  UiModalWithHeader,
} from "./ui-modal-with-header";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "shared/ui-modal-with-header",
  component: UiModalWithHeader,
} as Meta;

const Template: StoryFn<ModalWithHeaderProps> = (args) => (
  <UiModalWithHeader {...args}>Content</UiModalWithHeader>
);

export const Default = Template.bind({});
Default.args = {
  title: "Modal Header",
  isOpen: false,
  onClose: () => {},
};
