"use client";

import { useScreenWidth } from "@/shared/hooks/use-screen-width";
import { Header } from "@/widgets/header/header";
import { useContext } from "react";
import { AuthModalAppContext } from "@/shared/context/appContext";
import { UiModalWithHeader } from "@/shared/ui/ui-modal";
import { UiButton } from "@/shared/ui/ui-button";
import { SignIn } from "@/features/auth/sign-in/sign-in";
import { Social } from "@/widgets/social/social";

export default function Home() {
  const { isOpen, setIsOpen } = useContext(AuthModalAppContext);

  return (
    <div>
      <Header />
      <UiButton appearance={"primary"} onClick={() => setIsOpen(true)}>
        Открыть
      </UiButton>
      <UiModalWithHeader
        title={"Регистрация"}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <SignIn
          onClose={() => {}}
          goToSignUp={() => {}}
          goToResetPassword={() => {}}
        />
      </UiModalWithHeader>
      <Social />
    </div>
  );
}
