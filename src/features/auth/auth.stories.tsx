import { Auth } from "./auth";
import { Meta, StoryFn } from "@storybook/react";
import {
  AuthModalAppContext,
  AuthModalAppContextProvider,
} from "@/shared/context/appContext";
import { useState } from "react";
import { UiButton } from "@/shared/ui/ui-button";
import { UiModalWithHeader } from "@/shared/ui/ui-modal";
import { useAuth } from "@/features/auth/useAuth";
import { StoreProvider } from "@/shared/providers/store-provider";
import { UiAuthButton } from "@/shared/ui/ui-auth-button/ui-auth-button";

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
      <UiAuthButton onOpen={() => setIsOpen(true)} />
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
