import { useEffect, ReactNode, FC, useRef } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

export const Portal: FC<PortalProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    containerRef.current = container;

    return () => {
      if (containerRef.current) {
        document.body.removeChild(containerRef.current);
      }
    };
  }, []);

  return containerRef.current
    ? createPortal(children, containerRef.current)
    : null;
};
