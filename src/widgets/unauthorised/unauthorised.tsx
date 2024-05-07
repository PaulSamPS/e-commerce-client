import React from "react";
import { UiTitle } from "@/shared/ui/ui-title";

export const Unauthorised = () => {
  return (
    <UiTitle weight={"medium"} size={"h1"}>
      Страница доступна только авторизованым пользователям
    </UiTitle>
  );
};
