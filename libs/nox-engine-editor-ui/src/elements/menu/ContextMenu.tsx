import React, { useEffect, useRef } from "react";
import { basicVariants, styled } from "../theme/Theme";
import * as Stitches from "@stitches/react";

const ContextMenuStyle = styled("div", {
  position: "absolute",
  zIndex: 9,
  display: "none",
  variants: {
    open: {
      true: {
        display: "block"
      }
    }
  }
}, basicVariants);

type Variants = Stitches.VariantProps<typeof ContextMenuStyle>

export const ContextMenu: React.FC<{
    children: React.ReactNode,
    pos?: { x: number, y: number },
    onClose?: () => void,
  }
  & Variants> = ({ pos, onClose, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current || ref.current?.contains(e.target as Element)) {
        return;
      }
      if (onClose) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return <ContextMenuStyle ref={ref} css={{
    left: pos?.x,
    top: pos?.y
  }} {...props} />;
};
