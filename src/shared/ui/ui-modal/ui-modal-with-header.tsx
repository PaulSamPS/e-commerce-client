import React, { ReactNode, Suspense } from "react";
import { useModal } from "@/shared/ui/ui-modal/useModal";
import { CloseButton } from "./close-button";
import { Header } from "./header";
import { Overlay } from "./overlay";
import { Portal } from "./portal";
import { Container } from "./container";
import { UiSpinner } from "@/shared/ui/ui-spinner";

export type ModalWithHeaderProps = {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

export const UiModalWithHeader: React.FC<ModalWithHeaderProps> = ({
  children,
  title,
  isOpen,
  onClose,
}: ModalWithHeaderProps) => {
  useModal({ isOpen, onClose });

  return (
    <Portal>
      <Container isOpen={isOpen}>
        <Overlay onClose={onClose} />
        <Suspense fallback={<UiSpinner />}>
          <Header headerText={title}>{children}</Header>
        </Suspense>
        <CloseButton onClose={onClose} />
      </Container>
    </Portal>
  );
};
