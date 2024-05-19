"use client";

import { useAuth } from "@/features/auth/useAuth";
import { useState } from "react";
import { AuthModalAppContext } from "@/shared/context";
import { UiModalWithHeader } from "@/shared/ui/ui-modal";
import { UiAuthButton } from "@/shared/ui/ui-auth-button/ui-auth-button";
import { useAppDispatch } from "@/shared/hooks";
import { useSelector } from "react-redux";
import { logoutApi, userState } from "@/entities/user";
import { UiDropdown } from "@/shared/ui/ui-dropdown";
import { usePathname, useRouter } from "next/navigation";
import { cartActions } from "@/entities/cart";
import { useStrictContext } from "@/shared/lib/react";
import { UiLogo } from "@/shared/ui/ui-logo/ui-logo";
import { VscAccount } from "react-icons/vsc";
import { MdFavorite } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";
import { IoMdExit } from "react-icons/io";

const LINKS = [
  { path: "/profile", label: "Профиль", icon: <VscAccount /> },
  { path: "/favorites", label: "Избранное", icon: <MdFavorite /> },
  { path: "/order", label: "Заказы", icon: <TbChecklist /> },
  { path: "/", label: "Выйти", icon: <IoMdExit /> },
];

export const Auth = () => {
  const { isOpen, setIsOpen } = useStrictContext(AuthModalAppContext);
  const { authAction, currentAction } = useAuth({ isOpen });
  const dispatch = useAppDispatch();
  const { userData, loading } = useSelector(userState);
  const [isMenu, setIsMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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
          icon={<VscAccount />}
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
        <UiLogo
          companyName={"Мебель-стильно"}
          slogan={"мебель со вкусом"}
          style={{ marginBottom: "40px" }}
        />
        {currentAction}
      </UiModalWithHeader>
    </>
  );
};
