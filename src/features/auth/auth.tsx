"use client";

import { useAuth } from "@/features/auth/useAuth";
import { useEffect, useState } from "react";
import { AuthModalAppContext } from "@/shared/context";
import { UiModalWithHeader } from "@/shared/ui/ui-modal";
import { UiAuthButton } from "@/shared/ui/ui-auth-button/ui-auth-button";
import { useAppDispatch } from "@/shared/hooks";
import { useSelector } from "react-redux";
import { logoutApi, userState } from "@/entities/user";
import { checkAuthApi } from "@/entities/user";
import { UiDropdown } from "@/shared/ui/ui-dropdown";
import {
  ExitIcon,
  MenuFavoriteIcon,
  OnOrderIcon,
  ProfileIcon,
} from "@/shared/assets/icons";
import { usePathname, useRouter } from "next/navigation";
import { getCartApi, cartActions } from "@/entities/cart";
import { useStrictContext } from "@/shared/lib/react";

const LINKS = [
  { path: "/profile", label: "Профиль", icon: <ProfileIcon /> },
  { path: "/favorites", label: "Избранное", icon: <MenuFavoriteIcon /> },
  { path: "/order", label: "Заказы", icon: <OnOrderIcon /> },
  { path: "/", label: "Выйти", icon: <ExitIcon /> },
];

export const Auth = () => {
  const { isOpen, setIsOpen } = useStrictContext(AuthModalAppContext);
  const { authAction, currentAction } = useAuth({ isOpen });
  const dispatch = useAppDispatch();
  const { userData, loading } = useSelector(userState);
  const [isMenu, setIsMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    dispatch(checkAuthApi()).finally(() => dispatch(getCartApi()));
  }, [dispatch]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onNavigate = async (to: string, text?: string) => {
    if (text === "Выйти") {
      dispatch(logoutApi()).then(() => dispatch(cartActions.clearCart()));
    }
    if (to !== pathname || pathname === "/") {
      router.push(to);
    }
  };

  return (
    <>
      {userData ? (
        <UiDropdown
          label={userData?.username}
          items={LINKS}
          icon={<ProfileIcon />}
          open={isMenu}
          setOpen={setIsMenu}
          onNavigate={onNavigate}
        />
      ) : (
        <UiAuthButton loading={loading} onClick={() => setIsOpen(true)} />
      )}
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
