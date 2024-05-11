import { Auth } from "./auth";
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { UiModalWithHeader } from "@/shared/ui/ui-modal";
import { useAuth } from "./useAuth";
import { UiAuthButton } from "@/shared/ui/ui-auth-button/ui-auth-button";
// eslint-disable-next-line boundaries/element-types,boundaries/entry-point
import { StoreProvider } from "@/app/providers/store-provider";

export default {
  title: "widgets/auth",
  component: Auth,
} as Meta;

const Template: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { authAction, currentAction } = useAuth({ isOpen });

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <StoreProvider>
      <UiAuthButton onClick={() => setIsOpen(true)} />
      <UiModalWithHeader
        title={authAction}
        isOpen={isOpen}
        onClose={handleCloseModal}
      >
        {currentAction}
      </UiModalWithHeader>
    </StoreProvider>
  );
};

export const Default = Template.bind({});
