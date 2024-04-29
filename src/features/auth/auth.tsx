"use client";

import { useAuth } from "@/features/auth/useAuth";
import { useContext, useEffect } from "react";
import { AuthModalAppContext } from "@/shared/context/appContext";
import { UiModalWithHeader } from "@/shared/ui/ui-modal";
import { UiAuthButton } from "@/shared/ui/ui-auth-button/ui-auth-button";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch";
import { useSelector } from "react-redux";
import { userState } from "@/entities/User";
import { checkAuthApi } from "@/entities/User/api-check-auth";
import { UiSpinner } from "@/shared/ui/ui-spinner";

export const Auth = () => {
  const { isOpen, setIsOpen } = useContext(AuthModalAppContext);
  const { authAction, currentAction } = useAuth({ isOpen });
  const dispatch = useAppDispatch();
  const { userData, loading } = useSelector(userState);

  useEffect(() => {
    dispatch(checkAuthApi());
  }, [dispatch]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <UiAuthButton
        loading={loading}
        username={userData?.username}
        onClick={
          userData ? () => console.log("профиль") : () => setIsOpen(true)
        }
      />
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
