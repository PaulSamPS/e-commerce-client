import { useAuth } from "@/widgets/auth/useAuth";
import { useContext } from "react";
import { AuthModalAppContext } from "@/shared/context/appContext";
import { UiModalWithHeader } from "@/shared/ui/ui-modal";

export const Auth = () => {
  const { isOpen, setIsOpen } = useContext(AuthModalAppContext);
  const { authAction, currentAction } = useAuth({ isOpen });

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <UiModalWithHeader
      title={authAction}
      isOpen={isOpen}
      onClose={handleCloseModal}
    >
      {currentAction}
    </UiModalWithHeader>
  );
};
