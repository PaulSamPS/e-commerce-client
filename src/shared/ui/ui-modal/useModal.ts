import { useCallback, useEffect } from "react";

type UseModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const useModal = ({ isOpen, onClose }: UseModalProps): void => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    // Добавляем обработчик только если модальное окно открыто
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      // Удаляем обработчик при размонтировании компонента
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);
};
