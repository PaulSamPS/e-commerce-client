"use client";

import { useAuth } from "@/features/auth/useAuth";
import { useContext } from "react";
import { AuthModalAppContext } from "@/shared/context/appContext";
import { UiModalWithHeader } from "@/shared/ui/ui-modal";
import { UiAuthButton } from "@/shared/ui/ui-auth-button/ui-auth-button";

export const Auth = () => {
  const { isOpen, setIsOpen } = useContext(AuthModalAppContext);
  const { authAction, currentAction } = useAuth({ isOpen });

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <UiAuthButton onOpen={() => setIsOpen(true)} />
      <UiModalWithHeader
        title={authAction}
        isOpen={isOpen}
        onClose={handleCloseModal}
      >
        {currentAction}
      </UiModalWithHeader>
    </>
  );
};
